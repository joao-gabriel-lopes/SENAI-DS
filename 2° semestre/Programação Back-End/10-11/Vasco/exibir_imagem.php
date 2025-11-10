<?php
require_once "conexao.php";
?>

<!DOCTYPE html>
<html lang="en">

<?php
$id = isset($_GET['id']) ? $_GET['id'] : null;

if ($id) {
    $conexao = Conectar();
    
    $sql = "SELECT * FROM ELENCO WHERE ID = :id";

    $stmt = $conexao->prepare($sql);

    $stmt->bindParam(':id', $id);

    $stmt->execute();

    $jogador = $stmt->fetch(PDO::FETCH_ASSOC);
}

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="exibir_imagem.css">
    <title>Exibir imagem</title>
</head>

<body>
    <section class="container">
        <a href="index.php">Voltar</a>
        <h1 class="nome-jogador"><?= isset($jogador['NOME']) ? $jogador['NOME'] : '' ?></h1>
        <img class="img-jogador" src="imagens/<?= isset($jogador['NOME_IMAGEM']) ? $jogador['NOME_IMAGEM'] : '' ?>" alt="Imagem recebida">
    </section>
</body>

</html>