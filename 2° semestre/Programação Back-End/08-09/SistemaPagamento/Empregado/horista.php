<?php

require_once 'empregado.php';

class Horista extends Empregado
{
    private $valorPorHora;
    private $horasTrabalhadas;

    public function __construct($nome, $cpf, $numeroCelular, $valorPorHora, $horasTrabalhadas)
    {
        parent::__construct($nome, $cpf, $numeroCelular);
        $this->SetValorPorHora($valorPorHora);
        $this->SetHorasTrabalhadas($horasTrabalhadas);
    }

    public function CalcularPagamento()
    {
        return $this->valorPorHora * $this->horasTrabalhadas;
    }

    public function SetValorPorHora($valorPorHora){
        $this->valorPorHora = $valorPorHora;
    }

    public function SetHorasTrabalhadas($horasTrabalhadas){
        $this->horasTrabalhadas = $horasTrabalhadas;
    }

    public function GetValorPorHora(){
        return $this->valorPorHora;
    }

    public function GetHorasTrabalhadas(){
        return $this->horasTrabalhadas;
    }
}

?>