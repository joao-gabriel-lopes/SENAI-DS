<?php
require_once "Entidades/Curso.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Formulário</title>
</head>

<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["id"])) {
        $id = $_GET["id"];

        $curso = new Curso($id, null, null, null, null);
    }
}
?>

<body>

    <form class="container" action="" method="post">

        <h1>Informações de Curso</h1>

        <label class="label-curso" for="nome">Nome: </label>
        <input class="input-curso" type="text" name="nome" id="nome"
            value="<?= isset($curso) ? $curso->GetNome() : ""; ?>">

        <label class="label-curso" for="descricao">Descrição: </label>
        <textarea class="textarea-curso" name="descricao"
            id="descricao"><?= isset($curso) ? $curso->GetDescricao() : ""; ?></textarea>

        <label class="label-curso" for="preco">Preço: </label>
        <input class="input-curso" step=".01" type="number" name="preco" id="preco"
            value="<?= isset($curso) ? $curso->GetPreco() : ""; ?>">

        <label class="label-curso" for="carga_horaria">Carga horária: </label>
        <input class="input-curso" type="number" name="carga_horaria" id="carga_horaria"
            value="<?= isset($curso) ? $curso->GetCargaHoraria() : ""; ?>">

        <input class="submit-curso" type="submit" value="Salvar">

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $id = isset($_GET["id"]) ? $_GET["id"] : null;

            $curso = new Curso(
                $id,
                $_POST["nome"],
                $_POST["descricao"],
                $_POST["preco"],
                $_POST["carga_horaria"],
            );

            $curso->SetNome($_POST["nome"]);
            $curso->SetDescricao($_POST["descricao"]);
            $curso->SetPreco($_POST["preco"]);
            $curso->SetCargaHoraria($_POST["carga_horaria"]);

            $curso->Salvar();
        }
        ?>

    </form>

</body>

</html>