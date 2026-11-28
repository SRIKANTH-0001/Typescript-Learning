//I.Object Types - It Specifies the expected structure of an Object by defining it's properties and datatypes
    //1. Defining Bike Object
        interface Bike{
            bName:string,
            bColor:string,
            price:number,
            isBooked?:boolean
        }

        const myBike:Bike={
            bName:"RX100",
            bColor:"Blue",
            price:60000
        }

        console.log(myBike);

    //2.Nested Objects
        interface Owner{
            ownerName:string,
            ownerAge:number,
            ownerBike:Bike
        }

        let customer1:Owner={
            ownerName:"SRIKANTH K",
            ownerAge:21,
            ownerBike:{
                bName:"Pulsor",
                bColor:"Black",
                price:70589
            }
        }

        console.log(customer1);

    //3.Passing the object as a parameter
        interface Rectangle{
            width:number,
            height:number
        }

        function findArea(rec:Rectangle):number{
            return rec.width*rec.height;
        }

        let values:Rectangle={
            width:10,
            height:9
        }

        console.log(findArea(values));
        
        
// II.Type Aliases in TypeScript - It allows us to create reusable names for existing types.
        //1. Creating type Alias
            type Value=number|string|null;

            let Age:Value;
            Age="Twenty One";
            console.log(Age);

            Age=21;
            console.log(Age);

            Age=null;
            console.log(Age);

        //2. Type Alias in a Function
            type Val=string|number;
            function add(first:Val,second:Val):void{
                if(typeof first ==="string" && typeof second==="string"){
                    console.log(`After concatenating the given two strings :--> ${first.concat(second)}`);
                }else if(typeof first==="number" && typeof second==="number"){
                    console.log(`Addtion of given values :${first+second}`);
                }else{
                    console.log("You have passed the wrong type of Data");                  
                }
            } 

            add(10,90);
            add("Srikanth","Kumar");

        //3. String literal - It restrict the user to give only the given no.of strings
            type Choice="Yes"|"No";

            let response:Choice="Yes";

            console.log("You have choosen the choice as : "+response);

        //4. Object type Alias - It defines the structure of an object as like the interfaces do.
            type Product={
                pNum?:number,
                pName:string,
                pCost:number,
                isOrdered:boolean|string
            }

            const product1:Product={
               pName:"Water Bottle",
               pCost:240,
               isOrdered:"Yes"
            }

            console.log("Your Product Details!...........");
            console.log(product1);
            
        //5. Function type alias - used to define resuable fucntion signatures
            type Addition=(a:number,b:number)=>number;
            let add1:Addition=(a:number,b:number)=>a+b;

            console.log(`Addition of given numbers : ${add1(78,90)}`);
            
            
        //6. Tuple type alias - to create reusable tuple of type
            type Student=[number,string];
            const s1:Student=[1001,"Srikanth K"];

            console.log(s1);
            

            
            

            
            
            