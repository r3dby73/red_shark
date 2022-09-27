<?php

session_start();

unset($_SESSION['login']);
setcookie('login', null, -1);

if (!isset($_SESSION['login'], $_COOKIE['login']))
    $response['status'] = true;
else
    $response['status'] = false;

echo json_encode($response);

?>