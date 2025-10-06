<?php
require_once 'Robo.php';

class RoboAtendimento extends Robo
{
    public function __construct($anoLancamento, $modelo)
    {
        parent::__construct($anoLancamento, $modelo);
    }

    public function Iniciar()
    {
        if ($this->GetEstaAtivo() == true) {
            return "Olá, atendimento iniciado";
        } else {
            return "Ative o robô para realizar a ação!";
        }
    }

}

?>