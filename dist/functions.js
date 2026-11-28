//I.Function Types - It defines the type of a function parameter and return value.
// 1 Types of Funtion Definition
//1.1 Named function - Function that are defined and called by their name which includes parameters and return type
function add(a, b) {
    return a + b;
}
let result = add(12, 43);
console.log("The addition of given Numbers : " + result);
//1.2 Anonymous function - Function that are not having any specified name and used in smaller tasks
const sub = function (a, b) {
    return a - b;
};
let ans = sub(50, 32);
console.log("The subtraction of the given numbers : " + ans);
//1.3 Arrow Function - it's a shorthand ,concise function expression using "=>"
const mul = (num1, num2) => {
    return num1 * num2;
};
let output = mul(28, 10);
console.log("Multiplication of given two values : " + output);
let add1 = Object.assign((a, b) => a + b, { nameOfOperation: "Addition" });
console.log(`${add1.nameOfOperation} of given Numbers : ${add1(78, 42)}`);
// 2.Function Parameters(I Can give default value,rest operator,optional value,required)
//2.1. Optional and Default Parameters in Functions
//optional --> it's used to omit some parameters while execution
//Default -->  it gives default value if no argument is passed
//Void can be used as a return type when I don't want to return any
function greet(firstName, lastName) {
    if (!lastName) {
        console.log("Your Name is : " + firstName);
    }
    else {
        console.log(`Hi ${firstName + " " + lastName}`);
    }
}
greet("SRIKANTH");
//2.2 REST operator - It accepts the variable no.of parameters of same type(internally uses array);
function addition(...rest) {
    return rest.reduce((acc, cur) => acc + cur, 0);
}
let res = addition(243, 10, 10, 100);
console.log(res);
function greeting(name, age) {
    if (!age) {
        return `Hello ${name}!`;
    }
    else {
        return `Hi ${name}! and Are you really turned ${age}?`;
    }
    return `Hi User!`;
}
let outcome = greeting("Srikanth K", 21);
console.log(outcome);
//2.3.2 Callback Function - a function that passed as an argument to another function
function Multiplication(a, b, answer) {
    let result = a * b;
    answer(a * b);
}
Multiplication(10, 30, (result) => {
    console.log(result);
});
const user1 = {
    email: "srikanth12@gmail.com",
    userName: "Srikanth.Codes",
    mobileNo: 9435673846
};
console.log(`Your Email address: ${user1.email} \nYour UserName : ${user1.userName} \nYour Mobile No : ${user1.mobileNo}`);
const finalValues = {
    cycle: true,
    toys: true,
    bike: "Yamaha",
    cash: 187623
};
console.log(finalValues.cycle + " " + finalValues.bike + " " + finalValues.cash);
export {};
