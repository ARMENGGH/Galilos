function openVideo(video){


let box=document.getElementById("videoBox");

let vid=document.getElementById("memoryVideo");

let source=document.getElementById("videoSource");


source.src=video;

vid.load();


box.style.display="block";


}



function closeVideo(){


document.getElementById("videoBox").style.display="none";


document.getElementById("memoryVideo").pause();


}




function showMessage(){


document.getElementById("messageBox").style.display="block";


}



function closeMessage(){


document.getElementById("messageBox").style.display="none";


}




// floating hearts ❤️

for(let i=0;i<20;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";


heart.style.bottom="-20px";


heart.style.fontSize=
(15+Math.random()*20)+"px";


heart.style.animation=
"float 8s linear infinite";


document.body.appendChild(heart);


}



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
