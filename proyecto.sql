drop database if exists proyecto;

create database proyecto;

use proyecto;


create table roles(
id int auto_increment,
rol varchar(20),
primary key(id)
);

create table usuarios(
id int auto_increment,
user varchar(50),
pass varchar(30),
rol int,
nivel boolean,
primary key(id),
foreign key (rol) references roles(id)
);


create table ranking(
uid int not null,
fecha date not null,
nivel int not null,
CONSTRAINT CHK_nivel  CHECK (nivel > 0 and nivel < 6),
puntuacion decimal(13,2),
primary key(uid,fecha,nivel),
foreign key (uid) references usuarios(id)
);

insert into roles values(null,"admin");
insert into roles values(null,"player");

insert into usuarios values(null,"admin","admin",1,0);
insert into usuarios values(null,"pepe","pepe",2,2);
insert into usuarios values(null,"luis","luis",2,3);

insert into ranking values(2,'2023-10-17',1,1000);
insert into ranking values(2,'2023-10-16',2,1100);
insert into ranking values(2,'2023-10-15',3,1800);
insert into ranking values(3,'2023-10-17',1,1000);
insert into ranking values(3,'2023-10-16',2,1000);
insert into ranking values(3,'2023-10-15',3,1000);


-- usuarios(id,user,pass,rol,nivel)
-- roles(id,rol)
-- ranking(uid,fecha,nivel,puntuacion,userId)