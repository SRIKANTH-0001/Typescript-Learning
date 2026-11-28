// I.Advanced Data Types
//1.Union Type - It allow the variable to hold multiple types of values.It uses "|" pipe (symbol)
let age;
age = 21;
console.log("Your Age is : " + age);
age = "Twenty One";
console.log("Your Age is : " + age);
//1.1 Function parameter as Union Type
function displayBday(byear) {
    if (typeof byear == "number") {
        console.log("Your birth year is : " + byear);
    }
    else {
        console.log("Your birth year is : " + byear);
    }
}
displayBday("Two thousand five");
console.log("---------------------------------------");
//1.2 Array as Union Type
let student;
student = [9001, 9002, 9003, 9003];
console.log("Student Register Numbers : ");
console.log(student);
student = ["SRIKANTH K", "Vijay C", "Surya S", "Dhruv V"];
console.log("Student Registered Names : ");
console.log(student);
console.log("--------------------------------------------");
//1.3 Union types replacing the enums
//In enums  
var Colors;
(function (Colors) {
    Colors[Colors["Blue"] = 0] = "Blue";
    Colors[Colors["Yellow"] = 1] = "Yellow";
    Colors[Colors["Red"] = 2] = "Red";
})(Colors || (Colors = {}));
console.log(Colors.Blue);
console.log(Colors.Yellow);
console.log(Colors[2]);
let color1 = "Yellow";
//color1="Pink";
console.log(color1);
const productStatus = (pName, status) => {
    return `Your product ${pName} is ${status}`;
};
let res = productStatus("Washing Machine", "Shipped");
console.log("Know about Your ordered Product! \n" + res);
let personDetails = {
    schoolName: "GHSS",
    totalMarks: 471,
    collegeName: "PCET",
    cgpa: 8.62
};
console.log("Given student Details!......");
console.log(personDetails);
let position;
position = "North";
console.log("My Home is in the " + position + " Direction");
let correctChoice;
correctChoice = 3;
console.log("You have selected the Correct Option. That's " + correctChoice);
let isOTPChecked;
isOTPChecked = true;
console.log("To travel in a Uber - Your OTP match is " + isOTPChecked);
let emp1 = {
    empId: 80001,
    empName: "SRIKANTH K",
    empSal: 12300
};
let emp2 = {
    empId: 80002,
    empName: "Pazhani"
};
console.log("Given Employee Datails!..........");
console.log(Object.entries(emp1));
console.log(Object.entries(emp2));
let topGun1 = {
    aId: 10001,
    aEmail: "Admin@gmail.com",
    aPassword: "Admin@123"
};
console.log("Given Admin details!....");
console.log(Object.entries(topGun1));
let topGun2 = {
    aId: 10002,
    aEmail: "Admin2@gmail.com",
    aPassword: "Admin2@123"
};
console.log("Given Admin details!....");
console.log(Object.entries(topGun2));
let lap1 = {
    serialNo: null,
    lapName: "Dell",
    lapColor: "Silver",
    lapPrice: 54000
};
console.log(Object.entries(lap1));
export {};
