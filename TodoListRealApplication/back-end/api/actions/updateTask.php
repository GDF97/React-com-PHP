<?php

    include('../../config/conexao.php');
    include('../../routes/app.php');

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);   
        if(isset($data['id']) && isset($data['tarefa']) && isset($data['todoStatus'])){
            $id_tarefa = $data['id'];
            $nm_tarefa = $data['tarefa']; 
            $todoStatus = $data['todoStatus']; # todoStatus é a mesma coisa que o isCompleted
            try{
                $sql = 'update tb_tarefa set nm_tarefa = :tarefa, isCompleted = :todoStatus where id_tarefa = :id_tarefa';
                $query = $pdo->prepare($sql);
                $query->bindParam(":id_tarefa", $id_tarefa);
                $query->bindParam(":tarefa", $nm_tarefa);
                $query->bindParam(":todoStatus", $todoStatus);
                $query->execute();
                
                echo json_encode(array("message" => "Tarefa alterada!"));
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