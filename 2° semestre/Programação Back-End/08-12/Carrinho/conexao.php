<?php

function Conectar()
{
    $host = "localhost"; 
    $dbname = "mercearia"; 
    $port = "3306"; 
    $user = "root"; 
    $password = "";
    
    $dsn = "mysql:host=$host;port=$port;dbname=$dbname";

    try {
        $pdo = new PDO($dsn, $user, $password);
        return $pdo;

    } catch (PDOException $e) {
        echo $e->getMessage();

    }
}
?>