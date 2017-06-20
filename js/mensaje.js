$(document).ready(function() {
	$('#send').click(function(e) {
		e.preventDefault
		ayn=(document.getElementById('name')).value
		mail=(document.getElementById('email')).value
		msj=(document.getElementById('messaje')).value
		cond1= (ayn == null || ayn.length == 0 || /^\s+$/.test(ayn))
		cond2= (mail == null || mail.length == 0 || /^\s+$/.test(mail))
		cond3= (msj == null || msj.length == 0 || /^\s+$/.test(msj))
		cond4= cond1&&cond2&&cond3
		if (cond4) {
			window.location = 'contacto-err.html'
		} else{
			window.location = 'contacto2.html'
		};
	})
})
comparar = function(element, index, array) {
	return (element==user);
}
asignar = function(index, element){
	element.class = 'error'
}