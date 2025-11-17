<?php
require_once 'conexao.php';

$diretorioDestino = __DIR__ . '/dirArquivos/';

if (!file_exists($diretorioDestino)) {
    mkdir($diretorioDestino, 0777, true);
}
if (isset($_FILES['arquivo'])) {
    $arquivo = $_FILES['arquivo'];

    if (move_uploaded_file($arquivo['tmp_name'], $diretorioDestino . $arquivo['name'])) {
        echo "Arquivo enviado com sucesso!";
    } else {
        echo "Erro ao enviar o arquivo.";
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $conexao = Conectar();

    $nome = $_POST['nome'];
    $arquivo = $_FILES['arquivo'];

    $sql = "
    INSERT INTO MUSICAS (NOME, ARQ_MUSICA)
    VALUES
    (:NOME, :ARQ_MUSICA);
    ";

    $stmt = $conexao->prepare($sql);

    $stmt->bindParam(':NOME', $nome);
    $stmt->bindParam(':ARQ_MUSICA', $arquivo['name']);

    $stmt->execute();

    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Site Musica</title>
</head>

<body>
    <h1>Upload de Música</h1>

    <form action="" method="post" enctype="multipart/form-data">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome">
        <label for="arquivo">Selecione um arquivo para enviar:</label>
        <input type="file" name="arquivo" id="arquivo" required>
        <button type="submit">Enviar</button>
    </form>

    <h1>Músicas</h1>

    <?php
    $conexao = Conectar();

    $sql = "SELECT * FROM MUSICAS";

    $comando = $conexao->prepare($sql);

    $comando->execute();

    $musicas = $comando->fetchAll();
    ?>

    <table>
        <thead>
            <tr>
                <th>Música</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($musicas as $musica) {
                echo "<tr>";
                echo "<td>" . $musica['NOME'] . "</td>";
                echo "<td><a href='dirArquivos/" . $musica['ARQ_MUSICA'] . "' download>Baixar</a></td>";
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
</body>

</html>