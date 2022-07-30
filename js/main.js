// Loading
const loading = document.getElementsByClassName('loading')[0]
const newSections = document.getElementsByClassName('mySection')
for(let i = 0; i<newSections.length; i++){
    newSections[i].style.display = 'none'
}
function myScrollingFunc () {
    for(let i = 0; i<newSections.length; i++){
        newSections[i].style.display = 'flex'
    }
    loading.style.transform = 'translateY(-100%)'
    setTimeout(function(){loading.style.display = 'none'}, 2500)
}
setTimeout(myScrollingFunc, 1500)
// Scroll
$(document).ready(function () {
    $("a.scrolling-a").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").delay(250).animate({
            scrollTop: destination
        }, 1000);
        return false;
    });
});
// Menu
let openMenuButton = document.getElementById('openMenuButton');
openMenuButton.addEventListener('click', openMenu);
let sections = document.getElementsByClassName('mySection');

let modalWindow = document.getElementById('modalWindow');
let html = document.getElementById('html');
let menuCounter = 0;

function openMenu() {
    $(sections).fadeOut();
    modalWindow.classList.add('activeWindow');
}
function closeMenu() {
    $(sections).fadeIn();
    modalWindow.classList.remove('activeWindow');
}
// Slider
let sliderImg1 = document.getElementsByClassName('sliderImg1');
let sliderImg2 = document.getElementsByClassName('sliderImg2');
let sliderImg3 = document.getElementsByClassName('sliderImg3');
let sliderImg4 = document.getElementsByClassName('sliderImg4');
let sliderImg5 = document.getElementsByClassName('sliderImg5');
let sliderImg6 = document.getElementsByClassName('sliderImg6');
let sliderImg7 = document.getElementsByClassName('sliderImg7');
let sliderImg8 = document.getElementsByClassName('sliderImg8');
let sliderImg9 = document.getElementsByClassName('sliderImg9');
let sliderImg10 = document.getElementsByClassName('sliderImg10');

let globalArrayOfImages = [
    ob1 = {
        images: sliderImg1,
        counter: 0
    },
    ob2 = {
        images: sliderImg2,
        counter: 0
    },
    ob3 = {
        images: sliderImg3,
        counter: 0
    },
    ob4 = {
        images: sliderImg4,
        counter: 0
    },
    ob5 = {
        images: sliderImg5,
        counter: 0
    },
    ob6 = {
        images: sliderImg6,
        counter: 0
    },
    ob7 = {
        images: sliderImg7,
        counter: 0
    },
    ob8 = {
        images: sliderImg8,
        counter: 0
    },
    ob9 = {
        images: sliderImg9,
        counter: 0
    },
    ob10 = {
        images: sliderImg10,
        counter: 0
    }
];

let rooms = document.getElementsByClassName('section-rooms-container-sliderBox');
let roomsCounter = 0;

let nextSlideButton = document.getElementsByClassName('nextSlideButton');
let nextSlideButtonFaded = document.getElementsByClassName('nextSlideButtonFaded');

let currentArray = globalArrayOfImages.slice()[0];

// Slider's images
let nextImageButton = document.getElementsByClassName('nextImageButton');
let prevImageButton = document.getElementsByClassName('prevImageButton');
for(let i = 0; i<nextImageButton.length; i++){
    nextImageButton[i].addEventListener('click', nextImage);
    prevImageButton[i].addEventListener('click', prevImage);    
}

function nextImage() {
    currentArray.counter++;
    currentArray.counter > currentArray.images.length - 1 ? currentArray.counter = 0 : 0;
    for (let i = 0; i < currentArray.images.length; i++) {
        currentArray.images[i].style.display = 'none';
    }
    $(currentArray.images[currentArray.counter]).fadeIn();
}

function prevImage() {
    currentArray.counter--;
    currentArray.counter < 0 ? currentArray.counter = currentArray.images.length - 1 : 0;
    for (let i = 0; i < currentArray.images.length; i++) {
        currentArray.images[i].style.display = 'none';
    }
    $(currentArray.images[currentArray.counter]).fadeIn();
}

// Slider's rooms
function nextRoom() {
    roomsCounter++;
    roomsCounter > 9 ? roomsCounter = 0 : 0;
    currentArray = globalArrayOfImages.slice()[roomsCounter];
    for (let i = 0; i < rooms.length; i++) {
        rooms[i].style.display = 'none';
    }
    $(rooms[roomsCounter]).fadeIn();
    rooms[roomsCounter].style.display = 'flex';
}
for (let i = 0; i < rooms.length; i++) {
    nextSlideButton[i].addEventListener('click', nextRoom);
    nextSlideButtonFaded[i].addEventListener('click', nextRoom);
}

// Showing
$(function () {
    $(window).on('scroll', function () {
        // AboutUs
        let AboutUsShow = $('#AboutUsShow').offset();
        let AboutUsShowTop = AboutUsShow.top;
        if ($(window).scrollTop() > AboutUsShowTop - $('#AboutUsShow').height()) {
            $('#AboutUsShow').addClass("showedAboutUs");
        } else {
            $('#AboutUsShow').removeClass("showedAboutUs");
        }
        // BreakfastLeft
        let BreakfastLeftSide = $('#BreakfastLeftSide').offset();
        let BreakfastLeftSideTop = BreakfastLeftSide.top;
        if ($(window).scrollTop() > BreakfastLeftSideTop - $('#BreakfastLeftSide').height()) {
            $('#BreakfastLeftSide').addClass("showedBreakfast");
        } else {
            $('#BreakfastLeftSide').removeClass("showedBreakfast");
        }
        // BreakfastRight
        let BreakfastRightSide = $('#BreakfastRightSide').offset();
        let BreakfastRightSideTop = BreakfastRightSide.top;
        if ($(window).scrollTop() > BreakfastRightSideTop - $('#BreakfastRightSide').height() * 1 / 3) {
            $('#BreakfastRightSide').addClass("showedBreakfast");
        } else {
            $('#BreakfastRightSide').removeClass("showedBreakfast");
        }
    })
})

// YandexMap
ymaps.ready(function () {
    var myMap = new ymaps.Map('yandexMap', {
            center: [44.19011035, 42.03399616],
            zoom: 18,
        }, {
            searchControlProvider: 'yandex#search',
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: "Отель 'Империал'",
            balloonContent: 'Забронируйте сейчас'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/badges/logo.png',
            iconImageSize: [42, 42],
            iconImageOffset: [-20, -50]
        });
    myMap.geoObjects.add(myPlacemark);
});
