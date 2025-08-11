<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>

<body>

    <h1>Digite um número para ver a tabuada dele</h1>

    <form action="src/tabuada.php" method="post">

        <input type="number" name="numero" required>
        
        <input type="submit" value="Enviar formulário">
        
    </form>

</body>

</html>