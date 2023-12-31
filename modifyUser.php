<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>
<?php
    include_once('db.php'); 
    $data=obtenerInfoUsuario();
?>
<body class="admin">

    <div class="container text-center margin-center">
        <div class="text-end">
            <a href="admin.php"><input type="button" class="btn btn-primary" value="Volver a listado usuarios"></input></a>
        </div>
        
        <div class="row align-items-end">
            <div class="col"></div>
            <div class="col">
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
                <form action="./action_page.php" method="post">
                    <div class="input-group mb-3">
                        <!-- <img src="img/login.jpg"> -->
                        <h1>Formulario de modificación de usuario</h1>
                    </div>
                    <div class="input-group mb-3">    
                        <label for="nombre" class="form-label">Nombre</label>
                        <div class="col-sm-12">
                            <input type="hidden" name="idUser" value="<?php echo $data['id'] ?>"></input>
                            <input type="text" id="nombre" class="form-control" name="user" placeholder="Username" aria-label="Username" value="<?php echo $data['user'] ?>">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <label for="pass" class="form-label">Password</label>
                        <div class="col-sm-12">
                            <input type="password" class="form-control" name="pass" placeholder="Password" aria-label="Passvord" value="<?php echo $data['pass'] ?>">
                        </div>    
                    </div>
                    <div class="input-group mb-3">
                        <!-- <label for="rol" class="form-label">Rol</label> -->
                        <div class="col-sm-12">
                            <input type="hidden" disabled class="form-control" name="rol" aria-label="Rol" value="<?php echo $data['rol'] ?>">
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" name="update" class="btn btn-primary">Actualizar</button>
                    </div>
                </form>
            </div>
            <div class="col"></div>
            
        </div>
      </div>
</body>
</html>