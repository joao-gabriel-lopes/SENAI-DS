<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada</title>
</head>

<style>
    * {
        padding: 0%;
        margin: 0%;
        text-decoration: none;
        list-style: none;
    }

    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
    }

    th {
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        padding: 5px;
    }

    td {
        font-size: 16px;
        padding: 5px;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    table {
        width: 50%;
    }

    h1 {
        margin: 10px 0px 30px 0px;
    }
</style>

<body>

    <?php

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



    ?>

</body>

</html>