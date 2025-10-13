<?php
require_once "Entidades/Pet.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Formulário</title>
</head>

<body>

    <form class="container" action="" method="post">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "GET") {
            if (isset($_GET["id"])) {
                $id = $_GET["id"];

                $pet = new Pet($id, null, null, null, null);
            }
        }
        ?>

        <h1>Informações de Pet</h1>

        <label class="label-pet" for="nome">Nome: </label>
        <input class="input-pet" type="text" name="nome" id="nome" value="<?= isset($pet) ? $pet->GetNome() : ""; ?>">

        <label class="label-pet" for="idade">Idade: </label>
        <input class="input-pet" type="text" name="idade" id="idade"
            value="<?= isset($pet) ? $pet->GetIdade() : ""; ?>">

        <label class="label-pet" for="raca">Raça: </label>
        <input class="input-pet" type="text" name="raca" id="raca" value="<?= isset($pet) ? $pet->GetRaca() : ""; ?>">

        <label class="label-pet" for="descricao">Descrição da aparência: </label>
        <textarea class="textarea-pet" name="descricao"
            id="descricao"><?= isset($pet) ? $pet->GetDescricao() : ""; ?></textarea>

        <input class="submit-pet" type="submit" value="Salvar">

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $id = isset($_GET["id"]) ? $_GET["id"] : 0;

            $nome = $_POST["nome"];
            $idade = $_POST["idade"];
            $raca = $_POST["raca"];
            $descricao = $_POST["descricao"];

            try {
                $pet = new Pet($id, $nome, $idade, $raca, $descricao);

                $pet->SetNome($nome);
                $pet->SetIdade($idade);
                $pet->SetRaca($raca);
                $pet->SetDescricao($descricao);

                $pet->Salvar();

                echo "<p class='sucesso'>Salvo com sucesso!</p>";
            } catch (Exception $e) {
                echo "<p class='erro'>" . $e->getMessage() . "</p>";
            }
        }
        ?>

    </form>

</body>

</html>