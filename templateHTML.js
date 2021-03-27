let folderName = require('./boilerplate.js');

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

module.exports = htmlTemp;

