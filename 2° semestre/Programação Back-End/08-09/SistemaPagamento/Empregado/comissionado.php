<?php

require_once 'empregado.php';

class Comissionado extends Empregado
{
    private $valorTotalVendas;
    private $percentualComissao;

    public function __construct($nome, $cpf, $numeroCelular, $valorTotalVendas, $percentualComissao)
    {
        parent::__construct($nome, $cpf, $numeroCelular);
        $this->SetValorTotalVendas($valorTotalVendas);
        $this->SetPercentualComissao($percentualComissao);
    }

    public function CalcularPagamento()
    {
        return $this->valorTotalVendas * $this->percentualComissao / 100;
    }

    public function SetValorTotalVendas($valorTotalVendas)
    {
        $this->valorTotalVendas = $valorTotalVendas;
    }

    public function SetPercentualComissao($percentualComissao)
    {
        $this->percentualComissao = $percentualComissao;
    }

    public function GetValorTotalVendas()
    {
        return $this->valorTotalVendas;
    }

    public function GetPercentualComissao()
    {
        return $this->percentualComissao;
    }

}

?>