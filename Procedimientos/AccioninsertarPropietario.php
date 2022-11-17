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
	
	//se realiza conexion a la base de datos
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		//Se crea insert de los datos ingresados
		$sql = "INSERT INTO propietarios(Doc_propietario, Nom_propietario, Ape1_propietario, Ape2_Propietario, Direccion_propietario, 
		Tel_propietario, Referncia, fecha_creacion) VALUES('".$doc_Propietario."', '".$nom_Propietario."','".$ape1_Propietario."', '".$ape2_Propietario."',
		'".$dir_Propietario."', '".$tel_Propietario."', '".$ref_Propietario."', '".$fecha_actual."')";
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