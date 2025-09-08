<?php
require_once 'Empregado/empregado.php';
require_once 'Empregado/assalariado.php';
require_once 'Empregado/horista.php';
require_once 'Empregado/comissionado.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial</title>
</head>

<body>

    <?php

        $comissionado = new Comissionado(
            'João',
            '999.999.999-99',
            '(16)9 9999-9999',
            250000,
            2
        );

        echo "Nome: " . $comissionado->GetNome() . "<br>";
        echo "CPF: " . $comissionado->GetCpf() . "<br>";
        echo "Telefone: " . $comissionado->GetNumeroCelular() . "<br>";
        echo "Total de vendas: " . $comissionado->GetValorTotalVendas() . "<br>";
        echo "Comissão: " . $comissionado->GetPercentualComissao() . "%" . "<br>";
        echo "Pagamento: " . $comissionado->CalcularPagamento() . "<br>";

        echo "<br>";

        $assalariado = new Assalariado(
            'Pedro',
            '999.999.999-99',
            '(16)9 9999-9999',
            5000,
            1500
        );

        echo "Nome: " . $assalariado->GetNome() . "<br>";
        echo "CPF: " . $assalariado->GetCpf() . "<br>";
        echo "Telefone: " . $assalariado->GetNumeroCelular() . "<br>";
        echo "Total de vendas: " . $assalariado->GetValorSalarioBruto() . "<br>";
        echo "Desconto: " . $assalariado->GetValorDesconto() . "<br>";
        echo "Pagamento: " . $assalariado->CalcularPagamento() . "<br>";

        echo "<br>";

        $horista = new Horista(
            'Jamilton',
            '999.999.999-99',
            '(16)9 9999-9999',
            50,
            60
        );

        echo "Nome: " . $horista->GetNome() . "<br>";
        echo "CPF: " . $horista->GetCpf() . "<br>";
        echo "Telefone: " . $horista->GetNumeroCelular() . "<br>";
        echo "Valor por hora: " . $horista->GetValorPorHora() . "<br>";
        echo "Horas trabalhadas: " . $horista->GetHorasTrabalhadas() . "<br>";
        echo "Pagamento: " . $horista->CalcularPagamento() . "<br>";

    ?>

</body>

</html>