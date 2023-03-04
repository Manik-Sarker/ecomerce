function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
  document.getElementById("myH").innerHTML = "JavaScript Comments";
  document.getElementById("myP").innerHTML = "My first paragraph.";
let a=7;
b=6;
c=a+b;
document.getElementById("demo1").innerHTML = c;
var i=0, sum=0;
for(i=0;i<=10;i++){
  document.write(i);
  sum=sum+i;
}
document.getElementById("demo3").innerHTML = sum;

const price1=90;
const price2=80;
 sum=price1+price2;
 sub=price1-price2;
 mul=price1*price2;
 div=price1/price2;
document.getElementById("demo4").innerHTML ="ADD="+sum;
document.getElementById("demo5").innerHTML ="SUBTRACT="+sub;
document.getElementById("demo6").innerHTML ="MULTILICATION="+mul;
document.getElementById("demo7").innerHTML ="DIVISION="+div;

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

document.getElementById("demo8").innerHTML =
pi + "<br>" + person + "<br>" + answer;

const cars = ["Saab", "Volvo", "BMW"];
cars[2] = "Toyota";
cars.push("Audi");
document.getElementById("demo9").innerHTML = cars; 

