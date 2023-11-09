#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";


let genNum = Math.floor(Math.random()*2);
console.log(genNum);

let user = await inquirer.prompt({
    name : 'num1',
    type : "list",
    message: "pleasse select your number: ",
    choices:["0","1"],
})
if(genNum==parseInt(user.num1)){
    console.log(chalk.bold.bgGreenBright.magenta("Congratulation You Won"))
}
else{console.log(chalk.bold.bgBlueBright.red("Sorry! Better Luck Next Time"))

}