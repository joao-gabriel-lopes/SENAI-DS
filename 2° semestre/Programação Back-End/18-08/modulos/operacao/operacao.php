<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../geral.css">
    <link rel="stylesheet" href="operacao.css">
    <title>Operações Aritméticas</title>
</head>

<body>
    <main class="container">

        <form class="formulario" action="" method="post">
            <h1 class="titulo-numero">Operações Aritméticas</h1> <br>

            <label class="label-numero" for="numero1">Número 1:</label> <br>
            <input class="input-numero" type="number" id="numero1" name="numero1" step="0.01"> <br>

            <label class="label-numero" for="numero2">Número 2:</label> <br>
            <input class="input-numero" type="number" id="numero2" name="numero2" step="0.01"> <br>

            <label class="label-numero" for="operacao">Selecione a operação:</label> <br>
            <select class="select-numero" name="operacao" id="operacao">
                <option value="soma">Soma</option>
                <option value="subtracao">Subtração</option>
                <option value="multiplicacao">Multiplicação</option>
                <option value="divisao">Divisão</option>
            </select> <br>

            <input class="input-calcular" type="submit" value="Calcular"> <br>

            <?php
            if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['numero1']) && isset($_POST['numero2']) && isset($_POST['operacao'])) {
                $numero1 = floatval($_POST['numero1']);
                $numero2 = floatval($_POST['numero2']);
                $operacao = $_POST['operacao'];

                switch ($operacao) {
                    case 'soma':
                        $operacao = 'soma';
                        $resultado = $numero1 + $numero2;
                        break;
                    case 'subtracao':
                        $operacao = 'subtração';
                        $resultado = $numero1 - $numero2;
                        break;
                    case 'multiplicacao':
                        $operacao = 'multiplicação';
                        $resultado = $numero1 * $numero2;
                        break;
                    case 'divisao':
                        $operacao = 'divisão';
                        $resultado = $numero1 / $numero2;
                        break;
                }

                echo "<p>Resultado da $operacao: $resultado</p>";
            }
            ?>
        </form>

    </main>



</body>

</html>