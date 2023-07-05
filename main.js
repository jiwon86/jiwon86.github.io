
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
    spaceBetween:10,
    resistance : false,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
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

//----------------------------------------------

function imgPopOn (e) {
    var index = e.target.getAttribute("index");
    viewer.classList.toggle("on");

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

var park = [
    new naver.maps.LatLng(37.3088757, 126.8272830) // 양지주차타워
    ,new naver.maps.LatLng(37.3074087, 126.8279742) // 대림프라자앞공영주차장공영주차장
    ,new naver.maps.LatLng(37.3089053, 126.8277812) // mk주차타워
];

var parkInfo = [
    "https://naver.me/5MCOh9Am"
    ,"https://naver.me/5vIcSZne"
    ,"https://naver.me/5eGTN7fW"
];

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
for (let i = 0; i < 3; i++) {

    var markerOptions2 = {
        position: park[i],
        map: map,
        icon : {
            url : "./img/marker/p"+ (i+2) +".png"
            ,scaledSize : new naver.maps.Size(30,40)
        }
    };
    var parkmarker = new naver.maps.Marker(markerOptions2);

    naver.maps.Event.addListener(parkmarker, "click" , function(){
        window.open(parkInfo[i], "_blank");
    });
    
}


var marker = new naver.maps.Marker(markerOptions);
marker.setAnimation(naver.maps.Animation.BOUNCE);

naver.maps.Event.addListener(marker, "click" , function(){
    window.open("https://naver.me/IxD7uOQW", "_blank");
});




function moveMap(x){
    console.log("asd")
    switch (x) {
        case 1:
            map.setCenter(weedingHole);
            break;
        case 2:
            map.setCenter(park[x-2]);
                break;
        case 3:
            map.setCenter(park[x-2]);
                break;
        case 4:
            map.setCenter(park[x-2]);
                break;
    
        default:
            break;
    }
   
}

// Event Set

img.forEach(element => {
    element.addEventListener("click", imgPopOn);
});

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
window.addEventListener('touchend', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

closeButt.addEventListener("click", imgPopOff);
viewer.addEventListener("animationend" , imgPopReset);