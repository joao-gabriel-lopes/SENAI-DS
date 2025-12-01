<!DOCTYPE html>
<html lang="pt-br">

<?php
session_start();
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Autenticação com sessão</title>
</head>

<body>

    <form action="" method="post">
        <label for="assunto">Assunto:</label>
        <input type="text" name="assunto" id="assunto" value="<?= $_SESSION["assunto"] ?? "" ?>">
        
        <label for="detalhes">Detalhes:</label>
        <textarea name="detalhes" id="detalhes"><?= $_SESSION["detalhes"] ?? "" ?></textarea>
        
        <button type="submit">Salvar rascunho</button>
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $assunto = $_POST["assunto"] ?? "";
            $detalhes = $_POST["detalhes"] ?? "";

            $_SESSION["assunto"] = $assunto;
            $_SESSION["detalhes"] = $detalhes;
        }
    ?>

</body>

</html>