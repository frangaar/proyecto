drop database if exists proyecto;

create database proyecto;

use proyecto;

create table usuarios(
id int auto_increment,
uid int not null unique,
user varchar(50),
pass varchar(30),
primary key(id)
);

create table niveles(
id int auto_increment,
uid int not null unique,
nivel1 boolean,
nivel2 boolean,
nivel3 boolean,
nivel4 boolean,
nivel5 boolean,
primary key(id),
foreign key (uid) references usuarios(uid)
);

insert into usuarios values(1,1,"fran","prueba");
insert into niveles values(1,1,true,true,true,false,false);