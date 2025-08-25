<?php
//Criação da classe
    class ContaBancaria {
        //atributos privados, para não serem acessados fora da classe
        private $numero;
        private $agencia;

        //construtor para atribuir valores ao carregar objeto na memória
        public function __construct($numero, $agencia) {
            $this->setNumero(numero: $numero);
            $this->setAgencia(agencia: $agencia);
        }
        //método público, que pode ser acessado fora da classe e impõe um número válido
        public function setNumero($numero): void { 
            if ($numero < 0) {
                throw new Exception(message: "O número da conta não pode ser negativo");
            };
            $this->numero = $numero;
        }

        //método público para exibir o número fora da classe
        public function getNumero(): int {
            return $this->numero;   
        }

        //método público, que pode ser acessado fora da classe e impõe agência válida
        public function setAgencia($agencia): void {
            if ($agencia < 0) {
                throw new Exception(message:"Agência não pode ser negativa");
            }
            $this->agencia = $agencia;
        }

        //método público para exibir a agência fora da classe
        public function getAgencia(): int {
            return $this->agencia;
        }
    }
?>