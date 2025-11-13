<?php
function Conectar()
{
    $host = "localhost";
    $dbname = "EXEMPLOS_SP";
    $port = "3306";
    $user = "root";
    $password = "root";

    $dsn = "mysql:host=$host;port=$port;dbname=$dbname";

    try {
        $pdo = new PDO($dsn, $user, $password);
        return $pdo;

    } catch (PDOException $e) {
        echo "Erro ao conectar no banco de dados: " . $e->getMessage();

    }
}
?>