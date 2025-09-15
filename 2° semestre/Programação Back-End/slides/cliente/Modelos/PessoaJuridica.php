<?php
require_once 'Pessoa.php';

class PessoaJuridica extends Pessoa
{
    private $dataFundacao;
    private $cnpj;

    public function __construct($nome, $fone, $ende, $data, $cnpj)
    {
        parent:: __construct($nome, $fone, $ende);
        
        $this->SetDataFundacao($data);
        $this->SetCnpj($cnpj);
    }

    public function SetDataFundacao($data){
        $this->dataFundacao = $data;
    }
    public function GetDataFundacao(){
        return $this->dataFundacao;
    }
    public function SetCnpj($parametro){
        $this->cnpj = $parametro;
    }
    public function ExibirDocumento(){
        return $this->cnpj;
    }
}
