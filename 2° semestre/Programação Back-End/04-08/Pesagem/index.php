<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Verificação da Altura</title>
</head>

<body>

    <form action="src/pesagem.php" method="post">
        <h1>Verificação de altura</h1>

        <label for="altura">Altura:</label><br>
        <input type="number" id="altura" name="altura" required><br><br>

        <input class="input-enviar" type="submit" value="Verificar"><br><br>
    </form>

</body>

</html>