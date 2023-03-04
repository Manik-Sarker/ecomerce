function myFunction(){
    document.getElementById("demo").innerHTML="Hello JavaScript";

     var i=1,sum=0;
     for(i=1;i<=10;i++){
        sum=sum+i;
     }
   document.getElementById("demo")=sum;

}
let
a=4;
b=5;
c=a+b;
document.getElementById("demo1").innerHTML=c;



 const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
 document.getElementById("demo2").innerHTML = person.firstName + " is " + person.age + " years old.";


 const person1 = {
   firstName: "John",
   lastName : "Doe",
   id     :  5566
 };
 document.getElementById("demo3").innerHTML =
person1.firstName + " " + person1.lastName;
 
const person2 = {
   firstName: "John",
   lastName : "Doe",
   id       : 5566,
   fullName : function() {
     return this.firstName + " " + this.lastName;
   }
 };
 document.getElementById("demo").innerHTML = person2.fullName();

 function myFunction1(){ document.getElementById('demo4').innerHTML=Date();}
