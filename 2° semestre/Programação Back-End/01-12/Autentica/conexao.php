<?php
function GetConexao()
{
    $host = "127.0.0.1:3306";
    $banco = "banco_autentica";
    $usuario = "root";
    $senha = "root";

    $stringConnection = "mysql:host=$host;dbname=$banco";

    try {
        $conexao = new PDO($stringConnection, $usuario, $senha);
        return $conexao;
    } catch (Exception $e) {
        throw ($e);
    }
}
