<?php
require_once "conexao.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Lista de cursos</title>
</head>

<?php
$conexao = Conectar();

$query = "select * from cursos";

$stmt = $conexao->prepare($query);

$stmt->execute();

$cursos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<body>

    <section class="container">
        <h1>Lista de cursos</h1>
    </section>

    <?php foreach ($cursos as $curso) { ?>

        <section class="container">
            <label class="label-curso" for="nome">Nome: </label>
            <input class="input-curso" type="text" name="nome" id="nome"
                value="<?= isset($curso) ? $curso["NOME"] : ""; ?>">

            <label class="label-curso" for="descricao">Descrição: </label>
            <textarea class="textarea-curso" name="descricao"
                id="descricao"><?= isset($curso) ? $curso["DESCRICAO"] : ""; ?></textarea>

            <label class="label-curso" for="preco">Preço: </label>
            <input class="input-curso" step=".01" type="number" name="preco" id="preco"
                value="<?= isset($curso) ? $curso["PRECO"] : ""; ?>">

            <label class="label-curso" for="carga_horaria">Carga horária: </label>
            <input class="input-curso" type="number" name="carga_horaria" id="carga_horaria"
                value="<?= isset($curso) ? $curso["CARGA_HORARIA"] : ""; ?>">

            <section class="area-botoes">
                <button class="botao">
                    <a href="formulario.php?id=<?= isset($curso) ? $curso["ID"] : "" ?>">Visualizar</a>
                </button>
            </section>
        </section>

    <?php } ?>
</body>

</html>