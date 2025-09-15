<?php

abstract class Pessoa{
    private $nome;
    private $telefone;
    private $endereco;

    public function __construct($nome, $telefone, $endereco){
        $this->SetNome($nome);
        $this->setTelefone($telefone);
        $this->setEndereco($endereco);
    }

    public function SetNome($nome){
        $this->nome = $nome;
    }

    public function SetTelefone($telefone){
        $this->telefone = $telefone;
    }

    public function SetEndereco($endereco){
        $this->endereco = $endereco;
    }

    public function GetNome(){
        return $this->nome;
    }

    public function GetTelefone(){
        return $this->telefone;
    }

    public function GetEndereco(){
        return $this->endereco;
    }

    abstract public function ExibirDocumento();
}

?>