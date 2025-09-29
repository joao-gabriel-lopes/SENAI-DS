<?php
require_once 'Pessoa.php';

class Professor extends Pessoa{
    private $salario;
    private $desconto;

    public function __construct($salario, $desconto, $nome, $cpf, $dataNascimento) {
        parent::__construct($nome, $cpf, $dataNascimento);
        $this->salario = $salario;
        $this->desconto = $desconto;
    }

    public function CalcularPagamento(){
        return $this->salario - $this->desconto;
    }

}
?>