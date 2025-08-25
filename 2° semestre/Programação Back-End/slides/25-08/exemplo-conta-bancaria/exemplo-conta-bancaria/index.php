<?php
require_once 'contabancaria.php';

$mensagem = "";

//Só executa quando for postado o formulário
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        //Criação do objeto "#conta", da classe "ContaBancaria" conforme o construtor
        $conta = new ContaBancaria(
            numero: $_POST['numero'],
            agencia: $_POST['agencia'],
        );

        $mensagem  = "Conta cadastrada com sucesso!<br>";
        $mensagem .= "Numero: " . $conta->getNumero() . "<br>";
        $mensagem .= "Agencia: " . $conta->getAgencia() . "<br>";

        //Se setNumero ou setAgencia gerou 'throw new Exception', a exceção é atribuida
        //na variável "$e"
    } catch (Exception $e) {
        $mensagem = "❌ Erro: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Cadastro de Conta</title>
    <link rel="stylesheet" href="style.css">
    </script>
</head>

<body>
    <form method="POST">
        <h2>Cadastro de Conta</h2>

        <label for="numero">Número</label>
        <input type="text" name="numero" id="numero">

        <label for="agencia">Agência</label>
        <input type="text" name="agencia" id="agencia">

        <button type="submit">Cadastrar</button>

        <?php
        if ($mensagem) {
            echo '<div class="mensagem">' . $mensagem . '</div>';
        }
        ?>
    </form>
</body>

</html>