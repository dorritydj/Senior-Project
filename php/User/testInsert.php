<?php
session_destroy();
session_start();
date_default_timezone_set('US/Eastern');

if (!isset($_SESSION['username']))
{
  $_SESSION['username'] = 'azw4742';

  session_write_close();
}
?>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script>
 function test() 
 {

            var userName = "aUser";
            var password = "password";
            var authLevel = "guest";
            var salt = "salty";

            var myKeyVals = {userName: userName, password: password, authLevel: authLevel, salt: salt};
            $.ajax(
                {
                    url: "insertUser.php",
                    type: "POST",
                    data: myKeyVals
                });
 }
</script>
</head>
<html>
<body>
<button type="button" id="locationSearch" onclick="test();">Test</button>
</body>
</html>