<?php

abstract class Empregado
{
    protected $nome;
    protected $cpf;
    protected $numeroCelular;

    public function __construct($nome, $cpf, $numeroCelular){
        $this->SetNome($nome);
        $this->SetCpf($cpf);
        $this->SetNumeroCelular($numeroCelular);
    }

    public abstract function CalcularPagamento();
    
    public function SetNome($nome)
    {
        $this->nome = $nome;
    }

    public function SetCpf($cpf){
        $this->cpf = $cpf;
    }

    public function SetNumeroCelular($numeroCelular){
        $this->numeroCelular = $numeroCelular;
    }

    public function GetNome()
    {
        return $this->nome;
    }

    public function GetCpf(){
        return $this->cpf;
    }

    public function GetNumeroCelular(){
        return $this->numeroCelular;
    }

}

?>