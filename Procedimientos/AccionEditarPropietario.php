<?php
	//se hace referencia a el archivo que contiene la conexion con la base de datos
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$doc_Propietario = $_POST['docPropietarios'];
	$nom_Propietario = $_POST['nombrePropietario'];
	$ape1_Propietario = $_POST['apellido1'];
	$ape2_Propietario = $_POST['apellido2'];
	$dir_Propietario = $_POST['DirPropietario'];
	$tel_Propietario = $_POST['TelPropietario'];
	$ref_Propietario = $_POST['referencia'];
	$fecha_actual = date("Y/m/d");
	$dato = "";
	$sql = "";
	$control = 0;
	$controlNom = "";
	$conttroApe1 = "";
	$controlApe2 = "";
	$controlTel = "";
	$controlDir = "";
	$controlRef = "";
	$ejecuta = 0;

	//se realiza conexion a la base de datos
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		//Se crea insert de los datos ingresados
		$sqlConsultaRegistro = "SELECT * FROM propietarios WHERE Doc_propietario = '".$doc_Propietario."'";
		$resultadoRegistro = mysql_query($sqlConsultaRegistro, $conex);
		$fila = mysql_fetch_array($resultadoRegistro);
		// echo "<pre>"; print_r($fila); echo "<pre>"; die();
		//se valida si se edito el nombre para realizar el cambio en la base de datos
		if(($fila[2] != $nom_Propietario) AND ($nom_Propietario != "" OR $nom_Propietario != NULL)){
			$sql = "UPDATE propietarios SET Nom_propietario = '".$nom_Propietario."' WHERE Doc_propietario = '".$doc_Propietario."'";
			$resultado = mysql_query($sql, $conex);
			IF(!$resultado){
				$control = 1 ;
			}else{
				 $controlNom = $fila[2];
				 $ejecuta = 1;
			}
		}
		
		//se valida se se edito el primer apellido1
			if(($fila[3] != $ape1_Propietario) and ($ape1_Propietario != "" OR $ape1_Propietario != NULL)){
				$sql = "UPDATE propietarios SET Ape1_propietario = '".$ape1_Propietario."' WHERE Doc_propietario = '".$doc_Propietario."'";
				$resultado = mysql_query($sql, $conex);
				
				IF(!$resultado){
					$control = 1 ;
				}else{
					 $conttroApe1 = $fila[3];
					 $ejecuta = 1;
				}
			}
		
		
		//se valida si se edito el segundo a pellido
		if((($fila[4] != $ape2_Propietario) and ($ape2_Propietario != "" OR $ape2_Propietario != NULL)) OR ($fila['Ape2_propietario'] == "" AND $ape2_Propietario != "")){
			$sql = "UPDATE propietarios SET Ape2_propietario = '".$ape2_Propietario."' WHERE Doc_propietario = '".$doc_Propietario."'";
			$resultado = mysql_query($sql, $conex);
			IF(!$resultado){
				$control = 1 ;
			}else{
				$controlApe2 = $fila[4];
				$ejecuta = 1;
			}
			
		}
		if((($fila[5] != $dir_Propietario) and ($dir_Propietario != "" OR $dir_Propietario != NULL)) OR ($fila[5] == "" AND $dir_Propietario != "")){
			$sql = "UPDATE propietarios SET Direccion_propietario = '".$dir_Propietario."' WHERE Doc_propietario = '".$doc_Propietario."'";
			$resultado = mysql_query($sql, $conex);
			IF(!$resultado){
				$control = 1 ;
			}else{
				$controlDir = $fila[5];
				$ejecuta = 1;
			}
			
			
		}
		if((($fila[6] != $tel_Propietario) and ($tel_Propietario != "" OR $tel_Propietario != NULL)) OR ($fila[6] == "" AND $tel_Propietario != "")){
			$sql = "UPDATE propietarios SET Tel_propietario = '".$tel_Propietario."' WHERE Doc_propietario = '".$doc_Propietario."'";
			$resultado = mysql_query($sql, $conex);
			
			IF(!$resultado){
				$control = 1 ;
			}else{
				$controlTel = $fila[6];
				$ejecuta = 1;
			}
		}
		if((($fila[7] != $ref_Propietario) and ($ref_Propietario != "" OR $ref_Propietario != NULL)) OR ($fila[7] == "" AND $ref_Propietario != "")){
			$sql = "UPDATE propietarios SET Referncia = '".$ref_Propietario."' WHERE Doc_propietario = '".$doc_Propietario."'";
			$resultado = mysql_query($sql, $conex);
			IF(!$resultado){
				$control = 1 ;
			}else{
				$controlRef = $fila[7];
				$ejecuta = 1;
			}
		}
		
		echo $ejecuta.",".$controlNom.",".$conttroApe1.",".$controlApe2.",".$controlTel.",".$controlDir.",".$controlRef;
		
	}
?>