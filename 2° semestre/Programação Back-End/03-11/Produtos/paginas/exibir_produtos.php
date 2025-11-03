<?php
require_once "../conexao.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="exibir_produtos.css">
    <title>Lista de produtos</title>
</head>

<?php
$busca = isset($_GET["busca"]) ? $_GET["busca"] : "";
$buscaSQL = "%" . $busca . "%";

$conexao = Conectar();

$query = "
SELECT
    P.NOME AS NOME_PRODUTO,
    P.DESCRICAO,
    P.FORNECEDOR,
    P.QUANTIDADE,
    P.NOME_IMAGEM,
    C.NOME AS NOME_CATEGORIA
FROM
    PRODUTOS AS P INNER JOIN CATEGORIAS AS C
    ON P.ID_CATEGORIA = C.ID
WHERE 
    P.ID = :ID OR
    P.NOME LIKE :NOME_PRODUTO OR
    C.NOME LIKE :NOME_CATEGORIA;
";

$stmt = $conexao->prepare($query);

$stmt->bindParam(":ID", $busca);
$stmt->bindParam(":NOME_PRODUTO", $buscaSQL);
$stmt->bindParam(":NOME_CATEGORIA", $buscaSQL);

$stmt->execute();

$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<body>

    <form method="get" class="area-pesquisa">
        <input class="input-pesquisa" type="text" name="busca" id="busca" value="<?= isset($_GET["busca"]) ? $_GET["busca"] : "" ?>">
        <input class="botao" type="submit" value="Pesquisar">
    </form>

    <?php foreach ($produtos as $produto) { ?>

        <section class="container">
            <img src="../img/<?= isset($produto) ? $produto["NOME_IMAGEM"] : ""; ?>" alt="Imagem produto">

            <label class="label-produto" for="nome">Nome: </label>
            <input class="input-produto" type="text" name="nome" id="nome"
                value="<?= isset($produto) ? $produto["NOME_PRODUTO"] : ""; ?>">

            <label class="label-produto" for="categoria">Categoria: </label>
            <input class="input-produto" type="text" name="categoria" id="categoria"
                value="<?= isset($produto) ? $produto["NOME_CATEGORIA"] : ""; ?>">

            <label class="label-produto" for="descricao">Descrição: </label>
            <textarea class="textarea-produto" name="descricao"
                id="descricao"><?= isset($produto) ? $produto["DESCRICAO"] : ""; ?></textarea>

            <label class="label-produto" for="fornecedor">Fornecedor: </label>
            <input class="input-produto" type="text" name="fornecedor" id="fornecedor"
                value="<?= isset($produto) ? $produto["FORNECEDOR"] : ""; ?>">

            <label class="label-produto" for="quantidade">Quantidade: </label>
            <input class="input-produto" type="text" name="quantidade" id="quantidade"
                value="<?= isset($produto) ? $produto["QUANTIDADE"] : ""; ?>">

        </section>

    <?php } ?>
</body>

</html>