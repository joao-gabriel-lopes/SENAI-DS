<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Média de notas</title>
</head>

<?php

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nota1 = $_POST['nota1'];
    $nota2 = $_POST['nota2'];
    $nota3 = $_POST['nota3'];
    $nota4 = $_POST['nota4'];

    if ($nota1 != '' && $nota2 != '' && $nota3 != '' && $nota4 != '') {

        $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;
    }
}

?>

<body>

    <main class="container">

        <form class="container" action="" method="post">

            <label for="nota1">Nota 1:</label>
            <input type="number" name="nota1" id="nota1"> <br>

            <label for="nota2">Nota 2:</label>
            <input type="number" name="nota2" id="nota2"> <br>

            <label for="nota3">Nota 3:</label>
            <input type="number" name="nota3" id="nota3"> <br>

            <label for="nota4">Nota 4:</label>
            <input type="number" name="nota4" id="nota4"> <br>

            <input class="botao" type="submit"></input>

            <p class="<?php
            if ($media >= 6) {
                print "sucesso";
            } else {
                print "erro";
            }
            ?>" id="mensagem">

                <?php

                if (isset($media)) {
                    if ($media >= 6) {
                        echo ("Aprovado <br>");
                        echo ("A média é: " . $media);
                    } else {
                        echo ("Reprovado <br>");
                        echo ("A média é: " . $media);
                    }
                }

                ?>

            </p>
        </form>

    </main>

</body>

</html>