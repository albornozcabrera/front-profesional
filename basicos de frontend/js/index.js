(function(){

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoords, errorFound);
	} else {
		alert("Actualiza tu navegador");
	}

	function errorFound(error){
		alert("Un error ocurrio: "+ error.code);
		//0: error desconocido
		//1: permiso denegado
		//2: posicion no está disponible
		//3: timeout
	};
	
	function getCoords(position){
		var lat=position.coords.latitude;
		var lon=position.coords.longitude;
		console.log("Tu posicion es: "+ lat + "," + lon);
	}

})();