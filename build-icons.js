const fs = require('fs')
const path = require('path')
const globby = require('globby')
const pascalcase = require('pascal-case')
const ejs = require('ejs')

const template = fs.readFileSync(path.join(__dirname, 'icon.ejs')).toString()
const compile = ejs.compile(template)

const globs = globby(['node_modules/material-design-icons/*/svg/production/ic_*_*px.svg'])
const nameRegex = /.*\/ic_(.*)_\d{2}px.*/
const xmlnsRegex = /xmlns="((?:\\.|[^"\\])*)"/ 

globs
	.then(paths =>
		paths
			.map((path) => ({
				name: path.replace(nameRegex, "$1"),
				content: fs.readFileSync(path).toString()
			}))
			.map(({ name, content }) => ({
				name: pascalcase(name),
				content: content.replace(xmlnsRegex, "")
      }))
      .map(icon => ({
        component: compile(icon),
        path: `src/${icon.name}.js`,
        name: icon.name
      }))
      .forEach(icon =>
        fs.writeFileSync(icon.path, icon.component))
  )

