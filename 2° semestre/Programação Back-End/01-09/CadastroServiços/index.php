<?php
    require_once 'servico.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serviços Prestados</title>
</head>

<body>

    <h1>Serviços Prestados</h1>

    <?php
        $servico = new Serviço(
            Nome: "Conserto do ar-condicionado", 
            Descricao: "Serviço destinado a todos os tipos de reparo de ar-condicionado",
            ValorHora: 100.50,
            DiasGarantia: 30
        );
    
        echo "Nome do serviço: " . $servico->GetNome() ."<br>";
        echo "Descrição do serviço: " . $servico->GetDescricao() ."<br>";
        echo "Valor por hora do serviço: " . $servico->GetValorHora() ."<br>";
        echo "Prazo de Garantia em dias: " . $servico->GetDiasGarantia() . "<br>";
        echo "O valor do serviço de 3 horas foi: " . $servico->GetValor(180);
  
    ?>

</body>

</html>