import { faker } from "@faker-js/faker"
import chalk from "chalk"
import inquirer from "inquirer"




// Customer class
class Customer{
    firstName: string
    lastName : string
    age:number
    gender :string
    mobNumber: number
    accNumber:number
    
    constructor (fName:string,lName:string,age:number,gender:string,mob:number,acc:number){
        this.firstName = fName;
        this.lastName= lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
        }
    }

    // interface BankAccount
    interface BankAccount{
        accNumber:number
        balance:number
    }
   
//    class bank
    class Bank{
        customer : Customer [] = []
        account : BankAccount [] = []
    
        
        
        addCustomer(obj: Customer){
            this.customer.push(obj);

        }
        addAccountNumber(obj: BankAccount){
            this.account.push(obj);
            
        }
        transction(accObj:BankAccount){
            let newAccounts =this.account.filter(acc => acc.accNumber !== accObj.accNumber)
            this.account = [...newAccounts , accObj];
        }
    }
    

    let myBank = new Bank();
    
    // customer Create
    for( let i:number =1; i<=3; i++){
        let fName=faker.person.firstName('male');
        let lName=faker.person.lastName();
        let num = parseInt(faker.phone.number());
    
        const cus = new Customer(fName,lName,25*i,"male",num,1000+i);
        
            myBank.addCustomer(cus);
            myBank.addAccountNumber({accNumber: cus.accNumber,balance:100 * i});
    }
    
    
    
    
    // Bank Functionality

    async function bankService(bank:Bank) {
     do{   let service = await inquirer.prompt({
            type : "list",
            name: "select",
            message:"Please Select Service",
            choices:["View Balance" , "Cash Withdraw" ,"Cash Deposit","Exit"]
        });
        //     //  View Balance
        if (service.select == "View Balance") {
            let res = await inquirer.prompt({
               type : "input",
               name: "num",
               message:"Please Enter Account Number to view balance",
        
            });

            let account = myBank.account.find((acc) => acc.accNumber == res.num );
                if(!account){
                    console.log(chalk.red.bold.italic("Invalid Account Number"));
                }

                    if(account){
                        let name = myBank.customer.find(
                            (item) => item.accNumber == account?.accNumber
                        );
                              console.log(`Dear ${chalk.green.bold.italic(name?.firstName)} ${chalk.green.bold.italic(name?.lastName)} your account Balance is ${chalk.bold.blueBright(`$${account.balance}`
                              )}`
                              );
                    }
        }
                if ( service.select == "Cash Withdraw")    {
                     let res = await inquirer.prompt({
               type : "input",
               name: "num",
               message:"Please Enter Account Number to view balance",
        
            });
                let account = myBank.account.find((acc) => acc.accNumber == res.num );
                    if(!account){
                    console.log(chalk.red.bold.italic("Invalid Account Number"));
                }         
                 if(account){
                        let ans = await inquirer.prompt({
                            type :"number",
                            message:"Please enter your amount",
                            name: "rupee",
                        });
                        if(ans.rupee > account.balance){
                            console.log(chalk.red.bold.italic('Insufficient Balance'));
                        }   
                        let newBalance = account.balance - ans.rupee
                            //transction method
                            bank.transction({accNumber:account.accNumber,balance:newBalance})
                
                        }
            }
                 
                          if(service.select == "Cash Deposit"){
                                     let res = await inquirer.prompt({
               type : "input",
               name: "num",
               message:"Please Enter Account Number to view balance",
        
            });
                let account = myBank.account.find((acc) => acc.accNumber == res.num );
                    if(!account){
                    console.log(chalk.red.bold.italic("Invalid Account Number"));
                }         
                 if(account){
                        let ans = await inquirer.prompt({
                            type :"number",
                            message:"Please enter your amount",
                            name: "rupee",
                        });
                            let newBalance = account.balance + ans.rupee
                            //transction method
                            bank.transction({accNumber:account.accNumber,balance:newBalance})
                            
                        }
            }
            if ( service.select == "Exit"){
               return; 
            }
    }
    while(true)
                  }

    bankService(myBank);

    

   
    
    


    

