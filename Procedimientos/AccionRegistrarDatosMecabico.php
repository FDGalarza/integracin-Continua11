<?php
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$DocMecanico = $_POST['DocMecnico'];
	$NomMecanico = $_POST['NomMecanico'];
	$Ape1Mecanico = $_POST['apellido1'];
	$Ape2Mecanico = $_POST['apellido2'];
	$TelMecancio = $_POST['TelMecanico'];
	
	$conex = CrearConexion();
	
	//valido si hay conexion
	if(!$conex){
		echo 1;
	}else{
		
		$sql = "INSERT INTO registro_mecanicos(
												doc_Mecanico,
												Nom_Mecanico,
												Ape1_Mecanico,
												Ape2_Mecnico,
												tel_Mecanico
						
											   )
				VALUES(
							'".$DocMecanico."',
							'".$NomMecanico."',
							'".$Ape1Mecanico."',
							'".$Ape2Mecanico."',
							'".$TelMecancio."'
					  )";
					  
		//print_r($sql); die("nad");		
		$resultado = mysql_query($sql, $conex);
		if(!$resultado){
			echo 2;
		}else{
			echo 3;
		}
	}
?>