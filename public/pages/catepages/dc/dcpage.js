import { initCarousel } from '../../../utils.js';

// cards carousel
initCarousel('.card-container', '.pre-btn', '.nxt-btn');
// fin cards carousel

// page marvel
const bodydc = document.querySelector('.bodydc');

document.querySelector('.bodydc').style.background = "url('../../../img/dcpage (13).gif') ";
document.querySelector('.bodydc').style.backgroundSize  = "100%";
document.querySelector('.bodydc').style.backgroundRepeat  = "no-repeat";
document.querySelector('.bodydc').style.backgroundColor   = " #131520";
// bodymarvel.attributes.background.style.opacity    = " 0.5";
bodydc.style.backgroundAttachment    = " fixed";

setInterval(() => {

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


const navbarpagesdc = document.querySelector('.navbarpagesdc');
window.addEventListener('scroll', () => {
    const navScroll = window.scrollY;

    if (navScroll >= 100) {
        navbarpagesdc.classList.add('navback');
        navbarpagesdc.style.position = 'fixed';
        // navbarpagesdc.style.top = "0";
        navbarpagesdc.style.width = '100%';
        navbarpagesdc.style.zIndex  = '9';
        navbarpagesdc.style.transition = '0.5s';
    }
    else{
        navbarpagesdc.classList.remove('navback');
    }
});

// fin navbarpages effect 


// card effect scroll
const imgbackpngdc = document.getElementsByClassName('imgbackpngdc')[0];
imgbackpngdc.classList.add('dnone');

window.addEventListener('scroll', () => {
    const jssScroll = window.scrollY;
    if (jssScroll >= 150) {
        imgbackpngdc.classList.remove('dnone');
        imgbackpngdc.classList.add('imgwhite');
    }
    else{
        imgbackpngdc.classList.add('dnone');
        imgbackpngdc.classList.remove('imgwhite');
    }
});

// fin card effect scroll
