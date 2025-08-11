<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="geral.css">
    <link rel="stylesheet" href="index.css">
    <title>Tela Login</title>
</head>

<body>

    <main class="container">

        <img src="img/perfil.png" alt="Imagem perfil" class="img-login">

        <form class="container" action="" method="post">
            <label for="nome-login">Nome:</label>
            <input type="text" name="nome" id="nome-login"> <br>

            <label for="senha-login">Senha:</label>
            <input type="password" name="senha" id="senha-login"> <br>

            <input class="botao" type="submit"></input>

            <p id="mensagem">

                <?php

                if ($_SERVER['REQUEST_METHOD'] == "POST") {
                    $nome = $_POST['nome'];
                    $senha = $_POST['senha'];

                    if ($nome == "aluno" && $senha == "1234") {
                        header("Location: menu/pagina.php");                        
                    } else {
                        echo "Login negado";
                    }
                }

                ?>

            </p>
        </form>

    </main>

</body>

</html>