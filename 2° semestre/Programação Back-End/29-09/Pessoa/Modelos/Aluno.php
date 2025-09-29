<?php
require_once 'Pessoa.php';

class Aluno extends Pessoa{
    private $ra;
    private $nota1;
    private $nota2;
    private $valorAjudaCusto;

    public function __construct($ra, $nota1, $nota2, $valorAjudaCusto, $nome, $cpf, $dataNascimento) {
        parent::__construct($nome, $cpf, $dataNascimento);
        $this->ra = $ra;
        $this->nota1 = $nota1;
        $this->nota2 = $nota2;
        $this->valorAjudaCusto = $valorAjudaCusto;
    }

    public function CalcularPagamento() {
        return $this->valorAjudaCusto;
    }

    public function CalcularNota() {
        $media = ($this->nota1 + $this->nota2) / 2;
        return $media;
    }

    public function GetRa() {
        return $this->ra;
    }
}
?>