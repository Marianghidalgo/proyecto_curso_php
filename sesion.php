<?php
	session_start();
	include('conexion.php');

	$query=$conexion->query("select * from tablauser where userid='".$_SESSION['user']."'");
	$row=$query->fetch_array();

	$user=$row['username'];
?>