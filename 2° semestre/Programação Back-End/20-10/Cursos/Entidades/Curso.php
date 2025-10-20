<?php
require_once "conexao.php";

class Curso
{
    private $id;
    private $nome;
    private $descricao;
    private $preco;
    private $cargaHoraria;

    public function __construct($id, $nome, $descricao, $preco, $cargaHoraria)
    {
        $this->id = $id;

        if ($id == null) {
            $this->nome = $nome;
            $this->descricao = $descricao;
            $this->preco = $preco;
            $this->cargaHoraria = $cargaHoraria;
        } else {
            $conexao = Conectar();

            $query = "SELECT NOME, DESCRICAO, PRECO, CARGA_HORARIA FROM CURSOS WHERE ID = :ID";

            $stmt = $conexao->prepare($query);
            $stmt->bindParam(":ID", $id);
            $stmt->execute();

            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->nome = $resultado["NOME"];
            $this->descricao = $resultado["DESCRICAO"];
            $this->preco = $resultado["PRECO"];
            $this->cargaHoraria = $resultado["CARGA_HORARIA"];
        }
    }

    public function Salvar()
    {
        $conexao = Conectar();

        if ($this->id == null) {
            try {
                $query = "
                INSERT INTO CURSOS (NOME, DESCRICAO, PRECO, CARGA_HORARIA)
                VALUES (:NOME, :DESCRICAO, :PRECO, :CARGA_HORARIA);
                ";

                $stmt = $conexao->prepare($query);

                $stmt->bindParam(":NOME", $this->nome);
                $stmt->bindParam(":DESCRICAO", $this->descricao);
                $stmt->bindParam(":PRECO", $this->preco);
                $stmt->bindParam(":CARGA_HORARIA", $this->cargaHoraria);

                $stmt->execute();

                echo "<p class='sucesso'>Curso salvo com sucesso!</p>";
            } catch (Exception $e) {
                echo "<p class='erro'>Erro ao salvar:" . $e->getMessage() . "</p>";
            }
        } else {
            try {

                $query = "
                UPDATE CURSOS SET
                NOME = :NOME,
                DESCRICAO = :DESCRICAO,
                PRECO = :PRECO,
                CARGA_HORARIA = :CARGA_HORARIA
                WHERE ID = :ID;
                ";

                $stmt = $conexao->prepare($query);

                $stmt->bindParam(":NOME", $this->nome);
                $stmt->bindParam(":DESCRICAO", $this->descricao);
                $stmt->bindParam(":PRECO", $this->preco);
                $stmt->bindParam(":CARGA_HORARIA", $this->cargaHoraria);
                $stmt->bindParam(":ID", $this->id);

                $stmt->execute();

                echo "<p class='sucesso'>Curso atualizado com sucesso!</p>";

                header("Location: index.php?id=" . $this->GetId());
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

    public function GetPreco()
    {
        return $this->preco;
    }

    public function GetCargaHoraria()
    {
        return $this->cargaHoraria;
    }

    public function SetNome($nome)
    {
        $this->nome = $nome;
    }

    public function SetDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    public function SetPreco($preco)
    {
        $this->preco = $preco;
    }

    public function SetCargaHoraria($cargaHoraria)
    {
        $this->cargaHoraria = $cargaHoraria;
    }

}
?>