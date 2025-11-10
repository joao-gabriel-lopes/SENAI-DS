<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exibir imagem</title>
</head>

<body>
    <?php
    $diretorio = __DIR__ . "/imagens/";

    if (!file_exists($diretorio)) {
        mkdir($diretorio, 0777, true);
    }

    $arquivo_imagem = $_FILES["arquivo"];
    $nome_arquivo = $arquivo_imagem["name"];

    $destino_arquivo = $diretorio . $nome_arquivo;
    
    move_uploaded_file($arquivo_imagem["tmp_name"], $destino_arquivo);
    ?>

    <a href="index.php">Voltar</a>
    <img src="imagens/<?= $nome_arquivo?>" alt="Imagem recebida">
</body>

</html>