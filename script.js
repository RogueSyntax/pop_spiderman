
const pop = document.querySelector("#pop");

const openMouthImg = "./img/spider2.png";
const closeMouthImg = "./img/spider1.png";


const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");


pop.addEventListener("mousedown", openMouth);
pop.addEventListener("mouseup", closeMouth);


pop.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

pop.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})


function openMouth() {
    pop.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    pop.src = closeMouthImg;
    closeMouthSound.play();
}