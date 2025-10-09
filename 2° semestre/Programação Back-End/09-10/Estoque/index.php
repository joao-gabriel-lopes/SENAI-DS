<?php
require_once "conexao.php";
require_once "Entidades/Localizacao.php";
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

        <h1>Localização</h1>

        <label class="label-localizacao" for="nome">Nome: </label>
        <input class="input-localizacao" type="text" name="nome" id="nome">

        <label class="label-localizacao" for="descricao">Descrição: </label>
        <textarea class="textarea-localizacao" name="descricao" id="descricao"></textarea>

        <input class="submit-localizacao" type="submit" value="Salvar">

    </form>

    <?php
    
        $conexao = Conectar();

        if ($_SERVER["REQUEST_METHOD"] == "POST"){
            $nome = $_POST["nome"];
            $descricao = $_POST["descricao"];

            $localizacao = new Localizacao($nome, $descricao);
            $localizacao->Salvar($conexao);

        }

    ?>

</body>

</html>