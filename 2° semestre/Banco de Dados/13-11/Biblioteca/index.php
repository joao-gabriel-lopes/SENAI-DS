<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <form class="container" action="salvar_livro.php" method="post">
        <h1>Biblioteca</h1>
        
        <label for="id">ID:</label>
        <input type="number" id="id" name="id">

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="genero">Gênero:</label>
        <input type="text" id="genero" name="genero" required>

        <button type="submit">Salvar</button>

        <?php
            if(isset($_GET['msg'])){
                if($_GET['msg']== 'sucesso' && $_GET['processo']== 'salvar'){
                    echo "<p class='sucesso'>Livro salvo com sucesso</p>";
                }else if($_GET['msg']== 'sucesso' && $_GET['processo']== 'editar'){
                    echo "<p class='sucesso'>Livro editado com sucesso</p>";
                }else{
                    echo "<p class='erro'>" . $_GET['msg'] . "</p>";
                }
            }
        ?>
    </form>
</body>

</html>