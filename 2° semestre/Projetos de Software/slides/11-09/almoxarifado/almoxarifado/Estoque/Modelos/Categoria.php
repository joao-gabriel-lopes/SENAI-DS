<?php

class Categoria
{
    private $id;
    private $localizacao; // Objeto da classe Localizacao
    private $nome;
    private $descricao;

    // Construtor
    public function __construct($id, $localizacao, $nome, $descricao)
    {
        $this->id = $id;
        $this->localizacao = $localizacao;
        $this->nome = $nome;
        $this->descricao = $descricao;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getLocalizacao()
    {
        return $this->localizacao;
    }

    public function setLocalizacao($localizacao)
    {
        $this->localizacao = $localizacao;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    // Getter e Setter para Descricao
    public function getDescricao()
    {
        return $this->descricao;
    }

    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }
}
