#!  /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let results = await inquirer_1.default.prompt([
    {
        message: chalk_1.default.bgRed("Kindly Enter First Number"),
        name: "num1",
        type: "number",
    },
    { message: chalk_1.default.bgYellowBright("Kindly Enter Second Number"),
        name: "num2",
        type: "number",
    },
    {
        message: chalk_1.default.bgBlue("kindly choose an operation (+,-,*,/) "),
        name: "operator",
        type: "list",
        choices: ["+", "-", "*", "/", "%", "**"],
    },
]);
if (results.operator === "+") {
    console.log(chalk_1.default.bgGreen(`The Addition of Two Numbers = ${results.num1 + results.num2}`));
}
else if (results.operator === "-") {
    console.log(chalk_1.default.bgGreenBright(`The Subtraction of Two Numbers = ${results.num1 - results.num2}`));
}
else if (results.operator === "*") {
    console.log(chalk_1.default.green(`The Multiplication of two Numbers = ${results.num1 * results.num2}`));
}
else if (results.operator === "/") {
    console.log(chalk_1.default.red(`The Division of Two Numbers is = ${results.num1 / results.num2}`));
}
else if (results.operator === "%") {
    console.log(chalk_1.default.bgMagenta(`The Modulas of Two Numbers is ${results.num1} % ${results.num2} = ${results.num1 % results.num2}`));
}
else if (results.operator === "**") {
    console.log(chalk_1.default.bgMagentaBright(`The Exponaition of Two Number is = ${results.num1 ** results.num2}`));
}
else {
    console.log(chalk_1.default.redBright("Plz Enter correct Number"));
}
