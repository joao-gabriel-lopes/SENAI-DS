<?php
require_once "conexao.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>SENAI</title>
</head>

<body>

    <h1>ESCOLA SENAI</h1>
    
    <form class="container" action="" method="post" enctype="multipart/form-data">
        <label class="label-senai" for="nome">Nome:</label>
        <input class="input-senai" type="text" name="nome" id="nome">
        <label class="label-senai" for="arquivo">Selecione uma imagem:</label>
        <input class="input-senai" type="file" name="arquivo" id="arquivo">
        <input class="botao-senai" type="submit" value="Enviar">
        <a class="link" href="listar_alunos.php">Ver aluno</a>
    </form>

    <?php 
        if($_SERVER['REQUEST_METHOD'] == 'POST') {
            $nome = $_POST['nome'];
            $arquivo = $_FILES['arquivo'];

            $conexao = Conectar();
            
            $sql = "INSERT INTO ALUNOS (NOME, NOME_IMAGEM) VALUES (:nome, :nome_imagem)";

            $stmt = $conexao->prepare($sql);

            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':nome_imagem', $arquivo['name']);

            $stmt->execute();

            move_uploaded_file($arquivo['tmp_name'], 'imagens/' . $arquivo['name']);
        }
    ?>

</body>

</html>