<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avaliar Nota</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nota1 = $_POST["nota1"];
    $nota2 = $_POST["nota2"];

    $soma = $nota1 + $nota2;
    
    if ($soma >= 5) {
        echo "APROVADO";
    } else {
        echo "REPROVADO";
    }
}
?>
<form method="post" action="">
    <label for="nota1">Nota1</label><br>
    <input type="number" id="nota1" name="nota1" required>
    <br><br>
    <label for="nota2">Nota2</label><br>
    <input type="number" id="nota2" name="nota2" required>
    <br><br>
    <button type="submit">Avaliar</button>
</form>

</body>
</html>
