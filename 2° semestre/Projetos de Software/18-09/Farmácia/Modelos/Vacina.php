<?php
require_once 'ItemEstoque.php';

class Vacina extends ItemEstoque
{
    private $doencaAlvo;
    private $tipoAgenteImunizante;
    private $umidadeDeConservacao;
    private $temperaturaDeConservacao;

    public function __construct($id, $nome, $descricao, $quantidade, $fornecedor, $dataFabricacao, $dataValidade, $nomeImagem, $doencaAlvo, $tipoAgenteImunizante, $umidadeDeConservacao, $temperaturaDeConservacao)
    {
        parent::__construct($id, $nome, $descricao, $quantidade, $fornecedor, $dataFabricacao, $dataValidade, $nomeImagem);
        $this->SetDoencaAlvo($doencaAlvo);
        $this->SetTipoAgenteImunizante($tipoAgenteImunizante);
        $this->SetUmidadeDeConservacao($umidadeDeConservacao);
        $this->SetTemperaturaDeConservacao($temperaturaDeConservacao);
    }

    public function SetDoencaAlvo($doencaAlvo)
    {
        $this->doencaAlvo = $doencaAlvo;
    }

    public function SetTipoAgenteImunizante($tipoAgenteImunizante){
        $this->tipoAgenteImunizante = $tipoAgenteImunizante;
    }

    public function SetUmidadeDeConservacao($umidadeDeConservacao){
        $this->umidadeDeConservacao = $umidadeDeConservacao;
    }

    public function SetTemperaturaDeConservacao($temperaturaDeConservacao)
    {
        $this->temperaturaDeConservacao = $temperaturaDeConservacao;
    }

    public function GetDoencaAlvo()
    {
        return $this->doencaAlvo;
    }

    public function GetTipoAgenteImunizante(){
        return $this->tipoAgenteImunizante;
    }

    public function GetUmidadeDeConservacao(){
        return $this->umidadeDeConservacao;
    }

    public function GetTemperaturaDeConservacao()
    {
        return $this->temperaturaDeConservacao;
    }

}

?>