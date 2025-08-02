/*
 * JavaScript Logic – Image Slider
 *
 * Handles the interactivity of the image carousel, including
 * navigation between slides, background transitions, and dynamic style updates.
 *
 * @author: Mário Miguel de Almeida
 * @last-modified: 2025-10-07
 * @dependencies: index.html, style.css
*/

const leftSliderArrow = document.querySelector('.slider__arrows--left')
const rightSliderArrow = document.querySelector('.slider__arrows--right')
const slides = document.querySelectorAll('.slider-background')
let currentSlide = 0;

leftSliderArrow.addEventListener('click', returnSlide)
rightSliderArrow.addEventListener('click', advanceSlide)

function advanceSlide() {
    const lastSlide = currentSlide === slides.length - 1;
    if (lastSlide) return
    currentSlide++

    hideSelectedSlide()
    addCurrentSlide()
    updateStyles(currentSlide)
}

function returnSlide() {
    const firstSlide = currentSlide === 0;
    if (firstSlide) return
    currentSlide--

    hideSelectedSlide()
    addCurrentSlide()
    updateStyles(currentSlide)
}

function hideSelectedSlide() {
    let selectedSlide = document.querySelector('.slider-background--selected')
    console.log(selectedSlide)
    selectedSlide.classList.remove('slider-background--selected')
}

function addCurrentSlide() {
    slides[currentSlide].classList.add("slider-background--selected")
}



function updateStyles(currentSlide) {
    const sliderLink = document.querySelector('.slider__link')
    const creditsLink = document.querySelectorAll('.credits__link')


    const sliderLinkColors = [
        "slider-color--slide-1",
        "slider-color--slide-2",
        "slider-color--slide-3",
        "slider-color--slide-4"
    ];
    sliderLink.classList.remove(...sliderLinkColors);
    sliderLink.classList.add(sliderLinkColors[currentSlide]);


    let sliderArrows = document.querySelectorAll(".slider__arrows")
    if (currentSlide === 0) {
        sliderArrows[0].classList.add('slider-arrows--transition')
    } else if (currentSlide === 3) {
        sliderArrows[1].classList.add('slider-arrows--transition')
    } else {
        sliderArrows.forEach(function (arrow) {
            arrow.classList.remove('slider-arrows--transition')
        })
    }


    creditsLink.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.classList.add(`slider-color--slide-${currentSlide + 1}`, "slider-transition");
            link.classList.remove(`slider-color--slide-${currentSlide + 2}`);
        });
        link.addEventListener("mouseleave", () => {
            link.classList.remove(`slider-color--slide-${currentSlide + 1}`);
            link.classList.add("slider-color--default");
        });
    });
}

updateStyles(currentSlide)

