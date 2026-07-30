const PASSWORD="25072025";



function checkPassword(){


let value=document.getElementById("password").value;



if(value===PASSWORD){


window.location.href="home.html";


}

else{


showPopup();


}


}




function showPopup(){


let popup=document.createElement("div");


popup.id="popupContainer";


popup.innerHTML=`

<div id="popup">

<h2>🥺💖 Oops!</h2>

<p>That's not our secret code!</p>


<div style="font-size:45px">

🧸🌸💗🦋🎀

</div>


<button onclick="closePopup()">

Try Again 💕

</button>


</div>

`;


document.body.appendChild(popup);


}




function closePopup(){


document.getElementById("popupContainer").remove();


document.getElementById("password").value="";


}




// Create stars ⭐


for(let i=0;i<120;i++){


let star=document.createElement("div");


star.className="star";


star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


star.style.animationDelay=Math.random()*3+"s";


document.body.appendChild(star);


}




// Create particles ✨


for(let i=0;i<40;i++){


let particle=document.createElement("div");


particle.className="particle";


particle.style.left=Math.random()*100+"vw";


particle.style.animationDuration=
(5+Math.random()*10)+"s";


particle.style.animationDelay=
Math.random()*5+"s";


document.body.appendChild(particle);


}




// Create floating hearts ❤️


for(let i=0;i<20;i++){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


heart.style.animationDuration=
(5+Math.random()*5)+"s";


document.body.appendChild(heart);


}
