const chalk = require('chalk');

const ts = () => new Date().toLocaleTimeString();

function logSystem(tag, msg) {
    console.log(`${chalk.gray(ts())} ${chalk.magenta.bold(`[${tag}]`)} ${msg}`);
}

function logInfo(tag, msg) {
    console.log(`${chalk.gray(ts())} ${chalk.blue(`[${tag}]`)} ${msg}`);
}

function logSuccess(tag, msg) {
    console.log(`${chalk.gray(ts())} ${chalk.green(`[${tag}]`)} ${msg}`);
}

function logError(tag, msg) {
    console.log(`${chalk.gray(ts())} ${chalk.red.bold(`[${tag}]`)} ${msg}`);
}

module.exports = { logSystem, logInfo, logSuccess, logError };
