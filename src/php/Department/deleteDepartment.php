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

//TODO
//encryption function call here here


if(validation() == "True")
{
	$deptCode = $_POST["deptCode"].value();

	$stmt = $conn->prepare("DELETE from Department where deptCode=?");
$stmt->bind_param("s", $deptCode);
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();


}
?>