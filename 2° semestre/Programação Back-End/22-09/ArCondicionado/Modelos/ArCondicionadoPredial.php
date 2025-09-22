<?php

require_once 'IArCondicionado.php';

class ArCondicionadoPredial implements IArCondicionado
{
    private $estadoAtual = "Desligado";
    private $temperaturaAtual = 20;
    private $temperaturaMinima;
    private $temperaturaMaxima;

    public function __construct($temperaturaMinima, $temperaturaMaxima)
    {
        $this->SetTemperaturaMinima($temperaturaMinima);
        $this->SetTemperaturaMaxima($temperaturaMaxima);
    }

    public function Ligar()
    {
        if ($this->estadoAtual == "Ligado") {
            return "O ar-condicionado já está ligado";
        } else {
            $this->estadoAtual = "Ligado";
        }
    }

    public function Desligar()
    {
        if ($this->estadoAtual == "Desligado") {
            return "O ar-condicionado já está desligado";
        } else {
            $this->estadoAtual = "Desligado";
        }
    }

    public function AumentarTemperatura()
    {
        if ($this->temperaturaAtual < $this->temperaturaMaxima) {
            $this->temperaturaAtual++;
            return "A temperatura aumentou 1°C <br>" . $this->VerificarTemperaturaAtual() . "°C";
        } else {
            return "A temperatura atual é a temperatura máxima, sendo " . $this->GetTemperaturaMaxima() . "°C";
        }
    }

    public function DiminuirTemperatura()
    {
        if ($this->temperaturaAtual > $this->temperaturaMinima) {
            $this->temperaturaAtual--;
            return "A temperatura diminuiu 1°C <br>" . $this->VerificarTemperaturaAtual() . "°C";
        } else {
            return "A temperatura atual é a temperatura mínima, sendo " . $this->GetTemperaturaMinima() . "°C";
        }
    }

    public function VerificarEstadoAtual()
    {
        return "O ar-condicionado está: " . $this->estadoAtual;
    }

    public function VerificarTemperaturaAtual()
    {
        return "O ar-condicionado está: " . $this->temperaturaAtual;
    }

    public function SetTemperaturaMinima($temperaturaMinima)
    {
        $this->temperaturaMinima = $temperaturaMinima;
    }

    public function SetTemperaturaMaxima($temperaturaMaxima)
    {
        $this->temperaturaMaxima = $temperaturaMaxima;
    }

    public function GetTemperaturaMinima()
    {
        return $this->temperaturaMinima;
    }

    public function GetTemperaturaMaxima()
    {
        return $this->temperaturaMaxima;
    }
}

?>