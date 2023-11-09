import inquirer from "inquirer";

import { faker } from '@faker-js/faker';
import { isConstTypeReference } from "typescript";

// requirement
// user data
// atm machine
// atm function


interface User{
    id : number
    pin:number
    name:string
    accountNumber:number
    balance:number

}

  const createUser= () => {
    let users:User[]=[]
  

    for(let i = 0 ; i < 5 ; i++){
        let user:User = {
        id : i,
        pin : 1000 +i,
        name : faker.person.fullName(),
        accountNumber:Math.floor(1000000000* Math.random()*9000000000),
        balance:1000000 * i

        }
            users.push(user)
        }
    
      return users

  }

  // atm machine

  const atmMachine =async (users:User[])=> {

  const res = await inquirer.prompt({
    type: "number",
    message: "write Pin code",
    name: "pin",
  })

  

  const user = users.find(val => val.pin == res.pin)
if (user){
  console.log(` Welcome ${user.name}`)
  atmFunc(user)
  return
}
console.log("Invalid user pin")
  }

const atmFunc= async(user:User)=>{
  const ans = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"krna kiya chahty ho",
    choices:["Withdraw","balance","exit",]
  })

  if (ans.select=="Withdraw"){
    const amount= await inquirer.prompt({
      type:"number",
      message:"enter amount",
      name:"rupee",
    })

    if(amount.rupee >user.balance){
      return console.log(" balance nakafi hy")
  }
    if(amount.rupee >25000){
      return console.log(" ap ki limit 25000 hy")
  }
    console.log(`withdraw amount: ${amount.rupee}`)
    console.log(`Balance: ${user.balance-amount.rupee}`)
  }
if(ans.select=="balance"){
  console.log(`Balance: ${user.balance}`)
  return
}
if(ans.select=="exit"){
  console.log(`thanks for ussing Atm...`)
}


}

 


const users = createUser()

atmMachine(users)

