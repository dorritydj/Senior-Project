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
$roomNumber = $_POST["roomNumber"];
$stmt = $conn->prepare("SELECT from Rooms where roomNumber=?");
$stmt->bind_param("s", $roomNumber);
$stmt->execute();
$result = mysqli_query($conn, $sql);
$rows = array();
while($r = mysqli_fetch_assoc($result)) 
{
    	$rows[] = $r;
}
	$msg = "this is some message";
	$code = 2;
	$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code), "data" => $rows );
	echo json_encode($response);
    mysqli_close($conn);
}
?>