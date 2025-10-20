<?php
require_once "Entidades/Pokemon.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Pokedex</title>
    <link rel="stylesheet" href="exibir_pokemon.css">
</head>

<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["id"])) {
        $id = $_GET["id"];

        $pokemon = new Pokemon($id, null, null, null);
    }
}
?>

<body>
    <form method="post">
        <section>
            <h1>Pokédex Nº <?= isset($pokemon) ? $pokemon->GetId() : "" ?></h1>

            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value="<?= isset($pokemon) ? $pokemon->GetNome() : "" ?>">

            <label for="descricao">Descrição:</label>
            <textarea name="descricao" id="descricao"><?= isset($pokemon) ? $pokemon->GetDescricao() : "" ?></textarea>

            <label for="foto">Foto:</label>
            <input type="file" name="foto" id="foto" accept="image/*">
            <input type="hidden" name="fotoNome" id="fotoNome" readonly>

            <input type="submit" value="Salvar">

            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $id = isset($_GET["id"]) ? $_GET["id"] : null;

                $pokemon = new Pokemon(
                    $id,
                    $_POST["nome"],
                    $_POST["descricao"],
                    $_POST["fotoNome"]
                );

                $pokemon->SetNome($_POST["nome"]);
                $pokemon->SetDescricao($_POST["descricao"]);
                $pokemon->SetNomeImagem($_POST["fotoNome"]);

                $pokemon->Salvar();
            }
            ?>
        </section>

        <section>
            <?php if (isset($pokemon)) { ?>
                <img src='imagens/<?=$pokemon->GetNomeImagem()?>' alt='Imagem do pokemon'>
            <?php } else { ?>
                <img id='preview' src='imagens/interrogação.png' alt='Pré-visualização da imagem'>
            <?php } ?>
        </section>
    </form>

    <script>
        const inputFoto = document.getElementById('foto');
        const inputFotoNome = document.getElementById('fotoNome');
        const preview = document.getElementById('preview');

        inputFoto.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                inputFotoNome.value = file.name;
                const reader = new FileReader();
                reader.onload = function (e) {
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