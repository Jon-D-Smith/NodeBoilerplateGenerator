//Import node fileStructure
const fs = require('fs');
//Get and set the foldername for export
const folderName = process.argv[2] || 'Project'
module.exports = folderName;
//Require templates
const htmlTemp = require('./templateHTML')
const cssTemplate = require('./templateCSS')
const jsTemp = require('./templateJS')

//Put together the directory and files if it doesn't error out
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, htmlTemp);
    fs.writeFileSync(`${folderName}/app.js`, jsTemp);
    fs.writeFileSync(`${folderName}/styles.css`, cssTemplate);
} catch (e) {
    console.log("Something went wrong");
    console.log(e);
}

