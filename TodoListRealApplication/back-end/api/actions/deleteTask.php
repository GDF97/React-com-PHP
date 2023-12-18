<?php

    include('../../config/conexao.php');
    include('../../routes/app.php');

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $data = json_decode(file_get_contents('php://input'));
        if($data){
            $id_tarefa = $data->id;
            try{
                $sql = 'delete from tb_tarefa where id_tarefa = :id_tarefa';
                $query = $pdo->prepare($sql);
                $query->bindParam(":id_tarefa", $id_tarefa);
                $query->execute();
                
                echo json_encode(array("message" => "Tarefa deletada!"));
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