<?php
require_once 'conexao.php';

class Pokemon
{
    private $id;
    private $nome;
    private $descricao;
    private $foto;

    public function __construct($id, $nome, $desc, $foto)
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->descricao = $desc;
        $this->foto = $foto;
    }

    function Salvar()
    {
        if ($this->id == null) {
            $sql =
                "INSERT INTO POKEMON 
                    (NOME, DESCRICAO, FOTO)
                 VALUES
                    (:P_NOME, :P_DESCRICAO, :P_FOTO)";

            $parametros = [
                [":P_NOME", $this->nome],
                [":P_DESCRICAO", $this->descricao],
                [":P_FOTO", $this->foto]
            ];
        } else {
            $sql =
                "UPDATE POKEMON 
                 SET
                    NOME = :P_NOME,
                    DESCRICAO = :P_DESCRICAO,
                    FOTO = :P_FOTO
                 WHERE
                    ID = :P_ID";

            $parametros = [
                [":P_NOME", $this->nome],
                [":P_DESCRICAO", $this->descricao],
                [":P_FOTO", $this->foto],
                [":P_ID", $this->id],
            ];
        }

        try {
            ExecutarSql($sql, $parametros, $this->id);

            header("Location: exibir_pokemon.php?id=" . $this->id);
        } catch (Exception $erro) {
            echo "Erro ao salvar: " . $erro->getMessage();
        }
    }

    function Deletar()
    {
        try {
            $parametro = [[":ID", $this->id]];
            ExecutarSql("DELETE FROM POKEMON WHERE ID = :ID", $parametro);
        } catch (Exception $e) {
            echo "Erro ao deletar: " . $e->getMessage();
        }
    }
}
