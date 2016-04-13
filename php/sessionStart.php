<?php
session_start();

$_SESSION['userName'] = $_POST['userName'];
$_SESSION['authLevel'] = $_POST['authLevel'];

$msg = "this is some message";
$code = 2;
$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
echo json_encode($response);


?>