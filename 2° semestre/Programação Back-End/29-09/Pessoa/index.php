<?php
require_once 'Modelos/Aluno.php';
require_once 'Modelos/Professor.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pessoas</title>
</head>

<body>

    <?php
    $aluno = new Aluno(
        "Pedro",
        "11122233344",
        "2008-03-09",
        "123",
        8,
        9,
        750
    );

    $professor = new Professor(
        "Enéias",
        "55566677788",
        "1776-04-09",
        10000,
        5000
    );

    echo '<h1>Aluno</h1>';
    echo 'Nome: ' . $aluno->GetNome() . '<br>';
    echo 'RA: ' . $aluno->GetRa() . '<br>';
    echo 'CPF: ' . $aluno->GetCpf() . '<br>';
    echo 'Idade: ' . $aluno->CalcularIdade() . '<br>';
    echo 'Nota: ' . $aluno->CalcularNota() . '<br>';
    echo 'Auxílio: ' . $aluno->CalcularPagamento() . '<br>';

    echo '<h1>Professor</h1>';
    echo 'Nome: ' . $professor->GetNome() . '<br>';
    echo 'CPF: ' . $professor->GetCpf() . '<br>';
    echo 'Idade: ' . $professor->CalcularIdade() . '<br>';
    echo 'Salário: ' . $professor->CalcularPagamento() . '<br>';


    ?>

</body>

</html>