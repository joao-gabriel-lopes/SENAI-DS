<?php

$ip = "localhost";
$port = "3306";
$dbname = "escola";
$usuario = "root";
$senha = "root";

$dsn = "mysql:host=$ip;port=$port;dbname=$dbname";

try {
    $conexao = new PDO($dsn, $usuario, $senha);

} catch (PDOException $e) {
    echo "Erro: " . $e->getCode() . " Mensagem: " . $e->getMessage();

}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Banco de dados</title>
</head>

<body>

    <form action="" method="post">
        <label for="nome">Nome: </label> <br>
        <input type="text" name="nome" id="nome"> <br><br>

        <label for="idade">Idade: </label> <br>
        <input type="number" name="idade" id="idade"> <br><br>

        <input type="submit" value="Cadastrar"> <br><br>
    </form>

    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $query = "insert into aluno (NOME, IDADE) values (:nome, :idade)";

        $stmt = $conexao->prepare($query);

        $stmt->bindValue(":nome", $_POST["nome"]);
        $stmt->bindValue(":idade", $_POST["idade"]);

        $stmt->execute();
    }

    $query = "select * from aluno";

    $stmt = $conexao->prepare($query);

    $stmt->execute();

    $alunos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    ?>

    <table>

        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        </thead>

        <tbody>
            <?php

            foreach ($alunos as $key => $valor) {
                echo "<tr>";
                echo "<td>" . $valor['NOME'] . '</td>';
                echo "<td>" . $valor['IDADE'] . "</td>";
                echo "</tr>";
            }

            ?>
        </tbody>

    </table>

</body>

</html>