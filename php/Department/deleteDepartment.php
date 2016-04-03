<?php
require dirname(__FILE__).'/connection.php';
session_start();
date_default_timezone_set('US/Eastern');

// Check connection
if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
} 
else
{
	validation();
}




function validation()
{
	if($_SESSION["username"] == "" || $_SESSION["username"] == null)
	{
		die("Invaild session!");
	}
	elseif($_POST["deptCode"] == "" || null)
	{
		die("POST data invaild!");
	}
	else
	{
		return "True";
	}
}


if(validation() == "True")
{
	$deptCode = $_POST["deptCode"];

	$stmt = $conn->prepare("DELETE from Department where deptCode=?");
	$stmt->bind_param("s", $deptCode);
	$stmt->execute();

	$userName = $_SESSION["username"];
	$action = "Delete Dept";
	$date = date('l jS \of F Y h:i:s A');

	$stmtLog = $conn->prepare("INSERT INTO Log (userId,timeStamp,action) VALUES (?,?,?)");
	$stmtLog->bind_param("sss", $userNameLog, $date, $action );
	$stmtLog->execute();

	$msg = "this is some message";
	$code = 2;
	$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
	echo json_encode($response);

	$stmtLog -> close();
	$stmt->close();
	$conn->close();
}
?>