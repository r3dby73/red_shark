<?php

session_start();
require_once '../classes/Database.php';

$db = new Database();
$users = $db->readAll();

$response['users'] = $users['redShark']['users'];
if(isset($_SESSION['login']))
    $response['login'] = $_SESSION['login'];
else if(isset($_COOKIE['login']))
    $response['login'] = $_COOKIE['login'];

echo json_encode($response);

?>