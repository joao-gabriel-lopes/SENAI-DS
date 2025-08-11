<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../geral.css">
    <link rel="stylesheet" href="pagina.css">
    <title>Carrinho</title>
</head>

<body>

    <main class="principal">

        <form class="container" action="" method="post">

            <img class="img-cartao" src="img/coxinha.png" alt="Coxinha">

            <article class="cartao-texto">

                <p>Coxinha</p>

                <input type="checkbox" name="coxinha">

            </article>

            <img class="img-cartao" src="img/quibe.png" alt="Quibe">

            <article class="cartao-texto">

                <p>Quibe</p>

                <input type="checkbox" name="quibe">

            </article>

            <img class="img-cartao" src="img/esfiha.png" alt="Esfiha">

            <article class="cartao-texto">

                <p>Esfiha</p>

                <input type="checkbox" name="esfiha">

            </article>

            <input class="botao-comprar" type="submit" value="Comprar">

            <p class="resposta">
                <?php

                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    $compras = [];
                    $valor = 0.00;

                    if (isset($_POST["coxinha"])) {
                        $valor += 6.00;
                        array_push($compras, "Coxinha");
                    }

                    if (isset($_POST["quibe"])) {
                        $valor += 7.00;
                        array_push($compras, "Quibe");
                    }

                    if (isset($_POST["esfiha"])) {
                        $valor += 7.50;
                        array_push($compras, "Esfiha");
                    }

                    echo "Compras: ";

                    if (count($compras) > 1) {
                        for ($i = 0; $i < count($compras); $i++) {
                            if ($i == count(($compras)) -1) {
                                echo "$compras[$i]";
                            } else{
                                echo "$compras[$i], ";
                            }
                        }
                    } else {
                        echo "$compras[0]";
                    }


                    echo "<br>";

                    echo "Valor: $valor";
                }

                ?>
            </p>

        </form>

    </main>

</body>

</html>