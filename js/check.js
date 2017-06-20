function compd(){
	
	v1 = document.getElementById("r1").value;
	v2 = document.getElementById("r2").value;
	arrfecha = v1.split("-");
	ano = parseInt(arrfecha[0]);
	mes = parseInt(arrfecha[1]);
	dia = parseInt(arrfecha[2]);
	
	if (v1 == null || v1.length == 0 || /^\s+$/.test(v2)) {
    // Si no se cumple la condicion...
//cambiar color
	alert('[ERROR] Debe ingresar la fecha.');
	return false;
  }
	
		if (v2 == null || v2.length == 0 || /^\s+$/.test(v2)) {
    // Si no se cumple la condicion...
//cambiar color
	alert('[ERROR] Debe ingresar la hora.');
	return false;
  }
  

  
  if ( dia == '1' ){
	document.getElementById('i1').innerHTML = '<img src=\'img/Red-Cross-Mark-High-Quality-PNG.png\' class="icon-calendar iconch"/><span class=\'checknd\'>Ocupado!</span>';  
	return false;  
  }
  
	document.getElementById('i1').innerHTML = '<img src=\'img/check-mark-hi.png\' class="icon-calendar iconch"/><span class=\'checkd\'>Disponible!</span>';
	document.getElementById("r3").value = v1;
	document.getElementById("r4").value = v2;
	return false;
  

}

function resert(){
	alert('Se ha reservado su turno con éxito. Lo esperamos!');
	return true;
}