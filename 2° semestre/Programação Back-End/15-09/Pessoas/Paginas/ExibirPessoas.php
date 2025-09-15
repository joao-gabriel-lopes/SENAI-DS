<?php
require_once '../Dados/PessoasMocadas.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pessoas</title>
</head>

<style>
    table{
        width: 100%;
    }

    table,
    td,
    th {
        border: 1px solid black;
        border-collapse: collapse;
    }

    main {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 10px;
        padding: 5px;
        border: 1px solid black;
        margin-bottom: 20px;
    }
</style>

<body>

    <main>

        <form method="post" action="">
            <h1>Adicionar Pessoa Física</h1>

            <label for="nome">Nome: </label>
            <input type="text" name="nome" id="nome">

            <label for="telefone">Telefone: </label>
            <input type="text" name="telefone" id="telefone">

            <label for="endereco">Endereço: </label>
            <input type="text" name="endereco" id="endereco">

            <label for="datanascimento">Data de nascimento: </label>
            <input type="text" name="datanascimento" id="datanascimento">

            <label for="cpf">Cpf: </label>
            <input type="text" name="cpf" id="cpf">

            <label for="sexo">Sexo: </label>
            <input type="text" name="sexo" id="sexo">

            <input type="submit" value="Adicionar Pessoa">
        </form>

        <form method="post" action="">
            <h1>Adicionar Pessoa Jurídica</h1>

            <label for="nome">Nome: </label>
            <input type="text" name="nome" id="nome">

            <label for="telefone">Telefone: </label>
            <input type="text" name="telefone" id="telefone">

            <label for="endereco">Endereço: </label>
            <input type="text" name="endereco" id="endereco">

            <label for="datafundacao">Data Fundação: </label>
            <input type="text" name="datafundacao" id="datafundacao">

            <label for="cnpj">Cnpj: </label>
            <input type="text" name="cnpj" id="cnpj">

            <input type="submit" value="Adicionar Pessoa">
        </form>

    </main>

    <?php

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        if (isset($_POST['cpf'])) {

            $pessoa = new PessoaFisica(
                $_POST['nome'],
                $_POST['telefone'],
                $_POST['endereco'],
                $_POST['cpf'],
                $_POST['datanascimento'],
                $_POST['sexo'],
            );

        } else {

            $pessoa = new PessoaJuridica(
                $_POST['nome'],
                $_POST['telefone'],
                $_POST['endereco'],
                $_POST['cnpj'],
                $_POST['datafundacao'],
            );

        }

        array_push($pessoas, $pessoa);
    }

    ?>

    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Documento</th>
            </tr>
        </thead>

        <tbody>

            <?php foreach ($pessoas as $pessoa) { ?>

                <tr>
                    <td><?= $pessoa->GetNome() ?></td>
                    <td><?= $pessoa->GetTelefone() ?></td>
                    <td><?= $pessoa->GetEndereco() ?></td>
                    <td><?= $pessoa->ExibirDocumento() ?></td>
                </tr>

            <?php } ?>

        </tbody>
    </table>

</body>

</html>