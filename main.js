
let viewer = document.querySelector(".Mygalery");
let main = document.querySelector(".main");
let img = document.querySelectorAll(".picture");
let closeButt = document.querySelector(".closeButt");
let introText = document.querySelector(".text1");
let inText = new Array(4);
let event1 = 0;


// SWiper Main Set

let swiper = new Swiper('.main', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    mousewheel:true,
    spaceBetween:0,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on : {
        slideChangeTransitionEnd : aa
    },
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

function aa(e) {
    var index = swiper.activeIndex;
    if(index == 1 && event1 == 0){
        for (let i = 0; i < inText.length; i++) {
            var id = "t" + i
            inText[i] = document.getElementById(id);
            inText[i].addEventListener("animationend" , function(){
                textAnime(i);
            });
            
        }
        event1 = 1;
        inText[0].classList.toggle("tt");
    }
}

function textAnime(i){
    console.log(inText[i])
    if (i != 3){
        inText[i+1].classList.toggle("tt");
    }else{
        inText[i].classList.toggle("flower1");
      //document.getElementById("tab2").classList.toggle("flower1");
    }
}

//----------------------------------------------

function imgPopOn (e) {
    var index = e.target.alt;
    viewer.classList.toggle("on");

    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    swiper2.init();
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

// Map Set
var LatLng = [37.3082126, 126.828793]
var weedingHole = new naver.maps.LatLng(LatLng[0], LatLng[1]);

var mapOptions = {
    center: weedingHole,
    zoom: 17,
    draggable: false,
    pinchZoom: false,
    scrollWheel: false,
    keyboardShortcuts: false,
    disableDoubleTapZoom: true,
    disableDoubleClickZoom: true,
    disableTwoFingerTapZoom: true
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: weedingHole,
    map: map,
    icon : {
        url : "./img/marker.png"
        ,scaledSize : new naver.maps.Size(45,45)
        ,animation: naver.maps.Animation.BOUNCE
    }
};

var marker = new naver.maps.Marker(markerOptions);
marker.setAnimation(naver.maps.Animation.BOUNCE);

// Event Set

img.forEach(element => {
    element.addEventListener("click", imgPopOn);
});


closeButt.addEventListener("click", imgPopOff);
viewer.addEventListener("animationend" , imgPopReset);