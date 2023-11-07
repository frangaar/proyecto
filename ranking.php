<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/fontawesome/css/all.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>
<?php 
include_once('db.php');

$ranking=obtenerRanking();
?>

<body>

    <div class="container">

        
        
        <div class="col-12 cerrar-sesion">
            <a href="index.php"><button type="button" class="btn btn-primary">Ir a inicio</button></a>
        </div>
        
            <form action="./action_page.php" method="post">
                <div class="row align-items-start">
                    <div class="col">
                        <select class="form-select" name="fecha" aria-label="Default select example">
                            <option selected value="">Selecciona fecha</option>
                            <option value="2023-10-15">2023-10-15</option>
                            <option value="2023-10-16">2023-10-16</option>
                            <option value="2023-10-17">2023-10-17</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" name="nivel" aria-label="Default select example">
                            <option selected value="">Selecciona nivel</option>
                            <option value="1">Nivel 1</option>
                            <option value="2">Nivel 2</option>
                            <option value="3">Nivel 3</option>
                            <option value="4">Nivel 4</option>
                            <option value="5">Nivel 5</option>
                        </select>
                    </div>
                    <div class="col">
                        <a href="ranking.php"><button name="buscarRanking" type="submit" class="btn btn-primary">Buscar</button></a>
                    </div>
                </div>
            </form>
        
        <?php if(isset($_SESSION['success']) == 1){ ?>
            <div class="alert alert-success alert-dismissible" role="alert">
                <?php echo $_SESSION['success']; ?>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        <?php
            unset($_SESSION['success']);
        }else  if(isset($_SESSION['error'])){ ?>
            <div class="alert alert-danger alert-dismissible" role="alert">
                <?php echo $_SESSION['error']; ?>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        <?php    
        unset($_SESSION['error']); 
        } ?>
        <div class="col-12 listado-usuarios-title mt-5">
            <h2>Listado de usuarios</h2>
        </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">UID</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Puntuación</th>
                        <th scope="col">Nivel</th>
                        
                    </tr>
                </thead>
                <tbody>
                <?php foreach ($ranking as $value) { ?>
                    <tr>
                        <td><?php echo $value['fecha'] ?></td>
                        <td><?php echo $value['uid'] ?></td>
                        <td><?php echo $value['user'] ?></td>
                        <td><?php echo $value['puntuacion'] ?></td>
                        <td><?php echo $value['nivel'] ?></td>
                    <?php } ?>
                    </tr>
                </tbody>
            </table>
    </div>
    
</body>
</html>