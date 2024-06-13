let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let ran=randomColor();
    let h1=document.querySelector('h1');
    h1.innerText=ran;
    let div=document.querySelector('div')
    div.style.backgroundColor=ran;
});
function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}