<?php
require_once "conexao.php";

$i = isset($_GET["i"]) ? $_GET["i"] : 0;

$query = "
SELECT
    MATERIA, ALUNO,
    SUM(NOTA) AS SOMA,
    AVG(NOTA) AS MEDIA,
    CASE
        WHEN AVG(NOTA) >= 7 THEN 'APROVADO'
        ELSE 'REPROVADO'
    END AS SITUACAO
FROM
    AVALIACAO
GROUP BY
    MATERIA, ALUNO;
";

$conexao = Conectar();

$stmt = $conexao->prepare($query);

$stmt->execute();

$lista = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Tela Avaliação</title>
</head>

<body>

    <form class="container" action="" method="post">

        <h1>Informações da avaliação</h1>

        <table>
            <thead>
                <th>Matéria</th>
                <th>Aluno</th>
                <th>Soma</th>
                <th>Média</th>
                <th>Situação</th>
            </thead>

            <tbody>
                <td><?=ucfirst(strtolower($lista[$i]["MATERIA"]))?></td>
                <td><?=ucfirst(strtolower($lista[$i]["ALUNO"]))?></td>
                <td><?=$lista[$i]["SOMA"]?></td>
                <td><?=$lista[$i]["MEDIA"]?></td>
                <td><?=ucfirst(strtolower($lista[$i]["SITUACAO"]))?></td>
            </tbody>
        </table>

        <section class="botoes">
            <a class="btn" href="index.php?i=<?= $i - 1 ?>">Voltar</a>
            <a class="btn" href="index.php?i=<?= $i + 1 ?>">Avançar</a>
        </section>

    </form>

</body>

</html>