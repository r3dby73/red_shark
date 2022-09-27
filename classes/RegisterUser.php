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

    public function checkLoginLen()
    {
        if(mb_strlen($this->login) < 4)
            $this->errors[] = 'incorrectLoginLen';
    }

    public function checkLogin()
    {
        for($i = 0; $i < mb_strlen($this->login); $i++)
            if(!ctype_alpha($this->login[$i]))
                if(!ctype_digit($this->login[$i]))
                {
                    $this->errors[] = 'incorrectLogin';
                    return;
                }
    }

    public function checkPasswordLen()
    {
        if(mb_strlen($this->password) < 8)
            $this->errors[] = 'incorrectPasswordLen';
    }

    public function checkStrongPassword()
    {
        if(ctype_alpha($this->password) || ctype_digit($this->password))
            $this->errors[] = 'weakPassword';
    }

    public function comparePasswords()
    {
        if(strcmp($this->password, $this->confirm_password) != 0)
            $this->errors[] = 'mismatchPasswords';
    }

    public function checkEmail()
    {
        if(!filter_var($this->email, FILTER_VALIDATE_EMAIL))
            $this->errors[] = 'incorrectEmail';
    }

    public function checkUniq()
    {
        $db_path = '../db/users.json';
        if(!file_exists($db_path))
            return;
        else
        {
            $db = json_decode(file_get_contents($db_path), true);
            if($login == $db['redShark']['users']['login'])
                $this->errors[] = 'existsLogin';
            else if($email == $db['redShark']['users']['email'])
                $this->errors[] = 'existsEmail';
        }
    }
}

?>