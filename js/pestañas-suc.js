function selecp(sel, desel, nro) {
	
	
	if (desel == 'pes') {
		
		p1 = document.getElementById('pes1');
		p2 = document.getElementById('pes2');
		p3 = document.getElementById('pes3');
		
		p1.className -= 'active';
		p2.className -= 'active';
		p3.className -= 'active';
		
	}
	
	if (desel == 'suc') {
		
		s1 = document.getElementById('suc1');
		s2 = document.getElementById('suc2');
		s3 = document.getElementById('suc3');
		s4 = document.getElementById('suc4');
		s5 = document.getElementById('suc5');
		s6 = document.getElementById('suc6');
		
		s1.className = 'list-group-item';
		s2.className = 'list-group-item';
		s3.className = 'list-group-item';
		s4.className = 'list-group-item';
		s5.className = 'list-group-item';
		s6.className = 'list-group-item';
		
		switch(nro) {
			
    case '1':
        map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.581248939097!2d-58.98139068534388!3d-27.45115822248597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0b9b37e5d%3A0xcdb4d78281f5403c!2sCalle+French+414%2C+3500AHQ+Resistencia%2C+Chaco!5e0!3m2!1ses-419!2sar!4v1465949591841" width="400" height="259" frameborder="0" style="border:0" allowfullscreen></iframe>';		
        break;
		
    case '2':
        map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.3940440364972!2d-59.01079428534371!3d-27.45698932273507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c8173794703%3A0x3a26aed4d975f3aa!2sAv.+Marconi+875%2C+Resistencia%2C+Chaco!5e0!3m2!1ses-419!2sar!4v1465950072269" width="400" height="259" frameborder="0" style="border:0" allowfullscreen></iframe>';
        break;
		
    case '3':
        map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1478586244234!2d-58.97522808534346!3d-27.46465582306302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450ce75125a563%3A0x222dc47daddf43e9!2sAv.+Chaco+98%2C+H3504FNN+Resistencia%2C+Chaco!5e0!3m2!1ses-419!2sar!4v1465951386595" width="400" height="259" frameborder="0" style="border:0" allowfullscreen></iframe>';
        break;
		
	case '4':
        map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.641262075037!2d-58.804992785343025!3d-27.480425623737467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b0c7ea94a79%3A0xcdf83bf88bbb61c7!2sAv.+Independencia+4051%2C+Corrientes!5e0!3m2!1ses-419!2sar!4v1465952230698" width="400" height="259" frameborder="0" style="border:0" allowfullscreen></iframe>';
        break;
		
	case '5':
        map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.5761584498973!2d-58.83298608534309!3d-27.48245162382418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456c9d33bf59b7%3A0x641da4efc70b6544!2sAv.+Domingo+Sarmiento+2100%2C+Corrientes!5e0!3m2!1ses-419!2sar!4v1465951824468" width="400" height="259" frameborder="0" style="border:0" allowfullscreen></iframe>';
        break;
		
	case '6':
        map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.0764942711053!2d-58.793100785343455!3d-27.46687782315805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b1964a90fa3%3A0x7c2dffcb0f12c808!2sAv.+Armenia+5237%2C+Corrientes!5e0!3m2!1ses-419!2sar!4v1465952330174" width="400" height="259" frameborder="0" style="border:0" allowfullscreen></iframe>';
        break;
}
		
		document.getElementById('cont-mapa').innerHTML = map;
		
	}
	
		
	
	sel.className += ' active';	
	
	
}