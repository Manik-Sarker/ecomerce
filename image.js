 var photos=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
 var imgTag=document.querySelector("img");


var count=0;
 function next(){
    count++;
    if(count>=photos.length)
    {
        count=0;
        imgTag.src=photos[count];

    }
    else
    {
        imgTag.src=photos[count];

    }

 }

 function prev(){
    count--;
    if(count<0)
    {
        count=photos.length-1;
        imgTag.src=photos[count];

    }
    else
    {
        imgTag.src=photos[count];

    }


 }


 var myVar=document.querySelector("#paraId");
 var myVar=document.querySelector("#para1Id");


 function addStyle(){

    myVar.classList.add("para-style");
 }

 function removeStyle(){
    myVar.classList.remove("para-style");

 }
 
