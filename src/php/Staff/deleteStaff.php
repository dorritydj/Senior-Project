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
	$idStaff = $_POST["idStaff"].value();

	$stmt = $conn->prepare("DELETE from Staff where idStaff=?");
$stmt->bind_param("s", $idStaff);
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();


}
?>