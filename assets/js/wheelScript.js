// Immediately invoked function expression
// to not pollute the global scope
var nombres = new Array("Martí","Carolina","Jesus","Abel", "Dawid");
var listaSelecionable = nombres;

function generarNombres() {
	var lista = document.getElementById("lista");
	/*lista.innerHTML = "";*/
	for (i =0; i<listaSelecionable.length; i++) {
		lista.innerHTML += nombres [i] +"<br>";
	}
}
(function() {
    const wheel = document.querySelector(`.wheel`)
    const startButton = document.querySelector(`.button`)
    let deg = 0;

    startButton.addEventListener(`click`, ()=> {
        startButton.style.pointerEvents = `none`;
        deg = Math.floor(4000 + Math.random() * 4000)
        wheel.style.transition = `all 8s ease-out` ;
        wheel.style.transform = `rotate(${deg}deg)` ; 
    });

    wheel.addEventListener(`transitionEnd`, () => {
        startButton.style.pointerEvents = `auto`;
        wheel.style.transition = `none`;

    });

   })(); 
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 