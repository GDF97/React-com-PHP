<?php

    include('../../config/conexao.php');
    include('../../routes/app.php');

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $data = json_decode(file_get_contents("php://input"));
        if($data){
            $tarefa = $data->task;
            $userId = $data->userId;    
            try{
                $sql = 'insert into tb_tarefa(nm_tarefa, isCompleted, fk_usuario) values(:tarefa, false, :userId)';
                $query = $pdo->prepare($sql);
                $query->bindParam(":tarefa", $tarefa);
                $query->bindParam(":userId", $userId);

                $query->execute();

                echo json_encode(array("message" => "ok"));
            }
            catch(PDOException $e){
                echo json_encode(array("message" => $e->getMessage()));
            }
        }
        else{
            echo json_encode(array("message" => "Informações inválidas"));
        }
    }
    else{
        echo json_encode(array("message" => "Metodo não autorizado!"));
    }

?>