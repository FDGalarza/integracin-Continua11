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
	$ejecuta = 0;
	$controlNombre = "";
	$controlNomUsuario = "";
	$controlPass = "";
	$controlRol = 10;
	$controlEstado = 10;
	 
	$conex = CrearConexion();
	if(!$conex){
		echo 3;
	}else{
		$sqlAnbnterior = "SELECT * FROM usuarios WHERE Doc_Usuario = '".$DocUsuario."'";
		$resultAnterior = mysql_query($sqlAnbnterior, $conex);
		$fila = mysql_fetch_array($resultAnterior);
		
		//Se valida si se edito el nombre del usuario
		if($fila[2] != $nombreCompleto AND $nombreCompleto != ""){
			try{
				$sqlEdita = "UPDATE usuarios SET Nombre_completo = '".$nombreCompleto."', Fec_actualiza = '".$fecha_actual."' WHERE Doc_Usuario = '".$DocUsuario."'";
				$resultEdita = mysql_query($sqlEdita, $conex);
				if(!$resultEdita){
					throw new Exception(" - No se pudo editar el nombre");
				}else{
					$ejecuta = 1;
					$controlNombre = $fila[2];
				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}

		}
		//Se valida si se edita el nombre de usuario
		//print_r($fila[3]." ".$NomUsuario); die();
		if($fila[3] != $NomUsuario AND $NomUsuario != ""){
			try{
				$sqlEdita = "UPDATE usuarios SET loggin = '".$NomUsuario."', Fec_actualiza = '".$fecha_actual."' WHERE Doc_Usuario = '".$DocUsuario."'";
				$resultEdita = mysql_query($sqlEdita, $conex);
				if(!$resultEdita){
					throw new Exception(" - No se pudo editar wl nombre de usuario");
				}else{
					$ejecuta = 1;
					$controlNomUsuario = $fila[3];
				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}

		}
		//se valida si se edita el password del usuario
		if($fila[4] != $PassUsuario AND $PassUsuario != ""){
			try{
				$sqlEdita = "UPDATE usuarios SET password = '".$passw."', Fec_actualiza = '".$fecha_actual."' WHERE Doc_Usuario = '".$DocUsuario."'";
				$resultEdita = mysql_query($sqlEdita, $conex);
				if(!$resultEdita){
					throw new Exception(" - No se pudo editar el password");
				}else{
					$ejecuta = 1;
					$controlPass = $fila[4];
				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}

		}
//se valida si se edita estado
		//SSprint_r($EstadoUsuario.' '.$fila[6]); die();
		if($fila[6] != $EstadoUsuario AND $EstadoUsuario != 10){
			try{
				$sqlEdita = "UPDATE usuarios SET Estado_Usu = '".$EstadoUsuario."', Fec_actualiza = '".$fecha_actual."' WHERE Doc_Usuario = '".$DocUsuario."'";
				$resultEdita = mysql_query($sqlEdita, $conex);
				if(!$resultEdita){
					throw new Exception(" - No se pudo editar el estado");
				}else{
					$ejecuta = 1;
					$controlEstado = $fila[6];
				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}

		}
		//se valida se edita el tipo de usuario
		if($fila[5] != $rolUsaurio AND $rolUsaurio != 10){
			try{
				$sqlEdita = "UPDATE usuarios SET Cod_tipoUsu = '".$rolUsaurio."' WHERE Doc_Usuario = '".$DocUsuario."'";
				$resultEdita = mysql_query($sqlEdita, $conex);
				if(!$resultEdita){
					throw new Exception(" - No se pudo editar el estado");
				}else{
					$ejecuta = 1;
					$controlRol = $fila[5];
				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}

		}
		echo $ejecuta.",".$controlNombre.",".$controlNomUsuario.",".$controlPass.",".$controlEstado.",".$controlRol;
	}

?>