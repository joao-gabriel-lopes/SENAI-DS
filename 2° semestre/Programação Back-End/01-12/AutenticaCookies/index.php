<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Autenticação com cookies</title>
</head>

<body>

    <form action="" method="post">
        <label for="assunto">Assunto:</label>
        <input type="text" name="assunto" id="assunto" value="<?= $_COOKIE["assunto"] ?? "" ?>">
        
        <label for="detalhes">Detalhes:</label>
        <textarea name="detalhes" id="detalhes"><?= $_COOKIE["detalhes"] ?? "" ?></textarea>
        
        <button type="submit">Salvar rascunho</button>
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $assunto = $_POST["assunto"] ?? "";
            $detalhes = $_POST["detalhes"] ?? "";

            setcookie("assunto", $assunto, time() + (60 * 60 * 24));
            setcookie("detalhes", $detalhes, time() + (60 * 60 * 24));
        }
    ?>

</body>

</html>