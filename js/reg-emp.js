function registrare() {
	
	v1 = document.getElementById("i1").value;
	v2 = document.getElementById("i2").value;
	v3 = document.getElementById("i3").value;
	v4 = document.getElementById("i4").value;
	v5 = document.getElementById("i5").value;
	v6 = document.getElementById("i6").value;
	v7 = document.getElementById("i7").value;
	v8 = document.getElementById("i8").value;
	v9 = document.getElementById("i9").value;
	v10 = document.getElementById("i10").value;
	v12 = document.getElementById("i12").value;
	v13 = document.getElementById("i13").value;
	v14 = document.getElementById("i14").value;
	b = true;
	c = true;
	
	if (v1 == null || v1.length == 0 || /^\s+$/.test(v1)) {
	document.getElementById("i1").className += " placeh-rojo";
	b = false;
  }
  
  	if (v2 == null || v2.length == 0 || /^\s+$/.test(v2)) {
	document.getElementById("i2").className += " placeh-rojo";
	b = false;
  } else
	  
    if( !(/^\d{2}-\d{8}-\d{1}$/.test(v2)) ) {
	document.getElementById("i2").style.color = 'red';  
	alert('[ERROR] Debe introducir un numero de cuit valido incluyendo los guiones (00-00000000-00)');
	c = false;
}
  
  	if (v3 == null || v3.length == 0 || /^\s+$/.test(v3)) {
	document.getElementById("i3").className += " placeh-rojo";
	b = false;
  } else
	  
    if( !(/^\d{9}$/.test(v3)) ) {
	document.getElementById("i3").style.color = 'red';  
	alert('[ERROR] Debe introducir un numero de telefono válido (9 cifras seguidas)');
	c = false;
}

	if (v4 == null || v4.length == 0 || /^\s+$/.test(v4)) {
	document.getElementById("i4").className += " placeh-rojo";
	b = false;
  }
  
  	if (v5 == null || v5.length == 0 || /^\s+$/.test(v5)) {
	document.getElementById("i5").className += " placeh-rojo";
	b = false;
  }
  
  	if (v6 == null || v6.length == 0 || /^\s+$/.test(v6)) {
	document.getElementById("i6").className += " placeh-rojo";
	b = false;
  } else
	  
    if ( v5 != v6 ) {
	  document.getElementById("i5").style.color = 'rojo';
	  document.getElementById("i6").style.color = 'rojo';
	  alert('[ERROR] Las contraseñas no coinciden');
	  c = false;
  }
  
  	if (v7 == null || v7.length == 0 || /^\s+$/.test(v7)) {
	document.getElementById("i7").className += " placeh-rojo";
	b = false;
  }
  
  	if (v8 == null || v8.length == 0 || /^\s+$/.test(v8)) {
	document.getElementById("i8").className += " placeh-rojo";
	b = false;
  }
  
  	if (v9 == null || v9.length == 0 || /^\s+$/.test(v9)) {
	document.getElementById("i9").className += " placeh-rojo";
	b = false;
  } else
  
  if( !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v9)) ) {
	 document.getElementById("i9").style.color = 'red';
	 alert('[ERROR] Debe introducir un email válido');
	 c = false;
  }
  
  	if (v10 == null || v10.length == 0 || /^\s+$/.test(v10)) {
	document.getElementById("i10").className += " placeh-rojo";
	b = false;
  } else
  
  if( !(/^\d{9}$/.test(v10)) ) {
	document.getElementById("i10").style.color = 'red';  
	alert('[ERROR] Debe introducir un numero de telefono válido (9 cifras seguidas)');
	c = false;
}

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
  
  
  	alert('Se ha registrado con éxito.');
	window.location = 'alta-establecimiento-confirmada.html';
	return false;
  
}