<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/botones.css">
    <title>Document</title>
</head>
<?php
    session_start();    
    unset($_SESSION['id']);
?>
    <body>    
        <div id="fondo"></div>
        <div class="container text-center margin-center" id="login">
            <div class="text-end login-top">
                <a href="index.php"><input type="button" id="btnInicio" class="btn btn-primary cursor botones" value="Tornar a l'inici"></input></a>
            </div>
            
            <div class="row align-items-end">
                <div class="col"></div>
                <div class="col login-form">
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
                            <h1>Conectar-se al joc</h1>
                        </div>
                        <div class="input-group mb-3 logo">
                            <img src="img/logo.jpg">
                        </div>
                        <div class="input-group mb-3">    
                            <label for="nombre" class="form-label">Nom</label>
                            <div class="col-sm-12">
                                <input type="text" id="nombre" class="form-control" name="user" placeholder="Escribe aquí tu usuario" aria-label="Username">
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <label for="pass" class="form-label">Clau</label>
                            <div class="col-sm-12">
                                <input type="password" class="form-control" name="pass" placeholder="Escribe aquí tu password" aria-label="Passvord">
                            </div>    
                        </div>
                        <div class="col-12">
                            <button type="submit" name="login" id="btnLogin" class="btn btn-primary cursor botones">Login</button>
                        </div>
                    </form>
                </div>
                <div class="col"></div>
                
            </div>
        </div>
    </body>
</html>