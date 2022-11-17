<?php
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$DocMecanico = $_POST['DocMecnico'];
	$NomMecanico = $_POST['NomMecanico'];
	$Ape1Mecanico = $_POST['apellido1'];
	$Ape2Mecanico = $_POST['apellido2'];
	$controlApe2 = $_POST['TelMecanico'];
	$ejecuta = 1;
	$controlNombre = "";
	$controlApe1 = "";
	$controlApe2 = "";
	$controlTel = "";
	$conex = CrearConexion();
	
	//valido si hay conexion
	if(!$conex){
		echo 1;
	}else{
		$sqlREgistroAnterior = "SELECT * FROM registro_mecanicos WHERE doc_Mecanico = '".$DocMecanico."'";
		$resultRegAnterior = mysql_query($sqlREgistroAnterior, $conex);
		$filaAnte = mysql_fetch_array($resultRegAnterior);
		//se valida si se edito el nombr del mecanico
		if($filaAnte[2] != $NomMecanico AND $NomMecanico != ""){
			try{
			$sqlNombre = "UPDATE registro_mecanicos SET Nom_Mecanico = '".$NomMecanico."' WHERE doc_Mecanico = '".$DocMecanico."'";
			$Result = mysql_query($sqlNombre, $conex);
			//print_r($sqlNombre); die();
			
				if(!$Result){
					//print_r("nada"); die();
					 throw new Exception(" - No se pudo editar el nombre del mecánico");
				}else{

					$ejecuta = 1;
					$controlNombre = $filaAnte[2];

				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}
		}
		//se valida si se edito el primer apepellido del mecnico
		if($filaAnte[3] != $Ape1Mecanico AND $Ape1Mecanico != ""){
			try{
			$sql = "UPDATE registro_mecanicos SET Ape1_Mecanico = '".$Ape1Mecanico."' WHERE doc_Mecanico = '".$DocMecanico."'";
			$Result = mysql_query($sql, $conex);
			
				if(!$Result){
					 throw new Exception(" - Se  se pudo editar el primer apellido del mecánico");
				}else{

					$ejecuta = 1;
					$controlApe1 = $filaAnte[3];

				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}
		}
		//se valida si se edita el segundo apellido del mecanico
		if(($filaAnte[4] != $Ape2Mecanico AND $Ape2Mecanico != "") OR ($filaAnte[4] == "" AND $Ape2Mecanico != "")){
			try{
			$sql = "UPDATE registro_mecanicos SET Ape2_Mecnico = '".$Ape2Mecanico."' WHERE doc_Mecanico = '".$DocMecanico."'";
			$Result = mysql_query($sql, $conex);
			
				if(!$Result){
					 throw new Exception(" - Se  se pudo editar el Segundo apellido del mecánico");
				}else{

					$ejecuta = 1;
					$controlApe2 = $filaAnte[4];

				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}
		}
		//se valida si se edita el numero de telefono del mecanico
		if($filaAnte[5] != $controlApe2 AND $controlApe2 != ""){
			try{
			$sql = "UPDATE registro_mecanicos SET Tel_Mecanico = '".$controlApe2."' WHERE doc_Mecanico = '".$DocMecanico."'";
			$Result = mysql_query($sql, $conex);
			
				if(!$Result){
					 throw new Exception(" - Se  se pudo editar el número de telefono del mecánico");
				}else{

					$ejecuta = 1;
					$controlTel = $filaAnte[5];

				}
			}catch(Exception $e){
				echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
				die();
			}
		}
		echo $ejecuta.",".$controlNombre.",".$controlApe1.",".$controlApe2.",".$controlTel;
	}
?>