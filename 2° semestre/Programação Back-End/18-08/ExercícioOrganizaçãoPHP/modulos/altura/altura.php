<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../geral.css">
    <link rel="stylesheet" href="altura.css">
    <title>Verificação da Altura</title>
</head>

<body>
    <main class="container">

        <form class="formulario" action="" method="post">
            <h1 class="titulo-altura">Verificação de altura</h1> <br>

            <label class="label-altura" for="altura">Altura:</label> <br>
            <input class="input-altura" type="number" id="altura" name="altura" step="0.01"> <br> <br>

            <input class="input-verificar" type="submit" value="Verificar"> <br> <br>

            <?php if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['altura'])) {
                $altura = $_POST['altura'];

                if ($altura > 1.5) {
                    echo '<p class="autorizado">Entrada autorizada!</p>';
                } else{
                    echo '<p class="negado">Entrada negada!</p>';
                }
            }
            ?>
        </form>

    </main>



</body>

</html>