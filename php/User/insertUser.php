<?php
ini_set("display_errors", true);
require dirname(__FILE__).'/connection.php';
session_start();

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
	if($_SESSION['username'] == "" || $_SESSION['username'] == null)
	{
		echo("Invaild session!" . $_SESSION['username']);
		die();
	}
	if($_POST["userName"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["password"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["authLevel"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["salt"] == "" || null)
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
	$userName = $_POST["userName"];
	$password = $_POST["password"];
	$authLevel = $_POST["authLevel"];
	$salt = $_POST["salt"];

	$stmt = $conn->prepare("INSERT INTO Users (userName,password, authLevel, salt) VALUES (?,?,?,?)");
$stmt->bind_param("ssss", $userName, $password, $authLevel, $salt);
$stmt->execute();

	$userNameLog = $_SESSION["username"];
	$action = "Insert User";
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