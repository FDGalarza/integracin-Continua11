<?php
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$registro = $_POST['registro'];
	$control = $_POST['control'];
	
	$conex = CrearConexion();
	if($control == 1){
			//////////////////////////////////////////////////////////////
			$sql = "SELECT * FROM propietarios WHERE Doc_propietario = '".$registro."'";
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
	}else if($control == 2){
		
		$sql = "SELECT * FROM registro_motos WHERE regM_placa = '".$registro."'";
		
			$resultado = mysql_query($sql, $conex);
			$fila = mysql_fetch_array($resultado);
			if(!$resultado){
				//no se ejcuto la consulta
				echo 033;
			}else{
				//sssecho "<pre>"; print_r($fila); die(" n"); echo "</pre>";
				//session_start();
				if($fila[2] != ""){
					//$_SESSION['placaVehiculo'] = "";
					echo $fila[0].",".$fila[1].",".$fila[2].",".$fila[3].",".$fila[4].",".$fila[5].",".$fila[5];
				}else{
					//$_SESSION['placaVehiculo'] = $registro;
					echo 1;
				}
			}	
	}else if($control == 3){
		
		$sql = "SELECT * FROM registro_mecanicos WHERE doc_Mecanico = '".$registro."'";
		
			$resultado = mysql_query($sql, $conex);
			$fila = mysql_fetch_array($resultado);
			//echo "<pre>"; print_r($fila); die(); echo "</pre>";
			if(!$resultado){
				//no se ejcuto la consulta
				echo 033;
			}else{
				//sssecho "<pre>"; print_r($fila); die(" n"); echo "</pre>";
				if($fila[2] != ""){
					echo $fila[0].",".$fila[1].",".$fila[2].",".$fila[3].",".$fila[4].",".$fila[5];
				}else{
					echo 1;
				}
			}	
	}else if( $control = 4){
				$sql = "SELECT * FROM usuarios WHERE Doc_Usuario = '".$registro."'";
			
				$resultado = mysql_query($sql, $conex);	
				//echo "<pre>"; print_r($sql); die(); echo "</pre>";
				$fila = mysql_fetch_array($resultado);
				
				if(!$resultado){
					//no se ejcuto la consulta
					echo 033;
				}else{
					//sssecho "<pre>"; print_r($fila); die(" n"); echo "</pre>";
					if($fila[2] != ""){
						echo $fila[0].",".$fila[1].",".$fila[2].",".$fila[3].",".$fila[4].",".$fila[5].",".$fila[6];
					}else{
						echo 1;
					}
				}	
	}


?>