<?php

    include("../headers.php");
    include("../conexao.php");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);     

        if(isset($data['id']) && isset($data['isCompleted'])){
            $id = $data['id'];
            $isCompleted = $data['isCompleted'];

            try {
                $sql = 'update tb_tarefas set isCompleted = :isCompleted where id_tarefa = :id';
                $query = $pdo->prepare($sql);
                $query->bindParam(":id", $id);
                $query->bindParam(":isCompleted", $isCompleted);
                $query->execute();

                $result = 'ok';
                echo json_encode($result);
            } catch (PDOException $e) {
                echo json_encode(array("error" => $e->getMessage()));
            }
        }
        
    }
?>