drop database if exists proyecto;

create database proyecto;

use proyecto;

create table usuarios(
id int auto_increment,
uid int not null unique,
user varchar(50),
pass varchar(30),
rol varchar(15),
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

insert into usuarios values(null,1,"fran","fran","admin");
insert into usuarios values(null,2,"pepe","pepe","player");
insert into usuarios values(null,3,"juan","juan","player");
insert into niveles values(null,2,true,true,true,false,false);
insert into niveles values(null,3,false,false,false,false,false);