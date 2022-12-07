<?php
	require_once('..\controlador\conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	//$codPlacaVehiculo = $_POST['cod_vehiculo'];
	
	if($_POST['documento'] != ""){
		$docAlumno = $_POST['documento'];
		
		$estado;
		$ejecuta = 0;
		$conex = CrearConexion();
		if(!$conex){
			//no hay conexion a la base de datos
			echo 1;
		}else{
			$sql = "SELECT  IAL.idAlumnos,
							IAL.nomAlumnos,
							IAL.apeAlumnos,
							IG.descGrado,
							IAS.descasignatura,
							INO.nota
					FROM    ic_notas INO,
							ic_alumnos IAL,
							ic_grados ig,
							ic_asignatura IAS
					WHERE   IAL.idAlumnos = ".$docAlumno."
					AND     IAL.idAlumnos = INO.idAlumnos
					AND     IG.idGrado = INO.idGrado
					AND     IAS.idasignatura = INO.idAsignatura;";
					
			$result = mysqli_query($conex, $sql);
			if(!$result){
				echo 2;
			}else{
				$cosulta = mysqli_fetch_array($result);
				if(!empty($cosulta)){
					
				
				
				
					?>

					<html>
						<body>
							<h1>Notas alumnos</h1>
							<table border="1" padding="10px">
								<tr>
									<th>Documento&nbsp;&nbsp;&nbsp;</th>
									<th>Nombre alumno&nbsp;&nbsp;&nbsp;</th>
									<th>Apellidos&nbsp;&nbsp;&nbsp;</th>
									<th>Grado&nbsp;&nbsp;&nbsp;</th>
									<th>Asignatura&nbsp;&nbsp;&nbsp;</th>
									<th>Nota&nbsp;&nbsp;&nbsp;</th>
								</tr>

								<?php

									$concat = '';

									while($fila = mysqli_fetch_array($result)) {
										
										//Concatenamos las tablas en una variable, también podriamos hacer el "echo" directamente
										$concat .= '<tr>';
										$concat .= '<td>' . $fila['idAlumnos'] .'&nbsp;&nbsp;&nbsp;</td>';
										$concat .= '<td>' . $fila['nomAlumnos'] .'&nbsp;&nbsp;&nbsp;</td>';
										$concat .= '<td>' . $fila['apeAlumnos'] .'&nbsp;&nbsp;&nbsp;</td>';
										$concat .= '<td>' . $fila['descGrado'] .'&nbsp;&nbsp;&nbsp;</td>';
										$concat .= '<td>' . $fila['descasignatura'] .'&nbsp;&nbsp;&nbsp;</td>';

										//Number format es únicamente para reemplazar el punto por la coma que se utiliza en europa para los decimales. 
										$concat .= '<td>' . number_format($fila['nota'], 2, ',','.') .'&nbsp;&nbsp;&nbsp;</td>';
										$concat .= '</tr>';
									}

									echo $concat;
								?>

							</table>
						</body>
					</html>
					<?php
				}else{
					echo "No se encontraron registros con el número de documento ingresado: ".$docAlumno;
				}
				
			}
			
		}
	}else{
		echo 99;
		echo "Debe ingresar un número de documento";
	}
?>