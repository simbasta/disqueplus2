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

var bodydisney = document.querySelector('.bodydisney')

document.querySelector('.bodydisney').style.background = "url('../../../img/disneypage (11).gif') ";
document.querySelector('.bodydisney').style.backgroundSize  = "100%";
document.querySelector('.bodydisney').style.backgroundRepeat  = "no-repeat";
document.querySelector('.bodydisney').style.backgroundColor   = " #131520";
// bodymarvel.attributes.background.style.opacity    = " 0.5";
bodydisney.style.backgroundAttachment    = " fixed";

setInterval(function () {

    document.querySelector('.bodydisney').style.background = "url('../../../img/scale2.jfif') ";
    document.querySelector('.bodydisney').style.backgroundRepeat  = "no-repeat";
    document.querySelector('.bodydisney').style.backgroundSize  = "100%";
    document.querySelector('.bodydisney').style.backgroundColor   = " #131520";
    bodydisney.style.backgroundAttachment    = " fixed";

    
}, 8300);
// fin

// navbar effect
let navbarpagesdisney = document.querySelector('.navbarpagesdisney')
window.addEventListener("scroll", function (){
    let navScroll = window.scrollY

    if (navScroll >= 100) {
        navbarpagesdisney.classList.add('navback')
        navbarpagesdisney.style.position = "fixed"
        // navbarpagesdisney.style.top = "0"
        navbarpagesdisney.style.width = "100%"
        navbarpagesdisney.style.zIndex  = "9"
        navbarpagesdisney.style.transition = "0.5s"
    }
    else{
        navbarpagesdisney.classList.remove('navback')
    }
})

// fin navbarpages effect 


// card effect scroll
var imgbackpngdisney = document.getElementsByClassName('imgbackpngdisney')[0]
imgbackpngdisney.classList.add('dnone');

window.addEventListener("scroll", function (){
    let jssScroll = window.scrollY
    if (jssScroll >= 150) {
        imgbackpngdisney.classList.remove('dnone');
        imgbackpngdisney.classList.add('imgwhite');
    }
    else{
        imgbackpngdisney.classList.add('dnone');
        imgbackpngdisney.classList.remove('imgwhite');
    }
})