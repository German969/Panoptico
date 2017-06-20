function validar () {
camposTexto = document.getElementById("formulario").elements;
if (camposTexto[x].value == '' 
&& camposTexto[x].type=='text'){
  alert("El campo " + camposTexto[x].id + " está vacio y es OBLIGATORIO");
  return false;
}    
}
