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

$msg = "this is some message";
$code = 2;
$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
echo json_encode($response);

$stmt->close();
$conn->close();


}
?>