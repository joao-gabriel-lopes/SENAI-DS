<?php
class Localizacao{
    private $nome;
    private $descricao;

    public function __construct($nome, $descricao){
        $this->nome = $nome;
        $this->descricao = $descricao;
    }

    public function Salvar(PDO $conexao){
        $query = "
        INSERT INTO LOCALIZACAO(NOME, DESCRICAO)
        VALUES (:nome, :descricao);
        ";

        $stmt = $conexao->prepare($query);

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":descricao", $this->descricao);

        $stmt->execute();
    }

}
?>