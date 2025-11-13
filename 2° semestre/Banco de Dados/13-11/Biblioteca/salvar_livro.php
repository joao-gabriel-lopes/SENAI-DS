<?php
require_once 'conexao.php';

try{
    $conexao = Conectar();

    $stmt = $conexao->prepare("CALL SALVAR_LIVRO(?, ?, ?)");

    $stmt->execute([
        isset($_POST['id']) ? (int)$_POST['id'] : 0,
        $_POST['nome'],
        $_POST['genero']
    ]);

    if($_POST["id"] > 0){
        header("Location: index.php?msg=sucesso&processo=editar");
    }else{
        header("Location: index.php?msg=sucesso&processo=salvar");
    }
    

}catch(PDOException $e){
    header("Location: index.php?msg=" . $e->getMessage());
}

?>