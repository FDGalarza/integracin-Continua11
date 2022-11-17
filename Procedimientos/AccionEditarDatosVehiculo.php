<?php

	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$placa_vehiculo = $_POST['placaVei'];
	$marca_Vehiculo = $_POST['vehiculoMarca'];
	$tipo_vehiculo = $_POST['TipoVeh'];
	$modelo_vehiculo = $_POST['ModeloVeh'];
	$estado_vehiculo = $_POST['EstadoVei'];
	$fecha_actual = date("Y/m/d");
	$ejecuta = 0;
	$control = 0;
	$controlMarca = "";
	$controlTipo = "";
	$controlModelo = "";
	$controlestado = "";
	
	//se realiza conexion a la base de datos
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		 $sqlAnterior = "SELECT * FROM registro_motos WHERE regM_placa = '".$placa_vehiculo."'";
		 $resultAnterior = mysql_query($sqlAnterior, $conex);
		if(!$resultAnterior){

			echo 2;

		}else{

			$fila = mysql_fetch_array($resultAnterior);
		
			//se valida si se edito la marca del vehiculo
			if($fila[4] != $marca_Vehiculo AND $marca_Vehiculo != ""){
				try{
					$sqlEditarM = "UPDATE registro_motos SET id_marca = ".$marca_Vehiculo.", fecha_actulizacion = '".$fecha_actual."'  WHERE regM_placa = '".$placa_vehiculo."'";
					//SSprint_r($sqlEditar); die();
					$resutladoUpdate = mysql_query($sqlEditarM, $conex);
					if(!$resutladoUpdate){
						 throw new Exception(" - Se  presento un problema al editar la marca del viehiculo");
					}else{

						$ejecuta = 1;
						$controlMarca = $fila[4];

					}
					//$ejecuta = 1;
					//$e->getMessage("");
				}catch(Exception $e){
					
					echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
					die();
				}
				
			}
			//se valida si se edito el tipo de vehiculo
			if($fila[2] != $tipo_vehiculo AND $tipo_vehiculo != ""){
				try{
					$sqlEditarT = "UPDATE registro_motos SET id_model_vehiculo = '".$tipo_vehiculo."', fecha_actulizacion = '".$fecha_actual."'  WHERE regM_placa = '".$placa_vehiculo."'";
					//print_r($sqlEditarT); 
					$resutladoUpdate = mysql_query($sqlEditarT, $conex);
					if(!$resutladoUpdate){

						throw new Exception(" - No se edito el tipo del vehiculo");

					}else{

						$ejecuta = 1;
						$controlTipo = $fila[2];
	
					}
					
				}catch(Exception $e){
					 
					echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
					die();
				}
				
			}
			//se valida si se edito el modelo del cehiculo
			
			if($fila[3] != $modelo_vehiculo AND $modelo_vehiculo != ""){
				try{
					$sqlEditarT = "UPDATE registro_motos SET id_model_vehiculo = ".$modelo_vehiculo.", fecha_actulizacion = '".$fecha_actual."'  WHERE regM_placa = '".$placa_vehiculo."'";
					//print_r($sqlEditarT); 
					$resutladoUpdate = mysql_query($sqlEditarT, $conex);
					if(!$resutladoUpdate){
						throw new Exception(" - No se edito el modelo de vahiculo");
					}else{

						$ejecuta = 1;
						$controlModelo = $fila[3];
	
					}
					//$ejecuta = 1;
					
					
				}catch(Exception $e){
					 
					echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
					die();
				}
				
			}
			//se valida si se edito el estado del vehiculo
			if($fila[5] != $estado_vehiculo AND $estado_vehiculo != ""){
				try{
					$sqlEditarT = "UPDATE registro_motos SET regM_estado = '".$estado_vehiculo."', fecha_actulizacion = '".$fecha_actual."'  WHERE regM_placa = '".$placa_vehiculo."'";
					//print_r($sqlEditarT); 
					$resutladoUpdate = mysql_query($sqlEditarT, $conex);
					if(!$resutladoUpdate){
						throw new Exception(" - No se edito el estado de vahiculo");
					}else{
						$ejecuta = 1;
						$controlestado = $fila[5];
					}
					//$ejecuta = 1;
					
					
				}catch(Exception $e){
					 
					echo -99 .", - NO SE PUDO COMPLETAR LA EDICIÓN \n\n"."   ".$e->getMessage();
					die();
				}
				
			}
			
		}
		//se envian valores anteriores del registro editado a la fucnión ajax para registro en la bitacora
		echo $ejecuta.",".$controlestado.",".$controlModelo.",".$controlTipo.",".$controlMarca;
		
		
	}

?>