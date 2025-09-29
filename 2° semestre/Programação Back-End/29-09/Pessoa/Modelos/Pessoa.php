<?php
require_once 'IPessoa.php';

abstract class Pessoa implements IPessoa{
    protected $nome;
    protected $cpf;
    protected $dataNascimento;

    abstract public function CalcularPagamento();

    public function __construct($nome, $cpf, $dataNascimento){
        $this->nome = $nome;
        $this->SetCpf($cpf);
        $this->dataNascimento = new DateTime($dataNascimento);
    }

    public function SetCpf($cpf){
        if(strlen($cpf) == 11){
            $this->cpf = $cpf;
        } else{
            throw new Exception('CPF não válido!');
        }
    }

    public function CalcularIdade(){
        $dataHoje = new DateTime('now');
        return $dataHoje->diff($this->dataNascimento)->y;
    }

    public function GetNome(){
        return $this->nome;;
    }

    public function GetCpf(){
        return $this->cpf;
    }

    public function GetDataNascimento(){
        return $this->dataNascimento;
    }
}

?>