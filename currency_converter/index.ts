 
// import chalk from "chalk" & inquirer;
chalk
import chalk from "chalk";
import inquirer from "inquirer";

// currency coverter api link
let apiLink  = "https://v6.exchangerate-api.com/v6/9d4461670a8b7f5ef269062f/latest/Pkr";


// Fetchimg Data
let fetchData = async (data:any) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};


   
// object to array
 let data = await fetchData(apiLink);
     
 let countries = Object.keys(data);
     
// user input first country

     let firstCountry = await inquirer.prompt({
         
            type : "list",
            name: "name",
            message:"Converting from:",
            choices : countries,
     });



    //  first country money
let userMoney = await inquirer.prompt({
    type:"number",
    name:"rupee",
    message: `please enter the amount in ${chalk.greenBright.bold(firstCountry.name
        )}:`,
});

// convert country

let secondCountry = await inquirer.prompt({
         
            type : "list",
            name: "name",
            message:"Convert to:",
            choices : countries,
     });

// conversion rate
let cnv  = `https://v6.exchangerate-api.com/v6/9d4461670a8b7f5ef269062f/pair/${firstCountry.name}/${secondCountry.name}`;

// fetching data for conversion rate



let cnvData = async (data:any) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};
let cnvRate = await cnvData(cnv);
console.log(cnvRate)

let convertedRate = userMoney.rupee * cnvRate;

// console.log(convertedRate)
console.log(`Your ${chalk.bold.greenBright(firstCountry.name)}
  ${chalk.bold.greenBright(userMoney.rupee)} in 
  ${chalk.bold.greenBright(secondCountry.name)} is
   ${chalk.bold.greenBright(convertedRate)} `)