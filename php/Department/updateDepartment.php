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

$msg = "this is some message";
$code = 2;
$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
echo json_encode($response);

$stmt->close();
$conn->close();


}
?>