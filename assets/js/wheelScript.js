/*Creo el array con los nombres que quiera*/
let nombres = new Array("Jesus","Martí","Carolina","Abel", "Dawid");

/*Creamos la variable lista seleccionable y le damos el valor del array tb. Slide devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
 El array original no se modificará.*/
let listaSelecionable = nombres.slice();

function actualizaNombresSelecionables() {
	let lista = document.getElementById("lista"); 
	lista.innerHTML = "";
	for (i =0; i<listaSelecionable.length; i++) {
		lista.innerHTML += listaSelecionable[i]+"<br>";
	}
}
function elegirJugador () {
	if (listaSelecionable.length>0) {

		/* Fase 1: Elige posicion aleatoria en una lista seleccionable*/ 
		var aleatorio = (Math.random()*(listaSelecionable.length-1)).toFixed(0);

		/* Fase 2: Copia seleccionado a la derecha */
		var jugadores = document.getElementById("jugadores"); 	
		jugadores.innerHTML += listaSelecionable[aleatorio]+"<br>";

		/* Fase 3: Eliminar seleccionado de listaSeleccionable */ 
		listaSelecionable.splice(aleatorio,1);

		/* Fase 4: Actualizar lista a partir de listaSeleccionable */ 
		actualizaNombresSelecionables();
	}
	else
		alert("La lista de nombres seleccionables está vacía, hay que resetear el juego");
}
function reset() {
	
	listaSelecionable = nombres.slice();  // copia nombres en listaSelecionable	
	//var jugadores = document.getElementById("jugadores");//
	jugadores.innerHTML = "";  //Vacía la caja de jugadores//
	actualizaNombresSelecionables(); // Actualiza la lista de nombres seleccionables	
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

    wheel.addEventListener(`transitionend`, () => {
        startButton.style.pointerEvents = `auto`;
        wheel.style.transition = `none`;
		const actualDeg = deg % 360;
		wheel.style.transform = `rotate(${actualDeg}deg)`;


    });

   })(); 
let x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 