<?php

class LoginUser
{
    private string $login, $password;
    private $errors = [];

    public function __construct(string $login, string $password)
    {
        $this->login = $login;
        $this->password = $password;
    }
}

?>