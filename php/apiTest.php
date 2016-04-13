<?php
require dirname(__FILE__).'/connection.php';

if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
} 
else
{
$url = 'http://ist.rit.edu/~istdev/api/people/faculty';
$content = file_get_contents($url);
$json = json_decode($content, true);

foreach($json['faculty'] as $item) 
{
    if($item['office'] != "" && $item['office'] != null && $item['office'] != 'null')
    {
    	$office = $item['office'];
    	$name = $item['name'];
    	$phone = $item['phone'];
    	$email = $item['email'];
    	$title = $item['title'];
        $imageAsset = substr($item['imagePath'], 8);
    	$officePrint = substr($office, -4);
    	$query = "INSERT INTO Rooms (roomNumber, deptCode) VALUES ('$officePrint', 'ISTE')";
    	if ($conn->query($query) === TRUE) 
    	{
    		echo "New record created successfully";
		}		 
		else 
		{
    		echo "Error: " . $query . "<br>" . $conn->error;
		}
		$query = "INSERT INTO Staff (department, staffName, staffOffice, staffEmail, staffTitle, staffPhoneNumber, imageAsset) VALUES ('ISTE', '$name', '$officePrint', '$email', '$title', '$phone', '$imageAsset')";
		if ($conn->query($query) === TRUE) 
    	{
    		echo "New record created successfully";
		}		 
		else 
		{
    		echo "Error: " . $query . "<br>" . $conn->error;
		}

    }
}
}
$conn->close();

?>