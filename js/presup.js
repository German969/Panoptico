function presup() {
	v12 = document.getElementById("i12").value;
	v13 = document.getElementById("i13").value;
	v14 = document.getElementById("i14").value;
	b = true;
	c = true;
	
	indice = document.getElementById("i11").selectedIndex;
if( indice == null || indice == 0 ) {
	document.getElementById("i11o").style.color = 'red';
	alert('[ERROR] Seleccione su tipo de vehiculo');
	c = false;
}

	if (v12 == null || v12.length == 0) {
	document.getElementById("i12").className += " placeh-rojo";
	b = false;
  }
  
    indice2 = document.getElementById("i13").selectedIndex;
if( indice2 == null || indice2 == 0 ) {
	document.getElementById("i13o").style.color = 'red';
	alert('[ERROR] Seleccione su frecuencia de lavado');
	c = false;
}

indice3 = document.getElementById("i14").selectedIndex;
if( indice3 == null || indice3 == 0 ) {
	document.getElementById("i14o").style.color = 'red';
	alert('[ERROR] Seleccione su tipo de lavado');
	c = false;
}
   
  if ( !b ) {
	  
	  alert('[ERROR] Debe rellenar todos los campos');
	  return false;
	  
  }
  
  if ( !c ) {
	  return false;
  }
  
	window.location = 'presup-confirm.html';
	return false;
  
}