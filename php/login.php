<?php

require_once '../classes/LoginUser.php';

$login = trim(htmlspecialchars($_POST['login']));
$password = trim(htmlspecialchars($_POST['password']));

$user = new LoginUser($login, $password);

$user->checkEmptyInputs();
$user->isExists();

echo json_encode(['errors' => $user->getErrors()]);

?>