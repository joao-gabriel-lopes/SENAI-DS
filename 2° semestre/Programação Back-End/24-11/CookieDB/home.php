<?php
include "conexao.php";

$autenticado = false;

$conexao = Conectar();

$sql = "SELECT * FROM USUARIOS;";

$stmt = $conexao->prepare($sql);

$stmt->execute();

$usuarios = $stmt->fetchAll();

foreach ($usuarios as $usuario) {
    $nome = $usuario["NOME"];
    $senha = $usuario["SENHA"];

    if ($nome == $_COOKIE["nome"] && $senha == $_COOKIE["senha"]) {
        $autenticado = true;
    }
}

if (!$autenticado) {
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home.css">
    <title>Home</title>
</head>

<?php
$email = $_COOKIE["nome"] ?? "";
$senha = $_COOKIE["senha"] ?? "";
$tema = $_COOKIE["tema"] ?? "";

if ($email == '' || $senha == '' || $tema == '') {
    header("Location: index.php");
}

?>

<body class="<?= $tema ?>">
    <a href="index.php">Sair</a>

    <h1>Home</h1>
    <p>Olá, <?= $email ?></p>

</body>

</html>