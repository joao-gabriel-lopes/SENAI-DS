<!DOCTYPE html>
<html lang="pt-br">

<?php
require_once 'conexao.php';

$conexao = Conectar();

$query = "SELECT * FROM PRODUTOS";

$stmt = $conexao->prepare($query);

$stmt->execute();

$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (isset($_GET["id"])) {
    $quantidade = $_POST["quantidade"];

    $query = "SELECT * FROM PRODUTOS WHERE ID = :ID";

    $stmt = $conexao->prepare($query);

    $stmt->bindParam(":ID", $_GET["id"]);

    $stmt->execute();

    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

    setcookie($resultado["ID"], $quantidade, time() + 30 * 60);
}
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Mercearia</title>
</head>

<body>

    <?php foreach ($produtos as $produto) { ?>

        <section class="container">
            <h1><?= isset($produto["NOME"]) ? $produto["NOME"] : "" ?></h1>

            <p><?= isset($produto["DESCRICAO"]) ? $produto["DESCRICAO"] : "" ?></p>

            <p>Preço: R$<?= isset($produto["PRECO"]) ? $produto["PRECO"] : "" ?></p>

            <form action="index.php?id=<?= $produto["ID"] ?>" method="post">
                <input type="number" id="quantidade" name="quantidade">

                <input type="submit" value="Adicionar ao carrinho">
            </form>
        </section>

    <?php } ?>

    <h1>Carrinho de compras</h1>

    <?php if (count($_COOKIE) > 0) { ?>

        <?php foreach ($_COOKIE as $key => $cookie) { ?>

            <?php
            $query = "SELECT * FROM PRODUTOS WHERE ID = :ID";

            $stmt = $conexao->prepare($query);

            $stmt->bindParam(":ID", $key);

            $stmt->execute();

            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            ?>

            <section class="carrinho-item">
                <h1><?php print_r($resultado["NOME"]) ?></h1>

                <p>Quantidade: <?= $cookie ?></p>
            </section>

        <?php } ?>

    <?php } ?>

</body>

</html>