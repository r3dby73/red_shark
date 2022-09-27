<?php

class RegisterUser
{
    private string $login, $password, $confirm_password, $email;
    private $errors = [];
    
    public function __construct(string $login, string $password, string $confirm_password, string $email)
    {
        $this->login = $login;
        $this->password = $password;
        $this->confirm_password = $confirm_password;
        $this->email = $email;
    }

    public function getErrors() { return $this->errors; }

    public function checkEmptyInputs()
    {
        if($this->login == '')
            $this->errors[] = 'emptyLogin';
        if($this->password == '')
            $this->errors[] = 'emptyPassword';
        if($this->confirm_password == '')
            $this->errors[] = 'emptyConfirmPassword';
        if($this->email == '')
            $this->errors[] = 'emptyEmail';
    }
}

?>