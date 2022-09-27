<?php

require_once '../classes/RegisterUser.php';
require_once '../classes/Database.php';

$login = trim(htmlspecialchars($_POST['login']));
$password = trim(htmlspecialchars($_POST['password']));
$confirm_password = trim(htmlspecialchars($_POST['confirm_password']));
$email = trim(htmlspecialchars($_POST['email']));

$user = new RegisterUser($login, $password, $confirm_password, $email);
$db = new Database();

$user->checkEmptyInputs();
$user->checkLoginLen();
$user->checkLogin();
$user->checkPasswordLen();
$user->checkStrongPassword();
$user->comparePasswords();
$user->checkEmail();
$user->checkUniq();

if(count($user->getErrors()) == 0)
    $db->addNewUser($login, $password, $email);

$response['errors'] = $user->getErrors();
echo json_encode($response);

?>