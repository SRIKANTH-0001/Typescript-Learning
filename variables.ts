//I.Declaration types

    //1.Declare Type and Value in a Single Statement

        let name:string="SRIKANTH K";
        console.log(name);

    //2. Declare Type Without Value

        // let age:number;
        // console.log(age);

        //It throw the error

    //3. Declare Value Without Type

        let isEmployed=true;
        console.log(isEmployed);


//II. Variable Declaration Keywords

    // 1. var-function scoped

        function greet(){
            var name="SRIKANTH K";
            console.log("Hi "+name);
        }
        greet();
    
    //  2. let-block level scoped
        
        if(true){
            let product="Mobile";
            console.log(product);
        }
        //console.log(product) 
        //it causes the error

    // 3. const - block level scoped and can't reassign the value
        
        const country="India";
        // country="USA";
        //It causes the error cz, const value can't be reassigned
        console.log(country);
        

//III: Type Annotations - used to specify the type of a variable, parameter, or return value

        //1. string,number and boolean
            let productName:string="Water Bottle";
            let qty:number=2;
            let isDelivered:boolean=true

            function displayDetails(productName:string,qty:number,isDelivered:boolean): string{
                return `Your product ${productName} as per quantity ${qty} is delivered :-- ${isDelivered} `
            }

            let details=displayDetails(productName,qty,isDelivered);

            console.log(details);
    
//IV. Types of Scope
        //1.Global Scope-can access anywhere
            let price:string="$12";

            function displayPrice(price:string):string{
                return `Your product price is ${price}`
            }

            let res=displayPrice(price);
            console.log(res);
        
        //2.Function scope-can access inside the function only
             function displayName(){
                let name1="SRIKANTH K";
                console.log(name1);
            }

            // console.log(name1);
            //It causes the error cz,name1 is in function scope

        //3.Block Scope
            if(true){
                let age:number=21;
                console.log(age);
            }
            // console.log(age);
            // It also causes the error cz,age is in the block scope
            
        
            
            

        


