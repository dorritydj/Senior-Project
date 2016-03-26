<?php
session_start();

$_SESSION['userName'] = $_POST['userName'];
$_SESSION['authLevel'] = $_POST['authLevel'];

?>