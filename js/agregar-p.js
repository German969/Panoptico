function agregar() {
	tt = parseInt(document.getElementById('tot').value) + 1;
	nro = parseInt(document.getElementById('last').value) + 1;
	listp = document.getElementById('listadop').innerHTML
	+ '<tr id="p' + tt + '"><th id="f' + tt 
	+ 'c1" scope="row">' + tt 
	+ '</th><td id="f' + tt 
	+ 'c2">?</td><td id="f' + tt 
	+ 'c3">?</td><td id="f' + tt 
	+ 'c4">?</td><td id="f' + tt 
	+ 'c5">?</td><td><input type="button" class="btn btn-primary" value="Eliminar" onclick="borrar(document.getElementById(\'p' + tt 
	+ '\'))"></td><td id="M' + tt + '"><input type="button" class="btn btn-primary" value="Modificar" onclick="modp(' + tt + ')"></td></tr>';
	
	document.getElementById('listadop').innerHTML = listp;
	document.getElementById('last').value = nro;
	document.getElementById('tot').value  = tt;
	
}