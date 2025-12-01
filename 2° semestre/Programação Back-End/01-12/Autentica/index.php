<!DOCTYPE html>
<html lang="pr-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autenticação</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form method="POST">
        <h3 style="border-bottom: 1px solid black">Autenticação</h3>
       
        <label for="email">Endereço de e-mail:</label>
        <input type="text" name="email" id="email">
        
        <label for="senha">Senha:</label>
        <input type="text" name="senha" id="senha">
      
        <label for="cor">Cor da mensagem: </label>
        <select name="cor" id="cor">
            <option value="blue">Azul</option>
            <option value="red">Vermelho</option>
            <option value="green">Verde</option>
        </select>
      
        <button type="submit">Entrar</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $email = $_POST['email'] ?? "";
        $senha = $_POST['senha'] ?? "";
        $cor = $_POST['cor'];

        session_start();

        $_SESSION['email'] = $email;
        $_SESSION['senha'] = $senha;
        
        setcookie("cor", $cor, time() + (60 * 60 * 24));

        header("Location: bem-vindo.php");
    }
    ?>
</body>

</html>