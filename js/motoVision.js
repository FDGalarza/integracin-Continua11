$(document).ready(function(){

	cargarMotosTaller();
});

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
						$("#docPropietarios").val("");
						$("#nombrePropietario").val("");
						$("#apellido1").val("");
						$("#apellido2").val("");
						$("#DirPropietario").val("");
						$("#TelPropietario").val("");
						$("#referencia").val("");
						document.getElementById("limpiar").disabled = true;
						document.getElementById("registrar").disabled = true;
						var msj = " - Se registro el propietario\n\n";
						registrarBitacoraRegistro(1, 1, "usuario","", "REGISTRADO", documento, msj);
						
				}else{
					if(datos == "2"){
						
						alert("Se presento un inconveniente en la insercion de los datos");
					}else{
						if(datos == "4");
						alert("No fue posible insertar en la bitacora");
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
	
	var url = "Procedimientos/AccionValidarRegistro.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{registro:input.value, control:1},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				if(datos == "1"){
					document.getElementById("limpiar").disabled = false;
					document.getElementById("registrar").disabled = false;
					document.getElementById("limpiar").disabled = false;
					noespacios(input);
					
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
					 document.getElementById("docPropietarios").disabled = true;
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
	var msj = "";
    var control;
	//se validan campos obligatorios
	mensaje = validarCamposPropietario(documento, nom, ape1, telefono);
	var msj = " ";
	var mostrarmenaje = "";
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
					
					array = datos.split(',');
					alert(array[0]+ " nada");
					if(array[0] == "0"){
						
						alert(" - No realizo ningun cambio");
								$("#docPropietarios").val(documento);
								$("#nombrePropietario").val(nom);
								$("#apellido1").val(ape1);
								$("#apellido2").val(ape2);
								$("#DirPropietario").val(direccion);
								$("#TelPropietario").val(telefono);
								$("#referencia").val(Referido);
								document.getElementById("limpiar").disabled = false;
								document.getElementById("registrar").disabled = false;
								document.getElementById("registrar").value = "Editar";
							
					}else{
						
							
							$("#docPropietarios").val("");
							$("#nombrePropietario").val("");
							$("#apellido1").val("");
							$("#apellido2").val("");
							$("#DirPropietario").val("");
							$("#TelPropietario").val("");
							$("#referencia").val("");
							document.getElementById("limpiar").disabled = true;
							document.getElementById("registrar").disabled = true;
						if(array[1] != ""){
							
							registrarBitacoraEditar(1, 5, "usuario",array[1], nom, documento);
							mostrarmenaje += " - Se edito el nombre del propietario\n";
						}
						if(array[2] != ""){
							
							 registrarBitacoraEditar(1, 5, "usuario",array[2], ape1, documento);
							mostrarmenaje += " - Se edito el primer apellido del propietario\n";
						}
						if(array[3] != ""){
							
							 registrarBitacoraEditar(1, 5, "usuario",array[3], ape2, documento);
							mostrarmenaje += " - Se edito el segundo apellido del propietario\n";
						}
						if(array[4] != ""){
							registrarBitacoraEditar(1, 5, "usuario",array[4], telefono, documento);
							mostrarmenaje += " - Se edito el telefono del propietario\n";
						}
						if(array[5] != ""){
							registrarBitacoraEditar(1, 5, "usuario",array[5], direccion, documento);
							mostrarmenaje += " - Se edito el la direccion del propietario\n";
						}
						if(array[6] != ""){
							registrarBitacoraEditar(1, 5, "usuario",array[6], Referido, documento);
							mostrarmenaje += " - Se edito el la refernecia del propietario\n";
						}
						if(mostrarmenaje != ""){
							alert(" - EXITO - \n"+mostrarmenaje);
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
		document.getElementById("docPropietarios").disabled = false;
		
}
//fucnión que validara si se insertara un nuevo registro o se editara uno existente
function validarAccionPropietario(){
	
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
	mensaje = vlaidarCaposRegMoto();
	if(mensaje == ""){
		var msj = "";
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
						
						msj = " - Se realizo el registro del vehiculo\n\n";
						limpiarCamposRegMoto();
						registrarBitacoraRegistro(2, 2, "usuario","", "REGISTRADO", placa_moto, msj);
							
					}else{
						if(datos == "2"){
							
							alert("Se presento un inconveniente en la insercion de los datos");
						}
					}
					
				}	
			})
	}else{
		alert("Se han presentado los siguientes problemas\n\n"+mensaje);
	}
}
//FUNCION PARA LIMPIAR CAMPOS DE LA VISTA REGSITRAR MOTO
function limpiarCamposRegMoto(){
	document.getElementById("placaVei").value = "";
	$('#ModeloVeh').val(0);
	document.getElementById("TipoVeh").value = "";
	document.getElementById("EstadoVei").value = "";
	$('#vehiculoMarca').val(0);
	$('#registrar').attr("disabled", true);
	$('#limpiar').attr("disabled", true);
	$('#cancelar').attr("disabled", false);
	document.getElementById("placaVei").disabled = false;
	document.getElementById("registrar").value = "Registrar"
	resetBordeInputRegMoto();
	
}
//fucntion que validara los campos vacios de la vista registrar moto
function vlaidarCaposRegMoto(){
	mensaje = "";
	if(document.getElementById("placaVei").value == ""){
		mensaje += " - Debe ingresar una placa\n";
		$('#placaVei').addClass("redborder");
		
	}
	if( document.getElementById("vehiculoMarca").value == "0" ){
		mensaje += " - Debe seleccionar una marca para la moto\n";
		$('#vehiculoMarca').addClass("redborder");
		
	}
	if(document.getElementById("TipoVeh").value == ""){
		mensaje += " - Debe ingresar un tipo de vehiculo\n";
		$('#placaVei').addClass("redborder");
		
		$('#TipoVeh').addClass("redborder");
	}
	if(document.getElementById("ModeloVeh").value == "0"){
		mensaje += " - Debe seleccionar un modelo para la moto\n";
		$('#ModeloVeh').addClass("redborder");
		
	}
	if(document.getElementById("EstadoVei").value == ""){
		mensaje += " - Debe ingresar un estado\n";
		$('#EstadoVei').addClass("redborder");
		
	}
	return mensaje;
}
//funcion para quitar el bordo rojo de los imput
function resetBordeInputRegMoto(){
	$('#placaVei').removeClass("redborder");
	$('#vehiculoMarca').removeClass("redborder");
	$('#TipoVeh').removeClass("redborder");
	$('#ModeloVeh').removeClass("redborder");
	$('#EstadoVei').removeClass("redborder");
}
//funcion para validar si la placa ya se encuentra registrada
function VerificarPlacaExiste(input){
	console.log(input.value);
	var url = "Procedimientos/AccionValidarRegistro.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{registro:input.value, control:2},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				if(datos == "1"){
					console.log(datos);
					console.log("respuesta");
					noespacios(input);
					document.getElementById("limpiar").disabled = false;
					document.getElementById("registrar").disabled = false;
					document.getElementById("cancelar").disabled = false;
					
					
				}else{
					alert("ya existe un vehiculo con esta placa");
					array = datos.split(',');
					document.getElementById("placaVei").value = array[1];
					document.getElementById("vehiculoMarca").value = array[4];
					document.getElementById("TipoVeh").value = array[2];
					
					document.getElementById("ModeloVeh").value  = array[3];
					document.getElementById("EstadoVei").value  = array[5];
					document.getElementById("placaVei").disabled = true;
					document.getElementById("registrar").disabled = false;
					document.getElementById("registrar").value = "Editar";
					document.getElementById("limpiar").disabled = false;

					input.focus();
					
				}
				
			}	
		})
}
//SE VALIDA ACCION EN LA FUNCIONALIDAD REGISTRAR MOTO
function validarAccionVehiculo(){
	
	if(document.getElementById("registrar").value == "Registrar"){
		insertarDatosVehiculos();
	}else{
		editarDatosVehiculo();
	}
	limpiarCamposRegMoto();
}
function registrarBitacoraRegistro(cod_modulo, cod_tipo_modi, usuario_modi, valor_anterior, valor_actual, COD_REGISTRO, mensaje){
	var mensajeBitacora  = ""; 
	mensajeBitacora += mensaje;
	var url = "Procedimientos/AccionGuardarBitacora.php";
		//usamos ajax
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los dato que se enviaran a le archivo php que realizara el proceso de insertar
			data:{codModulo:cod_modulo, codTipoMOdi:cod_tipo_modi, usuarioModifica:usuario_modi, valorAnterior:valor_anterior, valorActual:valor_actual, corRegistro:COD_REGISTRO},
			//se ejecuta la fucnion que mostrara los datoser
			success:function(datos){
				
				if(datos == "3"){
					mensajeBitacora += " - Se guardo el registro en la bitacora\n\n"
					alert("- EXITO - \n\n" + mensajeBitacora);

				}else{
					if(datos == "2"){
						mensajeBitacora += " - No se pudo realizar el registro en la bitacora";
						alert("- SE PRESENTARON ERRORES -\n\n"+ mensajeBitacora);
					}
				}
			}
			
		})
}
function registrarBitacoraEditar(cod_modulo, cod_tipo_modi, usuario_modi, valor_anterior, valor_actual, COD_REGISTRO){
	var mensajeBitacora  = ""; 
    var sesult;
	//var mensajeBitacora += mensaje;
	var url = "Procedimientos/AccionGuardarBitacora.php";
		//usamos ajax
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los dato que se enviaran a le archivo php que realizara el proceso de insertar
			data:{codModulo:cod_modulo, codTipoMOdi:cod_tipo_modi, usuarioModifica:usuario_modi, valorAnterior:valor_anterior, valorActual:valor_actual, corRegistro:COD_REGISTRO},
			//se ejecuta la fucnion que mostrara los datoser
			success:function(datos){
				
				//no se ejecuta ninguna acción para dar continuidad al registro en bitacora de todos los cambbios realizados
			}
			
		})
}
//fucnion para validar que no se ingresen espacios en blanco
function noespacios(input) {
	var er = new RegExp(/\s/);
	var web = input.value;
	
	if(er.test(web)){
		alert('No se permiten espacios');
		
		input.focus();
		document.getElementById("limpiar").disabled = true;
		document.getElementById("registrar").disabled = true;
		document.getElementById("cancelar").disabled = false;
		return false;
	}
           
}
function validarAccionPropietario(){
	alert(document.getElementById("registrar").value);
	if(document.getElementById("registrar").value == "Registrar"){
		insertarDatosVehiculos();
	}else{
		editarDatosVehiculo();
	}
	limpiarCamposRegMoto();
}
function editarDatosVehiculo(){
	 
	var mensaje = "";
	var mensajeEditar = "";
	//capturamos los valores de los imput que se van a insertar
	var placa_moto = document.getElementById("placaVei").value;
	var marca_vehiculo = document.getElementById("vehiculoMarca").value;
	var tipo_hiculo_ = document.getElementById("TipoVeh").value;
	var modelo_vehiculo = document.getElementById("ModeloVeh").value;
	var estado_vehiculo = document.getElementById("EstadoVei").value;
	var usuarioRegistra = "USUARIO";
	mensaje = vlaidarCaposRegMoto();
	if(mensaje == ""){
		var msj = "";
		var url = "Procedimientos/AccionEditarDatosVehiculo.php";
		$.ajax({
				//se determina el metodo por el cual se enviaran los datos
				type:"post",
				url:url,
				//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
				data:{placaVei:placa_moto, vehiculoMarca:marca_vehiculo, TipoVeh:tipo_hiculo_, ModeloVeh:modelo_vehiculo, EstadoVei:estado_vehiculo},
				//se ejecuta la fucnion que mostrara los datos
				success:function(datos){
					array = datos.split(',');
					if(array[0] == "-99"){
						
						alert(array[1]);
							
					}else if(array[0] == "0"){
						alert(" - No se edito ningun campo");
					}else if(array[0] == "1"){
						//se inserta en bitacora el cambio de la marca del vehiclo
						if(array[4] != ""){
						
							registrarBitacoraEditar(2, 6, usuarioRegistra, array[4], marca_vehiculo, placa_moto);
							mensajeEditar += " - Se edito la marca del vehiculo\n";

						}
						//se insserta en  bitacora el cambio de tipo de vehiculo
						if(array[3] != ""){
						
							registrarBitacoraEditar(2, 7, usuarioRegistra, array[3], tipo_hiculo_, placa_moto);
							mensajeEditar += " - Se edito el tipo de vehiculo\n";

						}
						//se guarda en bitacora el cambio modelo del vehiculo
						if(array[2] != ""){
						
							registrarBitacoraEditar(2, 7, usuarioRegistra, array[2], modelo_vehiculo, placa_moto);
							mensajeEditar += " - Se edito el modelo del vehiculo\n";

						}
						//se giarda en bitacora el cambio de esttado del vehiculo
						if(array[1] != ""){
						
							registrarBitacoraEditar(2, 7, usuarioRegistra, array[1], estado_vehiculo, placa_moto);
							mensajeEditar += " - Se edito el modelo del vehiculo\n";

						}
						if(mensajeEditar != ""){
							alert("  --  EXITO  --\n\n"+mensajeEditar);

						}
					}
					
				}	
			})
	}else{
		alert("Se han presentado los siguientes problemas\n\n"+mensaje);
	}
}
//funcion ajax para gestionar el registor de mecanicos
function registrarDatosMecanico(){

	var mensaje = "";
	msj = ""
	var documento = document.getElementById("DocMecnico").value;
	var nom = document.getElementById("NomMecanico").value;
	var ape1 = document.getElementById("apellido1").value;
	var ape2 = document.getElementById("apellido2").value;
	var TelMecanico = document.getElementById("TelMecanico").value;
	mensaje = validarCamposObligatorisoMecanicos();
	$usuario = "usuario";
	if(mensaje == ""){
		var url = "Procedimientos/AccionRegistrarDatosMecabico.php";
		$.ajax({
				//se determina el metodo por el cual se enviaran los datos
				type:"post",
				url:url,
				//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
				data:{DocMecnico:documento, NomMecanico:nom, apellido1:ape1, apellido2:ape2, TelMecanico:TelMecanico},
				//se ejecuta la fucnion que mostrara los datos
				success:function(datos){
						//no hay conexion con el servidor
						if(datos == "1"){
							alert(" - Se presentaron los siguientes problemas\n"+"  - No se pudo establecer conexión con el servidor");
						}else if(datos == "2"){
							alert(" - Se presentaron los siguientes problemas\n"+"  - Se presentaron problemas en la inseción de los datos");
						}else if(datos == "3"){
							msj = " - Se realizo el registro del mecánico\n";
							registrarBitacoraRegistro(4, 1, $usuario,"", "REGISTRADO", documento, msj);
							
						}
				}
					
					
			})

	}else{
		
		alert("- Se presentaron los siguientes problema\n\n"+mensaje);

	}
	
}
//funcion para validar campos obligatorios registro mecanico
function validarCamposObligatorisoMecanicos(){
	var mensaje = ""
	if(document.getElementById("DocMecnico").value == ""){
		$('#DocMecnico').addClass("redborder");
		mensaje += " - El campo documento es obligatorio\n";
	}
	if(document.getElementById("NomMecanico").value == ""){
		$('#NomMecanico').addClass("redborder");
		mensaje += " - El campo nombre es obligatorio\n";
	}
	if(document.getElementById("apellido1").value == ""){
		$('#apellido1').addClass("redborder");
		mensaje += " - El campo primer apellido es obligatorio\n";
	}
	if(document.getElementById("TelMecanico").value == ""){
		$('#TelMecanico').addClass("redborder");
		mensaje += " - El campo telefono es obligatorio\n";
	}

	return mensaje;
}
//se valida si el documento del mecanico ya esta registrado
function validarDocMecancio(input){
	
	var documento = input.value;
	var url = "Procedimientos/AccionValidarRegistro.php";
		$.ajax({
				//se determina el metodo por el cual se enviaran los datos
				type:"post",
				url:url,
				//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
				data:{registro:input.value, control:3},
				//se ejecuta la fucnion que mostrara los datos
				success:function(datos){
						array = datos.split(',');
						if(datos == "1"){
							noespacios(input);
							document.getElementById("limpiar").disabled = false;
							document.getElementById("registrar").disabled = false;
							document.getElementById("limpiar").disabled = false;
					
					
						}else{
							alert("ya existe un mecancio registrado con este documento");
							array = datos.split(',');
							document.getElementById("DocMecnico").value = array[1];
							var documento = document.getElementById("NomMecanico").value = array[2];
							
							
							document.getElementById("apellido1").value  = array[3];
							document.getElementById("apellido2").value  = array[4];
							document.getElementById("TelMecanico").value  = array[5];
							document.getElementById("DocMecnico").disabled = true;
							document.getElementById("registrar").disabled = false;
							document.getElementById("registrar").value = "Editar";
							document.getElementById("limpiar").disabled = false;

							input.focus();
							
						}
				}
					
					
			})
}
//se valida accion a realizar en el forumulario mecanicos
//se edita un registro o se inserta uno nuevo
function validarAccioMecanicos(){

	if(document.getElementById("registrar").value == "Registrar"){
		registrarDatosMecanico();
	}else{
		editarDatosMecanico();
	}
	limpiarCamposMecanico();
}
//se editan datos de mecanico
function editarDatosMecanico(){
	var mensaje = "";
	var documento = document.getElementById("DocMecnico").value;
	var nom = document.getElementById("NomMecanico").value;
	var ape1 = document.getElementById("apellido1").value;
	var ape2 = document.getElementById("apellido2").value;
	var TelMecanico = document.getElementById("TelMecanico").value;
	mensaje = validarCamposObligatorisoMecanicos();
	var mensajeExito = "";
	var usuarioRegistra = "usuario"; 
	if(mensaje == ""){
		
		var url = "Procedimientos/AccionEditarDatosMecanico.php";
		$.ajax({
				//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{DocMecnico:documento, NomMecanico:nom, apellido1:ape1, apellido2:ape2, TelMecanico:TelMecanico},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				
				array = datos.split(",");
				if(array[0] == "-99"){
					alert(array[1]);
					
				}else if(array[0] == "1"){
					if(array[1] != ""){
						registrarBitacoraEditar(3, 7, usuarioRegistra, array[0], nom, documento);
						mensajeExito += " - Se edito el nombre\n";
					}
					if(array[2] != ""){
						registrarBitacoraEditar(3, 7, usuarioRegistra, array[2], ape1, documento);
						mensajeExito += " - Se edito el primer apellido\n";
					}
					if(array[3] != ""){
						registrarBitacoraEditar(3, 7, usuarioRegistra, array[3], ape2, documento);
						mensajeExito += " - Se edito el segundo apellido\n";
					}
					if(array[4] != ""){
						registrarBitacoraEditar(3, 7, usuarioRegistra, array[4], TelMecanico, documento);
						mensajeExito += " - Se edito el número de telefono\n";
					}
					
					alert( "    --  !! EXITO ¡¡ --  \n\n"+mensajeExito);
					
				}
			}
		})
	}else{
		alert(" - Se Presentaron los siguientes problemas\n\n"+mensaje);
	}
}
//se limpian los campos del formulario registro mecanico
function limpiarCamposMecanico(){
	document.getElementById("DocMecnico").value = "";
	document.getElementById("NomMecanico").value = "";
	document.getElementById("apellido1").value = "";
	document.getElementById("apellido2").value = "";
	document.getElementById("TelMecanico").value = "";
	document.getElementById("registrar").disabled = true;
	document.getElementById("registrar").value = "Registrar";
	document.getElementById("limpiar").disabled = true;
	document.getElementById("cancelar").disabled = false;
}
function resetBordeInputRerMEcanico(){
	$('#DocMecnico').removeClass("redborder");
	$('#NomMecanico').removeClass("redborder");
	$('#apellido1').removeClass("redborder");
	$('#apellido2').removeClass("redborder");
	$('#TelMecanico').removeClass("redborder");
}
//se valida que la placa de la moto que ingresa si este registrada
function buscarPlacaTaller(input){
	
	var url = "Procedimientos/AccionValidarRegistro.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{registro:input.value, control:2},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				array = datos.split(",");
				if(datos == "1"){
					var confirmar = confirm(" - La placa ingresada no se encuentra registrada en el sistema\n\n - ¿DESEA REGISTRARLA?");
					if(confirmar){
						var nombre = $('#placaVei');
						loadModule('#content','registro_motos.php?placa='+array[1]);
						
						nombre.val(array[1]);
						nombre.focus();
					}else{
						
					}
					// noespacios(input);
					// document.getElementById("limpiar").disabled = false;
					// document.getElementById("registrar").disabled = false;
					// document.getElementById("limpiar").disabled = false;
					
					
				}else{
					
					document.getElementById("codPlaca").value = array[0];
					valiavehiTaller(array[0]);
				}
				
			}	
		})
}
function cargarPropietario(){
	var url = "Procedimientos/AccionBuscarPropietario.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				array = datos.split(",");
			
				
				
			}	
		})
}

