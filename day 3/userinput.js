                    //Program based in user input.

let UserName;
let EmilId="vaghelahardik@gmail.com";    //Variables defined as let.

function UserUnput(){
 if(UserName && EmilId){
        console.log("UserName and EmailId is Correct.") //when email id and user name is defined than console....... 
    }else if(UserName){
        console.log("Please enter the EmailId.")   //when only username defined than console......
    }else if(EmilId){
        console.log("Please enter the UserName.")   //when only emailid defined than console...... 
    }
}
UserInput();
//console.log("User name and EmailId is Incorrect")

//Output:Please enter the UserName.

