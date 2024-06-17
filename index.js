// import { log } from "console";
import inquirer from "inquirer";
// let myBalance = 10000; // Dollar
// let myPin = 1234;
// // let withdraw = 10000; // Dollar
// let pinAnswer = await inquirer.prompt(
//     {
//         name : "pin",
//         message : "Enter your pin number",
//         type : "number",
//     }
// );
// // console.log(pinAnswer.pin);
// // 12345 === 1234 = false
// if (pinAnswer.pin === myPin) {
//    console.log("Your pin code is correct!");
//  let operationAns = await inquirer.prompt(
//    [
//       {
//         name : "operation",
//         message : "please select 1 option",
//         type : "list",
//         choices : ["1. withdraw", "2. check balance"]
//       }
//    ]
//    );
// //    console.log(operationAns);
//    if (operationAns.operation === "1. withdraw")
//     let amountAns = await inquirer.prompt
//     (
//         [
//         {
//             name : "amount",
//             message : "Enter your amount",
//             type : "number",
//          }
//         ]
//     );
//  //     myBalance += withdraw
//  //    console.log(" you have insufficient balance")
//     // =, -=, +=
// if  (myBalance >= amountAns.amount){
//     myBalance -= amountAns.amount
//     // console.log("Your remaining balance is: " + myBalance)
//     // homework 1 template litral
//       console.log(`Your current balance is: ${myBalance}`); // template literal
// } else {
//     console.log("You have insuffcient balance!");
// }else if (operationAns.operation === "2. check balance")
//    {
//     console.log("your balance is:" + myBalance);
//     // home work 2
//    }
// }
//  else {
//     console.log("Incorrect Pin Code")
//  }
let myBalance = 10000; // Dollar
const myPin = 1234;
const pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin number",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Your pin code is correct!");
    const operationAns = await inquirer.prompt({
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["1. withdraw", "2. check balance", "3. fast cash"],
    });
    if (operationAns.operation === "1. withdraw") {
        const amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter the withdrawal amount",
            type: "number",
        });
        // let withdraw = amountAns.amount =await inquirer.prompt
        // while (amountAns.amount <= 10) {
        // console.log(withdraw, "please select amount:");
        // amountAns.amount++;
        // }
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Your current balance is: ${myBalance}`); // homework 1 template literal
        }
        else {
            console.log("Insufficient balance"); // homwrk 2 if amout is higher than balance
        }
    }
    else if (operationAns.operation === "2. check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "3. fast cash") {
        const fastCash = await inquirer.prompt({
            name: "fastcash",
            message: "please select your cash amount",
            type: "list",
            choices: ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000"],
        });
        console.log(myBalance -= fastCash.fastcash);
    }
    else {
        console.log("Incorrect Pin Code");
    }
}
