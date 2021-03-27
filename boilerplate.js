const fs = require('fs');
const folderName = process.argv[2] || 'Project'
module.exports = folderName;
const htmlTemp = require('./templateHTML')



try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, htmlTemp);
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
    console.log("Something went wrong");
    console.log(e);
}

