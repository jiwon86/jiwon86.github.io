let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

let viewer = document.querySelector(".Mygalery");
let main = document.querySelector(".main");
let img = document.querySelectorAll(".picture");
let closeButt = document.querySelector(".closeButt");

// resize Event
window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
window.addEventListener('touchend', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// SWiper Main Set

let swiper = new Swiper('.main', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    mousewheel:true,
    autoHeight:true,
    spaceBetween:0,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    }
 });

 // SWiper Galery Set

 let swiper2 = new Swiper('.Mygalery', {
    // Optional parameters
    loop: true,
    loopAdditionalSlides : 1,
    centeredSlides: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//----------------------------------------------

function imgPopOn (e) {
    var index = e.target.alt;
    viewer.classList.toggle("on");
    
    swiper2.slideToLoop(index, 1 , false);
    console.log(index);  
    // swiper Disable
    swiper.disable();
}

function imgPopOff() {
    viewer.classList.toggle("on");
    viewer.classList.toggle("off");
    
    // swiper Enable
    swiper.enable();
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
viewer.addEventListener("animationend" , imgPopReset);