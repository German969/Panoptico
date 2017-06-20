$(document).ready(function() {
	$('#send').click(function(e) {
		e.preventDefault
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
	})
})
comparar = function(element, index, array) {
	return (element==user);
}
asignar = function(index, element){
	element.class = 'error'
}

