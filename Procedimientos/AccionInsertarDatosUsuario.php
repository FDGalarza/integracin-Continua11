<?php
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$nombreCompleto = $_POST['NombreCompleto'];
	$NomUsuario = $_POST['usuario'];
	$PassUsuario = $_POST['password'];
	$rolUsaurio = $_POST['rol'];
	$EstadoUsuario = $_POST['estado'];
	$DocUsuario = $_POST['docUsuario'];
	 $passw = sha1($PassUsuario);
	 $fecha_actual = date("Y/m/d");
	 
	$conex = CrearConexion();
	if(!$conex){
		echo 3;
	}else{
		$sql = "INSERT INTO usuarios(
										Doc_Usuario,
										Nombre_completo,
										loggin,
										password,
										Cod_tipoUsu,
										Estado_Usu,
										Fec_Registro
									)
									
				VALUES				(
										'".$DocUsuario."',
										'".$nombreCompleto."',
										'".$NomUsuario."',
										'".$passw."',
										".$rolUsaurio.",
										".$EstadoUsuario.",
										'".$fecha_actual."'
										
									)";
		$resultado = mysql_query($sql, $conex);
		if(!$resultado){
			echo 2;
		}else{
			echo 1;
		}
			
	}
?>