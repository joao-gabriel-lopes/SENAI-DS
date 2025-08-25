<?php

class Usuario
{
    private $nome;
    private $sobrenome;
    private $login;
    private $email;
    private $senha;

    public function __construct($nome, $sobrenome, $login, $email, $senha)
    {
        $this->setNome($nome);
        $this->setSobrenome($sobrenome);
        $this->setLogin($login);
        $this->setEmail($email);
        $this->setSenha($senha);
    }

    public function getNomeCompleto(){
        return $this->nome . " " . $this->sobrenome;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getSobrenome()
    {
        return $this->sobrenome;
    }

    public function setSobrenome($sobrenome)
    {
        $this->sobrenome = $sobrenome;
    }

    public function getLogin()
    {
        return $this->login;
    }

    public function setLogin($login)
    {
        $this->login = $login;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getsenha()
    {
        return $this->senha;
    }

    public function setSenha($senha)
    {
        if (strlen($senha) > 6) {
            $this->senha = $senha;
        } else {
            throw new Exception("Insira uma senha válida!");
        }
    }
}

?>