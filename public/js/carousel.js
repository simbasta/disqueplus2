export function initCarousel(containerSelector, prevSelector, nextSelector) {
  const containers = [...document.querySelectorAll(containerSelector)];
  const prevButtons = [...document.querySelectorAll(prevSelector)];
  const nextButtons = [...document.querySelectorAll(nextSelector)];

  containers.forEach((container, index) => {
    const containerWidth = container.getBoundingClientRect().width;

    nextButtons[index].addEventListener('click', () => {
      container.scrollLeft += containerWidth - 200;
    });

    prevButtons[index].addEventListener('click', () => {
      container.scrollLeft -= containerWidth + 200;
    });
  });
}
