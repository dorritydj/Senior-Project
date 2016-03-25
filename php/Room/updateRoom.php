<?php
require dirname(__FILE__).'/connection.php';


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
	$roomNumber = $_POST["roomNumber"].value();
	$deptCode = $_POST["deptCode"].value();
	$roomName = $_POST["roomName"].value();

	$stmt = $conn->prepare("UPDATE Rooms Set deptCode='$deptCode',roomName='$roomName' where roomNumber='$roomNumber'");
	$stmt->execute();

$msg = "this is some message";
$code = 2;
$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
echo json_encode($response);


$stmt->close();
$conn->close();


}
?>