// Map Set
var LatLng = [34.8490397, 126.492639]
var inv = new naver.maps.LatLng(LatLng[0], LatLng[1]);

var mapOptions = {
    center: inv,
    zoom: 18,
    draggable: true,
    pinchZoom: true,
    scrollWheel: true,
    keyboardShortcuts: false,
    disableDoubleTapZoom: true,
    disableDoubleClickZoom: true,
    disableTwoFingerTapZoom: true
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: inv,
    map: map,
};

var marker = new naver.maps.Marker(markerOptions);
//marker.setAnimation(naver.maps.Animation.BOUNCE);

naver.maps.Event.addListener(marker, "click" , function(){
    window.open("https://naver.me/xJNpT7SU", "_blank");
});


naver.maps.Event.addListener(map, "click" , function(e){
    console.log(e);
});


window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('touchend', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});