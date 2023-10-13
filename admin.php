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
//session_start(); 
$listaUsuarios=obtenerUsuarios();
?>

<body>
    <div class="container">
        <div class="col-12 cerrar-sesion">
            <a href="logout.php"><button type="button" class="btn btn-primary">Cerrar sesión</button></a>
        </div>
        <div class="col-12 listado-usuarios-title">
            <h2>Listado de usuarios</h2>
        </div>
        <form action="" method="post">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">UID</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Rol</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                <?php foreach ($listaUsuarios as $value) { ?>
                    <tr>
                        <td><?php echo $value['uid'] ?></td>
                        <td><?php echo $value['user'] ?></td>
                        <td><?php echo $value['rol'] ?></td>
                        <td class="fa-actions">
                            <button type="submit" class="btn btn-outline-primary" name="modificar">
                                <i class="far fa-edit fa-text"></i>
                            </button>
                            <button type="submit" class="btn btn-outline-danger" name="borrar">
                                <i class="far fa-trash-alt fa-text"></i>
                            </button>
                        </td>
                    <?php } ?>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
    
</body>
</html>