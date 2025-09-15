<?php
    abstract class Pessoa{
        private $nome;
        private $telefone;
        private $endereco;

        public function __construct($nome, $fone, $ende){
            $this->SetNome($nome);
            $this->SetTelefone($fone);
            $this->SetEndereco($ende);
        }

        public function SetNome($parametro){
            $this->nome = $parametro;
        }
        public function GetNome(){
            return $this->nome;
        }

        public function SetTelefone($parametro){
            $this->telefone = $parametro;
        }
        public function GetTelefone(){
            return $this->telefone;
        }

        public function SetEndereco($parametro){
            $this->endereco = $parametro;
        }
        public function GetEndereco(){
            return $this->endereco;
        }

        abstract function ExibirDocumento();
    }
?>