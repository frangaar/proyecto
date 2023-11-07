<!DOCTYPE html>
<html lang="en">
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
    session_start();    
    unset($_SESSION['id']);
?>
<!-- <script>
    function login() {

        let params = [
            'width='+screen.width,
            'height='+screen.height]       

        window.open("login.php", "", params);
    }

    function signup() {

      let params = [
          'width='+screen.width,
          'height='+screen.height]       

      window.open("signup.php", "", params);
    }
    </script> -->
<body>
    
    <div class="container landing-page">
        <div class="login-bar-section">
            <input type="button" class="btn btn-primary" value="Login" data-bs-toggle="modal" data-bs-target="#login"></input>
            <input type="button" class="btn btn-primary" value="Registro" data-bs-toggle="modal" data-bs-target="#registro"></input>
        </div>
        <div class="banner-section">
            <img src="img/login.jpg" class="img-fluid" id="banner"> 
        </div>
        <div class="header-section">
            <div class="col-10 header-section-intro">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non aliquet purus, id consectetur lectus. Maecenas sed velit tempor, rhoncus nisi eu, commodo orci. In finibus aliquam lorem, sagittis dignissim risus pellentesque id. Maecenas vitae lacus in lorem iaculis finibus nec vitae ante. Duis molestie dignissim sodales. Maecenas a orci et ipsum molestie pharetra. Curabitur congue libero turpis, ut dapibus leo malesuada eu. Aliquam imperdiet tempus turpis et dictum.

                    Ut rutrum efficitur scelerisque. Nullam fringilla erat ut porta luctus. Etiam ullamcorper lorem sed nisi finibus commodo. Morbi eget diam arcu. Nunc congue felis id neque faucibus, a ultrices odio iaculis. Mauris varius lacinia mattis. Nam blandit lacus nisi, eget aliquet mi rhoncus suscipit. Praesent ac massa ex. Etiam bibendum, est eu blandit faucibus, metus risus vestibulum massa, vitae feugiat ante leo a lacus. Maecenas sagittis euismod erat id malesuada. Aenean commodo gravida nunc et porta. Vivamus ut facilisis arcu, et tempus nisl. Phasellus non aliquet purus, id laoreet felis. Nam mattis, nibh iaculis laoreet elementum, massa turpis aliquam turpis, non dignissim ex tortor sit amet orci. Sed est nulla, ornare vel eros interdum, bibendum commodo purus.</p>
            </div>
        </div>        
        <div class="games-section">
            <div class="col-12 mb-3 landing-juegos">
                <h2 >Juegos</h2><a href="ranking.php"><input type="button" class="btn btn-primary" value="Ranking"></input></a>
            </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    <div class="col">
                      <div class="card h-100">
                        <img src="img/game.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="img/game.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="img/game.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="img/game.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                          <img src="img/game.jpg" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="developers-section">
            <div class="col-12 ">
                <h2>Desarrolladores</h2>
            </div>
        </div>
        <div class="footer-section">
            <div class="col-12 ">
                <h2>Footer</h2>
            </div>
        </div>
    </div>


    <!-- Login -->
    <div class="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Conectarse al juego</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
                <div class="container text-center margin-center">
                    
                    <div class="row align-items-end">
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
                                <div class="input-group mb-3 logo">
                                    <img src="img/logo.jpg">
                                </div>
                                <div class="input-group mb-3">    
                                    <label for="nombre" class="form-label">Nombre</label>
                                    <div class="col-sm-12">
                                        <input type="text" id="nombre" class="form-control" name="user" placeholder="Escribe aquí tu usuario" aria-label="Username">
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="pass" class="form-label">Password</label>
                                    <div class="col-sm-12">
                                        <input type="password" class="form-control" name="pass" placeholder="Escribe aquí tu password" aria-label="Passvord">
                                    </div>    
                                </div>
                                
                        </div>                        
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="submit" name="login" class="btn btn-primary">Login</button>
            </div>
            </form>
        </div>
        </div>
    </div>

    <!-- Registro -->
    <div class="modal fade" id="registro" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Registrarse en el juego</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
                <div class="container text-center margin-center">
                    
                    <div class="row align-items-end">
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
                                    <h1>Formulario de creación de usuario</h1>
                                </div>
                                <div class="input-group mb-3">    
                                    <label for="nombre" class="form-label">Nombre</label>
                                    <div class="col-sm-12">
                                        <input type="text" id="nombre" class="form-control" name="user" placeholder="Escribe aquí tu usuario" aria-label="Username">
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="pass" class="form-label">Password</label>
                                    <div class="col-sm-12">
                                        <input type="password" class="form-control" name="pass" placeholder="Escribe aquí tu password" aria-label="Passvord">
                                    </div>    
                                </div>
                        </div>                        
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="submit" name="signup" class="btn btn-primary">Crear</button>
            </div>
            </form>
        </div>
        </div>
    </div>

</body>
</html>