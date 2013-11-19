<?php
	if(isset($_POST['nombre'])){

		$nombre = $_POST['nombre'];
		$apellido = $_POST['apellidos'];
		$password = $_POST['password'];

		echo "<h3>Hola $apellido, $nombre. Su nueva contrasena es $password</h3>";
	}
	else{

		$nombre = $_GET['nombre'];
		$apellido = $_GET['apellidos'];
		$password = $_GET['password'];

		$miArray = ["nombre"=>$nombre, "apellido"=>$apellido, "password"=>$password];
		print_r(json_encode($miArray));
	}

	
?>