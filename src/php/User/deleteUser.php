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
	elseif($_POST["userName"] == "" || null)
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
	$userName = $_POST["userName"].value();

	$stmt = $conn->prepare("DELETE from Users where userName=?");
$stmt->bind_param("s", $userName);
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();


}
?>