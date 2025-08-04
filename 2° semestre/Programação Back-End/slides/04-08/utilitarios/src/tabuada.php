<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Tabuada</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        table {
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #f0f0f0;
        }
        th {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
        }
        td {
            border: 1px solid #999;
            padding: 8px 12px;
            text-align: center;
        }
        a {
            display: inline-block;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<?php
if (isset($_GET['numero']) && is_numeric($_GET['numero'])) {
    $numero = intval($_GET['numero']);
    echo "<h1>Tabuada do $numero</h1>";
    echo "<table>";
    echo "<tr><th>Operação</th><th>Resultado</th></tr>";

    for ($i = 1; $i <= 10; $i++) {
        $resultado = $numero * $i;
        echo "<tr><td>$numero x $i</td><td>$resultado</td></tr>";
    }

    echo "</table>";
} else {
    echo "<p>Por favor, forneça um número válido.</p>";
}
?>

<a href="../index.php">Voltar</a>

</body>
</html>
