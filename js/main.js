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
