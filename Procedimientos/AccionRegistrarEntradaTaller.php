<?php 
	require_once('../controlador/conexion.php');
	session_start();
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$codPlacaVehiculo = $_POST['codPlaca'];
	$NomPropietario = $_POST['ReparacionesNombre'];
	$FecEntradaTaller = $_POST['FecIngreso'];
	$HoraIngrestoTaller = $_POST['HoraIng'];
	$Observacines = $_POST['observREparacion'];
	$MecanicoRecibe = $_POST['mecanico'];
	 $fecha_actual = date("Y/m/d");
	 
	$conex = CrearConexion();
	if(!$conex){
		echo 3;
	}else{
		
		$sql = "INSERT INTO reparaciones(
											cod_propietario,
											Cod_placa,
											Cod_Mecanico,
											fecha_Entrada,
											Hora_Entrada,
											Observaciones,
											Estado,
											Usu_Recibe
										)
				VALUES(
						".$NomPropietario.",
						".$codPlacaVehiculo.",
						".$MecanicoRecibe.",
						'".$fecha_actual."',
						'".$HoraIngrestoTaller."',
						'".$Observacines."',
							1,
						'".$_SESSION['documento']."'
					  )";
		$result = mysql_query($sql, $conex);
		if(!$result){
			mysql_error($result);
			$ejecuta = 2;
			echo $ejecuta;
		}else{
			echo 1;
		}
	}
?>