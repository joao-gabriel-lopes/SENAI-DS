<!DOCTYPE html>
<html lang="pt-br">

<?php

require_once 'Entidades/pokemon.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $pokemon = new Pokemon($_POST['id'], null, null, null);
    $pokemon->Deletar();
}

require_once 'conexao.php';
$lista_pokemons =  ExecutarSql("SELECT ID, NOME, FOTO FROM POKEMON", [])->fetchAll();
?>

<head>
    <meta charset="UTF-8">
    <title>Lista de Pokémons</title>
    <link rel="stylesheet" href="listar_pokemons.css">
</head>

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
                    <th>Visualizar</th>
                    <th>Deletar</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($lista_pokemons as $pokemon) { ?>
                    <tr>
                        <td> <?= $pokemon['ID'] ?> </td>
                        <td>
                            <img src="imagens/<?= $pokemon['FOTO'] ?>">
                        </td>
                        <td> <?= $pokemon['NOME'] ?> </td>
                        <td>
                            <a
                                href="exibir_pokemon.php?id=<?= $pokemon['ID'] ?>"
                                class="botao-visualizar">Visualizar
                            </a>
                        </td>
                        <td>
                            <form method="POST">
                                <input type="hidden" name="id" id="id" value="<?= $pokemon['ID'] ?>">
                                <input type="submit" class="botao-visualizar" value="Deletar">
                            </form>
                        </td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</body>

</html>