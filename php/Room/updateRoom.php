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
	if($_POST["roomNumber"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["deptCode"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["roomName"] == "" || null)
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
	$roomNumber = $_POST["roomNumber"];
	$deptCode = $_POST["deptCode"];
	$roomName = $_POST["roomName"];

	$stmt = $conn->prepare("UPDATE Rooms Set deptCode='$deptCode',roomName='$roomName' where roomNumber='$roomNumber'");
	$stmt->execute();

		$userName = $_SESSION["username"];
	$action = "Update Room";
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