<?php
require_once "Entidades/Pokemon.php";

$conexao = Conectar();

$query = "select * from pokemon";

$stmt = $conexao->prepare($query);
$stmt->execute();

$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

$pokemons = [];

foreach ($resultado as $pokemon) {
    array_push($pokemons, new Pokemon(
        $pokemon["ID"], 
        $pokemon["NOME"], 
        $pokemon["DESCRICAO"], 
        $pokemon["NOME_IMAGEM"])
    );
}
?>