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
var bodydc = document.querySelector('.bodydc')

document.querySelector('.bodydc').style.background = "url('../../../img/dcpage (13).gif') ";
document.querySelector('.bodydc').style.backgroundSize  = "100%";
document.querySelector('.bodydc').style.backgroundRepeat  = "no-repeat";
document.querySelector('.bodydc').style.backgroundColor   = " #131520";
// bodymarvel.attributes.background.style.opacity    = " 0.5";
bodydc.style.backgroundAttachment    = " fixed";

setInterval(function () {

    document.querySelector('.bodydc').style.background = "url('../../../img/scale5.PNG') ";
    document.querySelector('.bodydc').style.backgroundRepeat  = "no-repeat";
    document.querySelector('.bodydc').style.backgroundSize  = "100%";
    document.querySelector('.bodydc').style.backgroundColor   = " #131520";
    bodydc.style.backgroundAttachment    = " fixed";

    
}, 7640);
// fin page marvel

// page disney



// fin pages img affect

// navbarpages effect 


let navbarpagesdc = document.querySelector('.navbarpagesdc')
window.addEventListener("scroll", function (){
    let navScroll = window.scrollY

    if (navScroll >= 100) {
        navbarpagesdc.classList.add('navback')
        navbarpagesdc.style.position = "fixed"
        // navbarpagesdc.style.top = "0"
        navbarpagesdc.style.width = "100%"
        navbarpagesdc.style.zIndex  = "9"
        navbarpagesdc.style.transition = "0.5s"
    }
    else{
        navbarpagesdc.classList.remove('navback')
    }
})

// fin navbarpages effect 


// card effect scroll
var imgbackpngdc = document.getElementsByClassName('imgbackpngdc')[0]
imgbackpngdc.classList.add('dnone');

window.addEventListener("scroll", function (){
    let jssScroll = window.scrollY
    if (jssScroll >= 150) {
        imgbackpngdc.classList.remove('dnone');
        imgbackpngdc.classList.add('imgwhite');
    }
    else{
        imgbackpngdc.classList.add('dnone');
        imgbackpngdc.classList.remove('imgwhite');
    }
})

// fin card effect scroll
// :
// :
// ::
// :