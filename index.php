<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/fontawesome/css/all.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/botones.css">
    <script src="js/landing.js"></script>
    <title>Document</title>
</head>
<?php
    session_start();
    unset($_SESSION['id']);
?>
<body id="mainPage">
    <div id="luces"></div>
    <div id="btnOnOff" class="btnEncender"></div>
    <img src="img/gorro.png" id="laiaGorro">
    <img src="img/laiaDerechaCaminando.gif" id="laiaLanding">
    <img src="img/escenarios/bocata.png" class="laiaBocata">
    <div id="bocataSaberMas">
        <img src="img/escenarios/mas_info.png" id="laiaInfo">
        <p>Clica aquí si quieres saber más!!</p>
    </div>
    <div id="fondo"></div>
    <div class="container landing-page apagado">
        <div class="login-bar-section">
            <img id="esp" class="idiomas" src="img/idiomas/esp.png">
            <img id="cat" class="idiomas" src="img/idiomas/cat.png">
            <img id="ing" class="idiomas" src="img/idiomas/ing.png">
            <div id="ranking">
                <img src="img/botones/corona.png" id="corona">
                <a href="ranking.php"><input type="button" id="btnRanking" class="btn btn-primary cursor botones" value="Ranking"></input></a>
            </div>
            <input type="button" class="btn btn-primary cursor botones" id="btnLandingLogin" value="Login" data-bs-toggle="modal" data-bs-target="#login"></input>
            <input type="button" class="btn btn-primary cursor botones" id="btnLandingRegistro" value="Registro" data-bs-toggle="modal" data-bs-target="#registro"></input>
        </div>
        <div class="banner-section">
            <img src="img/logo.jpg" class="img-fluid" id="banner"> 
            <h1 id="titulo">El Viaje Renovable de Laia</h1>
        </div>
        <div class="games-section">
            <div class="col-12 mb-3 landing-juegos">
                <h2 >Juegos</h2>
                <!-- <a href="ranking.php"><input type="button" id="btnRanking" class="btn btn-primary cursor botones" value="Ranking"></input></a> -->
            </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    <div class="col juegos-banner">
                      <div class="card h-100">
                        <img src="img/escenarios/spain_portada.png" class="card-img-top" id="spain_static" alt="...">
                        <img src="img/landing_gifs/spain.gif" class="card-img-top" id="spain_gif" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                          <span class="card-subtitle">Desarrollador: </span><span class="nombre">David Neriz Bonet</span>
                        </div>
                      </div>
                    </div>
                    <div class="col juegos-banner" id="india">
                      <div class="card h-100">
                        <img src="img/escenarios/india_portada.png" class="card-img-top" alt="">
                        <img src="img/landing_gifs/india.gif" class="card-img-top" id="india_gif" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Luz Sostenible</h5>
                          <p class="card-text">Imaginad un desafío increíble en "Luz Sostenible". Vuestra misión: iluminar nuestro colegio con energía renovable. Pero esperad, ¡hay tres piezas por 
                                                descubrir! Preparaos para enfrentaros a desafíos matemáticos, resolver rompecabezas y hasta descifrar preguntas sobre las vacas en la India.</p>
                          <span class="card-subtitle">Desarrollador: </span><span class="nombre">Fran García Arroyo</span>
                        </div>
                      </div>
                    </div>
                    <div class="col juegos-banner">
                        <div class="card h-100">
                          <img src="img/escenarios/kenia_portada.png" class="card-img-top" alt="...">
                            <img src="img/landing_gifs/kenia.gif" class="card-img-top" id="kenia_gif" alt="">
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <span class="card-subtitle">Desarrollador: </span><span class="nombre">Marc Pons Cabrera</span>
                          </div>
                        </div>
                    </div>
                    <div class="col juegos-banner">
                      <div class="card h-100">
                        <img src="img/escenarios/brasil1_portada.png" class="card-img-top" id="brasil1_static" alt="...">
                        <img src="img/landing_gifs/ritmes-brasilers.gif" class="card-img-top" id="brasil1_gif" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                          <span class="card-subtitle">Desarrollador: </span><span class="nombre">Javier Díaz Neira</span>
                        </div>
                      </div>
                    </div>
                    <div class="col juegos-banner">
                      <div class="card h-100">
                        <img src="img/escenarios/brasil2_portada.png" class="card-img-top" alt="...">
                        <img src="img/landing_gifs/brasil2.gif" class="card-img-top" id="brasil2_gif" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                          <span class="card-subtitle">Desarrollador: </span><span class="nombre">Jiajie Chen</span>
                        </div>
                      </div>
                    </div>
                </div>
        </div>
        <div class="developers-section">
            <div class="col-12 landing-developers">
                <h2>Desarrolladores</h2>                
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    <div class="col developers-fondo">
                        <div class="card mb-3 h-100">
                            <div class="row g-0">
                                <div class="col-1 col-sm-2 col-md-4 mt-2 developer-img-container">
                                <img src="img/game.jpg" class="img-fluid developers-img" alt="...">
                                </div>
                                <div class="col col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">David Neriz Bonet</h5>
                                    <p class="card-text">Email: <span class="email">dnerizb2223@politecnics.barcelona</span></p>
                                    <p class="card-text"><a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col developers-fondo">
                        <div class="card mb-3 h-100">
                            <div class="row g-0">
                                <div class="col-1 col-sm-2 col-md-4 mt-2 developer-img-container">
                                <img src="img/desarrolladores/fran.png" class="img-fluid developers-img" alt="...">
                                </div>
                                <div class="col col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Fran García Arroyo</h5>
                                    <p class="card-text">Email: <span class="email">fgarciaa2223@politecnics.barcelona</span></p>
                                    <p class="card-text"><a href="https://www.linkedin.com/in/francisco-garcia-arroyo-a4b763a4" target="_blank"><i class="fa-brands fa-linkedin"></i></a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col developers-fondo">
                        <div class="card mb-3 h-100">
                            <div class="row g-0">
                                <div class="col-1 col-sm-2 col-md-4 mt-2 developer-img-container">
                                <img src="img/game.jpg" class="img-fluid developers-img" alt="...">
                                </div>
                                <div class="col col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Marc Pons Cabrera</h5>
                                    <p class="card-text">Email: <span class="email">mponsc2223@politecnics.barcelona</span></p>
                                    <p class="card-text"><a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col developers-fondo">
                        <div class="card mb-3 h-100">
                            <div class="row g-0">
                                <div class="col-1 col-sm-2 col-md-4 mt-2 developer-img-container">
                                <img src="img/desarrolladores/javi-foto.jpg" class="img-fluid developers-img" alt="...">
                                </div>
                                <div class="col col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Javier Díaz Neira</h5>
                                    <p class="card-text">Email: <span class="email">jdiazn2223@politecnics.barcelona</span></p>
                                    <p class="card-text"><a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col developers-fondo">
                        <div class="card mb-3 h-100">
                            <div class="row g-0">
                                <div class="col-1 col-sm-2 col-md-4 mt-2 developer-img-container">
                                <img src="img/game.jpg" class="img-fluid developers-img" alt="...">
                                </div>
                                <div class="col col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">JiaJie Chen</h5>
                                    <p class="card-text">Email: <span class="email">jchen2223@politecnics.barcelona</span></p>
                                    <p class="card-text"><a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Login -->
    <div class="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Conectar-se al joc</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
                <div class="container text-center margin-center">
                    
                    <div class="row align-items-end">
                        <div class="col">
                            <form action="./action_page.php" method="post">
                                <div class="input-group mb-3 logo">
                                    <img src="img/logo.jpg">
                                </div>
                                <div class="input-group mb-3">    
                                    <label for="nombre" class="form-label">Nom</label>
                                    <div class="col-sm-12">
                                        <input type="text" id="nombreLogin" class="form-control" name="user" placeholder="Escribe aquí tu usuario" aria-label="Username">
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="pass" class="form-label">Clau</label>
                                    <div class="col-sm-12">
                                        <input type="password" class="form-control" name="pass" placeholder="Escribe aquí tu password" aria-label="Passvord">
                                    </div>    
                                </div>
                                
                        </div>                        
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="submit" name="login" id="btnModalLogin" class="btn btn-primary cursor botones">Login</button>
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
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Crear jugador</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
                <div class="container text-center margin-center">
                    
                    <div class="row align-items-end">
                        <div class="col">
                            <form action="./action_page.php" method="post">
                                <div class="input-group mb-3 logo">
                                    <img src="img/logo.jpg">
                                </div>
                                <div class="input-group mb-3">    
                                    <label for="nombre" class="form-label">Nom</label>
                                    <div class="col-sm-12">
                                        <input type="text" id="nombreRegistro" class="form-control" name="user" placeholder="Escribe aquí tu usuario" aria-label="Username">
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="pass" class="form-label">Clau</label>
                                    <div class="col-sm-12">
                                        <input type="password" class="form-control" name="pass" placeholder="Escribe aquí tu password" aria-label="Passvord">
                                    </div>    
                                </div>
                        </div>                        
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="submit" name="signup" id="btnModalCrear" class="btn btn-primary cursor botones">Crear</button>
            </div>
            </form>
        </div>
        </div>
    </div>

    <div id="carouselExample" class="carousel slide laiaBocata">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <p>En el apasionante juego <span style="font-weight:bold">"El Viaje Renovable de Laia"</span>, te sumergirás en la emocionante odisea de una valiente mujer llamada Laia, cuya misión es llevar energía renovable a una escuela mediante desafiantes pruebas alrededor del mundo. Laia se embarca en un viaje épico que la llevará a través de exóticos destinos, como la vibrante India, la salvaje Kenia y la exuberante Brasil.</p>
            </div>
            <div class="carousel-item">
                <p>Laia, dotada de una mente aguda y habilidades excepcionales, enfrentará desafíos de lógica, matemáticas y geografía en cada país, resolviendo intrincados acertijos para obtener piezas esenciales que alimentarán de energía sostenible a la escuela. Estas piezas, impregnadas de tecnologías renovables innovadoras, representan la clave para un futuro más verde y sostenible.</p>
            </div>
            <div class="carousel-item">
                <p>Para financiar su viaje, Laia se sumerge en la bulliciosa ciudad de Barcelona, donde realiza encargos que le permiten ganar el dinero necesario. La ciudad se convierte en su patio de juegos, mientras Laia equilibra el trabajo, la vida cotidiana y la emocionante búsqueda de las piezas que transformarán vidas.</p>            
            </div>
            <div class="carousel-item">
                <p>A medida que avanzas en el juego, descubrirás la riqueza cultural y la diversidad de los destinos, mientras Laia supera desafíos que van más allá de las pruebas mentales, enfrentándose a situaciones inesperadas y forjando amistades que la ayudarán en su noble causa.</p>            
            </div>
            <div class="carousel-item">
                <p>En <span style="font-weight:bold">"El Viaje Renovable de Laia"</span>, únete a Laia en su emocionante travesía por el mundo, donde cada paso la acerca más a la meta de iluminar el futuro con energía limpia y sostenible. ¿Tienes lo necesario para superar los desafíos y ayudar a Laia a cumplir su misión?</p> 
                <p style="font-weight:bold">¡El destino del planeta está en tus manos!</p>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</body>
</html>