<?php
require_once "Dados/pokemons.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Lista de Pokémons</title>
    <link rel="stylesheet" href="listar_pokemons.css">
</head>

<?php

?>

<body>
    <div class="container">
        <h1>Pokédex - Lista de Pokémons</h1>

        <a href="exibir_pokemon.php" class="botao-adicionar">+ Adicionar Novo Pokémon</a>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Foto</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                
                <?php foreach($pokemons as $pokemon) { ?>
                
                <tr>
                    <td><?=$pokemon->GetId()?></td>
                    <td>
                        <img src="imagens/<?=$pokemon->GetNomeImagem()?>">
                    </td>
                    <td><?=$pokemon->GetNome()?></td>
                    <td>
                        <a href="exibir_pokemon.php?id=<?=$pokemon->GetId()?>" class="botao-visualizar">Visualizar</a>
                    </td>
                </tr>

                <?php } ?>
            </tbody>
        </table>
    </div>
</body>

</html>