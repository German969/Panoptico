function yata(fila) {
	
	v1 = document.getElementById('vf' + fila + 'c2').value;
	v2 = document.getElementById('vf' + fila + 'c3').value;
	
	document.getElementById('f' + fila + 'c2').innerHTML = v1;
	document.getElementById('f' + fila + 'c3').innerHTML = v2;

	document.getElementById('M' + fila).innerHTML = '<input type="button" class="btn btn-primary" value="Modificar" onclick="modp(' + fila + ')">';
	
}