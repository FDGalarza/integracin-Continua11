function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
 
	try {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (E) {
		xmlhttp = false;
	}
}
 
if (!xmlhttp && typeof XMLHttpRequest!="undefined") {
	  xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

var $codigo;
var $contrato

		



		
				function generarReportes(){
				//DECLARO VARIABLES ASIGNANDOLE  LOS VALORES MANDADOS DE EL FORM
					var codigo = $('#codigo').val();
					var contrato = $('#contrato').val();
					
					if(codigo != null || contrato != null){
					   //INSTANCAIO EL OBJETO AJAX
						ajax = objetoAjax();
						//USO EL METODO POST PARA SEDER LAS VARIABLOE AL ARCHIVO PHP QUE EJECUTARA LA CONSULTA
						ajax.open("POST", "procedientos/reporte1.php");
						ajax.onreadystatechange = function(){
							if(ajax.readyState == 1){
								
							}
							if(ajax.readyState == 4){
								if(ajax.responseText == 5){
									alert("REGISTRO ACTUALIZADO");
									loadModule('#content','edicion_colocadores.php');
									/* documento.val("");
									nombre1.val("");
									nombre2.val("");
									apellido1.val("");
									apellido2.val("");
									cont.val(0);
									centro_costos.val(0);
									excep.val(0);
									documento.focus();*/
								}
								if(ajax.responseText == 15){
									alert("POR FAVOR VERIFIQUE ALGUNO DE LOS CAMPOS NO SE HA LLENADO");
								}
								if(ajax.responseText == 2){
									alert("SE HA PRESENTADO ALGÚN ERROR Y EL REGISTRO NO PUDO SER GUARDADO POR FAVOR VERIFIQUE");
								}	
							}
						}
						   ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
					       ajax.send("&codigo="+doc+"&contrato="+nom1);	
						   
					}
				}
		
				

function paginacion_js(limite, consecutivo){
	var contrato = $('#contrato').val();
	var tabla = $('#contenedorTabla');
	var url = "procedientos/filtrar.php";
	
	ajax = objetoAjax();
	ajax.open("POST", "procedientos/filtrar.php", true);
	ajax.onreadystatechange= function(){
	$.post(url, { limite:limite, contrato:contrato, consecutivo:consecutivo}, function (responText){
		tabla.html(responText);
	});
	}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("&contrato="+contrato);
} 
//FUNCION PARA REPORTES
function generarReportes(){
	var reporte = $('#tipo').val();
	var centro = $('#centro').val;
	var contrato = $('#contrato').val;
	var reporteTipo = $('#tipo');
	var centroCostos = $('#centro');
	var contratoTipo = $('#contrato');
	if(centro != null){
	   //INSTANCAIO EL OBJETO AJAX
	   ajax = objetoAjax();
    	//USO EL METODO POST PARA SEDER LAS VARIABLOE AL ARCHIVO PHP QUE EJECUTARA LA CONSULTA
	   ajax.open("POST", "procedientos/reporte1.php");
    	ajax.onreadystatechange = function(){
	   if(ajax.readyState == 1){
	   }
	     if(ajax.readyState == 4){
		   
		 }
	   }
		  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		  ajax.send("&codigo="+centro+"&contrato="+contrato+'&pdf='+reporte);	
						   
    }
}
//CANCELAR REGISTRO
function cancelarEGISTRO(){
	var nombre = $('#Nombres')
	loadModule('#content','home.php');
	nombre.focus();
	
}

