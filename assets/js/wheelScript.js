// Immediately invoked function expression
// to not pollute the global scope
(function() {
    const wheel = document.querySelector(`.wheel`)
    const startButton = document.querySelector(`.button`)
    let deg = 0;

    startButton.addEventListener(`click`, ()=> {
        startButton.style.pointerEvents = `none`;
        deg = Math.floor(2500 + Math.random() * 2500)
        wheel.style.transition = `all 5s ease-out` ;
        wheel.style.transform = `rotate(${deg}deg)` ; 
    });

    wheel.addEventListener(`transitionEnd`, () => {
        startButton.style.pointerEvents = `auto`;
        wheel.style.transition = `none`;

    });

   })(); 