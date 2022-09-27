<?php

class Database
{
    private string $db_path = '../db/users.json';
    private string $salt = 'Red_Shark';

    public function addNewUser(string $login, string $password, string $email)
    {
        if(!file_exists($this->db_path))
        {
            $db['redShark']['users'] = [[
                'login' => $login,
                'password' => md5($this->salt.$password),
                'email' => $email
            ]];
            file_put_contents($this->db_path, json_encode($db));
        }

        else
        {
            $db = json_decode(file_get_contents($this->db_path), true);
            $db['redShark']['users'][] = [
                'login' => $login,
                'password' => md5($this->salt.$password),
                'email' => $email
            ];
            file_put_contents($this->db_path, json_encode($db));
        }
    }
}

?>