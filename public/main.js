

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

async function renderCards(dataUrl, containerSelector) {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        const container = document.querySelector(containerSelector);
        if (!container) return;
        const isList = ['OL', 'UL'].includes(container.tagName);
        data.forEach(item => {
            const wrapper = document.createElement(isList ? 'li' : 'div');
            if (isList) {
                wrapper.classList.add('movies');
                if (Array.isArray(item.keywords)) {
                    item.keywords.forEach(k => {
                        const span = document.createElement('span');
                        span.classList.add('dnone');
                        span.textContent = k;
                        wrapper.appendChild(span);
                    });
                }
            }
            const card = document.createElement('div');
            card.className = 'card';
            const img = document.createElement('img');
            img.src = item.img;
            img.className = 'card-img';
            img.alt = item.name || '';
            const link = document.createElement('a');
            link.href = item.link || '#';
            const body = document.createElement('div');
            body.className = 'card-body';
            const h2 = document.createElement('h2');
            h2.className = 'name';
            h2.textContent = item.name || '';
            const h6 = document.createElement('h6');
            h6.className = 'des';
            h6.textContent = item.des || '';
            const button = document.createElement('button');
            button.className = 'watchlist-btn';
            button.textContent = 'add to watchlist';
            body.appendChild(h2);
            body.appendChild(h6);
            body.appendChild(button);
            link.appendChild(body);
            card.appendChild(img);
            card.appendChild(link);
            wrapper.appendChild(card);
            container.appendChild(wrapper);
        });
    } catch (err) {
        console.error('Error loading cards', err);
    }
}


