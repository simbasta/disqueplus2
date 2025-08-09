export const initCarousel = (containerSelector, prevBtnSelector, nextBtnSelector) => {
    const cardContainers = [...document.querySelectorAll(containerSelector)];
    const preBtns = [...document.querySelectorAll(prevBtnSelector)];
    const nxtBtns = [...document.querySelectorAll(nextBtnSelector)];

    cardContainers.forEach((item, i) => {
        const { width: containerWidth } = item.getBoundingClientRect();
        nxtBtns[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth - 200;
        });
        preBtns[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth + 200;
        });
    });
};
