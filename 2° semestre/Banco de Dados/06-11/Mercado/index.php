<?php
require_once "conexao.php";

//Busca todos os produtos
$query = "SELECT * FROM PRODUTOS";

$stmt = $conexao->prepare($query);

$stmt->execute();

$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

//Busca todas as movimentações do caixa
$query = "
    SELECT 
        C.ID,
        C.DATA_MOVIMENTACAO,
        P.NOME AS PRODUTO_NOME,
        C.QUANTIDADE_VENDIDA,
        C.VALOR
    FROM CAIXA C
    INNER JOIN PRODUTOS P ON C.ID_PRODUTO = P.ID
";

$stmt = $conexao->prepare($query);

$stmt->execute();

$movimentacoes = $stmt->fetchAll(PDO::FETCH_ASSOC);

//Processamento de venda
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_produto = $_POST["produto"];
    $quantidade = $_POST["quantidade"];
    $data = new DateTime("now");
    $data = $data->format("Y-m-d H:i:s");

    //Buscando valor do produto
    $query = "SELECT * FROM PRODUTOS WHERE ID = :ID_PRODUTO";

    $stmt = $conexao->prepare($query);
    $stmt->bindParam(":ID_PRODUTO", $id_produto);
    $stmt->execute();

    $produto = $stmt->fetch(PDO::FETCH_ASSOC);

    //Validação antes de processar
    if ($produto["QUANTIDADE"] < $quantidade) {
        $mensagem = "Erro: A quantidade inserida excede a quantidade disponível do produto";
        $tipo_mensagem = "erro";
    } else {
        $valor = $quantidade * $produto["PRECO"];

        $conexao->beginTransaction();

        try {
            $query = "
            INSERT INTO CAIXA (ID_PRODUTO, QUANTIDADE_VENDIDA, DATA_MOVIMENTACAO, VALOR)
            VALUES (:ID_PRODUTO, :QUANTIDADE_VENDIDA, :DATA_MOVIMENTACAO, :VALOR);        
            ";

            $stmt = $conexao->prepare($query);
            $stmt->bindParam(":ID_PRODUTO", $id_produto);
            $stmt->bindParam(":QUANTIDADE_VENDIDA", $quantidade);
            $stmt->bindParam(":DATA_MOVIMENTACAO", $data);
            $stmt->bindParam(":VALOR", $valor);
            $stmt->execute();

            if ($stmt->rowCount() < 1) {
                throw new Exception('Erro ao inserir uma movimentação no caixa, nenhuma linha foi afetada');
            }

            $query = "
            UPDATE PRODUTOS
            SET QUANTIDADE = (QUANTIDADE - :QUANTIDADE_VENDIDA)
            WHERE ID = :ID_PRODUTO;
            ";

            $stmt = $conexao->prepare($query);
            $stmt->bindParam(":ID_PRODUTO", $id_produto);
            $stmt->bindParam(":QUANTIDADE_VENDIDA", $quantidade);
            $stmt->execute();

            $conexao->commit();
            
            $mensagem = "Venda registrada com sucesso! Produto: {$produto['NOME']}, Quantidade: $quantidade, Valor: R$ " . number_format($valor, 2, ',', '.');
            $tipo_mensagem = "sucesso";
            
            // Recarrega as movimentações após a venda
            header("Location: index.php");
            
        } catch (Exception $e) {
            $conexao->rollback();
            $mensagem = "Erro ao salvar venda: " . $e->getMessage();
            $tipo_mensagem = "erro";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Sistema de Caixa</title>
</head>

<body>
    <div class="container">
        <h1>💰 Sistema de Caixa</h1>

        <?php if (isset($mensagem)) { ?>
            <section class="mensagem <?= $tipo_mensagem ?>">
                <p><?= $mensagem ?></p>
            </section>
        <?php } ?>

        <div class="card">
            <h2>📦 Registrar Venda</h2>
            <form action="" method="post">
                <select name="produto" id="produto" required>
                    <option value="">Selecione um produto</option>
                    <?php foreach ($produtos as $produto) { ?>
                        <option value="<?= $produto["ID"] ?>">
                            <?= $produto["NOME"] ?>
                        </option>
                    <?php } ?>
                </select>

                <input type="number" name="quantidade" id="quantidade" placeholder="Insira a quantidade vendida" min="1" required>

                <input type="submit" value="Registrar Venda">
            </form>
        </div>

        <div class="card">
            <h2>📊 Últimas Movimentações</h2>
            <div class="movimentacoes">
                <?php if (count($movimentacoes) > 0) { ?>
                    <table>
                        <thead>
                            <tr>
                                <th>Data/Hora</th>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($movimentacoes as $mov) { 
                                $data_formatada = date('d/m/Y H:i', strtotime($mov["DATA_MOVIMENTACAO"]));
                                $valor_formatado = number_format($mov["VALOR"], 2, ',', '.');
                            ?>
                                <tr>
                                    <td><?= $data_formatada ?></td>
                                    <td><?= $mov["PRODUTO_NOME"] ?></td>
                                    <td><?= $mov["QUANTIDADE_VENDIDA"] ?> un.</td>
                                    <td>R$ <?= $valor_formatado ?></td>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                <?php } else { ?>
                    <p class="vazio">Nenhuma movimentação registrada ainda.</p>
                <?php } ?>
            </div>
        </div>
    </div>
</body>

</html>