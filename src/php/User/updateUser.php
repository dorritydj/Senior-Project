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
	if($_POST["idUsers"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["userName"] == "" || null)
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
	$idUsers = $_POST["idUsers"].value();
	$userName = $_POST["userName"].value();
	$password = $_POST["password"].value();
	$authLevel = $_POST["authLevel"].value();
	$salt = $_POST["salt"].value();

	$stmt = $conn->prepare("UPDATE Users SET userName='$userName', password='$password', authLevel='$authLevel')");

$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();


}
?>