// I.Advanced Data Types
    //1.Union Type - It allow the variable to hold multiple types of values.It uses "|" pipe (symbol)
        let age:number|string;
        age=21;
        console.log("Your Age is : "+age);
        age="Twenty One";
        console.log("Your Age is : "+age);

        //1.1 Function parameter as Union Type
            function displayBday(byear:number|string):void{
                if(typeof byear=="number"){
                    console.log("Your birth year is : "+byear);
                }else{
                    console.log("Your birth year is : "+byear);
                }
            }

            displayBday("Two thousand five");
            console.log("---------------------------------------");
            

        //1.2 Array as Union Type
            let student:number[]|string[];
            student=[9001,9002,9003,9003];
            console.log("Student Register Numbers : ");
            console.log(student);

            student=["SRIKANTH K","Vijay C","Surya S","Dhruv V"];
            console.log("Student Registered Names : ");
            console.log(student);
            console.log("--------------------------------------------");
            
        
        //1.3 Union types replacing the enums
            //In enums  
                enum Colors{
                    Blue,
                    Yellow,
                    Red
                }

                console.log(Colors.Blue);
                console.log(Colors.Yellow); 
                console.log(Colors[2]);

            //In Union Type
                //Ex-1
                    type Color="Blue"|"Yellow"|"Red";

                    let color1:Color="Yellow";
                    //color1="Pink";
                    console.log(color1);

                //Ex-2
                    type Status="pending"|"Shipped"|"Delivered";

                    const productStatus=(pName:string,status:Status):string=>{
                        return `Your product ${pName} is ${status}`;
                    }

                    let res:string=productStatus("Washing Machine","Shipped");

                    console.log("Know about Your ordered Product! \n"+res);
    
    // 2. Intersection Types - It combines multiple types into a single type
                          // -- and after merging types to variable -that should have to give all properties of both type
                          // -- Uses "&" symbol

            interface school{
                schoolName:string,
                totalMarks:number
            }

            interface college{
                collegeName:string,
                cgpa:number
            }

            type personType=school&college;
            let personDetails:personType={
                schoolName:"GHSS",
                totalMarks:471,
                collegeName:"PCET",
                cgpa:8.62
            }

            console.log("Given student Details!......");
            console.log(personDetails);
            
    //3. Literal Types - It allows the fucntions parameters,variables and object properties to hold only a specific values
            //3.1 Types of literal types
                //3.1.1 String literal types  - to hold only specific set of strings
                        type Direction="North"|"South"|"East"|"West";

                        let position:Direction;
                        position="North";

                        console.log("My Home is in the "+position+ " Direction");
                        
                //3.1.2 Numeric Literal Types - to hold only specific set of numeric values
                        type Choice=1|2|3|4;
                        let correctChoice:Choice;
                        correctChoice=3;

                        console.log("You have selected the Correct Option. That's "+correctChoice);

                //3.1.3 Boolean Literal Types - It restrict the variable to hold either true or false;
                        type Success=true;
                        let isOTPChecked:Success;
                        isOTPChecked=true;

                        console.log("To travel in a Uber - Your OTP match is "+isOTPChecked);
                        
    // 4. Mapped Types - It's used to create the new types by transforming the properties of existing type
        //4.1 Creating Optional Properties - it uses "?" symbol
            type Employee={
                empId:number,
                empName:string,
                empSal:number
            }

            type halfEmployee={
                [P in keyof Employee]?:Employee[P];
            }

            let emp1:halfEmployee={
                empId:80001,
                empName:"SRIKANTH K",
                empSal:12300
            }

            let emp2:halfEmployee={
                empId:80002,
                empName:"Pazhani"
            }

            console.log("Given Employee Datails!..........");
            console.log(Object.entries(emp1));
            console.log(Object.entries(emp2));

        //4.2 read-only Properties
            
            type admin={
                aId:number,
                aEmail:string,
                aPassword:string
            }

            type topGun={
                readonly [P in keyof admin]:admin[P];
            }

            let topGun1:topGun={
                aId:10001,
                aEmail:"Admin@gmail.com",
                aPassword:"Admin@123"
            }

            console.log("Given Admin details!....");
            console.log(Object.entries(topGun1));
            
            let topGun2:topGun={
                aId:10002,
                aEmail:"Admin2@gmail.com",
                aPassword:"Admin2@123"
            }
            console.log("Given Admin details!....");
            console.log(Object.entries(topGun2));

            //If I'm trying to change any one property,it causes the error

            //topGun1.aId=123873; -- It says," Cannot assign to 'aId' because it is a read-only property. "

        
        //4.3 creating Nullable Properties
            type Laptop={
                serialNo:number,
                lapName:string,
                lapColor:string,
                lapPrice:number
            }

            type nullLapValues={
                [P in keyof Laptop]:Laptop[P]|null;
                //here,It also accepts the null values otherthan given type
            }

            let lap1:nullLapValues={
                serialNo:null,
                lapName:"Dell",
                lapColor:"Silver",
                lapPrice:54000
            }

            console.log(Object.entries(lap1));
            

            
            
            









                
                
