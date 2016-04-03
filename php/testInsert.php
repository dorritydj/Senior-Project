<?php
require dirname(__FILE__).'/connection.php';


// Check connection
if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
} 
else
{
	mysqli_query($conn,"INSERT INTO Users (idUsers,userName,password, authLevel, salt) 
VALUES (201212912,'azw4742','2012asd12912','admin','soSalty')");
}



?>