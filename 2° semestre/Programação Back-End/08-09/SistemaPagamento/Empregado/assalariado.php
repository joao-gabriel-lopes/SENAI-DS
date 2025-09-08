<?php

require_once 'empregado.php';

class Assalariado extends Empregado
{
    private $valorSalarioBruto;
    private $valorDesconto;

    public function __construct($nome, $cpf, $numeroCelular, $valorSalarioBruto, $valorDesconto)
    {
        parent::__construct($nome, $cpf, $numeroCelular);
        $this->SetValorSalarioBruto($valorSalarioBruto);
        $this->SetValorDesconto($valorDesconto);
    }

    public function CalcularPagamento()
    {
        return $this->valorSalarioBruto - $this->valorDesconto;
    }

    public function SetValorSalarioBruto($valorSalarioBruto){
        $this->valorSalarioBruto = $valorSalarioBruto;
    }

    public function SetValorDesconto($valorDesconto){
        $this->valorDesconto = $valorDesconto;
    }

    public function GetValorSalarioBruto(){
        return $this->valorSalarioBruto;
    }

    public function GetValorDesconto(){
        return $this->valorDesconto;
    }
}

?>