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
	elseif($_POST["roomNumber"] == "" || null)
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

	$stmt = $conn->prepare("DELETE from Rooms where roomNumber=?");
$stmt->bind_param("s", $roomNumber);
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();


}
?>