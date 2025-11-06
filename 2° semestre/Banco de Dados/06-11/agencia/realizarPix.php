<?php
require_once 'conexao.php';

//Processando a transação
$conta_origem = isset($_POST['conta_origem']) ? $_POST['conta_origem'] : "";
$conta_destino = isset($_POST['conta_destino']) ? $_POST['conta_destino'] : "";
$valor = isset($_POST['valor']) ? $_POST['valor'] : "";

$conexao->beginTransaction();

try {
    $sql = '
        UPDATE CONTA_BANCARIA
        SET SALDO = (SALDO - :P_VALOR)
        WHERE NUMERO = :P_CONTA;
        ';

    $stmt = $conexao->prepare($sql);

    $stmt->bindParam(':P_VALOR', $valor);
    $stmt->bindParam(':P_CONTA', $conta_origem);

    $stmt->execute();

    if ($stmt->rowCount() < 0) {
        throw new Exception('Erro ao retirar valor do Pix, nenhuma linha foi afetada');
    }

    $sql = '
        UPDATE CONTA_BANCARIA
        SET SALDO = (SALDO + :P_VALOR)
        WHERE NUMERO = :P_CONTA_DESTINO;
        ';

    $stmt = $conexao->prepare($sql);

    $stmt->bindParam(':P_VALOR', $valor);
    $stmt->bindParam(':P_CONTA_DESTINO', $conta_destino);

    $stmt->execute();

    if ($stmt->rowCount() < 0) {
        throw new Exception('Erro ao adicionar valor do Pix, nenhuma linha foi afetada');
    }

    $conexao->commit();

    $mensagem = "Pix realizado com sucesso!";
} catch (Exception $e) {
    $conexao->rollback();
    $mensagem = "Erro ao realizar o Pix: " . $e->getMessage();
}

//Buscando todos as contas
$sql = "SELECT * FROM CONTA_BANCARIA";

$stmt = $conexao->prepare($sql);

$stmt->execute();

$lista_contas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do PIX</title>
    <link rel="stylesheet" href="realizarPix.css">
</head>

<body>
    <div class="status">
        <?= $mensagem ?>
    </div>

    <table>
        <thead>
            <tr>
                <th>NÚMERO</th>
                <th>PROPRIETÁRIO</th>
                <th>SALDO</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($lista_contas as $conta): ?>
                <tr>
                    <td><?= $conta['NUMERO'] ?></td>
                    <td><?= $conta['PROPRIETARIO'] ?></td>
                    <td>
                        R$ <?= number_format($conta['SALDO'], 2, ',', '.') ?>

                        <?php if ($conta['NUMERO'] === $conta_origem): ?>
                            <span class="valor-movimento negativo">(- R$ <?= number_format($valor, 2, ',', '.') ?>)</span>
                        <?php elseif ($conta['NUMERO'] === $conta_destino): ?>
                            <span class="valor-movimento positivo">(+ R$ <?= number_format($valor, 2, ',', '.') ?>)</span>
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <div class="voltar">
        <a href="index.php">← Voltar</a>
    </div>
</body>

</html>