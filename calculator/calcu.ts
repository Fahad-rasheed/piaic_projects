#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"


let results = await inquirer.prompt ([
    {
        message : chalk.bgRed("Kindly Enter First Number"),
        name : "num1",
         type: "number",
    },
    {   message:chalk.bgYellowBright("Kindly Enter Second Number"),
        name:"num2",
        type:"number",
    },
        {
            message :chalk.bgBlue("kindly choose an operation (+,-,*,/) "),
           name:"operator",
            type:"list",
            choices:["+","-","*","/","%","**"],
        },
]);

if (results.operator === "+")
{console.log(chalk.bgGreen(`The Addition of Two Numbers = ${results.num1 +results.num2}`))}
else if (results.operator === "-")
{
    console.log(chalk.bgGreenBright(`The Subtraction of Two Numbers = ${results.num1 - results.num2}`))
}
    else if (results.operator === "*"){
        console.log(chalk.green(`The Multiplication of two Numbers = ${results.num1 * results.num2 }`));
    }
    else if( results.operator === "/"){
        console.log(chalk.red(`The Division of Two Numbers is = ${results.num1 / results.num2}`));
    }
    else if(results.operator ==="%"){
        console.log(chalk.bgMagenta(`The Modulas of Two Numbers is ${results.num1} % ${results.num2} = ${results.num1 % results.num2}`))
    }
    else if (results.operator === "**")
{
    console.log(chalk.bgMagentaBright(`The Exponaition of Two Number is = ${results.num1 ** results.num2}`));
}
else {
    console.log(chalk.redBright("Plz Enter correct Number"));
}

export{}