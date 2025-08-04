<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="pesagem.css">
    <title>Verificação da Altura</title>
</head>

<body>

    <main>
        <h1 <?php
        if (isset($_POST["altura"]) && $_POST["altura"] > 1.50) {
            echo 'class="aprovado"';
        } else {
            echo 'class="reprovado"';
        }
        ?>>

            <?php
            if (isset($_POST["altura"]) && $_POST["altura"] > 1.50) {
                echo 'Entrada Autorizada!';
            } else {
                echo 'Tente novamente ano que vem!';
            }

            ?>

        </h1>
    </main>

</body>

</html>