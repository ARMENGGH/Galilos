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
