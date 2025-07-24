/*array
let number1=[1,2,"three","true"];
let names=new Array("john","james");
console.log(number1[2]);
console.log(names.length);
//filter()-filters the result arguments
let number2=[1,2,3,4,5];
let result=number2.filter(number2=>number2[0]);
console.log(result);
//slice-delete the element based on index value
//splice -changes the orginal array by 
//adding /removing items at a specific index
let number=[1,2,3,4,5];
number.splice(1,3,"hai");
console.log(number);
//object
let details={
    name:"js",
    totalmark:"90",
    //nested obj
    subject:{
        dbms:"98",
        java:"99",
    },
    avg:function(){
        let sum = parseInt (this.subject.dbms)+(this.subject.java);
        return sum;
    }
}
console.log(details.totalmark)
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg())*/
const person={
    name:"tomy",
    age:"23"
};
console.log(person);
const{name,age}=person;