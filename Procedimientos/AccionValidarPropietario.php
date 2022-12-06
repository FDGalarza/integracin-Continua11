<?php
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$doc_Propietario = $_POST['docPropietarios'];
	
	$conex = CrearConexion();
	$sql = "SELECT * FROM propietarios WHERE Doc_propietario = '".$doc_Propietario."'";
	$resultado = mysql_query($sql, $conex);
	$fila = mysql_fetch_array($resultado);
	if(!$resultado){
		//no se ejcuto la consulta
		echo 033;
	}else{
		
		if($fila[2] != ""){
			echo $fila[0].",".$fila[1].",".$fila[2].",".$fila[3].",".$fila[4].",".$fila[5].",".$fila[6].",".$fila[7];
		}else{
			echo 1;
		}
	}

?>