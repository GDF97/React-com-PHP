<?php

    include("../headers.php");
    include("../conexao.php");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);     

        if(isset($data['id'])){
            $id = $data['id'];

            try {
                $sql = 'delete from tb_tarefas where id_tarefa = :id';
                $query = $pdo->prepare($sql);
                $query->bindParam(":id", $id);
                $query->execute();

                $result = "ok";
                
                echo json_encode($result);
            } catch (PDOException $e) {
                echo json_encode(array("error" => $e->getMessage()));
            }
        }
        
    }

?>