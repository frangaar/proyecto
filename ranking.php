<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="img/favicon/favicon.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/fontawesome/css/all.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>
<?php 
include_once('db.php');

$ranking=obtenerRanking();
$anyos=obtenerAnyos();
$niveles=obtenerNiveles();
?>

<body>
    <div id="fondo"></div>
    <div class="container ranking" id="containerRanking">
        
        <div class="col-12 cerrar-sesion">
            <a href="index.php"><input type="button" class="btn btn-primary cursor botones" value="Tornar a l'inici"></input></a>
        </div>
        
            <form action="./action_page.php" method="post">
                <div class="row align-items-start">
                    <div class="col">
                        <select class="form-select" name="fecha" aria-label="Default select example">
                            <option selected value="">Selecciona data</option>
                            <?php foreach ($anyos as $anyo){ ?>
                            <option value="<?php echo $anyo['fecha'] ?>"><?php echo $anyo['fecha'] ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" name="nivel" aria-label="Default select example">
                            <option selected value="">Selecciona nivell</option>
                            <?php foreach ($niveles as $nivel){ ?>
                            <option value="<?php echo $nivel['nivel'] ?>"><?php echo $nivel['nombre'] ?></option>
                            <?php } ?> 
                        </select>
                    </div>
                    <div class="col">
                        <a href="ranking.php"><input name="buscarRanking" type="submit" class="btn btn-primary cursor botones" value="Buscar"></input></a>
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

        <?php if(count($ranking) == 0){ ?>
            <div class="alert alert-warning" role="alert">
                No hi ha informació disponible per als filtres seleccionats
            </div>
        <?php } ?>
        <div class="col-12 listado-usuarios-title mt-5">
            <h2>Llistat d'usuaris</h2>
        </div>
            <table id="tabla-ranking" class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Usuari</th>
                        <th scope="col">Puntuació</th>
                        <th scope="col">Nivell</th>
                        <th scope="col">Descripció</th>
                    </tr>
                </thead>
                <tbody>
                <?php foreach ($ranking as $value) { ?>
                    <tr>
                        <td><?php echo $value['fecha'] ?></td>
                        <td><?php echo $value['user'] ?></td>
                        <td><?php echo $value['puntuacion'] ?></td>
                        <td><?php echo $value['nivel'] ?></td>
                        <td><?php echo $value['nombre'] ?></td>
                    <?php } ?>
                    </tr>
                </tbody>
            </table>
    </div>
    
</body>
</html>