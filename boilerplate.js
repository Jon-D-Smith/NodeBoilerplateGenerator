const fs = require('fs');
const folderName = process.argv[2] || 'Project'

const htmlTemp = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>${folderName}</title>
</head>

<body>
<h1> Welcome to your boilerplate for your project: ${folderName}</h1>
<p> Your css and Javascript files have already been linked, so just start coding!</p>

    <script src="app.js"></script>
</body>

</html>`



try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, htmlTemp);
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
    console.log("Something went wrong");
    console.log(e);
}
