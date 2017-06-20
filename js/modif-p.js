function modp2(fila) {
	
	v1 = document.getElementById('f' + fila + 'c1').innerHTML;
	v2 = document.getElementById('f' + fila + 'c2').innerHTML;
	v3 = document.getElementById('f' + fila + 'c3').innerHTML;
    v4 = document.getElementById('f' + fila + 'c4').innerHTML;
	
	document.getElementById('f' + fila + 'c1').innerHTML = '<input type="text" id="vf' + fila + 'c1" value="' + v1 + '"/>';
	document.getElementById('f' + fila + 'c2').innerHTML = '<input type="text" id="vf' + fila + 'c2" value="' + v2 + '"/>';
	document.getElementById('f' + fila + 'c3').innerHTML = '<input type="text" id="vf' + fila + 'c3" value="' + v3 + '"/>';
    document.getElementById('f' + fila + 'c4').innerHTML = '<input type="text" id="vf' + fila + 'c4" value="' + v4 + '"/>';
	document.getElementById('M' + fila).innerHTML = '<input type="button" class="btn btn-primary" value="Aceptar" onclick="yata(' + fila + ')">';
	
}