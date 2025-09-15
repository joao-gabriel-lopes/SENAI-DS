<?php

require_once 'Pessoa.php';

class PessoaFisica extends Pessoa {
    private $cpf;
    private $dataNascimento;
    private $sexo;

    public function __construct($nome, $telefone, $endereco, $cpf, $dataNascimento, $sexo) {
        parent::__construct($nome, $telefone, $endereco);
        $this->SetCpf($cpf);
        $this->SetDataNascimento($dataNascimento);
        $this->SetSexo($sexo);
    }

    public function SetCpf($cpf) {
        $this->cpf = $cpf;
    }

    public function SetDataNascimento($dataNascimento) {
        $this->dataNascimento = $dataNascimento;
    }

    public function SetSexo($sexo) {
        $this->sexo = $sexo;
    }

    public function GetDataNascimento() {
        return $this->dataNascimento;
    }

    public function GetSexo() {
        return $this->sexo;
    }

    public function ExibirDocumento(){
        return $this->cpf;
    }
}

?>