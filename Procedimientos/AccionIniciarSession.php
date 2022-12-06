<?php
	require_once('../controlador/conexion.php');
	//se capturan por el metodo post los valores enviados desde la funcion ajax
	$logUsuario = $_POST['usuario'];
	$PassUsuario = $_POST['password'];
	$passw = sha1($PassUsuario);
	$resultExiste = "";
	$filaExisteUsu = "";
	
	 
	$conex = CrearConexion();
	if(!$conex){
		echo 3;
	}else{
		$sql = "SELECT * FROM usuarios WHERE loggin = '".$logUsuario."' AND password = '".$passw."'";
		$result = mysql_query($sql, $conex);
		if(!$result){
			//se envia 1 al ajax para notificar que la cosultano se realizo
			echo 1;
			die();
		}else{
			$fila = mysql_fetch_array($result);
		//echo "<pre>"; print_r($fila); die("nada"); echo "</pre>";
			 
			if($fila[1] != ""){
				
				if($fila[6] == 1 AND $fila[7] < 3){
					session_start();
					$_SESSION['documento']= $fila[1];
					$_SESSION['nombre'] = $fila[2];
					$_SESSION['usuario'] = $fila[3];
					$_SESSION['rol'] = $fila[5];
					$_SESSION['intentos']= $fila[7];
					$_SESSION['password']= $fila[4];
					$_SESSION['placaVehiculo'] = "";
					$sqlEdita = "UPDATE usuarios SET intentos = 0 WHERE loggin = '".$logUsuario."'";
							$resultado = mysql_query($sqlEdita, $conex);
					echo 50;
				}else{
					//se envia 10 al ajax para identificar que el usuario se encuentra incactivo o bloqueado por intentos fallidos
					echo 10;
					 
					
				}
				
			}else{
				
				//se valida si usuario existe pero digito mal la contraseña
				$sqlUsuarioExiste = "SELECT * FROM usuarios WHERE loggin = '".$logUsuario."'";
				$resultExiste = mysql_query($sqlUsuarioExiste, $conex);
				if(!$resultExiste){
					//se envia 1 al ajax para notificar que la cosultano se realizo
					echo 1;
					//die();
				}else{
					
					$filaExisteUsu = mysql_fetch_array($resultExiste);
					
					if($filaExisteUsu[2] != ""){
						if($filaExisteUsu[7] < 3){
							$intentos = $filaExisteUsu[7] + 1;
							$sqlEdita = "UPDATE usuarios SET intentos = ".$intentos." WHERE loggin = '".$logUsuario."'";
							$resultado = mysql_query($sqlEdita, $conex);
							echo 20;
						}else{
							echo 100;
						}
						
					}else{
						
					}
					
				}
				
				
			}

		}
		
	}
	//SSdie();

?>