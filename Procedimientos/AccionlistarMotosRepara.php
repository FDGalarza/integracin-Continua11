<?php
	require_once('../controlador/conexion.php');
	
	$placaVehi = "";
	if($_POST['placaVahiculo'] != ""){
		$placaVehi = $_POST['placaVahiculo'];
	}
	
	$sql = "";
	$registro = 1;
	$conex = CrearConexion();
	if(!$conex){
		//no hay conexion a la base de datos
		echo 1;
	}else{
		if($placaVehi != ""){
			$sql = "SELECT CONCAT(pro.Nom_Propietario,
								  ' ',
								  pro.Ape1_Propietario,
								  ' ',
								  pro.Ape2_propietario), 
						   CONCAT(regmec.Nom_mecanico,
								  ' ',
								  regmec.Ape1_mecanico,
								  ' ',
								  regmec.Ape2_mecnico), 
								  regm.regM_placa, 
								  rep.fecha_Entrada, 
								  rep.Hora_Entrada, 
								  rep.Hora_Salida, 
								  rep.Estado
								  
					FROM   propietarios pro, 
						   reparaciones rep, 
						   registro_mecanicos regmec, 
						   registro_motos regm
					WHERE  rep.cod_Propietario = pro.Cod_Propietario 
					AND    rep.Cod_Mecanico = regmec.Cod_Mecanico 
					AND    rep.Cod_placa = regm.id_registro_motos 
					AND    regm.regM_placa = '".$placaVehi."'";
					
		}else{
			$sql = "SELECT CONCAT(pro.Nom_Propietario,
								  ' ',
								  pro.Ape1_Propietario,
								  ' ',
								  pro.Ape2_propietario), 
						   CONCAT(regmec.Nom_mecanico,
								  ' ',
								  regmec.Ape1_mecanico,
								  ' ',
								  regmec.Ape2_mecnico), 
								  regm.regM_placa, 
								  rep.fecha_Entrada, 
								  rep.Hora_Entrada, 
								  rep.Hora_Salida, 
								  rep.Estado
								  
					FROM   propietarios pro, 
						   reparaciones rep, 
						   registro_mecanicos regmec, 
						   registro_motos regm
					WHERE  rep.cod_Propietario = pro.Cod_Propietario 
					AND    rep.Cod_Mecanico = regmec.Cod_Mecanico 
					AND    rep.Cod_placa = regm.id_registro_motos 
					AND    rep.Estado = 1";
		}
		
		$result = mysql_query($sql, $conex);
		if(!$result){
			echo 2;
		}else{
			
			?>
				<table class="table table-hover table-striped" >
					<thead>
						<tr>
							<th>Registro</th>
							<th>Placa Vehiculo</th>
							<th>Propietario</th>	
							<th>Mecanico</th>
							<th>Fecha</th>
							<th>Hora Entrada</th>
							<th>Hora salida</th>
							<th>Estado</th>
							<th></th>
						</tr>
					</thead>
						<tbody>
			<?php	
				
				while($fila = mysql_fetch_array($result)){
					//echo "<pre>"; print_r($fila); die(); echo "</pre>";
			?>
					<tr>
						<td><?php echo $registro;?></td>
						<td><?php echo $fila[2];?></td>
						<td><?php echo $fila[0];?></td>
						<td><?php echo $fila[1];?></td>
						<td><?php echo $fila[3];?></td>
						<td><?php if($fila[4] > '12:00'){
									 $horaEnt = $fila[4]-'12:00';
									 echo "0".$horaEnt.":00 pm";
								  }else{
									  echo $fila[4]." am";
								  }
							?></td>
						<td><?php if($fila[5] != ""){
										if($fila[5] > '12:00'){
											
											$horaSal = $fila[5] - '12:00';
											echo "0".$horaSal.":00 pm";
											
										}else{
											echo $fila[5]." am";
										}
									}
							?></td>
						<td><?php if($fila[6] == 1){ echo "TALLER";}else{echo "ENTREGADA";}?></td>
					<tr>
			<?php
			
					$registro++;
				}
		}
		
	}
?>
				</tbody>
</table>