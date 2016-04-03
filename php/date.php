<?php
session_start();
?>
<?php
$_SESSION["username"] = "azw4742";

echo date('l jS \of F Y h:i:s A');

echo($_SESSION["username"]);
?>