<?php
require_once "conexao.php";

function Autenticar($email, $senha)
{
    if (empty($email) || empty($senha)) {
        return false;
    }

    $sql = "SELECT ID, NOME FROM USUARIO WHERE EMAIL = ? AND SENHA = ?";
    $conexao = GetConexao();

    $comando = $conexao->prepare($sql);
    $comando->execute([$email, $senha]);

    $usuario = $comando->fetch();

    return $usuario ?: false;
}
