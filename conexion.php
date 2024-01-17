<?php

$conexion = new mysqli("localhost", "adminbase", "12345", "proyecto");

if ($conexion->connect_error) {
    die("Conexion fallida: " . $conexion->connect_error);
}
 
?>