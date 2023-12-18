<?php

    include('../../config/conexao.php');
    include('../../routes/app.php');

    if($_SERVER['REQUEST_METHOD'] == "GET"){
        if(isset($_GET['idUsuario'])){
            $userId = $_GET['idUsuario'];
            try{
                $sql = 'select id_tarefa, nm_tarefa, isCompleted from tb_tarefa where fk_usuario = :userId';
                $query = $pdo->prepare($sql);
                $query->bindParam(":userId", $userId);
                $query->execute();

                $result = $query->fetchAll(PDO::FETCH_ASSOC);
                
                if($result){
                    echo json_encode($result);
                }else{
                    echo json_encode(array("message" => "Nenhuma tarefa encontrada para esse usuário"));
                }
            }
            catch(PDOException $e){
                echo json_encode(array("message" => $e->getMessage()));
            }
        }
        else{
            echo json_encode(array("message" => "Usuario não encontrado"));
        }
    }
    else{
        echo json_encode(array("message" => "Metodo não autorizado!"));
    }

?>