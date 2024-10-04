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

// page marvel
var bodymarvel = document.querySelector('.bodymarvel')

document.querySelector('.bodymarvel').style.background = "url('../../../img/marvelpage (10).gif') ";
document.querySelector('.bodymarvel').style.backgroundSize  = "100%";
document.querySelector('.bodymarvel').style.backgroundRepeat  = "no-repeat";
document.querySelector('.bodymarvel').style.backgroundColor   = " #131520";
// bodymarvel.attributes.background.style.opacity    = " 0.5";
bodymarvel.style.backgroundAttachment    = " fixed";

setInterval(function () {

    document.querySelector('.bodymarvel').style.background = "url('../../../img/scale.jfif') ";
    document.querySelector('.bodymarvel').style.backgroundRepeat  = "no-repeat";
    document.querySelector('.bodymarvel').style.backgroundSize  = "100%";
    document.querySelector('.bodymarvel').style.backgroundColor   = " #131520";
    bodymarvel.style.backgroundAttachment    = " fixed";

    
}, 8300);
// fin page marvel

// page disney



// fin pages img affect

// navbarpages effect 

let navbarpages = document.querySelector('.navbarpages')
window.addEventListener("scroll", function (){
    let navScroll = window.scrollY

    if (navScroll >= 100) {
        navbarpages.classList.add('navback')
        navbarpages.style.position = "fixed"
        // navbarpages.style.top = "0"
        navbarpages.style.width = "100%"
        navbarpages.style.zIndex  = "9"
        navbarpages.style.transition = "0.5s"
    }
    else{
        navbarpages.classList.remove('navback')
        navbarpages.style.transition = "0.5s"
    }
})

// fin navbarpages effect 


// card effect scroll
var imgbackpng = document.getElementsByClassName('imgbackpng')[0]
imgbackpng.classList.add('dnone');

window.addEventListener("scroll", function (){
    let jssScroll = window.scrollY
    if (jssScroll >= 150) {
        imgbackpng.classList.remove('dnone');
        imgbackpng.classList.add('imgwhite');
        imgbackpng.style.transition = "0.5s"
    }
    else{
        imgbackpng.classList.add('dnone');
        imgbackpng.classList.remove('imgwhite');
        imgbackpng.style.transition = "1s"

    }
})

// fin card effect scroll
// :
// :
// ::
// :