import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name player 1?",
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// combine data
let p1 = new Player(player.name);
let o1 = new Player(opponent.select);
do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: [`Attack`, `Drink Portion`, `Run for your Life...`]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You lose,Better luck Next Time"));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life...") {
            console.log(chalk.red.bold.italic("You lose,Better luck Next Time"));
            process.exit();
        }
    }
    //Assassin
    if (opponent.select == "Assassin") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: [`Attack`, `Drink Portion`, `Run for your Life...`]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You lose,Better luck Next Time"));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life...") {
            console.log(chalk.red.bold.italic("You lose,Better luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: [`Attack`, `Drink Portion`, `Run for your Life...`]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You lose,Better luck Next Time"));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life...") {
            console.log(chalk.red.bold.italic("You lose,Better luck Next Time"));
            process.exit();
        }
    }
} while (true);
