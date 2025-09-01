<?php
require_once 'produto.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produto</title>
</head>

<body>

    <h1>Produto</h1>

    <?php

    try {
        $produto = new Produto(
            nome: "Leite",
            valorUnitario: 6.95,
            dataVencimento: new DateTime("30-10-2025")
        );

        echo "Nome do produto: " . $produto->GetNome() . "<br>";
        echo "Valor unitário: " . $produto->GetValorUnitario() . "<br>";
        echo "Data de Validade: " . $produto->GetDataVencimento() . "<br>";
        echo "O produto está: ";
        echo $produto->VerificarSeEstaVencido();

    } catch (Exception $e) {
        echo "Erro: ". $e->getMessage();
    }


    ?>

</body>

</html>