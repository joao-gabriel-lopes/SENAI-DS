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
                <label for="email">Email:</label>
                <input type="text" id="email" name="email">
            </div>

            <div class="form">
                <label for="senha">Senha:</label>
                <input type="senha" id="senha" name="senha">
            </div>

            <select name="cor" id="cor">
                <option value="azul">Azul</option>
                <option value="vermelho">Vermelho</option>
                <option value="verde">Verde</option>
            </select>

            <button type="submit">Entrar</button>
        </form>
    </section>

</body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    setcookie("email", $_POST["email"]);
    setcookie("senha", $_POST["senha"]);
    setcookie("cor", $_POST["cor"]);

    header("location: home.php");
}
?>

</html>