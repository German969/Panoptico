function validacion() {
  valor = document.getElementById("nombrecito").value;
  valor2 = document.getElementById("emailcito").value;
  valor3 = document.getElementById("textito").value;
  letra1 = document.getElementById("letra1");
  letra2 = document.getElementById("letra2");
  letra3 = document.getElementById("letra3");
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    // Si no se cumple la condicion...
	letra1.style.color='#FF0000';
	letra2.style.color='#727272';
	letra3.style.color='#727272';
	alert('[ERROR] El campo "nombre" no debe estar vacio');
    return false;
  }
  
  else if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
    // Si no se cumple la condicion...
	letra2.style.color='#FF0000';
	letra1.style.color='#727272';
	letra3.style.color='#727272';
	alert('[ERROR] El campo "email" no debe estar vacio');
    return false;
  }
  
  else if( !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor2)) ) {
	letra2.style.color='#FF0000';
	letra1.style.color='#727272';
	letra3.style.color='#727272';
	alert('[ERROR] Debe introducir un email válido');
  return false;
  
  }
  
   else if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3)) {
    // Si no se cumple la condicion...
	letra3.style.color='#FF0000';
	letra1.style.color='#727272';
	letra2.style.color='#727272';
	alert('[ERROR] El mensaje no debe estar vacio');
    return false; 
   } 
   
	alert('Su mensaje ha sido enviado con éxito.');
    return true;
  
}