<?php
require_once "conexao.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arquivos</title>
    <link rel="stylesheet" href="index.css">
</head>

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

<body class="pagina">
    
    <form class="form" action="" method="post" enctype="multipart/form-data">
        <input type="text" name="nome" id="nome" value="<?= isset($jogador['NOME']) ? $jogador['NOME'] : '' ?>">
        <input type="file" name="arquivo" id="arquivo">
        <div class="botoes">
            <input type="submit" value="Enviar">
            <a class="link" href="exibir_imagem.php?id=<?= isset($jogador['ID']) ? $jogador['ID'] : '' ?>">Exibir jogador</a>
        </div>
    </form>

    <?php 
        if($_SERVER['REQUEST_METHOD'] == 'POST') {
            $nome = $_POST['nome'];
            $arquivo = $_FILES['arquivo'];

            $conexao = Conectar();
            
            $sql = "INSERT INTO ELENCO (NOME, NOME_IMAGEM) VALUES (:nome, :nome_imagem)";

            $stmt = $conexao->prepare($sql);

            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':nome_imagem', $arquivo['name']);

            $stmt->execute();

            move_uploaded_file($arquivo['tmp_name'], 'imagens/' . $arquivo['name']);

            header('Location: index.php?id=' . $conexao->lastInsertId());
        }
    ?>

</body>

</html>