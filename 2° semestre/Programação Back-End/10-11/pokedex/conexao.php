<?php
function GetConexao()
{
    $servidor = "localhost:3306";
    $banco_dados = "POKEDEX";
    $usuario = "root";
    $senha = "root";

    $stringConexao = "mysql:host=$servidor;dbname=$banco_dados";

    try {
        $conexao = new PDO($stringConexao, $usuario, $senha);
        return $conexao;
    } catch (Exception $erro) {
        echo "Erro ao conectar no banco de dados: " . $erro->getMessage();
    }
}

function ExecutarSql($sql, $parametros, &$id = null)
{
    $conexao = GetConexao();
    $comando = $conexao->prepare($sql);

    foreach ($parametros as $parametro) {
        $comando->bindParam($parametro[0], $parametro[1]);
    }

    $comando->execute();
    
    if ($id == null) {
        $id = $conexao->lastInsertId();
    }    

    return $comando;
}
