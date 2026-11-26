//DataTypes in Typescript
// I.Primitive Types
// 1.number-used to store both integer and floating point numbers
// Number -- Wrapper(allowing manipulation of numeric literals as if they were objects)
const a = 12;
const b = 50;
function add(a, b) {
    console.log(`The addtion of the given values : ${a + b}`);
}
add(a, b);
//2.string- used to store collection of characters enclosed within " ",' ' and ` `
//String -- Wrapper(provides some useful methods like..,slice,split,indexOf,subString and toString ..etc)
let name = 'SRIKANTH K';
console.log(name);
//3.boolean- used to store either true or false.
//Boolean
let isEmployed = true;
console.log(isEmployed);
//4.null - means intentional absence of data or value.
//Null
let accountBal = null;
console.log(accountBal);
//5.undefined - means uninitialized variable
//Undefined
let accountNum;
console.log(accountNum);
//6.symbol - It's a unique and Immutable value
//Symbol - it's a Built-in function used for symbol type of value
let name1 = Symbol("SRIKANTH K");
console.log(name1);
//7.bigint - used to store larger amount of numerical value
//Bigint - used to create bigint type of data
let aadharNum = 350084331128n; //Bigint("350084331128")
// " { [key: string]: any } " this line for adding new data
const persion1 = {
    name: "SRIKANTH K",
    age: 21,
    isEmployed: true
};
persion1.isMarried = false;
console.log(persion1);
const p1 = {
    name: "Seeths Laksmi Manson",
    bedCount: 1,
    rent: 3200,
    color: "Yellow",
    isReady: true
};
console.log(p1);
//2. Array - it stores fixed-size collection of elements of same type
//2.1 Using square brackets
let fruits = ["Apple", "Pomegranate", "PineApple", "Strawberry"];
console.log(fruits);
//2.2  Using Generic Array Type
let student = [101, 'SRIKANTH K', 21, 'CSE', 'B-section'];
console.log(student);
console.log('Your Name is ' + student[1]);
//2.3 Types of an Array
//2.3.1 Single-Dimensional Array-contains only one row for storing the data
let productNames;
productNames = ["Cube", "Water Bottle", "Mobile Cover", "Pens"];
console.log(productNames);
//2.3.2. Multi-Dimensional Array - used to store the data in the manner of row and columns
let sections = [["grocery"], ["eloctronics"], ["sports"], ["cloths"]];
console.log(sections);
export {};
