function openMemories(){

window.location.href="memories.html";

}




// Floating butterflies 🦋


for(let i=0;i<15;i++){


let butterfly=document.createElement("div");


butterfly.className="butterfly";


butterfly.innerHTML="🦋";


butterfly.style.left=Math.random()*100+"vw";


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
