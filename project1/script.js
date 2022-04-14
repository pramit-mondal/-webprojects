const colors=["green", "red", "rgba(133,122,200)", "#f15025","blue","white","brown","black"];
const btn =document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function()
{
    //get element number between 0-3...
   const randomNumber=getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor=colors[randomNumber];
   color.textContent=colors[randomNumber];

});

function getRandomNumber(){
    return Math.floor( Math.random()* colors.length);//math floor is used to get the absolute value....
}