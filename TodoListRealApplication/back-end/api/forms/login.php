<?php

    include("../../config/conexao.php");
    include("../../routes/headers.php");
    
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $data = json_decode(file_get_contents('php://input'), true);
        if(isset($data["username"]) && isset($data["password"])){
            $username = $data['username'];
            $senha = $data['password'];

            try{
                $sql = 'select * from tb_usuario where username = :username and senha = :senha';
                $query = $pdo->prepare($sql);
                $query->bindParam(":username", $username);
                $query->bindParam(":senha", $senha);
                $query->execute();
                
                $result = $query->fetch(PDO::FETCH_ASSOC);

                
                if($result){
                    echo json_encode(array("message" => "ok", "user_id" => $result['id_usuario'], "user_name" => $result['nome']));
                }
                else{
                    echo json_encode(array("message" => "usuario não encontrado"));
                }
            }
            catch(PDOException $e){
                echo json_encode(array("error" => $e->getMessage()));
            }
        }
        else{
            echo json_encode(array("error" => "Informações faltando"));
        }
    }
    else{
        echo json_encode(array("message" => "Metodo não autorizado"));
    }

?>