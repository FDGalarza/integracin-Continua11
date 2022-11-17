<?php
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$codPlacaVehiculo = $_POST['cod_vehiculo'];
	$estado;
	$fechaIngreso = "";
	$horaIngreso = "";
	$nombrePropietario = "";
	$nombreMecanico = "";
	$codPropietario = 0;
	$codMecanico = 0;
	$placaVehiculo = "";
	$observa = "";
	$reparacion = "";
	$HoraSalida = "";
	$ejecuta = 0;
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		$sql = "SELECT * FROM reparaciones WHERE cod_placa = ".$codPlacaVehiculo." ORDER BY fecha_Entrada, Hora_Entrada DESC LIMIT 1";
		$result = mysql_query($sql, $conex);
		if(!$result){
			echo 2;
		}else{
			$fila = mysql_fetch_array($result);
			//echo "<pre>"; print_r($fila); die(); echo "</pre>";
			$estado = $fila[0];
			$fechaIngreso = $fila[4];
			$HoraSalida = $fila[6];
			$horaIngreso = $fila[5]; 
			$reparacion = $fila[7];
			if($horaIngreso > '12,00'){
				$horaIngreso = $horaIngreso - '12:00';
				$horaIngreso = "0".$horaIngreso.":00 PM";
			}else{
				$horaIngreso = $horaIngreso." AM";
			}
			
			if($HoraSalida != "" OR $HoraSalida != NULL){
				if($HoraSalida > '12,00'){
					$HoraSalida = $HoraSalida - '12:00';
					$HoraSalida = "0".$HoraSalida.":00 PM";
				}else{
					$HoraSalida = $HoraSalida." AM";
				}
			}
			
			$sqlaux = "SELECT CONCAT( pro.Nom_Propietario,' ', 
										  pro.Ape1_Propietario,' ', 
										  pro.Ape2_propietario) AS nomPropietario, 
								   pro.Cod_Propietario, 
								   rgm.regM_placa, 
								   CONCAT(rgmec.Nom_Mecanico,' ', 
										  rgmec.Ape1_Mecanico,' ', 
										  rgmec.Ape2_Mecnico) AS nomMecanico, 
								   rgmec.Cod_Mecanico
							FROM   propietarios pro, 
								   reparaciones rep,
								   registro_motos rgm,
								   registro_mecanicos rgmec 
							WHERE  pro.Cod_Propietario = rep.cod_Propietario 
							AND    rgm.id_registro_motos = rep.Cod_placa 
							AND    rep.Cod_placa = 7
							AND    rep.Cod_Mecanico = rgmec.Cod_Mecanico";
				$resultaux = mysql_query($sqlaux, $conex);
				if(!$resultaux){
					echo 2;
				}else{
					$filaAux = mysql_fetch_array($resultaux);
					$nombrePropietario = $filaAux[0]; 
					$codPropietario = $filaAux[1]; 
					$placaVehiculo = $filaAux[2]; 
					$nombreMecanico = $filaAux[3]; 
					$codMecanico = $filaAux[4]; 
				}
			
			if($fila[9] == 1){
				
				$ejecuta = 1;
				
			}else if($fila[9] == 2){
				$ejecuta = 88;
			}
			
			//SS$newformat = date('d/m/Y',$fechaIngreso);
			echo $ejecuta.",".$nombrePropietario.",".$codPropietario.",".$placaVehiculo.",".$nombreMecanico.",".$codMecanico.",".$fechaIngreso.",".$horaIngreso.",".$fila[8].",".$fila[9].",".$HoraSalida.",".$reparacion;
	
		}
		
	}
?>