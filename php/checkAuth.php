<?php

session_start();

if(isset($_SESSION['login']) || isset($_COOKIE['login']))
    $response['status'] = true;
else
    $response['status'] = false;

echo json_encode($response);

?>