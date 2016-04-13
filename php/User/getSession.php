<?php
session_start();
if(isset($_SESSION['username']))
{
	$userName = $_SESSION['username'];
	$authLevel = $_SESSION['authLevel'];
	$deptCode = $_SESSION['deptCode'];
	$msg = "this is some message";
	$code = 2;
	$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code), "data" =>array("userName" => $userName, "authLevel" => $authLevel, "deptCode" => $deptCode));
	echo json_encode($response);
}
else
{
	$msg = "this is some message";
	$code = 2;
	$response = array("success" => false, "response" => array("msg" => $msg, "code" => $code));
	echo json_encode($response);
}


?>