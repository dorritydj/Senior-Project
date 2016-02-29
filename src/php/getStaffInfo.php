<?php
ini_set('display_errors', 1);
require dirname(__FILE__).'/connection.php';


// Check connection
if ($conn->connect_error)
{
  //$error = array('Error',$conn->connect_error)
  //return json_encode($error);
  die("Connection failed: " . $conn->connect_error);
} 
else
{
	$sql = "SELECT * FROM Staff WHERE staffName='Stephen Zilora'";
	$result = mysqli_query($conn, $sql);
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) 
	{
    	$rows[] = $r;
	}
	echo json_encode($rows);

    mysqli_close($conn);
}
?>