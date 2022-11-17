<?php
	require_once('../controlador/conexion.php');
	session_start();
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$HoraEntrega = $_POST['HoraSal'];
	$Reparaciones = $_POST['Reparacion'];  
	$CodPlca = $_POST['codPlaca'];

	
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		$sql = "UPDATE reparaciones 
				SET Hora_Salida = '".$HoraEntrega."', 
					reparacion = '". $Reparaciones."', 
					usu_entrega = '".$_SESSION['documento']."',
					Estado = 2
				WHERE cod_placa = ".$CodPlca."";
		//print_r($sql); die();
		$result = mysql_query($sql, $conex);
		if(!$result){
			echo 2;
		}else{
			echo 3;
		}
	}
	
?>