drop database if exists proyecto;

create database proyecto;

use proyecto;


create table roles(
id int auto_increment,
rol varchar(20) not null,
primary key(id)
);

create table usuarios(
id int auto_increment,
user varchar(50) not null unique,
pass varchar(30) not null,
rol int not null,
nivel boolean not null,
primary key(id),
foreign key (rol) references roles(id)
);

create table niveles(
nivel int not null unique,
nombre varchar(50),
primary key(nivel)
);

create table ranking(
uid int not null,
fecha date not null,
nivel int not null,
CONSTRAINT CHK_nivel CHECK (nivel > 0 and nivel < 6),
puntuacion decimal(13,2),
primary key(uid,fecha,nivel),
foreign key (uid) references usuarios(id)
);

insert into roles values(null,"admin");
insert into roles values(null,"player");

insert into usuarios values(null,"admin","admin",1,0);
insert into usuarios values(null,"pepe","pepe",2,5);
insert into usuarios values(null,"luis","luis",2,3);

insert into ranking values(2,'2023-10-17',1,1000);
insert into ranking values(2,'2023-10-16',2,1100);
insert into ranking values(2,'2023-10-15',3,1800);
insert into ranking values(3,'2023-10-17',1,1000);
insert into ranking values(3,'2023-10-16',2,1000);
insert into ranking values(3,'2023-10-15',3,1000);

insert into niveles values(1,'Espanya - EcoBarna');
insert into niveles values(2,'India - Llum Sostenible');
insert into niveles values(3,'Kenia - ElectroKong');
insert into niveles values(4,'Brasil 1 - Ritmes Brasilers');
insert into niveles values(5,'Brasil 2 - Invasió Dels Talps');