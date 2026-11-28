//I.Function Types - It defines the type of a function parameter and return value.

    // 1 Types of Funtion Definition
        //1.1 Named function - Function that are defined and called by their name which includes parameters and return type
            function add(a:number,b:number):number{
                return a+b;
            }

            let result:number=add(12,43);
            console.log("The addition of given Numbers : "+result);
        
        //1.2 Anonymous function - Function that are not having any specified name and used in smaller tasks
            const sub=function(a:number,b:number):number{
                return a-b;
            }

            let ans:number=sub(50,32);
            console.log("The subtraction of the given numbers : "+ans);

        //1.3 Arrow Function - it's a shorthand ,concise function expression using "=>"
            const mul=(num1:number,num2:number):number=>{
                return num1*num2;
            }
            let output:number=mul(28,10);
            console.log("Multiplication of given two values : "+output);

        //1.4 Call Signatures - It's used to define the parameter types,return type and also some extra properties
            type Arithmetic={
                (a:number,b:number):number;
                nameOfOperation:string;
            }
            let add1:Arithmetic=Object.assign((a:number,b:number)=>a+b,  
            {nameOfOperation:"Addition"}
            );
            console.log(`${add1.nameOfOperation} of given Numbers : ${add1(78,42)}`);
            
        
    // 2.Function Parameters(I Can give default value,rest operator,optional value,required)
            //2.1. Optional and Default Parameters in Functions
                //optional --> it's used to omit some parameters while execution
                //Default -->  it gives default value if no argument is passed


                //Void can be used as a return type when I don't want to return any
                function greet(firstName:string,lastName?:string):void{
                    if(!lastName){
                        console.log("Your Name is : "+firstName);
                    }else{
                        console.log(`Hi ${firstName+" "+lastName}`);
                    }
                }
                greet("SRIKANTH");

            //2.2 REST operator - It accepts the variable no.of parameters of same type(internally uses array);
                function addition(...rest:number[]):number{
                    return rest.reduce((acc,cur)=>acc+cur,0);
                }

                let res=addition(243,10,10,100);
                console.log(res);

            //2.3 Advanced Function Types
                //2.3.1 Function Overloading - same function name but diff. parameters
                    function greeting(name:string):string;
                    function greeting(name:string,age:number):string;
                    function greeting(name:string,age?:number):string{
                        if(!age){
                            return `Hello ${name}!`;
                        }else{
                            return `Hi ${name}! and Are you really turned ${age}?`
                        }
                        return `Hi User!`;
                    }

                    let outcome:string=greeting("Srikanth K",21);
                    console.log(outcome);

                //2.3.2 Callback Function - a function that passed as an argument to another function
                    function Multiplication(a:number,b:number,answer:(result:number)=>void):void{
                        let result=a*b;
                        answer(a*b);
                    }

                    Multiplication(10,30,(result)=>{
                        console.log(result);
                    })

// II.Interfaces - It define the structure of objects by specifying the property types and method signature
    //1. Declaraion of interfaces with object
        interface credentials{
            email:string,
            userName:string,
            mobileNo:number
        }

        const user1:credentials={
            email:"srikanth12@gmail.com",
            userName:"Srikanth.Codes",
            mobileNo:9435673846
        }

        console.log(`Your Email address: ${user1.email} \nYour UserName : ${user1.userName} \nYour Mobile No : ${user1.mobileNo}`);
        
    
    //2.Properties of the interfaces
        //2.1 Extending the properties 
            interface father{
                //readonly - cannot modify after the initial assignment
                readonly bike:string,
                cash:number
            }

            interface child extends father{
                // "?" - it means optional
                cycle?:boolean,
                toys:boolean
            }

            const finalValues:child={
                cycle:true,
                toys:true,
                bike:"Yamaha",
                cash:187623
            }

            console.log(finalValues.cycle+" "+finalValues.bike+" "+finalValues.cash);
            


                
