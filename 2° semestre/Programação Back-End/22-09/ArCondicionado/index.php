<?php
    require_once "Modelos/ArCondicionadoVeicular.php";
    require_once "Modelos/ArCondicionadoPredial.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ar-condicionado</title>
</head>

<body>

    <?php
        $arcarro = new ArCondicionadoVeicular(
            17, 
            31
        );

        $arpredio = new ArCondicionadoPredial(
            15,
            33
        );

        echo "<h1>Ar-condicionado do carro</h1>";

        echo $arcarro->Ligar();
        echo '<br>';
        echo $arcarro->VerificarEstadoAtual();
        echo '<br>';

        echo $arcarro->Desligar();
        echo '<br>';
        echo $arcarro->VerificarEstadoAtual();
        echo '<br>';

        echo $arcarro->AumentarTemperatura();
        echo '<br>';
        echo $arcarro->VerificarTemperaturaAtual();
        echo '<br>';

        echo $arcarro->DiminuirTemperatura();
        echo '<br>';
        echo $arcarro->VerificarTemperaturaAtual();
        echo '<br>';
  
        echo "<h1>Ar-condicionado do prédio</h1>";

        echo $arpredio->Ligar();
        echo '<br>';
        echo $arpredio->VerificarEstadoAtual();
        echo '<br>';

        echo $arpredio->Desligar();
        echo '<br>';
        echo $arpredio->VerificarEstadoAtual();
        echo '<br>';

        echo $arpredio->AumentarTemperatura();
        echo '<br>';
        echo $arpredio->VerificarTemperaturaAtual();
        echo '<br>';

        echo $arpredio->DiminuirTemperatura();
        echo '<br>';
        echo $arpredio->VerificarTemperaturaAtual();
        echo '<br>';

    ?>

</body>

</html>