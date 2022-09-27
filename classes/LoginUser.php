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

    public function getErrors() { return $this->errors; }

    public function checkEmptyInputs()
    {
        if($this->login == '')
            $this->errors[] = 'emptyLogin';
        if($this->password == '')
            $this->errors[] = 'emptyPassword';
    }
}

?>