<?php
	include('conexion.php');
	if(isset($_POST['susername'])){
		$username=$_POST['susername'];
		$password=$_POST['spassword'];

		$query=$conexion->query("select * from tablauser where username='$username'");

		if ($query->num_rows>0){
			?>
  				<span>El usuario ya existe.</span>
  			<?php 
		}

		elseif (!preg_match("/^[a-zA-Z0-9_]*$/",$username)){
			?>
  				<span style="font-size:11px;">Usuario incorrecto. No se permiten espacios o caracteres especiales.</span>
  			<?php 
		}
		elseif (!preg_match("/^[a-zA-Z0-9_]*$/",$password)){
			?>
  				<span style="font-size:11px;">Contraseña incorrecta. No se permiten espacios o caracteres especiales.</span>
  			<?php 
		}
		else{
			$mpassword=md5($password);
			$conexion->query("insert into tablauser (username, password) values ('$username', '$mpassword')");
			?>
  				<span>Se ha dado de alta correctamente!.</span>
  			<?php 
		}
	}
?>