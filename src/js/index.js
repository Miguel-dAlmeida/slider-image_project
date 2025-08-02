/*
 * @file         Index JS
 * @description  Handles slide transitions, arrow navigation, and dynamic alignment in a responsive image carousel component. Includes accessibility and responsive positioning logic.
 * @author       Mário Miguel de Almeida
 * @last-modified 2025-07-30
 * @dependencies None (vanilla JS)
 * 
*/

/* Slider Logic */

const prevArrow = document.getElementById('previous-slide');
const nextArrow = document.getElementById('next-slide');
const slides = document.querySelectorAll('.slider');
let currentSlide = 0;

prevArrow.addEventListener('click', goToPrevSlide);

function goToPrevSlide() {
  if (currentSlide === 0) {
    return
  }
  currentSlide--
  updateSelectedSlide()
  updateArrowVisibility()
}

nextArrow.addEventListener('click', goToNextSlide);

function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    return
  }
  currentSlide++
  updateSelectedSlide()
  updateArrowVisibility()
}

function updateSelectedSlide() {
  const activeSlide = document.querySelector('.slider-background--selected')
  activeSlide.classList.remove('slider-background--selected')
  slides[currentSlide].classList.add('slider-background--selected')
}

function updateArrowVisibility() {
  if (currentSlide === 0) {
    prevArrow.classList.add('slider-arrows--opacity');
  } else if (currentSlide === slides.length - 1) {
    nextArrow.classList.add('slider-arrows--opacity');
  } else {
    prevArrow.classList.remove('slider-arrows--opacity');
    nextArrow.classList.remove('slider-arrows--opacity');
  }
}

/* Arrow alignment logic */

function alignArrowsToContent() {
  const activeSlide = document.querySelector('.slider-background--selected');
  if (!activeSlide) return;

  const content = activeSlide.querySelector('.slider__content');

  if (!content || !prevArrow || !nextArrow) return;

  requestAnimationFrame(() => {
    const contentRect = content.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const contentMiddle = contentRect.top + scrollTop + contentRect.height / 2;

    prevArrow.style.top = `${contentMiddle}px`;
    nextArrow.style.top = `${contentMiddle}px`;
  });
}

window.addEventListener('load', alignArrowsToContent);

const observer = new ResizeObserver(() => {
  alignArrowsToContent();
});

function observeActiveSlide() {
  const current = document.querySelector('.slider-background--selected');
  if (current) observer.observe(current.querySelector('.slider__content'));
}

document.querySelectorAll('.slider-arrows').forEach(arrow => {
  arrow.addEventListener('click', () => {
    setTimeout(() => {
      alignArrowsToContent();
      observer.disconnect(); 
      observeActiveSlide();
    }, 100); 
  });
});

window.addEventListener('resize', alignArrowsToContent);
window.addEventListener('orientationchange', () => {
  setTimeout(alignArrowsToContent, 100); 
});


/* Keyboard Accessibility Logic */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goToNextSlide();
  if (e.key === 'ArrowLeft') goToPrevSlide();
});