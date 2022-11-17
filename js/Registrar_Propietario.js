function validarCamposPropietario(documento, nom, ape1, telefono){
	mensaje = "";
	if(documento == ""){
		mensaje += " - No ha ingresado informacion en el campo documento\n";
		document.getElementById("docPropietarios").style.borderColor = "red";
	}
	if(nom == ""){
		mensaje += " - No ha ingresado el nombre del propietario\n";
		document.getElementById("nombrePropietario").style.borderColor = "red";
	}
	if(ape1 == ""){
		mensaje += " - El campo primer apellido es un campo obligatorio\n";
		document.getElementById("apellido1").style.borderColor = "red";
	}
	if(telefono == ""){
		mensaje += " - No ha ingresado un telefono de contacto\n";
		document.getElementById("TelPropietario").style.borderColor = "red";
	}
	return mensaje;
	
}
//funcion ajax para realizar la insersión en la tabla
function insertarDatosPropietario(){
	var mensaje = "";
	//capturamos los valores de los imput que se van a insertar
	var documento = document.getElementById("docPropietarios").value;
	var nom = document.getElementById("nombrePropietario").value;
	var ape1 = document.getElementById("apellido1").value;
	var ape2 = document.getElementById("apellido2").value;
	var direccion = document.getElementById("DirPropietario").value;
	var telefono = document.getElementById("TelPropietario").value;
	var Referido = document.getElementById("referencia").value;
	
	//se validan campos obligatorios
	mensaje = validarCamposPropietario(documento, nom, ape1, telefono);
	if(mensaje == ""){
		//se hace referencia a la u url que se realizara el insert
		var url = "Procedimientos/AccioninsertarPropietario.php";
		//usamos ajax
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{docPropietarios:documento, nombrePropietario:nom, apellido1:ape1, apellido2:ape2, DirPropietario:direccion, TelPropietario:telefono, referencia:Referido},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				
				if(datos == "3"){
					alert("Los datos fueron guardados con exito");
						$("#docPropietarios").val("");
						$("#nombrePropietario").val("");
						$("#apellido1").val("");
						$("#apellido2").val("");
						$("#DirPropietario").val("");
						$("#TelPropietario").val("");
						$("#referencia").val("");
						document.getElementById("limpiar").disabled = true;
						document.getElementById("registrar").disabled = true;
						
				}else{
					if(datos == "2"){
						alert(datos);
						alert("Se presento un inconveniente en la insercion de los datos");
					}
				}
			}
			
		})
	}else{
		alert("Se han presentado los siguientes problemas\n\n"+mensaje);
	}
	
}
//fucnión para cancelar la creacion de un registro
function cancelarEGISTRO(){
	loadModule('#content','home.php');
	
}
//CON ESTA FUNSIO SE VALIDA QUE NO SE PERMITAN NUMEROS, NI ESPACIOS, NI CARACTERES ESPECIALES EN UN CAMPO DE TEXTO
function validarletras(input){
//VERIFICO QUE SOLO SE PRESIONEN LETRAS O TECLAS DE CONTRO
  if(((event.keyCode < 8) && (event.keyCode >18)) || ((event.keyCode > 47) && (event.keyCode <58)))
  {
	alert("Solo se permiten letras en este campo");
	input.value = "";
    input.focus();
	event.returnValue = true;
  }
//VERIFICO QUE NO SE INSERTEN ESPACIO O CARACTERES ESPECIALES
  if((event.keyCode == 32) || (event.keyCode > 192) || event.keyCode > 194)
  {
    alert("No se permite poner espacios ni caracteres especiales en este campo");
	input.value = "";
    input.focus();
	event.returnValue = false;	
  }
}
function validaNumero(input)
{
//TOMO EL VALOR DEL CAMPO ENVIADO EN EL EVENTO 
  var num = input.value;
  if(isNaN(num))
  {
   /*  alert("Solo se permiten números en este campo"); */
    input.value = "";
    input.focus();
  }else{
	
  }
}
//CON ESTA FUNCION SE VALIDA QUE NO EXISTA UN PROPIETARIO CON EL MISMO NUMERO DE DOCUMENTO
function validarRegistroPropietario(input){
	var url = "Procedimientos/AccionValidarPropietario.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{docPropietarios:input.value},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				if(datos == "1"){
					document.getElementById("limpiar").disabled = false;
					document.getElementById("registrar").disabled = false;
					document.getElementById("limpiar").disabled = false;
					
				}else{
					alert("ya existe un regsitro con el mismo numero de documento");
					array = datos.split(',');
					var documento = document.getElementById("docPropietarios").value = array[1];
					document.getElementById("nombrePropietario").value = array[2];
					document.getElementById("apellido1").value = array[3];
					document.getElementById("apellido2").value  = array[4];
					document.getElementById("DirPropietario").value  = array[5];
					document.getElementById("TelPropietario").value = array[6];
					 document.getElementById("referencia").value = array[7];
					 document.getElementById("limpiar").disabled = false;
					document.getElementById("registrar").disabled = false;
					document.getElementById("registrar").value = "Editar";
					document.getElementById("limpiar").disabled = false;
					
					input.focus();
					
				}
				
			}	
		})
}
function editarDatosPropietario(){
	var documento = document.getElementById("docPropietarios").value;
	var nom = document.getElementById("nombrePropietario").value;
	var ape1 = document.getElementById("apellido1").value;
	var ape2 = document.getElementById("apellido2").value;
	var direccion = document.getElementById("DirPropietario").value;
	var telefono = document.getElementById("TelPropietario").value;
	var Referido = document.getElementById("referencia").value;
	
	//se validan campos obligatorios
	mensaje = validarCamposPropietario(documento, nom, ape1, telefono);
	if(mensaje == ""){
		//se hace referencia a la u url que se realizara el insert
		var url = "Procedimientos/AccionEditarPropietario.php";
		//usamos ajax
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{docPropietarios:documento, nombrePropietario:nom, apellido1:ape1, apellido2:ape2, DirPropietario:direccion, TelPropietario:telefono, referencia:Referido},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				
				if(datos == "3"){
					alert("Se Editaron los datos con exito");
						$("#docPropietarios").val("");
						$("#nombrePropietario").val("");
						$("#apellido1").val("");
						$("#apellido2").val("");
						$("#DirPropietario").val("");
						$("#TelPropietario").val("");
						$("#referencia").val("");
						document.getElementById("limpiar").disabled = true;
						document.getElementById("registrar").disabled = true;
					
						
				}else{
					if(datos == "2"){
						alert(datos);
						alert("Se presento un inconveniente en la insercion de los datos");
					}
				}
			}
			
		})
	}else{
		alert("Se han presentado los siguientes problemas\n\n"+mensaje);
	}
}
function limpiarregistropropietarios(){
	var documento = $('#docPropietarios');
	var nombre1 = $('#nombrePropietario');
	var apellido1 = $('#apellido1');
	var apellido2 = $('#apellido2');
	var dir = $('#DirPropietario');
	var tel = $('#TelPropietario');
	var ref = $('#referencia');
	var mostrar = $('#label');
		documento.val("");
		nombre1.val("");
		apellido1.val("");
		apellido2.val("");
		dir.val("");
		tel.val("");
		ref.val("");
		documento.focus();
		$('#registrar').attr("disabled", true);
		$('#limpiar').attr("disabled", true);
		$('#cancelar').attr("disabled", false);
		document.getElementById("registrar").value = "Registrar"
		
}
//fucnión que validara si se insertara un nuevo registro o se editara uno existente
function validarAccionPropietario(){
	alert(document.getElementById("registrar").value);
	if(document.getElementById("registrar").value == "Registrar"){
		insertarDatosPropietario();
	}else{
		editarDatosPropietario();
	}
	limpiarregistropropietarios();
}
//FUNCION QUE LLENA EL CAMPO MARCA DE LA VISTA REGISTRAR MOTO
function insertarDatosVehiculos(){
	var mensaje = "";
	//capturamos los valores de los imput que se van a insertar
	var placa_moto = document.getElementById("placaVei").value;
	var marca_vehiculo = document.getElementById("vehiculoMarca").value;
	var tipo_hiculo_ = document.getElementById("TipoVeh").value;
	var modelo_vehiculo = document.getElementById("ModeloVeh").value;
	var estado_vehiculo = document.getElementById("EstadoVei").value;
	
	var url = "Procedimientos/AccionRegistrarVehiculo.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{placaVei:placa_moto, vehiculoMarca:marca_vehiculo, TipoVeh:tipo_hiculo_, ModeloVeh:modelo_vehiculo, EstadoVei:estado_vehiculo},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				if(datos == "3"){
					alert("Los datos fueron guardados con exito");
						
						
				}else{
					if(datos == "2"){
						alert(datos);
						alert("Se presento un inconveniente en la insercion de los datos");
					}
				}
				
			}	
		})
}