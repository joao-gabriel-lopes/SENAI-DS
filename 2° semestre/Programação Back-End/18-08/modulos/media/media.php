<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../geral.css">
    <link rel="stylesheet" href="media.css">
    <title>Média Aritmética</title>
</head>

<body>
    <main class="container">

        <form class="formulario" action="" method="post">
            <h1 class="titulo-nota">Média Aritmética</h1> <br>

            <label class="label-nota" for="nota1">Nota 1:</label> <br>
            <input class="input-nota" type="number" id="nota1" name="nota1" step="0.1"> <br>

            <label class="label-nota" for="nota2">Nota 2:</label> <br>
            <input class="input-nota" type="number" id="nota2" name="nota2" step="0.1"> <br>

            <label class="label-nota" for="nota3">Nota 3:</label> <br>
            <input class="input-nota" type="number" id="nota3" name="nota3" step="0.1"> <br>

            <label class="label-nota" for="nota4">Nota 4:</label> <br>
            <input class="input-nota" type="number" id="nota4" name="nota4" step="0.1"> <br>

            <input class="input-calcular" type="submit" value="Calcular"> <br>

            <?php 
            if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['nota1']) && isset($_POST['nota2']) && isset($_POST['nota3']) && isset($_POST['nota4'])) {
                
                $soma = floatval($_POST['nota1']) + floatval($_POST['nota2']) + floatval($_POST['nota3']) + floatval($_POST['nota4']);
                $media = number_format($soma / 4, 2);

                echo "<p>Média: $media</p>";
            }
            ?>
        </form>

    </main>



</body>

</html>