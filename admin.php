<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="css/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> -->
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/fontawesome/css/all.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>
<?php 
include_once('db.php');
//session_start(); 
$listaUsuarios=obtenerUsuarios();
?>

<body class="admin">
    <div class="container">
        <div class="col-12 cerrar-sesion">
            <a href="logout.php"><button type="button" class="btn btn-primary">Cerrar sesión</button></a>
        </div>
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
        <div class="col-12 listado-usuarios-title">
            <h2>Listado de usuarios</h2>
        </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Rol</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                <?php foreach ($listaUsuarios as $value) { ?>
                    <tr>
                        <td><?php echo $value['id'] ?></td>
                        <td><?php echo $value['user'] ?></td>
                        <td><?php echo $value['rol'] ?></td>
                        <td class="fa-actions">
                            
                            <form action="./action_page.php" method="post">
                                <input type="hidden" name="idUser" value="<?php echo $value['id'] ?>"></input>
                                <?php if(strcmp($value['rol'],"1") !== 0){?> 
                                    <button type="submit" class="btn btn-outline-primary" name="obtenerInfo">
                                        <i class="far fa-edit fa-text"></i>
                                    </button>                                   
                                    <button type="submit" class="btn btn-outline-danger" name="borrar">
                                    <i class="far fa-trash-alt fa-text"></i>
                                </button>
                                <?php }?>
                            </form>
                        </td>
                    <?php } ?>
                    </tr>
                </tbody>
            </table>
    </div>
    
</body>
</html>