<?php
require_once 'IRobo.php';

abstract class Robo implements IRobo
{
    protected $anoLancamento;
    protected $modelo;
    protected $estaAtivo = false;

    public function __construct($anoLancamento, $modelo)
    {
        $this->SetAnoLancamento($anoLancamento);
        $this->SetModelo($modelo);
    }

    abstract public function Iniciar();

    public function Ativar()
    {
        if ($this->estaAtivo == true) {
            return "Este robô já está ativo";
        } else {
            $this->estaAtivo = true;
            return "Ativando robô";
        }
    }

    public function Desativar()
    {
        if ($this->estaAtivo == false) {
            return "Este robô já está inativo";
        } else {
            $this->estaAtivo = false;
            return "Desativando robô";
        }
    }

    public function SetAnoLancamento($anoLancamento)
    {
        $this->anoLancamento = $anoLancamento;
    }

    public function SetModelo($modelo)
    {
        $this->modelo = $modelo;
    }

    public function GetAnoLancamento()
    {
        return $this->anoLancamento;
    }

    public function GetModelo()
    {
        return $this->modelo;
    }

    public function GetEstaAtivo(){
        return $this->estaAtivo;
    }
}

?>