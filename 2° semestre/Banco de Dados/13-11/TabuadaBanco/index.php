<?php
require_once 'conexao.php';

$numero = 3;

$conexao = Conectar();

$sql = "CALL SP_TABUADA($numero)";

$stmt = $conexao->prepare($sql);
$stmt->execute();

$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Tabuada</title>
</head>

<body>
    <h1>Tabuada do <?php echo $numero; ?></h1>
    
    <?php
        echo "<pre>";
            print_r($resultado);
        echo "</pre>";
    ?>

</body>

</html>