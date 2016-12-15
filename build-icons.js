const fs = require('fs')
const path = require('path')
const globby = require('globby')
const pascalcase = require('pascal-case')
const babel = require('babel-core')
const ejs = require('ejs')


const modulePath = path.join(__dirname, 'node_modules/material-design-icons')

const distPath = path.join(__dirname, 'dist')
const templatePath = path.join(__dirname, 'template')

const loadTemplate = (name) =>
  fs.readFileSync(path.join(templatePath, name)).toString()

const writeDistributable = (name, content) =>
  fs.writeFileSync(path.join(distPath, name)).toString()

const componentTemplate = loadTemplate('component.ejs')
const componentWrapperTemplate = loadTemplate('component-wrapper.ejs')
const indexTemplate = loadTemplate('index.ejs')

const compileComponent = ejs.compile(componentTemplate)
const compileWrapper = ejs.compile(componentWrapperTemplate)
const compileIndex = ejs.compile(indexTemplate)

const transformComponent = ({ content, name }) => {
  try {
    return babel.transform(content, { presets: ['react', 'es2015'] }).code
  } catch (e) {
    console.log(`Parse failed for module ${name}`)
    console.log(content)
    throw e
  }
}

const findIcons =
  globby.bind(null, [`${modulePath}/*/svg/production/ic_*_*px.svg`])

const nameRegex = /.*\/ic_(.*)_(.*)px.*/
const xmlnsRegex = /xmlns="((?:\\.|[^"\\])*)"/
const fillOpacityRegex = /fill-opacity/
const enableBackgroundRegex = /enable-background/

findIcons()
  .then(paths =>
    paths
      .map((path) => ({
        name: path.replace(nameRegex, "$1"),
        content: fs.readFileSync(path).toString(),
        size: path.replace(nameRegex, "$2"),
      }))
      .map(({ name, content, size }) => ({
        name: 'Icon' + pascalcase(name),
        content: content
          .replace(xmlnsRegex, "{...props}")
          .replace(enableBackgroundRegex, 'enableBackground')
          .replace(fillOpacityRegex, 'fillOpacity'),
        size,
      }))
      .map(({ name, content, size }) => ({
        name,
        content: compileComponent({ name, size, content }),
        size,
      }))
      .map(({ name, size, content }) => ({
        name,
        component: transformComponent({ name: name + size, content }),
        size,
      }))
      .map(({ name, size, component }) => {
        const path = `${distPath}/${name}${size}.js`
        fs.writeFileSync(path, component)
        return { name, size }
      })
      .reduce((grouped, { name, size }) => {
        const icon = grouped.find(i => i.name === name) || {}

        return grouped
          // Filter memo to remove element
          .filter(i => i !== icon)
          // Add again, concatenating sizes
          .concat([{
            sizes: (icon.sizes || []).concat([size]),
            name,
          }])
      }, [])
      .map(({ name, sizes }) => ({
        content: compileWrapper({ name, sizes }),
        name,
        sizes,
      }))
      .map(({ name, sizes, content }) => ({
        component: transformComponent({ name, content }),
        name,
        sizes,
      }))
      .map(({ name, sizes, component }) => {
        console.log({ name, sizes, component })
        return { name, sizes, component }
      })
      .map(({ name, sizes, component }) => {
        const path = `${distPath}/${name}.js`
        fs.writeFileSync(path, component)
        return { name, sizes }
      })
      .reduce((flattened, { name, sizes }) =>
        flattened
          .concat([name])
          .concat(sizes.map(size => name + size))
      , [])
      // .forEach(icon => console.log(icon))

  )
  .then(components => compileIndex({ components }))
  .then(fs.writeFileSync.bind(null, `${distPath}/index.js`))
  .catch(console.error)

