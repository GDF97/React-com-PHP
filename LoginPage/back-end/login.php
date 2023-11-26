<?php
    include('conexao.php');
    header('Access-Control-Allow-Origin: *'); // ou substitua '*' pelo domínio específico do seu frontend
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
    
        if (isset($data['login']) && isset($data['senha'])) {
            $login = $data['login'];
            $senha = $data['senha'];
        
            try {
                $sql = 'select * from tb_usuario where nm_login = :login and cd_senha = :senha';
                $query = $pdo->prepare($sql);
                $query->bindParam(':login', $login);
                $query->bindParam(':senha', $senha);
                $query->execute();
            
                $result = $query->fetchAll(PDO::FETCH_ASSOC);
            
                if ($result) {
                    $status = 'ok';
                } else {
                    $status = 'error';
                }
            
                echo json_encode(array("status" => $status));
            } catch (PDOException $e) {
                echo json_encode(array("error" => $e->getMessage()));
            }
        }
    }
?>
