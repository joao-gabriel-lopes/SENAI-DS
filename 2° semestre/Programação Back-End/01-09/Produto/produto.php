<?php

class Produto
{
    private $nome;
    private $valorUnitario;
    private $dataVencimento;

    public function __construct($nome, $valorUnitario, $dataVencimento)
    {
        $this->SetNome($nome);
        $this->setValorUnitario($valorUnitario);
        $this->setDataVencimento($dataVencimento);
    }

    public function SetNome($parametroNome)
    {
        if (strlen($parametroNome) >= 3) {
            $this->nome = $parametroNome;
        } else {
            throw new InvalidArgumentException("O nome do produto deve possuir no mínimo 3 caracteres");
        }
    }

    public function SetValorUnitario($parametroValorUnitario): void
    {
        if ($parametroValorUnitario > 0) {
            $this->valorUnitario = $parametroValorUnitario;
        } else {
            throw new InvalidArgumentException("O valor unitário não deve ser menor que zero");
        }
    }

    public function SetDataVencimento($parametroDataVencimento): void
    {
        $this->dataVencimento = $parametroDataVencimento;
    }

    public function GetNome(): string
    {
        return $this->nome;
    }

    public function GetValorUnitario()
    {
        return $this->valorUnitario;
    }

    public function GetDataVencimento()
    {
        return date_format($this->dataVencimento, "d/m/Y");
    }

    public function VerificarSeEstaVencido()
    {
        $dataHoje = new DateTime();

        if ($this->dataVencimento > $dataHoje) {
            echo "Válido";
        } else {
            echo "Vencido";
        }
    }
}

?>