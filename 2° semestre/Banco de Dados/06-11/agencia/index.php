<?php
require_once 'conexao.php';

$sql = "SELECT NUMERO, PROPRIETARIO, SALDO 
        FROM CONTA_BANCARIA 
        WHERE NUMERO = :P_NUMERO";

$p_numero_conta_origem = "ABCD";

$comando = $conexao->prepare($sql);
$comando->bindParam(":P_NUMERO", $p_numero_conta_origem);
$comando->execute();
$conta_origem = $comando->fetch();

$sql = "SELECT NUMERO, PROPRIETARIO
        FROM CONTA_BANCARIA
        WHERE NUMERO <> :P_NUMERO
        ORDER BY NUMERO";

$comando = $conexao->prepare($sql);
$comando->bindParam(":P_NUMERO", $p_numero_conta_origem);
$comando->execute();
$lista_contas = $comando->fetchAll();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Realizar PIX</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <main>
        <h1>💸 Realizar PIX</h1>

        <div class="info-conta">
            <p><strong>Sua conta:</strong> <?= $conta_origem['NUMERO'] ?></p>
            <p><strong>Proprietário:</strong> <?= $conta_origem['PROPRIETARIO'] ?></p>
            <p><strong>Saldo:</strong> R$ <?= number_format($conta_origem['SALDO'], 2, ',', '.') ?></p>
        </div>

        <form method="POST" action="realizarPix.php">
            <input type="hidden" name="conta_origem" value="<?= $conta_origem['NUMERO'] ?>">

            <label for="conta_destino">Conta de destino:</label>
            <select name="conta_destino" id="conta_destino" required>
                <option value="">-- Escolha uma conta --</option>
                <?php foreach ($lista_contas as $conta): ?>
                    <option value="<?= $conta['NUMERO'] ?>">
                        <?= $conta['NUMERO'] ?> - <?= $conta['PROPRIETARIO'] ?>
                    </option>
                <?php endforeach; ?>
            </select>

            <label for="valor">Valor do PIX:</label>
            <input type="number" name="valor" id="valor" min="1" step="0.01" placeholder="Ex: 100.00" required>

            <button type="submit">Enviar PIX</button>
        </form>
    </main>
</body>
</html>
