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
		session_start();
		if (!isset($_SESSION['username']))
		{
		  $_SESSION['username'] = $userName;

		  session_write_close();
		}
		$userName = $_SESSION["username"];
		$action = "Logged in";
		$date = date('l jS \of F Y h:i:s A');

		$stmtLog = $conn->prepare("INSERT INTO Log (userId,timeStamp,action) VALUES (?,?,?)");
		$stmtLog->bind_param("sss", $userName, $date, $action);
		$stmtLog->execute();
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