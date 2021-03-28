const htmlTemp = require('./templateHTML')

const jsTemp = `
const container = document.querySelector(".container");
setTimeout(function(){ container.innerHTML += "<h2>Why are you still here? Start coding already!</h2>"; }, 5000);
`

module.exports = jsTemp