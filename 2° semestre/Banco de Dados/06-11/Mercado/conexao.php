<?php

$host = "localhost:3306";
$banco_dados = "MERCADO";
$usuario = "root";
$senha = "root";
$conexao = new PDO("mysql:host=$host;dbname=$banco_dados", $usuario, $senha);