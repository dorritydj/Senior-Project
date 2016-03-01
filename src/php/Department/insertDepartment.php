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
	$deptCode = $_POST["deptCode"].value();
	$deptName = $_POST["deptName"].value();
	$mapAsset = $_POST["mapAsset"].value();

	$stmt = $conn->prepare("INSERT INTO Users (deptCode,deptName,mapAsset) 
VALUES (?,?,?)");
$stmt->bind_param("s", $deptCode);
$stmt->bind_param("s", $deptName);
$stmt->bind_param("s", $mapAsset);

$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();


}
?>