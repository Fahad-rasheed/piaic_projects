#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
let genNum = Math.floor(Math.random() * 2);
console.log(genNum);
let user = await inquirer_1.default.prompt({
    name: 'num1',
    type: "list",
    message: "pleasse select your number: ",
    choices: ["0", "1"],
});
if (genNum == parseInt(user.num1)) {
    console.log(chalk_1.default.bold.bgGreenBright.magenta("Congratulation You Won"));
}
else {
    console.log(chalk_1.default.bold.bgBlueBright.red("Sorry! Better Luck Next Time"));
}
