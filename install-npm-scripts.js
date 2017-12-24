const fs = require('fs')

var json = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

json["scripts"] = {}
json["scripts"]["clean"] = "./scripts.sh clean"
json["scripts"]["build"] = "./scripts.sh build"
json["scripts"]["dev"] = "./scripts.sh dev"

fs.writeFileSync("./package.json", JSON.stringify(json, null, 4));
