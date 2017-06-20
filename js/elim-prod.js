function borrar(prod){
	prod.style.display = 'none';
	document.getElementById('last').value = parseInt(document.getElementById('last').value) - 1;
}