<?php
ini_set('display_errors', 1);
require dirname(__FILE__).'/connection.php';
date_default_timezone_set('US/Eastern');
session_start();



// Check connection
if ($conn->connect_error)
{
  //$error = array('Error',$conn->connect_error)
  //return json_encode($error);
  die("Connection failed: " . $conn->connect_error);
} 
else
{
$userName = "azw4742";
$stmt = $conn->prepare("SELECT password from Users where userName=?");
$stmt->bind_param("s", $userName);
$stmt->execute();
$result = $stmt->get_result();
$rows = array();
while($r = mysqli_fetch_assoc($result)) 
{
    	$rows[] = $r;
}
$testValue = $rows[0]['password'];
echo $testValue;
}
?>
<head>

</head>
<body>
</body>