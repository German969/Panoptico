function enter() {

	user=(document.getElementById('input1')).value
	pass=(document.getElementById('input2')).value
	pages= ['admin','ese','cliente','empresa']
	cond1=pages.some(comparar)
	cond2=pages.some(comparar)
	cond3= user == pass
	cond4= cond1&&cond2&&cond3
	if (cond4) {
			window.location = 'index-' + user + '.html'
		} else{
			window.location = 'session-error.html'
		};


}

comparar = function(element, index, array) {
	return (element==user);
}
asignar = function(index, element){
	element.class = 'error'
}

//Esta línea llama a la funcion InicializarEventos
addEvent(window,'load',inicializarEventos,false);


function inicializarEventos()
{
// Aquie obtienes mediante DOM el control a traves de ID 
  var ob1=document.getElementById('input2');

// Se le agrega al objeto el evento (keypress), y la funcion que se va a ejecutar al presionar cualquie tecla...('presionar')
  addEvent(ob1,'keypress',presionar,false);
}


function presionar(e)
	{
	//Esta parrte es para IE
	if (window.event)
	  {
	           if (window.event.keyCode==13)
		{enter()}// Aqui escribe el nombre tu funcion que hace la busqueda...
	  }
	  else
                    //Esto es para Firefox y creo otros navegadores
		if (e)
		{
		  if(e.which==13)
		  	{enter()}//Igual que arriba
		}
	}
	

//Lo que hace la funcion addEvent es agregar la funcion para IE u otros navegadores, en IE es attachEvent y en los otros navegadores es addEventListener, fijense como se antepone el "on" para hacer referencia al evento para IE mientras que en los otros navegadores no es necesario...

function addEvent(elemento,nomevento,funcion,captura)
{
  if (elemento.attachEvent)
  {
    elemento.attachEvent('on'+nomevento,funcion);
    return true;
  }
  else  
    if (elemento.addEventListener)
    {
      elemento.addEventListener(nomevento,funcion,captura);
      return true;
    }
    else
      return false;
}