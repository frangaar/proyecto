drop database if exists proyecto;

create database proyecto;

use proyecto;

create table usuarios(
id int auto_increment,
user varchar(50),
pass varchar(30),
rol varchar(15),
primary key(id)
);

create table niveles(
id int auto_increment,
uid int not null unique,
nivel boolean,
primary key(id),
foreign key (uid) references usuarios(id)
);

create table ranking(
uid int not null,
fecha date not null,
nivel int not null,
CONSTRAINT CHK_nivel  CHECK (nivel > 0 and nivel < 6),
puntuacion int,
primary key(uid,fecha,nivel),
foreign key (uid) references usuarios(id)
);

insert into usuarios values(null,"admin","admin","admin");
insert into usuarios values(null,"pepe","pepe","player");
insert into usuarios values(null,"juan","juan","player");
insert into niveles values(null,2,1);
insert into niveles values(null,3,0);

insert into ranking values(2,'2023-10-17',1,1000);
insert into ranking values(2,'2023-10-16',2,1100);
insert into ranking values(2,'2023-10-15',3,1800);
insert into ranking values(3,'2023-10-17',1,1000);
insert into ranking values(3,'2023-10-16',2,1000);
insert into ranking values(3,'2023-10-15',3,1000);