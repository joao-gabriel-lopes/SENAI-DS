<?php
require_once 'Pessoa.php';

class PessoaFisica extends Pessoa {
    private $dataNascimento;
    private $sexo;
    private $cpf;

    public function __construct($p1, $p2, $p3, $p4, $p5, $p6)
    {
        parent:: __construct($p1, $p2, $p3);

        $this->SetDataNascimento($p4);
        $this->SetSexo($p5);
        $this->SetCpf($p6);
    }

    public function SetDataNascimento($data){
        $this->dataNascimento = $data;
    }
    public function GetDataNascimento(){
        return $this->dataNascimento;
    }
    public function SetSexo($s){
        $this->sexo = $s;
    }
    public function GetSexo(){
        return $this->sexo;
    }
    public function SetCpf($c){
        $this->cpf = $c;
    }
    public function ExibirDocumento(){
        return $this->cpf;
    }
}