//CANCELAR REGISTRO
function cancelarEGISTRO(){
	var nombre = $('#Nombres')
	loadModule('#content','home.php');
	nombre.focus();
}
function soloLetras(e){
 key = e.keyCode || e.which;
 tecla = String.fromCharCode(key).toLowerCase();
 letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
 especiales = [8,37,39,46];

	 tecla_especial = false
	 for(var i in especiales){
		 if(key == especiales[i]){
	  tecla_especial = true;
	  break;
				} 
	 }
 
        if(letras.indexOf(tecla)==-1 && !tecla_especial)
     return false;
}

function insertarDatosUsuario(){
	var DocUsuario = document.getElementById("docUsuario"). value;
	var NomUsuario = document.getElementById("NombreCompleto"). value;
	var logUsuario = document.getElementById("usuario"). value;
	var passUsuario = document.getElementById("password"). value;
	var Estadousuario = document.getElementById("estado"). value;
	var TipoUsuario = document.getElementById("rol"). value;
	var mensaje = "";
	var msjValdacion = "";
	var $usuario = "";
	mensaje = validaCamposUsuario();
	if(mensaje == ""){
		var url = "Procedimientos/AccionInsertarDatosUsuario.php";
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{NombreCompleto:NomUsuario, usuario:logUsuario, password:passUsuario, estado:Estadousuario, rol:TipoUsuario, docUsuario:DocUsuario},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				
				if(datos == "3"){
					msjValdacion += " - No se pudo establecer conexión con la base de datos\n";
					alert("- Se presentaron los siguientes problemas\n\n"+msjValdacion);
				}else if(datos == "2"){
					msjValdacion += " - Se presento un inconveniente en la inserción de los datos";
					alert("- Se presentaron los siguientes problemas\n\n"+msjValdacion);
				}else{
					var msj = " - Se registro el usuario\n";
					registrarBitacoraRegistro(3, 1, $usuario,"", "REGISTRADO", DocUsuario, msj);
				}
				
			}	
		})
	}else{
		alert("- Se han presentado los siguientes problemas\n\n"+mensaje);
	}
}
function validaCamposUsuario(){
	var msj = "";
	if(document.getElementById("docUsuario"). value == ""){
		msj += " - El campo Documento de identidad es un campo obligatorio\n";
		$('#docUsuario').addClass("redborder");
	}
	if(document.getElementById("NombreCompleto"). value == ""){
		msj += " - El campo nombre completo es un campo obligatorio\n";
		$('#NombreCompleto').addClass("redborder");
	}
	if(document.getElementById("usuario"). value == ""){
		msj += " - El campo nombre de usuario es un campo obligatorio\n";
		$('#usuario').addClass("redborder");
	}
	if(document.getElementById("password"). value == ""){
		msj += " - El campo Contraseña es un campo obligatorio\n";
		$('#password').addClass("redborder");
	}
	if(document.getElementById("confirmar"). value == ""){
		msj += " - Debe de confirmación del a contraseña es un campo obligatorio\n";
		$('#confirmar').addClass("redborder");
	}
	if(document.getElementById("estado"). value == "10"){
		msj += " - El campo Estado es un campo obligatorio\n";
		$('#estado').addClass("redborder");
	}
	if(document.getElementById("rol"). value == "10"){
		msj += " - El campo Rol es un campo obligatorio\n";
		$('#rol').addClass("redborder");
	}
	return msj;
}
function validaAccionUsuario(){
	if(document.getElementById("enviar").value == "Registrar"){
		insertarDatosUsuario();
		limpiarCamposUsuario();
	}else{
		EditarDatosUsuario();
	}
	
}
//VALIDAR CONTRASEÑA
function validarPassword(){
	var pass1 = $('#password').val();
	var pass2 = $('#confirmar').val();
	var pass_1 = $('#password');
	var pass_2 = $('#confirmar');
	
	if(pass1 != pass2){
		alert("LAS CONTASEÑAS NO COINCIDEN POR FAVOR ESCRIBALAS NUEVAMENTE");
		pass_1.val("");
		pass_2.val("");
		pass_1.focus();
		
	}
}
function resetCAmposUsuario(){
	$('#docUsuario').removeClass("redborder");
	$('#NombreCompleto').removeClass("redborder");
	$('#usuario').removeClass("redborder");
	$('#password').removeClass("redborder");
	$('#confirmar').removeClass("redborder");
	$('#estado').removeClass("redborder");
	$('#rol').removeClass("redborder");
}
//valida si el usuario ya tiene usaurio creado
function validarUsaurio(input){
	var documento = input.value;
	var url = "Procedimientos/AccionValidarRegistro.php";
		$.ajax({
				//se determina el metodo por el cual se enviaran los datos
				type:"post",
				url:url,
				//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
				data:{registro:input.value, control:4},
				//se ejecuta la fucnion que mostrara los datos
				success:function(datos){
						array = datos.split(',');
						if(datos == "1"){
							document.getElementById("enviar").disabled = false;
							
							document.getElementById("limpiar").disabled = false;
							document.getElementById("cancelar").disabled = false;
							document.getElementById("txtValidaEdita").value = "0";		
					
					
						}else{
							var confirmar = confirm("ya existe un mecancio registrado con este documento\n\n  - ¿Desea Editarlo?");
							if(confirmar){
								array = datos.split(',');
								document.getElementById("docUsuario").disabled = true;
								document.getElementById("docUsuario").value = array[1];
								document.getElementById("NombreCompleto").value = array[2];							
								document.getElementById("usuario").value  = array[3];
								document.getElementById("password").value  = array[4];
								document.getElementById("confirmar").value  = array[4];
								document.getElementById("estado").value = array[6];
								document.getElementById("rol").value = array[5];
								document.getElementById("PassAnterior").value = array[4];
								document.getElementById("enviar").disabled = false;
								document.getElementById("enviar").value = "Editar";
								document.getElementById("limpiar").disabled = false;
								document.getElementById("cancelar").disabled = false;
								document.getElementById("txtValidaEdita").value = "1";	
							}else{
								document.getElementById("docUsuario").value = "";
								document.getElementById("enviar").value = "Registrar";
								input.focus();
							}

							
							 
							

							
							
						}
				}
					
					
			})
}
function limpiarCamposUsuario(){
	document.getElementById("docUsuario").disabled = false;
	document.getElementById("docUsuario").value = "";
	document.getElementById("NombreCompleto").value = "";							
	document.getElementById("usuario").value  = "";
	document.getElementById("password").value  = "";
	document.getElementById("confirmar").value  = "";
	document.getElementById("estado").value = "";
	document.getElementById("rol").value = "";
	document.getElementById("enviar").disabled = true;
	document.getElementById("enviar").value = "Editar";
	document.getElementById("limpiar").disabled = true;
	document.getElementById("cancelar").disabled = false;
	document.getElementById("enviar").value = "Registrar";
	document.getElementById("txtValidaEdita").value = "0";	
}
function EditarDatosUsuario(){
	var DocUsuario = document.getElementById("docUsuario").value;
	var NomUsuario = document.getElementById("NombreCompleto").value;
	var logUsuario = document.getElementById("usuario").value;
	var Estadousuario = document.getElementById("estado").value;
	var TipoUsuario = document.getElementById("rol").value;
	var passUsuario = "";
	var mensaje = "";
	var mensajeEdita = "";
	usuarioRegistra = "USUARIO";
	
	if(document.getElementById("password").value != document.getElementById("PassAnterior").value){
		 passUsuario = document.getElementById("password").value;

	}
	mensaje = validaPasswordEdita();
	if(mensaje == ""){
		var url = "Procedimientos/AccionEditarDatosUsuario.php";
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{NombreCompleto:NomUsuario, usuario:logUsuario, password:passUsuario, estado:Estadousuario, rol:TipoUsuario, docUsuario:DocUsuario},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				
				array = datos.split(",");
				
				if(array[0] == "-99"){
					alert(array[1]);
				}else if(array[0] == "0"){
					alert("  --  INFORMACIÓN  --  \n\n  - No se edito ningun campo")
				}else if(array[0] == "1"){
					if(array[1] != ""){
						registrarBitacoraEditar(5, 3, usuarioRegistra, array[1], NomUsuario, DocUsuario);
						mensajeEdita += " - Se edito el nombre\n";
					}
					if(array[2] != ""){
						registrarBitacoraEditar(5, 10, usuarioRegistra, array[2], NomUsuario, DocUsuario);
						mensajeEdita += " - Se edito el nombre de usuario\n";
					}
					if(array[3] != ""){
						registrarBitacoraEditar(5, 11, usuarioRegistra, array[3], NomUsuario, DocUsuario);
						mensajeEdita += " - Se edito el password\n";
					}
					if(array[4] != 10){
						registrarBitacoraEditar(5, 12, usuarioRegistra, array[4], NomUsuario, DocUsuario);
						mensajeEdita += " - Se edito el estado\n";
					}
					if(array[5] != 10){
						registrarBitacoraEditar(5, 13, usuarioRegistra, array[5], NomUsuario, DocUsuario);
						mensajeEdita += " - Se edito el tipo de usuario\n";
					}
				}
					alert("  --  EXITO  --  \n\n"+mensajeEdita);
					limpiarCamposUsuario();
			}
					
					
		})
	}else{
		alert("- Se han presentado los siguientes problemas\n\n"+mensaje);
		return;
	}
}
function borrarPasswordEdita(){
	var pass1 = $('#password').val();
	var pass2 = $('#confirmar').val();
	var pass_1 = $('#password');
	var pass_2 = $('#confirmar');
	if((pass1 == "" && pass2 != "") && ($('#txtValidaEdita').val() == "1")){
		var confirmar = confirm("DEBE INGRESAR UNA CONTRASEÑA\n\n   - Si los campos CONTRASEÑA Y CONFIRMAR CONTRASEÑA se encuentran vacios, la contraseña actual no sera editada\n\n  - ¿DESEA EDITAR LA CONTRASEÑA ACTUAL?");
		if(confirmar){
			//$('#password').addClass("redborder");
			pass_2.val("");
			pass_1.focus();
			return;
		}else{
			pass_2.val($('#PassAnterior').val());
			pass_1.val($('#PassAnterior').val());
		}
	}
}
function validaPasswordEdita(){
	var msj = "";
	if(document.getElementById("password").value == ""){
		msj += " - El campo Contraseña es un campo obligatorio\n";
		$('#password').addClass("redborder");
	}
	if(document.getElementById("confirmar").value == ""){
		msj += " - Debe ingresar la  confirmación de la contraseña\n";
		$('#confirmar').addClass("redborder");
	}
	return msj;
}
function autenticar(){
	var loggin = document.getElementById("usuario").value;
	var possword = document.getElementById("password").value;
	var mensaje = "";
	var mensajeValida = "";
	mensaje = validaCamposLoggin();
	if(mensaje == ""){
		var url = "Procedimientos/AccionIniciarSession.php";
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{usuario:loggin, password:possword},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				if(datos == "1"){
					mensajeValida += " - la consulta o se ejecuto correctamente";
				}else if(datos == "10"){
					alert(" - El usuario se encuentra bloqueado o inactivo");	
				}else if(datos == "100"){
					alert(datos);
					alert(" -  Su usuario ha sido bloquead por intentos fallidos de ingreso");
				}else if(datos == "50"){
					window.location="index.php";
				}else if(datos == "20"){
					alert(" - Contraseña incorrecta");
				}
				
			}		
		})
	}
}
function validaCamposLoggin(){
	var msj = "";
	if(document.getElementById("usuario").value == ""){
		$('#usuario').addClass("redborder");
		msj += " - Debe ingresar un nombre de usaurio";
	}
	if(document.getElementById("password").value == ""){
		$('#password').addClass("redborder");
		msj += " - Debe ingresar el password";
	}
	return msj;
}
function logout(){
	var url = "Procedimientos/AccionCerrarSesion.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				if(datos == "4"){
					window.location="Inicio_Sesion.php";
				}
			}		
		})
}
function insertarDAtosTaller(){
	var placaVehi = document.getElementById("codPlaca"). value;
	var propietario = document.getElementById("ReparacionesNombre"). value;
	var fecEntrada = document.getElementById("FecIngreso"). value;
	var HoraEntra = document.getElementById("HoraIng"). value;
	//var HoraSale = document.getElementById("HoraSal"). value;
	//var reparacion  document.getElementById("Reparacion"). value;
	var observacion = document.getElementById("observREparacion"). value;
	var Mecanico = document.getElementById("mecanico"). value;
	var mensaje = "";
	mensaje = validarCamposRepaciones();
	if(mensaje == ""){
		var url = "Procedimientos/AccionRegistrarEntradaTaller.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{codPlaca:placaVehi, ReparacionesNombre:propietario, FecIngreso:fecEntrada, HoraIng:HoraEntra, observREparacion:observacion, mecanico:Mecanico},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				if(datos == "3"){
					alert( " - No fue posible conectar con la base de datos");
				}else if(datos == "2"){
					alert(" - Se presento un conflicto en el registro de los datos");
				}else{
					alert("  --  EXITO  --  \n\n   - Se realizo el registro exitosamente");
				}
				
			}		
		})
	}
}
function validarCamposRepaciones(){
	var placaVehi = document.getElementById("codPlaca"). value;
	var propietario = document.getElementById("ReparacionesNombre"). value;
	var fecEntrada = document.getElementById("FecIngreso"). value;
	var HoraEntra = document.getElementById("HoraIng"). value;
	var HoraSale = document.getElementById("HoraSal"). value;
	var reparacion = document.getElementById("Reparacion"). value;
	var observacion = document.getElementById("observREparacion"). value;
	var Estado = document.getElementById("Estado"). value;
	var Mecanico = document.getElementById("mecanico"). value;
	var msj = ""
	if(placaVehi == ""){
		msj += "Debe ingresar una placa\n";
		$('#reparcionesPlaca').addClass("redborder");
	}
	if(propietario == "0"){
		msj += "Debe Seleccionar el propietario de la moto\n";
		$('#ReparacionesNombre').addClass("redborder");
	}
	if(fecEntrada == ""){
		msj += "El campo fecha es un campo obligatorio\n";
		$('#FecIngreso').addClass("redborder");
	}
	if(HoraEntra == ""){
		msj += "El campo hora de entrada es un campo obligatorio\n";
		$('#FecIngreso').addClass("redborder");
	}
	if(mecanico == "0"){
		msj += "Debe seleccionar un mecanico\n";
		$('#mecanico').addClass("redborder");
	}
	if(observacion == ""){
		msj += "Debe ingresar observacioens para el ingreso al taller\n";
		$('#observREparacion').addClass("redborder");
	}
	return msj;
}
//funcion que el estado de el vehiculo en el taller
function valiavehiTaller(input){
	
	var url = "Procedimientos/AccionBuscaVehiTaller.php";
	$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{cod_vehiculo:input},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				
				array = datos.split(",");
				if(array[0] == "3"){
					alert(" - No se pudo establecer con la base de datos");
				}else if(array[0] == "2"){
					alert(" - No fue posible consultar los datos");
				}else if(array[0] == "1" || array[0] == "88"){
				
					
					if(array[0] == "88"){
						var confirmar = confirm("- el vehiculo consultado no tiene entregas pendiente.\n\n  ¿DESAE VISUALIZAR REALIZAR UNA NUEVA ENTRADA?");
						if(confirmar){
							console.log(array[11]);
							document.getElementById("registrar").disabled = false;
							document.getElementById("cancelar").disabled = false;
							document.getElementById("registrar").value = "Registrar";
							document.getElementById("Limpiar").disabled = false;
						}
					}else{
							var nombre = document.getElementById("ReparacionesNombre");
							//document.getElementById("codPlaca").value = ;
							nombre.value = array[2];
							nombre.disabled = true;
							
							 document.getElementById("FecIngresoAux").value = array[6];
							 document.getElementById("HoraIngAux").value = array[7];
							
							document.getElementById("Estado"). value = array[9];
							document.getElementById("registrar").value = "Entregar";
							document.getElementById("mecanico").value = array[5];
							document.getElementById("HoraIngAux").style.display='block';
							document.getElementById("HoraIng").style.display='none';
							document.getElementById("HoraIngAux").disabled = true;
							document.getElementById("FecIngresoAux").style.display='block';
							document.getElementById("FecIngresoAux").disabled = true;
							document.getElementById("FecIngreso").style.display='none';
							document.getElementById("ReparacionesNombre").disabled = true;
							document.getElementById("contentReparacion").style.display='block';
							document.getElementById("observREparacion").disabled = true;
							document.getElementById("reparcionesPlaca").disabled = true;
							document.getElementById("mecanico").disabled = true;
							document.getElementById("registrar").disabled = false;
							document.getElementById("limpiar").disabled = false;
							document.getElementById("observREparacion").value = array[8];
						}
						 
				}
			 }		
		})
}
function limpiarReparacines(){
	var nombre = document.getElementById("ReparacionesNombre");
	//document.getElementById("codPlaca").value = ;
	nombre.value = "";
	nombre.disabled = false;
	 document.getElementById("reparcionesPlaca").value = "";
	 document.getElementById("FecIngresoAux").value = "";
	 document.getElementById("HoraIngAux").value = "";
	document.getElementById("codPlaca"). value = "";
	document.getElementById("Estado"). value = "";
	document.getElementById("registrar").value = "Registrar";
	document.getElementById("mecanico").value = "";
	document.getElementById("HoraIngAux").style.display='none';
	document.getElementById("HoraIng").style.display='block';
	document.getElementById("HoraIngAux").disabled = false;
	document.getElementById("FecIngresoAux").style.display='none';
	document.getElementById("FecIngreso").style.display='block';
	document.getElementById("ReparacionesNombre").disabled = false;
	document.getElementById("contentReparacion").style.display='none';
	document.getElementById("observREparacion").disabled = false;
	document.getElementById("reparcionesPlaca").disabled = false;
	document.getElementById("mecanico").disabled = false;
	document.getElementById("observREparacion").value = "";
	document.getElementById("HoraSalAux").value = "";
	document.getElementById("HoraSalAux").style.display='none';
	document.getElementById("HoraSal").style.display='block';
	document.getElementById("mecanico").value = 0;
	document.getElementById("ReparacionesNombre").value = 0;
	document.getElementById("registrar").disabled = true;
	document.getElementById("cancelar").disabled = false;
	document.getElementById("limpiar").disabled = true;
}
function validaAccionRepara(){
	if(document.getElementById("registrar").value == "Registrar"){
		insertarDAtosTaller();
	}else{
		entregarMoto();
		
	}
	limpiarReparacines();
}
function entregarMoto(){
	var HoraSalida = document.getElementById("HoraSal").value;
	var reparaciones = document.getElementById("Reparacion").value;
	var CodigoPlaca = document.getElementById("codPlaca").value;
	var mensaje = "";
	if(HoraSalida == ""){
		mensaje += " - Debe ingresar una hora de salida\n";
		$('#HoraSal').addClass("redborder");
	}
	if(reparaciones == ""){
		mensaje += " - Debe ingresar las reparaciones\n";
		$('#Reparacion').addClass("redborder");
	}
	if(mensaje == ""){
		var url = "Procedimientos/AccionRegistraEntregaMoto.php";
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{HoraSal:HoraSalida, Reparacion:reparaciones, codPlaca:CodigoPlaca},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				alert(datos);
				if(datos == "2"){
					alert(" - Se presento un inconveniete con el registro de la entrega");
				}else if(datos == "3"){
					alert(" - La entrega del vehiculo se registro con exito");
				}else if(datos = "1"){
					alert(" - No se pudo establecer coneción con la base de datos");
				}
				
			}		
		})
	}else{
		alert("-Se han presentado los siguientes problemas\n\n"+mensaje);
	}
	
}
function cargarMotosTaller(placa, string){

	console.log(placa);
	var placaVehi = placa;
	var tabla = $('#contenedorTabla');
	console.log("bien");
	var url = "Procedimientos/AccionlistarMotosRepara.php";
		$.ajax({
			//se determina el metodo por el cual se enviaran los datos
			type:"post",
			url:url,
			//se referencian los datos que se enviaran a le archivo php que realizara el proceso de insertar
			data:{placaVahiculo:placaVehi,},
			//se ejecuta la fucnion que mostrara los datos
			success:function(datos){
				
				tabla.html(datos);
			}		
		})
}