<?php

require_once 'Pessoa.php';

class PessoaJuridica extends Pessoa {
    private $cnpj;
    private $dataFundacao;

    public function __construct($nome, $telefone, $endereco, $cnpj, $dataFundacao) {
        parent::__construct($nome, $telefone, $endereco);
        $this->SetCnpj($cnpj);
        $this->SetDataFundacao($dataFundacao);
    }

    public function SetCnpj($cnpj) {
        $this->cnpj = $cnpj;
    }

    public function SetDataFundacao($dataFundacao) {
        $this->dataFundacao = $dataFundacao;
    }

    public function GetDataFundacao() {
        return $this->dataFundacao;
    }

    public function ExibirDocumento(){
        return $this->cnpj;
    }
}

?>