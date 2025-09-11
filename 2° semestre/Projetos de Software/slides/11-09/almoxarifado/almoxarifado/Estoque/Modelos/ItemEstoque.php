<?php
require_once 'Categoria.php';

class ItemEstoque {
    private $id;
    private $categoria;         // Objeto da classe Categoria
    private $nome;
    private $descricao;
    private $quantidadeMinima;
    private $codigo;
    private $nomeImagem;

    public function __construct($id, $categoria, $nome, $descricao, $quantidadeMinima, $codigo, $nomeImagem) {
        $this->id = $id;
        $this->categoria = $categoria;
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->quantidadeMinima = $quantidadeMinima;
        $this->codigo = $codigo;
        $this->nomeImagem = $nomeImagem;
    }

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function getCategoria() {
        return $this->categoria;
    }

    public function setCategoria($categoria) {
        $this->categoria = $categoria;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function getDescricao() {
        return $this->descricao;
    }

    public function setDescricao($descricao) {
        $this->descricao = $descricao;
    }

    public function getQuantidadeMinima() {
        return $this->quantidadeMinima;
    }

    public function setQuantidadeMinima($quantidadeMinima) {
        $this->quantidadeMinima = $quantidadeMinima;
    }

    public function getCodigo() {
        return $this->codigo;
    }

    public function setCodigo($codigo) {
        $this->codigo = $codigo;
    }

    public function getNomeImagem() {
        return $this->nomeImagem;
    }

    public function setNomeImagem($nomeImagem) {
        $this->nomeImagem = $nomeImagem;
    }
}
?>
