//Take the input
const operator=prompt('Enter the operator (+,-,*,/):  '); //promt() is method that take input from user.
const number1=Number(prompt('Enter the number :  '));    //parseFloat is method or  Number() is required for converts value to number.
const number2=Number(prompt('Enter the number :  '));   //We not use the Number() that not convert value to number.
let result;
 //Using else if conditional loop.
 if(operator == '+'){                  //Assignment operator(==) is required otherwise refference error.
     result = number1 + number2;
 }else if(operator == '-'){
     result = number1 - number2;
 }else if(operator == '*'){
     result = number1 * number2;
 }else {
     result = number1 / number2;
 }
 //Display the result using "`"
 console.log(`${number1} ${operator} ${number2} = ${result}`);    //${} as String template declare in (``)or (""). 