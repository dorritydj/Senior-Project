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
	if($_POST["idStaff"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["department"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffName"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffOffice"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffEmail"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffTitle"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffPhoneNumber"] == "" || null)
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
	$idStaff = $_POST["idStaff"].value();
	$department = $_POST["department"].value();
	$staffName = $_POST["staffName"].value();
	$staffOffice = $_POST["staffOffice"].value();
	$staffEmail = $_POST["staffEmail"].value();
	$staffTitle = $_POST["staffTitle"].value();
	$staffPhoneNumber = $_POST["staffPhoneNumber"].value();

	$stmt = $conn->prepare("UPDATE Staff SET department='$department',staffName='$staffName',staffOffice='$staffOffice',staffEmail='$staffEmail',staffTitle='$staffTitle' WHERE idStaff='$idStaff'");
	$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();


}
?>