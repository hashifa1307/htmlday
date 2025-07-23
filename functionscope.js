//function say(){


   //console.log("hai global scope");
    //console.log("within"+a);
//}
//say()
//console.log("outside"+a);
//global scope:
//variables declared outside any function or block are in global scope
//they are accessible anywhere in the script

//function say(){
  //let name="java script"
   // console.log("hai global scope");
   // console.log("within the function"+name );
//}
//say()


//lock scope
//the block scope of a variable
//function Voting (age){
    //if (age>=18){
     //   let iscloudy=true;
      //  var israining=true;
      //  console.log("eligible")
      //  console.log(iscloudy)
    //}
    //console.log(israining);
//}
//Voting(18)


function text(){
    console.log("message");
}

function send(callback){
    console.log("message sended");
    callback();

}
send (text);

let count=0;
let interval=()=>{
    count++;
    console.log(count);
    if(count <5){
        interval();
    }
}
interval();