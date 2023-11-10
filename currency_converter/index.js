"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import chalk from "chalk" & inquirer;
chalk_1.default;
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
// currency coverter api link
let apiLink = "https://v6.exchangerate-api.com/v6/9d4461670a8b7f5ef269062f/latest/Pkr";
// Fetchimg Data
let fetchData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let fetchData = yield fetch(data);
    let res = yield fetchData.json();
    return res.conversion_rates;
});
// object to array
let data = await fetchData(apiLink);
let countries = Object.keys(data);
// user input first country
let firstCountry = await inquirer_1.default.prompt({
    type: "list",
    name: "name",
    message: "Converting from:",
    choices: countries,
});
//  first country money
let userMoney = await inquirer_1.default.prompt({
    type: "number",
    name: "rupee",
    message: `please enter the amount in ${chalk_1.default.greenBright.bold(firstCountry.name)}:`,
});
// convert country
let secondCountry = await inquirer_1.default.prompt({
    type: "list",
    name: "name",
    message: "Convert to:",
    choices: countries,
});
// conversion rate
let cnv = `https://v6.exchangerate-api.com/v6/9d4461670a8b7f5ef269062f/pair/${firstCountry.name}/${secondCountry.name}`;
// fetching data for conversion rate
let cnvData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let cnvData = yield fetch(data);
    let res = yield cnvData.json();
    return res.conversion_rate;
});
let cnvRate = await cnvData(cnv);
console.log(cnvRate);
let convertedRate = userMoney.rupee * cnvRate;
// console.log(convertedRate)
console.log(`Your ${chalk_1.default.bold.greenBright(firstCountry.name)}
  ${chalk_1.default.bold.greenBright(userMoney.rupee)} in 
  ${chalk_1.default.bold.greenBright(secondCountry.name)} is
   ${chalk_1.default.bold.greenBright(convertedRate)} `);
