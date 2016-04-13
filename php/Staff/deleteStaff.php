<?php
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
	if($_SESSION["username"] == "" || $_SESSION["username"] == null)
	{
		die("Invaild session!");
	}
	elseif($_POST["idStaff"] == "" || null)
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
	$idStaff = $_POST["idStaff"];

	$stmt = $conn->prepare("DELETE from Staff where idStaff=?");
	$stmt->bind_param("s", $idStaff);
	$stmt->execute();

	$userName = $_SESSION["username"];
	$action = "Delete Staff";
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