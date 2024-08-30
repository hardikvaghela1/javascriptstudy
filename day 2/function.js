
const a=6;   //directly you can't declare the value of a&b.
//let b=6;
let x=myFunction(10,15);     //you have to calls function first or last. (using variable or not.)
function myFunction(a,b){       //Inside the function, the arguments (the parameters) behave as local variables.
    console.log("This is Addition of to numbers :",a+b)              //This is function scope
    //return a * b;   
}
myFunction(4,5);       //function is executed when "something" calls it.
/*function abc(){ //function - declartion
    const x= "Hello world";
    console.log(x+3)        //IT means you have to use variables before the console in the Function.(after console you have declare variable is undefined.)
     console.log("1")
     }
    //function call
     abc();*/