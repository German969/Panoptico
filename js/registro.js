function registrar() {
	
	v1 = document.getElementById("r1").value;
	v1c = document.getElementById("r1");
	v2 = document.getElementById("r2").value;
	v2c = document.getElementById("r2");
	v3 = document.getElementById("r3").value;
	v4 = document.getElementById("r4").value;
	v5 = document.getElementById("r5").value;
	v6 = document.getElementById("r6").value;
	v7 = document.getElementById("r7").value;
	v8 = document.getElementById("r8").value;
	v9 = document.getElementById("cond");
	
	if (v1 == null || v1.length == 0 || /^\s+$/.test(v1)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r1").className += " placeh-rojo";
	alert('[ERROR] El campo "nombre" no debe estar vacio');
    return false;
  }

	if (v2 == null || v2.length == 0 || /^\s+$/.test(v2)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r2").className += " placeh-rojo";
	alert('[ERROR] El campo "nombre de usuario" no debe estar vacio');

    return false;
  }
  
  	if (v3 == null || v3.length == 0 || /^\s+$/.test(v3)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r3").className += " placeh-rojo";
	alert('[ERROR] El campo "contraseña" no debe estar vacio');
    return false;
  }
  
  	if (v4 == null || v4.length == 0 || /^\s+$/.test(v4)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r4").className += " placeh-rojo";
	alert('[ERROR] El campo "repetir contraseña" no debe estar vacio');
    return false;
  }
  
  if ( v3 != v4 ) {
	  document.getElementById("r3").className += " placeh-rojo";
	  document.getElementById("r4").className += " placeh-rojo";
	  alert('[ERROR] Las contraseñas no coinciden');
	  return false;
  }
  
  	if (v5 == null || v5.length == 0 || /^\s+$/.test(v5)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r5").className += " placeh-rojo";
	alert('[ERROR] El campo "fecha de nacimiento" no debe estar vacio');
    return false;
  }
  
  	if (v6 == null || v6.length == 0 || /^\s+$/.test(v6)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r6").className += " placeh-rojo";
	alert('[ERROR] El campo "direccion" no debe estar vacio');
    return false;
  }
  
  	if (v7 == null || v7.length == 0 || /^\s+$/.test(v7)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r7").className += " placeh-rojo";
	alert('[ERROR] El campo "email" no debe estar vacio');
    return false;
  }
  
  	if (v8 == null || v8.length == 0 || /^\s+$/.test(v8)) {
    // Si no se cumple la condicion...
//cambiar color
	document.getElementById("r8").className += " placeh-rojo";
	alert('[ERROR] El campo "telefono" no debe estar vacio');
    return false;
  }
  
  	if ( !v9.checked ) {
    // Si no se cumple la condicion...
//cambiar color
	alert('[ERROR] Debe aceptar los términos y condiciones para poder registrarse');
    return false;
  }
  
  	alert('Se ha registrado con éxito.');
	window.location = 'alta-usuario-confirmada.html';
	return false;
  
}