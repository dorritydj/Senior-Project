<?php
require dirname(__FILE__).'/connection.php';
session_start();

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
	if($_SESSION["username"] == "" || $_SESSION["username"] == null)
	{
		die("Invaild session!");
	}
	if($_POST["idStaff"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["department"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffName"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffOffice"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffEmail"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffTitle"] == "" || null)
	{
		die("POST data invaild!");
	}
	elseif($_POST["staffPhoneNumber"] == "" || null)
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
	$department = $_POST["department"];
	$staffName = $_POST["staffName"];
	$staffOffice = $_POST["staffOffice"];
	$staffEmail = $_POST["staffEmail"];
	$staffTitle = $_POST["staffTitle"];
	$staffPhoneNumber = $_POST["staffPhoneNumber"];

	$stmt = $conn->prepare("INSERT INTO Staff (department,staffName, staffOffice, staffEmail,staffTitle,staffPhoneNumber) VALUES (?,?,?,?,?,?)");
	$stmt->bind_param("ssssss", $department, $staffName, $staffOffice, $staffEmail, $staffTitle, $staffPhoneNumber);
	$stmt->execute();

	$userName = $_SESSION["username"];
	$action = "Insert Staff";
	$date = date('l jS \of F Y h:i:s A');

	$stmtLog = $conn->prepare("INSERT INTO Log (userId,timeStamp,action) VALUES (?,?,?)");
	$stmtLog->bind_param("sss", $userNameLog, $date, $action );
	$stmtLog->execute();

	$msg = "this is some message";
	$code = 2;
	$response = array("success" => true, "response" => array("msg" => $msg, "code" => $code));
	echo json_encode($response);

	$stmtLog->close();
	$stmt->close();
	$conn->close();


}
?>