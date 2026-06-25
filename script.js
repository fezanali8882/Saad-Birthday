const images = [
"image1.jpg",
"image2.jpg",
"image3.jpg"
];

let currentImage = 0;

function showScreen(id){

document.querySelectorAll(".screen")
.forEach(screen=>{
screen.classList.remove("active");
});

document.getElementById(id)
.classList.add("active");

}

function enterExperience(){

document.getElementById("bgMusic")
.play();

showScreen("screen2");

}

function openGift(){

showScreen("screen3");

}

function nextMemory(){

currentImage++;

if(currentImage < images.length){

document.getElementById("memoryImage")
.src = images[currentImage];

}else{

showScreen("screen4");

}

}

function blowCandle(){

showScreen("screen5");

animateXP();

}

function animateXP(){

let width = 0;

const fill =
document.getElementById("xpFill");

const interval =
setInterval(()=>{

width++;

fill.style.width =
width + "%";

if(width >= 100){

clearInterval(interval);

}

},20);

}

function startCountdown(){

showScreen("screen6");

let count = 3;

const counter =
document.getElementById("countdown");

const interval =
setInterval(()=>{

count--;

counter.innerText = count;

if(count === 0){

clearInterval(interval);

showScreen("screen7");

}

},1000);

}

function secretMessage(){

alert(
"Happy Birthday Saad ❤️\n\nFrom Faizy ❤️"
);

}
