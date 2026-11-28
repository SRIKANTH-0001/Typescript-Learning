const myBike = {
    bName: "RX100",
    bColor: "Blue",
    price: 60000
};
console.log(myBike);
let customer1 = {
    ownerName: "SRIKANTH K",
    ownerAge: 21,
    ownerBike: {
        bName: "Pulsor",
        bColor: "Black",
        price: 70589
    }
};
console.log(customer1);
function findArea(rec) {
    return rec.width * rec.height;
}
let values = {
    width: 10,
    height: 9
};
console.log(findArea(values));
export {};
