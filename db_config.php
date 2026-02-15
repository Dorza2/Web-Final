<?php

$servername = "localhost";
$username = "danagr2_admin"; 
$password = "b3EmkZBxaC";     
$dbname = "danagr2_db_bibliophile";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>