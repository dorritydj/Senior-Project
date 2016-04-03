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
	if($_POST["deptCode"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["deptName"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["mapAsset"] == "" || null)
	{
		die("POST data invaild!");
	}
	else
	{
		return "True";
	}
}

//TODO
//encryption function call here here


if(validation() == "True")
{
	$deptCode = $_POST["deptCode"];
	$deptName = $_POST["deptName"];
	$mapAsset = $_POST["mapAsset"];

	$stmt = $conn->prepare("UPDATE Department SET deptName='$deptName',mapAsset='$mapAsset' WHERE deptCode='$deptCode')");
	$stmt->execute();

	$userName = $_SESSION["username"];
	$action = "Update Dept";
	$date = date('l jS \of F Y h:i:s A');

	$stmtLog = $conn->prepare("INSERT INTO Log (userId,timeStamp,action) VALUES (?,?,?)");
	$stmtLog->bind_param("sss", $userNameLog, $date, $action );
	$stmtLog->execute();

	$msg = "this is some message";
	$code = 2;
	$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
	echo json_encode($response);

	$stmtLog->close();
	$stmt->close();
	$conn->close();


}
?>