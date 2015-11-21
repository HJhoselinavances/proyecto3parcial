function contador (cadena , letra){
	var cont=0;
	var i=0;
	var letra="o";
	while(i<=cadena.length) {	
		if(cadena[i]==='o'){
		cont++;
		}
	i++;
	}
	return cont;
	}
	var Frase="hola mundo";
	console.log("cantidad de letras a es:"+contador(Frase,letra));
	
