

 var student1={
     name:"manik",
     age:26,
     cgpa:3.67,
     lan:["bangla","hindi","english"]
}

 var student2={
    name:"ashik",
     age:27,
     cgpa:3.70,
     lan:["bangla","hindi","english"]
 }
 console.log(student2.name);
 console.log(student1.cgpa);

 function Student(name,age,cgpa,lan){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lan=lan;
    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lan);

    }

 }
  var student1=new Student("manik",26,3.67,["bangla","hindi","english"]);
  var student2=new Student("ashik",27,3.70,["bangla","urdu","english"]);
  var student3=new Student("chanchol",23,3.40,["bangla","english"]);

 console.log(name);
 student1.display();
 student2.display();
 student3.display();

 var num1=parseInt(prompt("Enter the first number:"));
 var num2=parseInt(prompt("Enter the second number:"));
  var maxium= Math.max(num1,num2);
  console.log(maxium);
