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
	$stmt = $conn->stmt_init();
	$stmt = $conn->prepare("SELECT * FROM Users WHERE userName=?");
	$value = "azw4742";
	$stmt->bind_param("s", $value);

	$stmt->execute();
	$result = $stmt->get_result();
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) 
	{
    	$rows[] = $r;
	}
	echo json_encode($rows);

    mysqli_close($conn);
}
?>