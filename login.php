<?php 
	include('conexion.php');
	session_start();
	if(isset($_POST['username'])){
		$username=$_POST['username'];
		$password=md5($_POST['password']);

		$query=$conexion->query("select * from tablauser where username='$username' and password='$password'");

		if ($query->num_rows>0){
			$row=$query->fetch_array();
			$_SESSION['user']=$row['userid']; 
		}
		else{
			?>
  				<span>Usuario no encontrado.</span>
  			<?php 
		}
	}
?>