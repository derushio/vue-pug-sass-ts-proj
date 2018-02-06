const fs = require('fs')
const path = require('path')

const packageFile = path.join(__dirname, '..', 'package.json')
const packageTemplateFile = path.join(__dirname,  'package.template.json')

let json = JSON.parse(fs.readFileSync(packageFile, 'utf8'))
let jsonTemplate = JSON.parse(fs.readFileSync(packageTemplateFile, 'utf8'))

// inject template values
json["scripts"] = jsonTemplate["scripts"]
json["dependencies"] = jsonTemplate["dependencies"]
json["devDependencies"] = jsonTemplate["devDependencies"]

fs.writeFileSync(packageFile, JSON.stringify(json, null, 4))
