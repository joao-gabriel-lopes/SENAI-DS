<?php
require_once '../conexao.php';

$busca = isset($_GET["busca"]) ? $_GET["busca"] : "";
$buscaSQL = '%' . $busca . '%';

$conexao = Conectar();

$query = "
SELECT 
    POKEMON.NUMERO AS NUMERO,
    POKEMON.NOME AS NOME,
    POKEMON.ARQ_IMAGEM AS IMG_POKEMON,
    TIPO1.ARQ_IMAGEM AS IMG_TIPO1,
    TIPO2.ARQ_IMAGEM AS IMG_TIPO2
FROM
    POKEMON
    INNER JOIN TIPO AS TIPO1 ON POKEMON.TIPO_1 = TIPO1.ID
    LEFT JOIN TIPO AS TIPO2 ON POKEMON.TIPO_2 = TIPO2.ID
WHERE
    NUMERO = :ID OR
    POKEMON.NOME LIKE :NOME OR
    TIPO1.NOME LIKE :TIPO1_NOME OR
    TIPO2.NOME LIKE :TIPO2_NOME
GROUP BY
    POKEMON.NUMERO;
";

$stmt = $conexao->prepare($query);

$stmt->bindParam(":ID", $busca);
$stmt->bindParam(":NOME", $buscaSQL);
$stmt->bindParam(":TIPO1_NOME", $buscaSQL);
$stmt->bindParam(":TIPO2_NOME", $buscaSQL);

$stmt->execute();

$lista_pokemons = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <link rel="stylesheet" href="exibir_lista.css">
</head>

<body>
    <h1>Pokédex de Kanto</h1>

    <form method="get">
        <input type="text" name="busca" placeholder="Pesquise por número, nome ou tipo..." value="<?= $busca ?>">
        <button type="submit">Buscar</button>
    </form>

    <main>
        <?php foreach ($lista_pokemons as $pokemon): ?>
            <div>
                <div>
                    <span><?= $pokemon['NUMERO'] ?></span>
                    <span><?= $pokemon['NOME'] ?></span>
                </div>

                <img src="../imagens/pokemons/<?= $pokemon['IMG_POKEMON'] ?>" alt="<?= $pokemon['NOME'] ?>">

                <div>
                    <?php if ($pokemon['IMG_TIPO1']): ?>
                        <img src="../imagens/tipos/<?= $pokemon['IMG_TIPO1'] ?>" alt="Tipo 1">
                    <?php endif; ?>
                    <?php if ($pokemon['IMG_TIPO2']): ?>
                        <img src="../imagens/tipos/<?= $pokemon['IMG_TIPO2'] ?>" alt="Tipo 2">
                    <?php endif; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </main>
</body>

</html>