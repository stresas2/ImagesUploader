<?php
	$host = "localhost";
	$userName = "root";
	$password = "";
	$dbName = "upload_images";
	// Create database connection
	$db = new mysqli($host, $userName, $password, $dbName);
	// Check connection
	if ($db->connect_error) {
	die("Connection failed: " . $conn->connect_error);
	}
?>
