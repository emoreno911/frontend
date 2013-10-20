<?php
	if(isset($_POST['nombre']) || isset($_GET['nombre'])){

		$nombre = $_POST['nombre'];
		$apellido = $_POST['apellidos'];
		$password = $_POST['password'];

		// $nombre = $_GET['nombre'];
		// $apellido = $_GET['apellidos'];
		// $password = $_GET['password'];

		echo "<h3>Hola $apellido, $nombre. Su nueva contrasena es $password</h3>";
	}
	else{
		echo "<h3>Pagina llamada desde Hipervinculo</h3>";
	}

	
?>