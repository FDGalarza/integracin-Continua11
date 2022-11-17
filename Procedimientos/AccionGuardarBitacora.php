<?php

	require_once('../controlador/conexion.php');
	session_start();
	$cod_modulo = $_POST['codModulo'];
	$cod_Tipo_modi = $_POST['codTipoMOdi'];
	$usuarioModifica = $_SESSION['documento'];
	$vrAnterior = $_POST['valorAnterior'];
	$vrNuevo = $_POST['valorActual'];
	$codRegistro = $_POST['corRegistro'];
	$fecha_actual = date("Y/m/d");
	
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		//Se crea insert de los datos ingresados
		$sql = "INSERT INTO BITACORA_MOT_VISION(    
												  COD_MODULO,
												  COD_TIPO_MODI, 
												  USUARIO_MODI,
												  FEC_MODIFICA,
												  VALOR_ANTERIOR,
												  VALOR_NUEVO,
												  COD_REGISTRO
                                                                              )
				VALUES(
					".$cod_modulo.",
					".$cod_Tipo_modi.",
					'".$usuarioModifica."',
					'".$fecha_actual."',
					'".$vrAnterior."',
					'".$vrNuevo."',
					'".$codRegistro."'
				)";
		//se ejecuta la consulta
		//print_r($sql); die();
		$resultado = mysql_query($sql, $conex);
		if(!$resultado){
			//no se ejcuto la consulta
			
			echo 2;
		}else{
			//la consulta se realizo con exito
			//print_r("si"); die();
			echo 3;
		}
	}

?>