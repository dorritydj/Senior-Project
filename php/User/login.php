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
$userName = $_POST["userName"];
$password = $_POST["password"];
$stmt = $conn->prepare("SELECT password from Users where userName=?");
$stmt->bind_param("s", $userName);
$stmt->execute();
$result = mysqli_query($conn, $sql);
$rows = array();
while($r = mysqli_fetch_assoc($result)) 
{
    	$rows[] = $r;
}
	if($rows['password'] == $password)
	{
		$msg = "this is some message";
		$code = 2;
		$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
		echo json_encode($response);
	    mysqli_close($conn);
	}
	else
	{
		$msg = "this is some message";
		$code = 2;
		$response = array("success" => false, "response" => array("msg" => $msg, "code" => $code));
		echo json_encode($response);
	    mysqli_close($conn);
	}
}
?>