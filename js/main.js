document.addEventListener("DOMContentLoaded", function(event) {
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

    /*
    ==============
        BURGER
    ==============
    */
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.main-menu');

    
    /*
    ==============
        LISTEN
    ==============
    */
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('bullet')) {
            let bulletIndex = bullets.indexOf(event.target);
            makeBulletActive(bulletIndex);
            slideShowIndex = bulletIndex;
            clearInterval(roll);
            setTranslation(sliderContainer);
        } else if (event.target.classList.contains('burger')) {
            menu.classList.toggle('active');
        }
    });

    /*
    ==============
        RUN
    ==============
    */
    let roll = setInterval(() => {
        slideShowIndex = getIndex(slideShowIndex);
        setTranslation(sliderContainer);
        makeBulletActive(slideShowIndex);
    }, 3000);

    /*
    ==============
        DEBUG
    ==============
    */
    // const designModel = document.querySelector('.design-model');

    // document.addEventListener('keyup', (event) => {
    //     console.log(`code: ${event.code}`);
    //     if (event.code == 'KeyF') { // F key
    //         designModel.classList.add('full');
    //         designModel.classList.remove('off');
    //         console.log('F');
    //     } else if (event.code == 'KeyH') { // H key
    //         designModel.classList.remove('full');
    //         designModel.classList.add('off');
    //         console.log('H');
    //     }
    // });
 
});

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
    
    document.addEventListener('click', (event) => {
        const element = event.target;
        if (element.id === "burger") {
            console.log('burger fired!');
            menu.classList.toggle('visible');
        }
    });
    if (document.body.classList.contains('home')) {
        const testimonialsSlider = document.querySelector('.testimonials .slider .wp-block-group__inner-container');
        const testimonials = Array.from(testimonialsSlider.querySelectorAll('p'));
        console.log(testimonialsSlider);
        let roll = setInterval(() => {
            gap(testimonials.length);
            setTranslation(testimonialsSlider, currentGap);
        }, 6000);
    }
});


