<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home.css">
    <title>Home</title>
</head>

<?php
$email = $_COOKIE["email"] ?? "";
$senha = $_COOKIE["senha"] ?? "";
$cor = $_COOKIE["cor"] ?? "";

if ($email == '' || $senha == '' || $cor == '') {
    header("Location: index.php");
}

?>

<body>
    <a href="index.php">Sair</a>

    <h1>Home</h1>
    <p class="<?= $cor?>">Olá, <?= $email ?></p>

</body>

</html>