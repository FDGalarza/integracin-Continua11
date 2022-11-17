<?php
	//se hace referencia a el archivo que contiene la conexion con la base de datos
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$placa_vehiculo = $_POST['placaVei'];
	$marca_Vehiculo = $_POST['vehiculoMarca'];
	$tipo_vehiculo = $_POST['TipoVeh'];
	$modelo_vehiculo = $_POST['ModeloVeh'];
	$estado_vehiculo = $_POST['EstadoVei'];
	$fecha_actual = date("Y/m/d");
	
	//se realiza conexion a la base de datos
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		//Se crea insert de los datos ingresados
		$sql = "INSERT INTO registro_motos(regM_placa, regM_tipoVehiculo, id_model_vehiculo, id_marca, regM_estado, 
		fecha_creacion) VALUES('".$placa_vehiculo."', '".$tipo_vehiculo."',".$modelo_vehiculo.", ".$marca_Vehiculo.",
		'".$estado_vehiculo."', '".$fecha_actual."')";
		//se ejecuta la consulta
		
		$resultado = mysql_query($sql, $conex);
		if(!$resultado){
			//no se ejcuto la consulta
			echo 2;
		}else{
			//la consulta se realizo con exito
			echo 3;
		}
	}
	
	

?>