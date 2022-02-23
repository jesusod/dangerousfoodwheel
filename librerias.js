var nombres = new Array("Ana","Luis","Elena","Pedro", "Antonio", "Vanessa", "Jaime", "Sofía", "Alberto", "Carmen", "José","Olivia","Oliver");

function generarNombres() {
	var lista = document.getElementById("lista");  // Pilla objeto con id
	lista.innerHTML = "";
	
	/*for (i =0; i<12; i++) {
		
	}*/
	var aleatorio = (Math.random()*12).toFixed(0);
	
		lista.innerHTML += nombres[aleatorio] + "<br>";
}