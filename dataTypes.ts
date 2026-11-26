//DataTypes in Typescript

// I.Primitive Types
    // 1.number-used to store both integer and floating point numbers
    // Number -- Wrapper(allowing manipulation of numeric literals as if they were objects)
        const a:number=12;
        const b:number=50;

        function add(a:number,b:number):void{
            console.log(`The addtion of the given values : ${a+b}`);
        }

        add(a,b);
    
    //2.string- used to store collection of characters enclosed within " ",' ' and ` `
    //String -- Wrapper(provides some useful methods like..,slice,split,indexOf,subString and toString ..etc)
        let name:string='SRIKANTH K';
        console.log(name);

    //3.boolean- used to store either true or false.
    //Boolean
        let isEmployed:boolean=true;
        console.log(isEmployed);

    //4.null - means intentional absence of data or value.
    //Null
        let accountBal:null=null;
        console.log(accountBal);

    //5.undefined - means uninitialized variable
    //Undefined
        let accountNum:undefined;
        console.log(accountNum);

    //6.symbol - It's a unique and Immutable value
    //Symbol - it's a Built-in function used for symbol type of value
        let name1:symbol=Symbol("SRIKANTH K");
        console.log(name1);

    //7.bigint - used to store larger amount of numerical value
    //Bigint - used to create bigint type of data
        let aadharNum:bigint=350084331128n;//Bigint("350084331128")


// II.Object types-can be defined using interfaces, type aliases, or index signatures. 
    // Interfaces and type aliases define a specific structure for objects

    //1. Object-
        // 1.1 using interfaces
            interface myObject{
                name:string,
                age:number,
                isEmployed:boolean
            }

            // " { [key: string]: any } " this line for adding new data
            const persion1:myObject & { [key: string]: any }={
                name:"SRIKANTH K",
                age:21,
                isEmployed:true
            }

            persion1.isMarried=false;
            console.log(persion1);
            
        // 1.2 using type Alias
            type Home={
                name:string,
                bedCount:number,
                rent:number,
                color:string,
                isReady:boolean
            }

            const p1:Home={
                name:"Seeths Laksmi Manson",
                bedCount:1,
                rent:3200,
                color:"Yellow",
                isReady:true
            }

            console.log(p1);

    //2. Array - it stores fixed-size collection of elements of same type
            //2.1 Using square brackets
                let fruits:string[]=["Apple","Pomegranate","PineApple","Strawberry"];
                console.log(fruits);
            
            //2.2  Using Generic Array Type
                let student: Array<number|string> = [101,'SRIKANTH K',21, 'CSE', 'B-section'];  
                console.log(student);  
                
                console.log('Your Name is '+student[1]);
            
            //2.3 Types of an Array
                //2.3.1 Single-Dimensional Array-contains only one row for storing the data
                let productNames:string[];
                productNames=["Cube","Water Bottle","Mobile Cover","Pens"];
                console.log(productNames);
            
                //2.3.2. Multi-Dimensional Array - used to store the data in the manner of row and columns
                let sections:string[][]=[["grocery"],["eloctronics"],["sports"],["cloths"]];
                console.log(sections);
                
            //2.4 Passing an Array to a Function
                let namesArr:string[]=new Array("Jayanthu","Karthick","Gokul","Suman");

                console.log("\nMy CollegeMates names!!");
                
                function displayClsMates(namesArr:string[]){
                    for(let i=0;i<namesArr.length;i++){
                        console.log("\n"+(i+1)+" "+namesArr[i]);
                    }
                }
                displayClsMates(namesArr);

            //2.5 Spread operator- used to initialize the object from another and arrays and It's also used for Destructuring

                let vegetables:string[]=["Drumstick","Cluster Beans","Beet root","Beans"];

                let copyArray:string[]=[...vegetables]

                console.log(vegetables);
                console.log(copyArray);

    //3. Tuple - used to store the collection of data of different type unlike array
            //3.1 Heterogeneous Data Types in Tuples
                let officeDetail:[number,string,boolean]=[20,"Saga games",true];
                console.log("Office No. "+officeDetail[0]);
                console.log("Office Name "+officeDetail[1]);
                console.log("is Office opened? "+officeDetail[2]);

            //3.2 Operations on Tuples
                //3.2.1 push() - to add the element at the end
                    console.log("After adding the Element.....");
                    officeDetail.push(19,"Retro Chipes",false);
                    console.log(officeDetail);
                //3.2.2 pop() - to remove the element at the end
                    officeDetail.pop();
                    console.log("After the remove the element......");
                    console.log(officeDetail);
                //3.2.3 modifying the element 
                    officeDetail[1]="Elementory Games";
                    console.log("After Updation.........");
                    console.log(officeDetail);

                //3.2.4 Clearing the tuple
                    // officeDetail=[] as unknown as [number,string,boolean];
                    // console.log(officeDetail);
                
                //3.2.5 Destructuring the tuple
                    let [offNum,offName,isOpened,...rest]=officeDetail;
                    console.log("After Destructuring the tuple...");
                    console.log(offNum);
                    console.log(offName);
                    console.log(isOpened);
                    console.log("After using REST operator.....");
                    console.log(rest);

                //3.2.6 passing the tuple to function
                    console.log("While using the for loop");
                    
                    function displayOffDetails(tupleVal:any[]){
                    for(let i=0;i<tupleVal.length;i++){
                        console.log("\n"+(i+1)+" "+tupleVal[i]);
                        }
                    }
                    displayOffDetails(officeDetail);
    
    //4. Enums - it allows us to define a set of named constants
        //4.1 Types of Enums----> after compilation enums becomes vanished(enum won't be there in the )
                //4.1.1 Numerical Enums
                    enum Age{
                        Srikanth=21,
                        Jayanthu,
                        Virat,
                        Vijay
                    }

                    console.log("Virat Age : "+Age.Virat);
                    console.log("Vijay Age : "+Age.Vijay);
                    console.log("Jayanthu Age : "+Age.Jayanthu);
                
                //4.1.2 String Enums
                    enum NativePlaces{
                        Sabari="Cuddalore",
                        Srikanth="Krishnagiri",
                        Dhoni="Ranji"
                    }

                    let currentPlace:NativePlaces=NativePlaces.Srikanth;

                    console.log("Sabari native place : "+NativePlaces.Sabari);
                    console.log("Dhoni Native Places : "+NativePlaces.Dhoni);
                    console.log("Srikanth Native Places : "+currentPlace);
                    

                
                //4.1.3 Hetrogeneous Enums
                    enum Patient{
                        pName="Rishab Pant",
                        pAge=32,
                        pReason="Accident",
                        pFees=677980
                    }

                    console.log("Patient Name : "+Patient.pName);
                    console.log("Patient Age : "+Patient.pAge);
                    console.log("Patient admitted Reason : "+Patient.pReason);
                    console.log("Patient fees : "+Patient.pFees);

            
                    
                    
                    


                    
                    

                    
                    
            
                    
                

                
                

                   
        
        
        
        
        

    