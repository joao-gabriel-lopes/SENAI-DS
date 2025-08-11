<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../geral.css">
    <link rel="stylesheet" href="pagina.css">
    <title>Tabuada</title>
</head>

<body>

    <h1>Digite um número para ver a tabuada dele</h1>

    <form action="" method="post">

        <input type="number" name="numero" required>

        <input type="submit" value="Enviar formulário">

    </form>

    <br>

    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $numero = $_POST["numero"];

        echo "<h1> Tabuada do número: $numero (by João Gabriel Penha Lopes)</h1>";

        echo "<table>";

        echo "<thead>";

        echo "<tr> <th>Número</th> \n <th>Fator</th> \n <th>Resultado</th> </tr>";

        echo "</thead>";

        echo "<tbody>";

        for ($i = 0; $i <= 10; $i++) {
            $resultado = $i * $numero;

            echo "<tr> <td>$numero</td> \n <td>$i</td> \n <td>$resultado</td> </tr>";
        }

        echo "</tbody>";

        echo "</table>";


    }
    ?>

</body>

</html>