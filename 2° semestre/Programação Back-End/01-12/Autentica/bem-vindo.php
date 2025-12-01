    <?php
    require_once "autenticar.php";

    session_start();

    $email = $_SESSION['email'] ?? "";
    $senha = $_SESSION['senha'] ?? "";
    $cor = $_COOKIE['cor'] ?? "black";

    $usuario = Autenticar($email, $senha);

    if ($usuario == false) {
        header("Location: index.php");
    }
    ?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        <p style="color: <?= $cor ?>">Bem vindo <?= $email ?> </p>
    </body>

    </html>