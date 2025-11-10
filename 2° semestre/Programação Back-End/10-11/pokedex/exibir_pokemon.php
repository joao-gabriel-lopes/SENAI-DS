<!DOCTYPE html>
<html lang="pt-br">

<?php
require_once 'Entidades/pokemon.php';
require_once 'conexao.php';

//
$resultado_select = null;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    $condição = isset($_GET['id']);
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if ($id != null) {
        $sql =
            "SELECT NOME, DESCRICAO, FOTO
             FROM POKEMON
             WHERE ID = :P_ID";

        $resultado_select = ExecutarSql($sql, [[":P_ID", $id]])->fetch();
    }
}
?>

<head>
    <meta charset="UTF-8">
    <title>Pokedex</title>
    <link rel="stylesheet" href="exibir_pokemon.css">
</head>

<body>
    <form method="post" enctype="multipart/form-data">
        <section>
            <?php
               if(isset($_GET['id'])){
                    $id = $_GET['id'];
                    $nome = $resultado_select['NOME'];
                    $descricao = $resultado_select['DESCRICAO'];
                    $foto = $resultado_select['FOTO'];
               } else {
                    $id = "";
                    $nome = "";
                    $descricao = "";
                    $foto = "interrogação.png";
               }
            ?>

            <h1>Pokédex Nº <?=$id?> </h1>

            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value="<?=$nome?>">

            <label for="descricao">Descrição:</label>
            <textarea name="descricao" id="descricao"><?=$descricao?></textarea>

            <label for="foto">Foto:</label>
            <input type="file" name="foto" id="foto" accept="image/*">
            <input type="hidden" name="fotoNome" id="fotoNome" value="<?=$foto?>" readonly>

            <input type="submit" value="Salvar">
            <input type="submit" value="Deletar">
        </section>

        <section>
            <img id="preview" src="imagens/<?=$foto?>" alt="Pré-visualização da imagem">
        </section>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $diretorio_destino = __DIR__ . "/imagens/";

        if(!file_exists($diretorio_destino)){
            mkdir($diretorio_destino, 0777, true);
        }

        $arquivo_imagem = $_FILES["foto"];
        $nome_arquivo = $arquivo_imagem["name"];

        $destino_arquivo = $diretorio_destino . $nome_arquivo;

        move_uploaded_file($arquivo_imagem["tmp_name"], $destino_arquivo);

        $id = isset($_GET['id']) ? $_GET['id'] : null;

        $poke = new Pokemon(
            $id,
            $_POST['nome'],
            $_POST['descricao'],
            $nome_arquivo,
        );

        $poke->Salvar();
    }
    ?>

    <script>
        const inputFoto = document.getElementById('foto');
        const inputFotoNome = document.getElementById('fotoNome');
        const preview = document.getElementById('preview');

        inputFoto.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                inputFotoNome.value = file.name;
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else {
                inputFotoNome.value = '';
                preview.src = 'imagens/interrogação.png';
            }
        });
    </script>
</body>

</html>