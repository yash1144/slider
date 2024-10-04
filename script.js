const slide = document.querySelector(".slide");
const move1Count = document.querySelectorAll(".move1").length; // 6
let currentmove1 = 0;
const intervelTime = 3000;
let slideIntervel;

// move slide to next slide
function nextmove1() {
    currentmove1 = (currentmove1 + 1) % move1Count;
    updatemove1();
}

// move silde to previous slide
function prevmove1() {
    currentmove1 = (currentmove1 - 1 + move1Count) % move1Count;
    updatemove1();
}

function updatemove1() {
    slide.style.transform = `translateX(-${currentmove1 * 100}%)`;
}

// Automatic slide intervel
function startSlider() {
    move1Intervel = setInterval(nextmove1, intervelTime);
}

// stop the slider
function stopSlider() {
    clearInterval(move1Intervel);
}

// EVENT LISTNERS
document.querySelector(".prev").addEventListener("click", () => {
    prevmove1();
    stopSlider();
    startSlider();
});

document.querySelector(".next").addEventListener("click", () => {
    nextmove1();
    stopSlider();
    startSlider();
});

// automatically start the slider
startSlider();

// model logic
const model = document.getElementById("myModel");
const colseModelBtn = document.getElementById("closeModel");

// show model after 5 sec
setTimeout(() => {
    model.style.display = "flex";
}, 5000);

colseModelBtn.addEventListener("click", () => {
    model.style.display = "none";
});