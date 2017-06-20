function setOp(obj, value) { 
    obj.style.opacity = value/100; 
    obj.style.MozOpacity = value/100; 
    obj.style.KhtmlOpacity = value/100; 
    obj.style.filter = 'alpha(opacity=' + value+ ')';
    obj.style.zoom=1;//necesario para Explorer 
}  
}  
function efecto(o, o2){ 
    for (var c=0 ; c < 100; c++)  
        (function(c){ 
             setTimeout(function(){setOp(o,c);} , 10*c); 
        })(c); 
}  
