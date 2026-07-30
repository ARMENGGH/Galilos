function openMemories(){


let transition=document.getElementById("bookTransition");


transition.style.display="flex";


let book=document.querySelector(".book");


book.classList.add("open");



// wait for animation

setTimeout(()=>{


window.location.href="memories.html";


},1500);


}




// Floating butterflies 🦋


for(let i=0;i<15;i++){


let butterfly=document.createElement("div");


butterfly.className="butterfly";


butterfly.innerHTML="🦋";


butterfly.style.left=Math.random()*100+"vw";




  // 🦋 Floating butterflies

for(let i=0;i<12;i++){

let butterfly=document.createElement("div");

butterfly.className="butterfly";

butterfly.innerHTML="🦋";

butterfly.style.left=Math.random()*100+"vw";

butterfly.style.animationDelay=Math.random()*8+"s";


document.body.appendChild(butterfly);

}



// ⭐ Shooting stars

for(let i=0;i<5;i++){

let star=document.createElement("div");

star.className="shooting-star";


star.style.top=Math.random()*70+"vh";

star.style.animationDelay=
Math.random()*5+"s";


document.body.appendChild(star);

}



// ✨ Sparkles

for(let i=0;i<30;i++){


let sparkle=document.createElement("div");


sparkle.className="sparkle";


sparkle.innerHTML="✨";


sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";


sparkle.style.animationDelay=
Math.random()*3+"s";


document.body.appendChild(sparkle);


}
butterfly.style.animationDuration=
(6+Math.random()*8)+"s";


butterfly.style.animationDelay=
Math.random()*5+"s";


document.body.appendChild(butterfly);


}




// Stars ⭐


for(let i=0;i<80;i++){


let star=document.createElement("div");


star.style.position="absolute";

star.style.width="3px";

star.style.height="3px";

star.style.background="white";

star.style.borderRadius="50%";


star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


star.style.opacity=Math.random();


document.body.appendChild(star);


}





document.addEventListener("click",function(e){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="absolute";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="25px";

heart.style.animation="float 2s forwards";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},2000);


});



function openLetters(){

window.location.href="letters.html";

}


const startDate = new Date("2025-07-25T00:00:00");


function updateLoveTime(){


const now = new Date();


const difference = now - startDate;



const secondsTotal = Math.floor(
difference / 1000
);



const days = Math.floor(
secondsTotal / (60*60*24)
);



const hours = Math.floor(
(secondsTotal % (60*60*24)) / (60*60)
);



const minutes = Math.floor(
(secondsTotal % (60*60)) / 60
);



const seconds = 
secondsTotal % 60;



document.getElementById("days").innerHTML = days;


document.getElementById("hours").innerHTML = hours;


document.getElementById("minutes").innerHTML = minutes;


document.getElementById("seconds").innerHTML = seconds;



}



setInterval(updateLoveTime,1000);


updateLoveTime();
