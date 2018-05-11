var chalk = require("chalk");

var message = chalk.bgRed.bold("Hello ") + chalk.yellow("World");
console.log(message);