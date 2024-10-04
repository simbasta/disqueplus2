// cards carousel


let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
// fin cards carousel

// disney page effect

var bodypixar = document.querySelector('.bodypixar')

document.querySelector('.bodypixar').style.background = "url('../../../img/pixarpage (12).gif') ";
document.querySelector('.bodypixar').style.backgroundSize  = "100%";
document.querySelector('.bodypixar').style.backgroundRepeat  = "no-repeat";
document.querySelector('.bodypixar').style.backgroundColor   = " #131520";
// bodymarvel.attributes.background.style.opacity    = " 0.5";
bodypixar.style.backgroundAttachment    = " fixed";

setInterval(function () {

    document.querySelector('.bodypixar').style.background = "url('../../../img/scale3.jfif') ";
    document.querySelector('.bodypixar').style.backgroundRepeat  = "no-repeat";
    document.querySelector('.bodypixar').style.backgroundSize  = "100%";
    document.querySelector('.bodypixar').style.backgroundColor   = " #131520";
    bodypixar.style.backgroundAttachment    = " fixed";

    
}, 8300);
// fin

// navbar effect


let navbarpagespixar = document.querySelector('.navbarpagespixar')
window.addEventListener("scroll", function (){
    let navScroll = window.scrollY

    if (navScroll >= 100) {
        navbarpagespixar.classList.add('navback')
        navbarpagespixar.style.position = "fixed"
        // navbarpagespixar.style.top = "0"
        navbarpagespixar.style.width = "100%"
        navbarpagespixar.style.zIndex  = "9"
        navbarpagespixar.style.transition = "0.5s"
    }
    else{
        navbarpagespixar.classList.remove('navback')
    }
})

// fin navbarpages effect 


// card effect scroll
var imgbackpngpixar = document.getElementsByClassName('imgbackpngpixar')[0]
imgbackpngpixar.classList.add('dnone');

window.addEventListener("scroll", function (){
    let jssScroll = window.scrollY
    if (jssScroll >= 150) {
        imgbackpngpixar.classList.remove('dnone');
        imgbackpngpixar.classList.add('imgwhite');
    }
    else{
        imgbackpngpixar.classList.add('dnone');
        imgbackpngpixar.classList.remove('imgwhite');
    }
})