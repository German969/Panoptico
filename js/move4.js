function transicion(curva,ms,callback){ 
    this.ant=0.01; 
    this.done_=false; 
    var _this=this; 
    this.start=new Date().getTime(); 
    this.init=function(){ 
        setTimeout(function(){ 
                if(!_this.next()){ 
                    callback(1); 
                    _this.done_=true; 
                    window.globalIntervalo=0; 
                    return; 
                } 
                callback(_this.next()); 
                _this.init(); 
            },13); 
    } 
    this.next=function(){ 
        var now=new Date().getTime(); 
        if((now-this.start)>ms) 
            return false; 
        return this.ant=curva((now-this.start+.001)/ms,this.ant); 
    } 
} 
function desacelerado(p,ant){ 
    var maxValue=1, minValue=.001, totalP=1, k=.25; 
    var delta = maxValue - minValue;  
    var stepp = minValue+(Math.pow(((1 / totalP) * p), k) * delta);  
    return stepp;  
} 
function mover(o, o2, ini){ 
    var inicio=0,fin=100; 
    var t=new transicion(desacelerado,500,function(p){ 
        o.style.left=(ini-(inicio+((fin-inicio)*p)))+'px'; 
    }); 
    t.init(); 
    t=null; 
	 for (var c=0 ; c < 100; c++)  
        (function(c){ 
             setTimeout(function(){setOp(o2,c);} , 10*c); 
        })(c); 
} 


function setOp(obj, value) { 
    obj.style.opacity = value/100; 
    obj.style.MozOpacity = value/100; 
    obj.style.KhtmlOpacity = value/100; 
    obj.style.filter = 'alpha(opacity=' + value+ ')';
    obj.style.zoom=1;//necesario para Explorer 
}  

