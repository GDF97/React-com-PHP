<?php
    include('conexao.php');
    header('Access-Control-Allow-Origin: *'); // ou substitua '*' pelo domínio específico do seu frontend
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
    
        if (isset($data['login']) && isset($data['senha']) && isset($data['email'])) {
            $login = $data['login'];
            $email = $data['email'];
            $senha = $data['senha'];
        
            try {
                $sql = 'insert into tb_usuario(nm_login, nm_email, cd_senha) values(:login, :email, :senha)';
                $query = $pdo->prepare($sql);
                $query->bindParam(':login', $login);
                $query->bindParam(':email', $email);
                $query->bindParam(':senha', $senha);
                $query->execute();

                $status = 'ok';
                echo json_encode(array("status" => $status));
            } catch (PDOException $e) {
                $status = 'error';
                echo json_encode(array("error" => $e->getMessage(), "status" => $status));
            }
        }
    }
?>
