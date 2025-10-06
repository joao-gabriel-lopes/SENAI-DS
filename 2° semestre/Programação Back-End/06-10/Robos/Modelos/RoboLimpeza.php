<?php
require_once 'Robo.php';

class RoboLimpeza extends Robo
{
    private $dataUltimaVarredura;

    public function __construct($anoLancamento, $modelo)
    {
        parent::__construct($anoLancamento, $modelo);
    }

    public function Iniciar()
    {
        if ($this->GetEstaAtivo() == true) {
            $this->dataUltimaVarredura = new DateTime("now");
            return "Iniciando limpeza do local";
        } else {
            return "Ative o robô para realizar a ação!";
        }
    }

    public function GetDataUltimaVarredura()
    {
        return $this->dataUltimaVarredura;
    }
}

?>