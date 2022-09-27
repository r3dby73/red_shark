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
}

?>