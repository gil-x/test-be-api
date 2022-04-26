console.log('JS is OK!');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded");

    const designModel = document.querySelector('.design-model');

    document.addEventListener('keyup', (event) => {
        console.log(`code: ${event.code}`);
        if (event.code == 'KeyF') { // F key
            designModel.classList.add('full');
            designModel.classList.remove('off');
            console.log('F');
        } else if (event.code == 'KeyH') { // H key
            designModel.classList.remove('full');
            designModel.classList.add('off');
            console.log('H');
        }
    });
 
});



/*
    ==============
        SLIDER
    ==============
*/

const sliderContainer = document.querySelector('.slideshow_container');
const sliderItemsNb = document.querySelectorAll('.slide-item').length;

var bullets = Array.from(document.querySelectorAll('.bullet'));


const makeBulletActive = (index) => {
    bullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
    bullets[index].classList.add('active');
}


console.log(sliderItemsNb);

var slideShowIndex = 0;

const getIndex = (index) => {
    index++;
    if (index * 3 >= sliderItemsNb ) {
        return 0;
    } else {
        return index;
    }
}

const setTranslation = (element) => {
    element.style.transform = `translateX(${-slideShowIndex * 100}%)`;
}

// const rollSlider = () => {
//     sliderContainer.style.transform = "translateX(-100%)";
// }
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('bullet')) {
        // rollSlider();
        let bulletIndex = bullets.indexOf(event.target);
        makeBulletActive(bulletIndex);
        console.log(`bulletIndex: ${bulletIndex}`);
        slideShowIndex = bulletIndex;
        clearInterval(roll);
        setTranslation(sliderContainer);
    }
});

let roll = setInterval(() => {
    // gap(testimonials.length);
    slideShowIndex = getIndex(slideShowIndex);
    setTranslation(sliderContainer);
    
    makeBulletActive(slideShowIndex);
    console.log(`slideShowIndex= ${slideShowIndex}`);
}, 1000);


// const partnersList = document.getElementById('partners__list');
// const partnerPrev = document.getElementById('partner__prev');
// const partnerNext = document.getElementById('partner__next');


// const steps = ['0', '-25%', '-50%', '-75%', '-100%'];
// let partnerIndex = 0;
// let partnerDirection = 'right';


// const rollPartners = () => {
//     if (partnerDirection == 'right') {
        
//         if (partnerIndex == steps.length) {
//             partnerDirection = 'left';
//             return;
//         }
//         partnerIndex++;

//     } else if (partnerDirection == 'left') {
        
//         if (partnerIndex == 0) {
//             partnerDirection = 'right';
//             return;
//         }
//         partnerIndex--;

//     }
//     partnersList.style.transform = `translateX(${steps[partnerIndex]})`;
// }








// let currentGap = 0;
// let gapDirection = -1;
// const setTranslation = (element, value) => {
//     element.style.transform = `translateX(${value * 20}%)`;
// };
// const gap = (max) => {
//     currentGap += gapDirection;
//     if (Math.abs(currentGap) >= max - 1 || currentGap == 0) {
//         gapDirection = -gapDirection;
//     }
// };


// const testimonialsSlider = document.querySelector('.testimonials .slider .wp-block-group__inner-container');
// const testimonials = Array.from(testimonialsSlider.querySelectorAll('p'));

// let roll = setInterval(() => {
//     gap(testimonials.length);
//     setTranslation(testimonialsSlider, currentGap);
// }, 6000);

