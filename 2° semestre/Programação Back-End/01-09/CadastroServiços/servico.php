<?php

class Serviço
{
    private $nome;
    private $descricao;
    private $valorHora;
    private $diasGarantia;

    public function __construct($Nome, $Descricao, $ValorHora, $DiasGarantia)
    {
        $this->SetNome($Nome);
        $this->SetDescricao($Descricao);
        $this->SetValorHora($ValorHora);
        $this->SetDiasGarantia($DiasGarantia);
    }

    public function SetNome($parametroNome): void
    {
        if (strlen($parametroNome) > 2) {
            $this->nome = $parametroNome;
        } else {
            throw new InvalidArgumentException("O nome deve ter mais de dois caracteres");
        }
    }

    public function SetDescricao($parametroDescricao): void
    {
        if (strlen($parametroDescricao) > 10) {
            $this->descricao = $parametroDescricao;
        } else {
            throw new InvalidArgumentException("A descrição deve ter mais de dez caracteres");
        }
    }

    public function SetValorHora($parametroValorHora): void
    {
        if ($parametroValorHora >= 0) {
            $this->valorHora = $parametroValorHora;
        } else {
            throw new InvalidArgumentException("O valor por hora não deve ser menor que zero");
        }
    }

    public function SetDiasGarantia($parametroDiasGarantia): void
    {
        if (strlen($parametroDiasGarantia) >= 0) {
            $this->diasGarantia = $parametroDiasGarantia;
        } else {
            throw new InvalidArgumentException("O prazo da garantia não pode ser menor que zero");
        }
    }

    public function GetNome(): string
    {
        return $this->nome;
    }

    public function GetDescricao(): string
    {
        return $this->descricao;
    }

    public function GetValorHora()
    {
        return $this->valorHora;
    }

    public function GetDiasGarantia(): int
    {
        return $this->diasGarantia;
    }

    public function GetValor($minutos){
        $horas = $minutos / 60;
        $valor = $horas * $this->valorHora;
        return $valor;
    }
}

?>