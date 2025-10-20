<?php
require_once "conexao.php";

class Pokemon
{
    private $id;
    private $nome;
    private $descricao;
    private $nomeImagem;

    public function __construct($id, $nome, $descricao, $nomeImagem)
    {
        $this->id = $id;

        if ($id == null) {
            $this->nome = $nome;
            $this->descricao = $descricao;
            $this->nomeImagem = $nomeImagem;
        } else {
            $conexao = Conectar();

            $query = "SELECT NOME, DESCRICAO, NOME_IMAGEM FROM POKEMON WHERE ID = :ID";

            $stmt = $conexao->prepare($query);
            $stmt->bindParam(":ID", $id);
            $stmt->execute();

            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->nome = $resultado["NOME"];
            $this->descricao = $resultado["DESCRICAO"];
            $this->nomeImagem = $resultado["NOME_IMAGEM"];
        }
    }

    public function Salvar()
    {
        $conexao = Conectar();

        if ($this->id == null) {
            try {
                $query = "
                INSERT INTO POKEMON (NOME, DESCRICAO, NOME_IMAGEM)
                VALUES (:NOME, :DESCRICAO, :NOME_IMAGEM);
                ";

                $stmt = $conexao->prepare($query);

                $stmt->bindParam(":NOME", $this->nome);
                $stmt->bindParam(":DESCRICAO", $this->descricao);
                $stmt->bindParam(":NOME_IMAGEM", $this->nomeImagem);

                $stmt->execute();

                echo "<p class='sucesso'>Pokemon salvo com sucesso!</p>";
            } catch (Exception $e) {
                echo "<p class='erro'>Erro ao salvar:" . $e->getMessage() . "</p>";
            }
        } else {
            try {

                $query = "
                UPDATE POKEMON SET
                NOME = :NOME,
                DESCRICAO = :DESCRICAO,
                NOME_IMAGEM = :NOME_IMAGEM
                WHERE ID = :ID;
                ";

                $stmt = $conexao->prepare($query);

                $stmt->bindParam(":NOME", $this->nome);
                $stmt->bindParam(":DESCRICAO", $this->descricao);
                $stmt->bindParam(":NOME_IMAGEM", $this->nomeImagem);
                $stmt->bindParam(":ID", $this->id);

                $stmt->execute();

                echo "<p class='sucesso'>Pokemon atualizado com sucesso!</p>";
            } catch (Exception $e) {
                echo "<p class='erro'>Erro ao atualizar: " . $e->getMessage() . "</p>";
            }
        }

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

    public function GetNomeImagem()
    {
        return $this->nomeImagem;
    }

    public function SetNome($nome){
        $this->nome = $nome;
    }

    public function SetDescricao($descricao){
        $this->descricao = $descricao;
    }

    public function SetNomeImagem($nomeImagem){
        $this->nomeImagem = $nomeImagem;
    }

}
?>