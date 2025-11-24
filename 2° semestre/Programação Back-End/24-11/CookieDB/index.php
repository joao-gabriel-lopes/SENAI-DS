<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Login</title>
</head>

<body>

    <section class="container">
        <h2>Login</h2>

        <form method="POST" action="">
            <div class="form">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome">
            </div>

            <div class="form">
                <label for="senha">Senha:</label>
                <input type="senha" id="senha" name="senha">
            </div>

            <select name="tema" id="tema">
                <option value="claro">Claro</option>
                <option value="escuro">Escuro</option>
            </select>

            <button type="submit">Entrar</button>
        </form>
    </section>

</body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    setcookie("nome", $_POST["nome"]);
    setcookie("senha", $_POST["senha"]);
    setcookie("tema", $_POST["tema"]);

    header("location: home.php");
}
?>

</html>