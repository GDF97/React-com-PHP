<?php

    include("../../config/conexao.php");
    include("../../routes/headers.php");
    
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $data = json_decode(file_get_contents('php://input'), true);
        if(isset($data["name"]) && isset($data["username"]) && isset($data["password"])){
            $nome = $data['name'];
            $username = $data['username'];
            $senha = $data['password'];

            try{
                $sql = 'insert into tb_usuario(nome, username, senha) values(:nome, :username, :senha)';
                $query = $pdo->prepare($sql);
                $query->bindParam(":nome", $nome);
                $query->bindParam(":username", $username);
                $query->bindParam(":senha", $senha);
                $query->execute();
                   
                echo json_encode(array("message" => "ok"));
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