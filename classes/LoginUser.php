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

    public function isExists()
    {
        $db_path = '../db/users.json';
        $salt = 'Red_Shark';
        if(file_exists($db_path))
        {
            $db = json_decode(file_get_contents($db_path), true);
            foreach($db['redShark']['users'] as $user)
                if(($this->login == $user['login']) && (md5($salt.$this->password) == $user['password']))
                    return;
        }
        $this->errors[] = 'incorrectInput';
    }
}

?>