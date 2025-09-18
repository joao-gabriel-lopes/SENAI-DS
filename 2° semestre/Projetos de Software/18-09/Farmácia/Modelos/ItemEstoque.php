<?php

abstract class ItemEstoque
{
    protected $id;
    protected $nome;
    protected $descricao;
    protected $quantidade;
    protected $fornecedor;
    protected $dataFabricacao;
    protected $dataValidade;    
    protected $nomeImagem;

    public function __construct($id, $nome, $descricao, $quantidade, $fornecedor, $dataFabricacao, $dataValidade, $nomeImagem)
    {
        $this->SetId($id);
        $this->SetNome($nome);
        $this->SetDescricao($descricao);
        $this->SetQuantidade($quantidade);
        $this->SetFornecedor($fornecedor);
        $this->SetDataFabricacao($dataFabricacao);
        $this->SetDataValidade($dataValidade);
        $this->SetNomeImagem($nomeImagem);
    }

    public function SetId($id)
    {
        $this->id = $id;
    }

    public function SetNome($nome)
    {
        $this->nome = $nome;
    }

    public function SetDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    public function SetQuantidade($quantidade)
    {
        $this->quantidade = $quantidade;
    }

    public function SetFornecedor($fornecedor)
    {
        $this->fornecedor = $fornecedor;
    }

    public function SetDataFabricacao($dataFabricacao)
    {
        $this->dataFabricacao = $dataFabricacao;
    }

    public function SetDataValidade($dataValidade)
    {
        $this->dataValidade = $dataValidade;
    }

    public function SetNomeImagem($nomeImagem){
        $this->nomeImagem = $nomeImagem;
    }

    public function GetId()
    {
        return $this->id;
    }

    public function GetNome()
    {
        return $this->nome;
    }

    public function GetDescricao()
    {
        return $this->descricao;
    }

    public function GetQuantidade()
    {
        return $this->quantidade;
    }

    public function GetFornecedor()
    {
        return $this->fornecedor;
    }

    public function GetDataFabricacao()
    {
        return $this->dataFabricacao;
    }

    public function GetDataValidade()
    {
        return $this->dataValidade;
    }

    public function GetNomeImagem(){
        return $this->nomeImagem;
    }

}

?>