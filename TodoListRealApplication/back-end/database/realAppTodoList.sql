create database bdrealapptodolist;

use bdrealapptodolist;

CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(15),
    username VARCHAR(15),
    senha VARCHAR(20)
);

CREATE TABLE tb_tarefa (
    id_tarefa INT PRIMARY KEY AUTO_INCREMENT,
    nm_tarefa VARCHAR(25),
    isCompleted BOOL,
    fk_usuario INT,
    CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario)
        REFERENCES tb_usuario (id_usuario)
);

insert into tb_usuario(nome, username, senha) values("Pedro Silva", "Pedro123", "senhafacil123");

insert into tb_tarefa(nm_tarefa, isCompleted, fk_usuario) values("Lavar a louça", false, 1);