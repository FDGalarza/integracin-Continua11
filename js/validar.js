
  
    function cargarMotosTaller(idalumno){

		console.log(idalumno);
		var docIdentidad = idalumno;
		var tabla = $('#contenedorTabla');
		console.log("bien");
		var url = "Procedimientos\AccionBuscaVehiTaller.php";
			$.ajax({
				//se determina el metodo por el cual se enviaran los datos
				type:"post",
				url:url,
				//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
				data:{documento:docIdentidad},
				//se ejecuta la fucnion que mostrara los datos
				success:function(datos){
					console.log("18");
					console.log(datos);
					console.log("20");
					document.getElementById("txtIdAlumno").value = "";
					tabla.html(datos);
				}
							
			})
	}
