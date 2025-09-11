<?php
    require_once '../Dados/DadosMocados.php';
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Controle de Almoxarifado</title>
    <link rel="stylesheet" href="ExibirEstoque.css">
</head>

<body>
    <h1>Controle de Almoxarifado</h1>

    <main>
        <?php foreach ($itens as $item): ?>
            <div class="card">
                <div class="card-image">
                    <img src="<?= '../Imagens/' . $item->getNomeImagem(); ?>" alt="<?= $item->getNome(); ?>">
                </div>
                <div class="card-content">
                    <h3 class="card-title"><?= $item->getNome(); ?></h3>
                    <p class="card-meta">Código: <?= $item->getCodigo(); ?></p>
                    <p class="card-meta">Categoria: <?= $item->getCategoria()->getNome(); ?></p>
                    <div class="card-footer">
                        <span class="Estoque Minimo"><?= $item->getQuantidadeMinima(); ?> unid.</span>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </main>
</body>

</html>