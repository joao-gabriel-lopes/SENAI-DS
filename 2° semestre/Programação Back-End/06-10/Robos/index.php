<?php
require_once 'Modelos/RoboAtendimento.php';
require_once 'Modelos/RoboLimpeza.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Robôs</title>
</head>

<body>

<?php

$roboLimpeza = new RoboLimpeza("2020", "Cybertron 2.0");

echo "<h1>Robô de limpeza</h1>" . "<br>";
echo "Ano de lançamento: " . $roboLimpeza->GetAnoLancamento() . "<br>";
echo "Modelo: " . $roboLimpeza->GetModelo() . "<br>";
echo $roboLimpeza->Desativar() . "<br>";
echo $roboLimpeza->Ativar() . "<br>";
echo "Ação: ". $roboLimpeza->Iniciar() . "<br>";
echo "Data da última varredura: " . date_format($roboLimpeza->GetDataUltimaVarredura(), "d/m/Y") . "<br>";

$roboAtendimento = new RoboAtendimento("2023", "T-1000");

echo "<h1>Robô de atendimento</h1>" . "<br>";
echo "Ano de lançamento: " . $roboAtendimento->GetAnoLancamento() . "<br>";
echo "Modelo: " . $roboAtendimento->GetModelo() . "<br>";
echo $roboAtendimento->Desativar() . "<br>";
echo $roboAtendimento->Ativar() . "<br>";
echo "Ação: ". $roboAtendimento->Iniciar() . "<br>";

?>

</body>

</html>