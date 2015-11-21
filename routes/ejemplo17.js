function contador (cadena){
	var cont=0;
	var i=0;
	while(i<=cadena.length) {	
		if(cadena[i]=='a'){
		cont++;
		}
	i++;
	}
	return cont;
	}
	var Frase="hola mama";
	console.log("cantidad de letras a es:"+contador(Frase));


