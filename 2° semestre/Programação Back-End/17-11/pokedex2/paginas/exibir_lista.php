<?php
//1 - REALIZAR A CONEXÃO COM O BANCO DE DADOS
$host = 'localhost:3306';
$banco_dados = 'pokedex';
$usuario = 'root';
$senha = 'root';

$str_conexao = "mysql:host=$host;dbname=$banco_dados";
$conexao = new PDO($str_conexao, $usuario, $senha);

//2 - ESCREVER A PESQUISA DA LISTA DE POKEMONS
$sql = "SELECT
	        POKEMON.NUMERO,
            POKEMON.NOME,
            POKEMON.ARQ_IMAGEM AS IMG_POKEMON,
            TIPO_1.ARQ_IMAGEM AS IMG_TIPO1,
            TIPO_2.ARQ_IMAGEM AS IMG_TIPO2
        FROM POKEMON 
        LEFT JOIN TIPO AS TIPO_1 ON POKEMON.TIPO_1 = TIPO_1.ID
        LEFT JOIN TIPO AS TIPO_2 ON POKEMON.TIPO_2 = TIPO_2.ID
        WHERE
            POKEMON.NUMERO = :P_NUMERO
            OR POKEMON.NOME LIKE :P_NOME
            OR TIPO_1.NOME LIKE :T1_NOME
            OR TIPO_2.NOME LIKE :T2_NOME";

if (isset($_GET['busca'])) {
    $busca = $_GET['busca'];
    $p_numero = $_GET['busca'];
    $p_nome = "%" . $_GET['busca'] . "%";
    $t1_nome = "%" . $_GET['busca'] . "%";
    $t2_nome = "%" . $_GET['busca'] . "%";
} else {
    $busca = "";
    $p_numero = "";
    $p_nome = "";
    $t1_nome = "";
    $t2_nome = "";
}

$comando = $conexao->prepare($sql);
$comando->bindParam(":P_NUMERO", $p_numero);
$comando->bindParam(":P_NOME", $p_nome);
$comando->bindParam(":T1_NOME", $t1_nome);
$comando->bindParam(":T2_NOME", $t2_nome);

$comando->execute();
$lista_pokemons = $comando->fetchAll();
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

                <a href="../imagens/pokemons/<?= $pokemon['IMG_POKEMON'] ?>" download>
                    <img src="../imagens/pokemons/<?= $pokemon['IMG_POKEMON'] ?>" alt="<?= $pokemon['NOME'] ?>">
                </a>
                <div>
                    <?php if ($pokemon['IMG_TIPO1']): ?>
                        <a href="../imagens/tipos/<?= $pokemon['IMG_TIPO1'] ?>" download>
                            <img src="../imagens/tipos/<?= $pokemon['IMG_TIPO1'] ?>" alt="Tipo 1">
                        </a>
                    <?php endif; ?>
                    <?php if ($pokemon['IMG_TIPO2']): ?>
                        <a href="../imagens/tipos/<?= $pokemon['IMG_TIPO2'] ?>" download>
                            <img src="../imagens/tipos/<?= $pokemon['IMG_TIPO2'] ?>" alt="Tipo 2">
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </main>
</body>

</html>