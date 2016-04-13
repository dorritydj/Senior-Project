<?php
ini_set('display_errors', 1);
require dirname(__FILE__).'/connection.php';
date_default_timezone_set('US/Eastern');
if(isset($_SESSION['username']))
{
	session_destroy();
}
$msg = "this is some message";
$code = 2;
// Check connection
if ($conn->connect_error)
{
  //$error = array('Error',$conn->connect_error)
  //return json_encode($error);
	$response = array("success" => false, "response" => array("msg" => $msg, "code" => $code));
	echo json_encode($response);
  	die("Connection failed: " . $conn->connect_error);
}
elseif ($_POST["userName"] == "" || $_POST["userName"] == null) 
{
	$response = array("success" => false, "response" => array("msg" => $msg, "code" => $code));
	echo json_encode($response);
 	die("Login failed: Invalid credenitals");
}
elseif ($_POST["password"] == "" || $_POST["password"] == null) 
{
	$response = array("success" => false, "response" => array("msg" => $msg, "code" => $code));
echo json_encode($response);
 	die("Login failed: Invalid credenitals");
}
else
{
$userName = $_POST["userName"];
$password = $_POST["password"];
$stmt = $conn->prepare("SELECT password, authLevel, deptCode from Users where userName=?");
$stmt->bind_param("s", $userName);
$stmt->execute();
$result = $stmt->get_result();
$rows = array();
while($r = mysqli_fetch_assoc($result)) 
{
    	$rows[] = $r;
}
	if($rows[0]['password'] == $password)
	{
		$authLevel = $rows[0]['authLevel'];
		$deptCode = $rows[0]['deptCode'];
		session_start();
		$_SESSION['username'] = $userName;
		$_SESSION['authLevel'] = $authLevel;
		$_SESSION['deptCode'] = $deptCode;
		session_write_close();
		$userName = $_SESSION["username"];
		$action = "Logged in";
		$date = date('l jS \of F Y h:i:s A');
		$stmtLog = $conn->prepare("INSERT INTO Log (userId,timeStamp,action) VALUES (?,?,?)");
		$stmtLog->bind_param("sss", $userName, $date, $action);
		$stmtLog->execute();
	    mysqli_close($conn);
	    header("Location: http://orange.ist.rit.edu/teamOrange/#/admin/choose");
	    exit();
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