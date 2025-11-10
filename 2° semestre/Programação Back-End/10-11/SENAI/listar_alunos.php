<?php
require_once "conexao.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="listar_alunos.css">
    <title>SENAI - Alunos</title>
</head>

<body>

    <a class="link-voltar" href="index.php"><< Voltar ao cadastro</a>

    <?php 
        $conexao = Conectar();

        $sql = "SELECT * FROM ALUNOS";

        $stmt = $conexao->prepare($sql);

        $stmt->execute();

        $alunos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    ?>

    <?php foreach($alunos as $aluno) { ?>

    <section class="container">
        <img class="img-senai" src="imagens/senai.png" alt="Logo SENAI">
        <h2><?= $aluno['NOME'] ?></h2>
        <img class="img-aluno" src="imagens/<?= $aluno['NOME_IMAGEM'] ?>" alt="<?= $aluno['NOME'] ?>">
    </section>

    <?php } ?>

</body>
</html>