const fs = require('fs')
const path = require('path')
const globby = require('globby')
const pascalcase = require('pascal-case')
const react = require('react-tools')
const ejs = require('ejs')


const modulePath = path.join(__dirname, 'node_modules/material-design-icons')

const distPath = path.join(__dirname, 'dist')
const templatePath = path.join(__dirname, 'template')

const loadTemplate = (name) =>
  fs.readFileSync(path.join(templatePath, name)).toString()

const writeDistributable = (name, content) =>
  fs.writeFileSync(path.join(distPath, name)).toString()

const componentTemplate = loadTemplate('component.ejs')
const indexTemplate = loadTemplate('index.ejs')

const compileComponent = ejs.compile(componentTemplate)
const compileIndex = ejs.compile(indexTemplate)

const transformComponent = ({ component, name }) => {
  try {
    return react.transform(component, { nonStrictEs6module: true })
  } catch (e) {
    console.log(`Parse failed for module ${name}`)
    console.log(component)
    throw e
  }
}

const findIcons =
  globby.bind(null, [`${modulePath}/*/svg/production/ic_*_*px.svg`])

const nameRegex = /.*\/ic_(.*)_(.*)px.*/
const xmlnsRegex = /xmlns="((?:\\.|[^"\\])*)"/

findIcons()
  .then(paths =>
    paths
      .map((path) => ({
        name: path.replace(nameRegex, "$1"),
        size: path.replace(nameRegex, "$2"),
        content: fs.readFileSync(path).toString(),
      }))
      .map(({ name, content, size }) => ({
        name: 'Icon' + pascalcase(name) + size,
        content: content.replace(xmlnsRegex, ""),
      }))
      .map(({ name, content }) => ({
        component: compileComponent({ name, content }),
        name,
      }))
      .map(({ name, component }) => ({
        component: transformComponent({ name, component }),
        name,
      }))
      .map(({ name, component }) => {
        const path = `${distPath}/${name}.js`
        fs.writeFileSync(path, component)
        return name
      })
  )
  .then(components => compileIndex({ components }))
  .then(fs.writeFileSync.bind(null, `${distPath}/index.js`))
  .catch(console.error)

