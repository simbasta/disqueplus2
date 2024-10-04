

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
function search_animal() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('movies'); 
      
    for (i = 0; i < x.length; i++) {  
        
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 

// logo movile
let divmobil = document.querySelector('.div-mobil')
window.addEventListener("scroll", function (){
    let navScroll = window.scrollY
    if (navScroll >= 20) {
        divmobil.style.transition = "0.5s"
        divmobil.classList.add('opacity')
    }
    else{
        divmobil.classList.remove('opacity')
    }
})
// 


