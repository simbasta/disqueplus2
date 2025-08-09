

// const videoCards = [...document.querySelectorAll('.video-card')];




// videoCards.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         let video = item.children[1];
//         video.play();
//     })
//     item.addEventListener('mouseout', () => {
//         let video = item.children[1];
//         video.pause();
//     })
// })


import { initCarousel } from './utils.js';

// cards carousel
initCarousel('.card-container', '.pre-btn', '.nxt-btn');
// fin cards carousel
// cards carousel search page


// let cardcontainersearch = [...document.querySelectorAll('.card-container-search')];


// cardcontainersearch.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtns[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth - 200;
//     })

//     preBtns[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth + 200;
//     })
// })
// // fin cards carousel search page


// var videomarvelpage = document.querySelector(".videomarvelpage")



// pages img effect


// barre de recherche 

// JavaScript code
window.search_animal = () => {
    const input = document.getElementById('searchbar').value.toLowerCase();
    const movies = document.getElementsByClassName('movies');

    Array.from(movies).forEach(movie => {
        movie.style.display = movie.innerHTML.toLowerCase().includes(input)
            ? 'list-item'
            : 'none';
    });
};

// logo movile
const divmobil = document.querySelector('.div-mobil');
window.addEventListener('scroll', () => {
    const navScroll = window.scrollY;
    if (navScroll >= 20) {
        divmobil.style.transition = '0.5s';
        divmobil.classList.add('opacity');
    } else {
        divmobil.classList.remove('opacity');
    }
});

