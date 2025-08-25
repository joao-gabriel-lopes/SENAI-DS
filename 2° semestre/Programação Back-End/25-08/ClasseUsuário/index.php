<?php
    require_once "usuario.php";

    $mensagem = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        try{
            $usuario = new Usuario(
                nome: $_POST["nome"],
                sobrenome: $_POST["sobrenome"],
                login: $_POST["login"],
                email: $_POST["email"],
                senha: $_POST["senha"]
            );

            $mensagem = "Usuário cadastrado com sucesso!<br><br>";
            $mensagem .= "Nome completo: " . $usuario->getNomeCompleto() . "<br>";
            $mensagem .= "Login: " . $usuario->getLogin() . "<br>";
            $mensagem .= "Email: " . $usuario->getEmail() . "<br>";
            $mensagem .= "Senha: " . $usuario->getSenha();

        } catch(Exception $e) {
            $mensagem = $e->getMessage();
        }
    }

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Cadastro de usuário</title>
</head>

<body>
    <main class="container">

        <form class="formulario" action="" method="post">
            <h1 class="titulo">Cadastro de usuário</h1> <br>

            <label class="label" for="nome">Nome:</label>
            <input class="input" type="text" id="nome" name="nome"> <br>

            <label class="label" for="sobrenome">Sobrenome:</label>
            <input class="input" type="text" id="sobrenome" name="sobrenome"> <br>

            <label class="label" for="login">Login:</label>
            <input class="input" type="text" id="login" name="login"> <br>

            <label class="label" for="email">Email:</label>
            <input class="input" type="email" id="email" name="email"> <br>

            <label class="label" for="senha">Senha:</label>
            <input class="input" type="password" id="senha" name="senha"> <br>

            <input class="input-cadastrar" type="submit" value="Cadastar"> <br>

            <?php
            
                echo "<p>$mensagem</p>";
            
            ?>

        </form>

    </main>

</body>

</html>