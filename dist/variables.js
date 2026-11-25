//I.Declaration types
//1.Declare Type and Value in a Single Statement
let name = "SRIKANTH K";
console.log(name);
//2. Declare Type Without Value
// let age:number;
// console.log(age);
//It throw the error
//3. Declare Value Without Type
let isEmployed = true;
console.log(isEmployed);
//II. Variable Declaration Keywords
// 1. var-function scoped
function greet() {
    var name = "SRIKANTH K";
    console.log("Hi " + name);
}
greet();
//  2. let-block level scoped
if (true) {
    let product = "Mobile";
    console.log(product);
}
//console.log(product) 
//it causes the error
// 3. const - block level scoped and can't reassign the value
const country = "India";
// country="USA";
//It causes the error cz, const value can't be reassigned
console.log(country);
export {};
