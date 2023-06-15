let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

let viewer = document.querySelector(".imgViewer");
let img = document.querySelectorAll(".picture");
let closeButt = document.querySelector(".closeButt");


function imgPopOn (e) {
    console.log(e.target.getBoundingClientRect().x);
    viewer.classList.toggle("on");
}

function imgPopOff() {
    viewer.classList.toggle("on");
    viewer.classList.toggle("off");
}

function imgPopReset(e){
    if(e.animationName == "imgOff") {
        viewer.classList.toggle("off");
    }
}

// Event Set

img.forEach(element => {
    element.addEventListener("click", imgPopOn);
});

closeButt.addEventListener("click", imgPopOff);
viewer.addEventListener("animationend" , imgPopReset)