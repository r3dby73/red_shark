<?php

session_start();
require_once '../classes/LoginUser.php';

$login = trim(htmlspecialchars($_POST['login']));
$password = trim(htmlspecialchars($_POST['password']));

$user = new LoginUser($login, $password);

$user->checkEmptyInputs();
$user->isExists();

if(count($user->getErrors()) == 0)
{
    $_SESSION['login'] = $login;
    setcookie('login', $login, 0);
}

echo json_encode(['errors' => $user->getErrors()]);

?>