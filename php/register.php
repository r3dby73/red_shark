<?php

require_once '../classes/RegisterUser.php';

$login = trim(htmlspecialchars($_POST['login']));
$password = trim(htmlspecialchars($_POST['password']));
$confirm_password = trim(htmlspecialchars($_POST['confirm_password']));
$email = trim(htmlspecialchars($_POST['email']));

$user = new RegisterUser($login, $password, $confirm_password, $email);

$user->checkEmptyInputs();
$user->checkLoginLen();
$user->checkLogin();
$user->checkPasswordLen();
$user->checkStrongPassword();
$user->comparePasswords();
$user->checkEmail();
$user->checkUniq();

?>