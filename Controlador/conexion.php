<?php
//se construye la fucnion que realizara la conexion con el servidor de base de datos
	function CrearConexion(){
		
		//conexion al servidor
		$conexion = mysql_connect("localhost", "root", "") OR DIE("No es posible establecer conexión con el servidor"); 
		
		//se selecciona la base de datos a la cual se realizara la conexion
		mysql_select_db($conexion, "ic_proyecto") OR DIE("No es posible establecer conexion con la base de datos");
		//mysqli_select_db("localhost","root","","ic_proyecto") OR DIE("No es posible establecer conexion con la base de datos");
		return $conexion;
	}
?>