function chatear(){							

var date = new Date();
var h  = date.getHours();
var d  = date.getDate();
var day = (d < 10) ? '0' + d : d;
var mo = date.getMonth() + 1;
var month = (mo < 10) ? '0' + mo : mo;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var hou = (h < 10) ? '0' + h : h;
var m = date.getMinutes();
var min = (m < 10) ? '0' + m : m;						
							
texto = document.getElementById('rellenando').innerHTML 
+ '<div class="span12"><span class="chat2 borderb bordert padt10 padb10">'
+ document.getElementById('mimsjcito').value 
+'<br/><span class="fechita2">' + day + "/" + month + "/" + year + ",  " + hou + ":" + min + '</span></span></div>';

document.getElementById('rellenando').innerHTML = texto;
document.getElementById('mimsjcito').value = '';

return false;
}
