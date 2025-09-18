<?php
require_once 'ItemEstoque.php';

class Medicamento extends ItemEstoque
{
    private $principioAtivo;
    private $formaDeAplicacao;
    private $categoria;
    private $classificacao;
    private $exigeControleRigoroso;

    public function __construct($id, $nome, $descricao, $quantidade, $fornecedor, $dataFabricacao, $dataValidade, $nomeImagem, $principioAtivo, $formaDeAplicacao, $categoria, $classificacao, $exigeControleRigoroso)
    {
        Parent::__construct($id, $nome, $descricao, $quantidade, $fornecedor, $dataFabricacao, $dataValidade, $nomeImagem);
        $this->SetPrincipioAtivo($principioAtivo);
        $this->SetFormaDeAplicacao($formaDeAplicacao);
        $this->setCategoria($categoria);
        $this->setClassificacao($classificacao);
        $this->SetExigeControleRigoroso($exigeControleRigoroso);
    }

    public function SetPrincipioAtivo($principioAtivo)
    {
        $this->principioAtivo = $principioAtivo;
    }
    public function SetFormaDeAplicacao($formaDeAplicacao)
    {
        $this->formaDeAplicacao = $formaDeAplicacao;
    }

    public function SetCategoria($categoria)
    {
        $this->categoria = $categoria;
    }

    public function SetClassificacao($classificacao)
    {
        $this->classificacao = $classificacao;
    }

    public function SetExigeControleRigoroso($exigeControleRigoroso)
    {
        $this->exigeControleRigoroso = $exigeControleRigoroso;
    }

    public function GetPrincipioAtivo()
    {
        return $this->principioAtivo;
    }

    public function GetFormaDeAplicacao()
    {
        return $this->formaDeAplicacao;
    }

    public function GetCategoria()
    {
        return $this->categoria;
    }

    public function GetClassificacao()
    {
        return $this->classificacao;
    }

    public function GetExigeControleRigoroso()
    {
        return $this->exigeControleRigoroso;
    }
}

?>