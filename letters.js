function openLetter(element){

element.classList.toggle("open");

}



function goBack(){

window.location.href="home.html";

}



// butterflies 🦋

for(let i=0;i<10;i++){


let butterfly=document.createElement("div");


butterfly.className="butterfly";


butterfly.innerHTML="🦋";


butterfly.style.left=
Math.random()*100+"vw";


butterfly.style.animationDuration=
(6+Math.random()*8)+"s";


document.body.appendChild(butterfly);


}


// hearts on click ❤️

document.addEventListener("click",function(e){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";


heart.style.fontSize="25px";


heart.style.animation=
"fly 3s linear";


document.body.appendChild(heart);


setTimeout(()=>heart.remove(),3000);


});
