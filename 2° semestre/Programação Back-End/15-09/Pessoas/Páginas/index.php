<?php
require_once '../Modelos/PessoaFisica.php';
require_once '../Modelos/PessoaJuridica.php';
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

    $pessoaFisica = new PessoaFisica(
        'Cléber',
        '(16) 99999-9999',
        'Rua abc, 7328',
        '999.999.999-99',
        '10/03/2000',
        'M'
    );

    echo 'Nome: ' . $pessoaFisica->GetNome() . '<br>';
    echo 'Telefone: ' . $pessoaFisica->GetTelefone() . '<br>';
    echo 'Endereço: ' . $pessoaFisica->GetEndereco() . '<br>';
    echo 'CPF: ' . $pessoaFisica->ExibirDocumento() . '<br>';
    echo 'Data de nascimento: ' . $pessoaFisica->GetDataNascimento() . '<br>';
    echo 'Sexo: ' . $pessoaFisica->GetSexo() . '<br>';

    echo '<br>';

    $pessoaJuridica = new pessoaJuridica(
        'Maria',
        '(16) 99888-8888',
        'Rua cde, 1462',
        '888.888.888-88',
        '24/06/1989'
    );

    echo 'Nome: ' . $pessoaJuridica->GetNome() . '<br>';
    echo 'Telefone: ' . $pessoaJuridica->GetTelefone() . '<br>';
    echo 'Endereço: ' . $pessoaJuridica->GetEndereco() . '<br>';
    echo 'CNPJ: ' . $pessoaJuridica->ExibirDocumento() . '<br>';
    echo 'Data de fundação: ' . $pessoaJuridica->GetDataFundacao() . '<br>';

    ?>

</body>

</html>