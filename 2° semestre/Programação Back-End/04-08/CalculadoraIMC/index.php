<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Calculadora IMC</title>
</head>

<body>

    <form action="" method="post">

        <h1>Calculadora de IMC:</h1>

        <p>Cálculo IMC = peso / (altura x altura)</p>

        <table>

            <tr>
                <td>Menor que 18,5</td>
                <td>Magreza</td>
            </tr>

            <tr>
                <td>18,5 a 24,9</td>
                <td>Normal</td>
            </tr>

            <tr>
                <td>25 a 29,9</td>
                <td>Sobrepeso</td>
            </tr>

            <tr>
                <td>30 a 34,9</td>
                <td>Obesidade grau I</td>
            </tr>

            <tr>
                <td>35 a 39,9</td>
                <td>Obesidade grau II</td>
            </tr>

            <tr>
                <td>Maior que 40</td>
                <td>Obesidade grau III</td>
            </tr>

        </table>

        <label for="altura">Altura:</label><br>
        <input type="number" id="altura" name="altura" required step="0.01"><br>

        <label for="altura">Peso:</label><br>
        <input type="number" id="altura" name="peso" required step="0.01"><br>

        <input class="input-enviar" type="submit" value="Calcular IMC"><br>

        <p>
            <?php

            if ($_SERVER['REQUEST_METHOD'] == "POST") {
                $altura = $_POST["altura"];
                $peso = $_POST["peso"];

                $imc = $peso / ($altura * $altura);

                $imc = number_format($imc,2, ",", ".");

                echo "O seu IMC é de $imc <br>";

                if ($imc < 18.5) {
                    echo "Magreza";
                } else if ($imc >= 18.5 && $imc < 24.9) {
                    echo "Normal";
                } else if ($imc >= 24.9 && $imc < 29.9) {
                    echo "Sobrepeso";
                } else if ($imc >= 29.9 && $imc < 34.9) {
                    echo "Obesidade grau 1";
                } else if ($imc >= 34.9 && $imc < 39.9) {
                    echo "Obesidade grau 2";
                } else {
                    echo "Obesidade grau 3";
                }
            }

            ?>
        </p>
    </form>

</body>

</html>