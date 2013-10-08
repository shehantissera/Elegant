<?php
$conn_error = 'Error connecting to Database.';
$mysql_host = 'localhost';//localhost
$mysql_user = 'root';//sa
$mysql_pass = '';//Admin123
$mysql_db = 'me_tours';//mericksontours

if(!@mysql_connect($mysql_host, $mysql_user, $mysql_pass) || !@mysql_select_db($mysql_db)){
	die($conn_error);
}

?>