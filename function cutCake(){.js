function cutCake(){

document.getElementById("message").style.display="block";

startFireworks();

createHearts();

}

/* FIREWORKS */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

function firework(){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height/2;

for(let i=0;i<100;i++){

particles.push({
x:x,
y:y,
vx:(Math.random()-0.5)*8,
vy:(Math.random()-0.5)*8,
life:100
});

}

}

function startFireworks(){

setInterval(firework,700);

}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach((p,i)=>{

p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
ctx.fill();

if(p.life<=0){
particles.splice(i,1);
}

});

requestAnimationFrame(animate);

}

animate();

/* FLOATING HEARTS */

function createHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"%";
heart.style.bottom="0";
heart.style.fontSize="25px";
heart.style.animation="float 4s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

},500);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes float{
0%{transform:translateY(0);opacity:1;}
100%{transform:translateY(-800px);opacity:0;}
}
`;

document.head.appendChild(style);