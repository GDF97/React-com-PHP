create database bdCadastroLoginAPI;

use bdCadastroLoginAPI;

create table tb_usuario(
	id_usuario int primary key auto_increment,
    nm_login varchar(20) not null,
    nm_email varchar(50) not null,
    cd_senha varchar(20) not null
);

insert into tb_usuario(nm_login, nm_email, cd_senha) values('PedroSilva', 'pedrosilva@gmail.com', 'senha1234');