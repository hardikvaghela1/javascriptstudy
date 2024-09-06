//A variable can be used before it has been declared.
/*x=10;
console.log(x)
var x;*/

//This will result in a ReferenceError
//This code will not run.
//x=10;        
//consol.log(x)
//let x;
//x=10;
//console.log(x)
//const x;
//<13 you are child
//13 se zyada or 18 sal se kam    you are tenager
//18 se zyada 60 se kam you are adelt
//60 se zyada you are senior
let a = 15;

function agefind() {
    if (a < 13) {
        console.log("You are child")
    } else if (a >= 13 && a < 18) {
        console.log("You are teenager")
    } else if (a >= 18 && a < 60) {
        console.log("You are adalt")
    } else 
    {
        console.log("You are senior")
    }
}



agefind();

