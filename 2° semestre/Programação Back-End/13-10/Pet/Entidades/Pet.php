<?php

require_once "conexao.php";

class Pet
{
    private $id;
    private $nome;
    private $idade;
    private $raca;
    private $descricao;

    function __construct($id, $nome, $idade, $raca, $descricao)
    {
        $this->id = $id;

        if ($id <= 0) {
            $this->nome = $nome;
            $this->idade = $idade;
            $this->raca = $raca;
            $this->descricao = $descricao;
        } else {
            $conexao = Conectar();

            $query = "SELECT NOME, IDADE, RACA, DESCRICAO FROM PET WHERE ID = :id";

            $stmt = $conexao->prepare($query);
            $stmt->bindParam(":id", $id);
            $stmt->execute();

            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->nome = $resultado["NOME"];
            $this->idade = $resultado["IDADE"];
            $this->raca = $resultado["RACA"];
            $this->descricao = $resultado["DESCRICAO"];
        }
    }

    function Salvar()
    {
        $conexao = Conectar();

        if ($this->id <= 0) {

            $query = "
            INSERT INTO PET(NOME, IDADE, RACA, DESCRICAO)
            VALUES (:nome, :idade, :raca, :descricao);
            ";

            $stmt = $conexao->prepare($query);

        } else {
            $query = "
            UPDATE PET SET
            NOME = :nome,
            IDADE = :idade,
            RACA = :raca,
            DESCRICAO = :descricao
            WHERE ID = :id
            ";

            $stmt = $conexao->prepare($query);
            $stmt->bindParam(":id", $this->id);
        }

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":idade", $this->idade);
        $stmt->bindParam(":raca", $this->raca);
        $stmt->bindParam(":descricao", $this->descricao);

        try {
            $stmt->execute();

            $id = $conexao->lastInsertId();

            header("Location: index.php?id=$id");
        } catch (Exception $e) {
            throw new Exception("Erro ao salvar: " . $e->getMessage());
        }

    }

    public function GetNome()
    {
        return $this->nome;
    }

    public function GetIdade()
    {
        return $this->idade;
    }

    public function GetRaca()
    {
        return $this->raca;
    }

    public function GetDescricao()
    {
        return $this->descricao;
    }

    public function SetNome($nome){
        $this->nome = $nome;
    }

    public function SetIdade($idade){
        $this->idade = $idade;
    }

    public function SetRaca($raca){
        $this->raca = $raca;
    }

    public function SetDescricao($descricao){
        $this->descricao = $descricao;
    }

}

?>