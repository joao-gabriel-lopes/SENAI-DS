<?php
require_once '../Dados/PessoasMocadas.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exibir Pessoas</title>
    <style>
        table,
        th,
        td {
            border: 1px solid gray;
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
            width: 450px;
            margin-bottom: 10px;
            gap: 3px;
            border: 1px solid black;
            padding: 5px;
        }
    </style>
</head>

<body>
    <main>
        <form method="POST" action=ExibirPessoas.php>
            <h1> Adicionar Pessoa Jurídica </h1>

            <label for="nome">Nome: </label>
            <input type="text" name="nome" id="nome">

            <label for="telefone">Telefone: </label>
            <input type="text" name="telefone" id="telefone">

            <label for="endereco">Endereço: </label>
            <input type="text" name="endereco" id="endereco">

            <label for="dataFundacao">Data Fundação: </label>
            <input type="text" name="dataFundacao" id="dataFundacao">

            <label for="cnpj">Cnpj: </label>
            <input type="text" name="cnpj" id="cnpj">

            <input type="submit" value="Adicionar Pessoa">
        </form>

        <form method="POST" action=ExibirPessoas.php>
            <h1> Adicionar Pessoas Física </h1>

            <label for="nome">Nome: </label>
            <input type="text" name="nome" id="nome">

            <label for="telefone">Telefone: </label>
            <input type="text" name="telefone" id="telefone">

            <label for="endereco">Endereço: </label>
            <input type="text" name="endereco" id="endereco">

            <label for="dataNascimento">Data Nascimento: </label>
            <input type="text" name="dataNascimento" id="dataNascimento">

            <label for="sexo">Sexo: </label>
            <input type="text" name="sexo" id="sexo">

            <label for="cpf">Cpf: </label>
            <input type="text" name="cpf" id="cpf">

            <input type="submit" value="Adicionar Pessoa">
        </form>
    </main>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        if (isset($_POST['cnpj'])) {
            $pessoa = new PessoaJuridica(
                $_POST['nome'],
                $_POST['telefone'],
                $_POST['endereco'],
                $_POST['dataFundacao'],
                $_POST['cnpj'],
            );
        }
        else {
            $pessoa = new PessoaFisica(
                $_POST['nome'],
                $_POST['telefone'],
                $_POST['endereco'],
                $_POST['dataNascimento'],
                $_POST['sexo'],
                $_POST['cpf'],
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
                <th>Documento</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($pessoas as $p) : ?>

                <tr>
                    <td> <?= $p->GetNome() ?> </td>
                    <td> <?= $p->GetTelefone() ?> </td>
                    <td> <?= $p->ExibirDocumento() ?> </td>
                </tr>

            <?php endforeach; ?>
        </tbody>
    </table>
</body>

</html>