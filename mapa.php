<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/botones.css">
    <script src="js/main.js"></script>
    <script src="js/mapa.js"></script>
</head>
<body>
    <?php 
    session_start(); 

    if(isset($_SESSION['success']) == 1){ ?>
        <div class="alert alert-success alert-dismissible custom-alert" role="alert">
            <?php echo $_SESSION['success']; ?>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    <?php
        unset($_SESSION['success']);
    }else if(isset($_SESSION['level']) == 1){ ?>
        <div class="alert alert-danger alert-dismissible custom-alert" role="alert">
            <?php echo $_SESSION['level']; ?>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    <?php
        unset($_SESSION['level']);
    }
    ?>
    <div class="container map-container">
        <div class="col-12 cerrar-sesion">
            <a href="logout.php">
                <button type="button" id="btnCierraSesion" class="btn btn-primary cursor botones">Cerrar sesión</button>
            </a>
        </div>
        <!-- <img src="img/escenarios/india.png" id="india" class="escenario">
        <img src="img/escenarios/kenia.png" id="kenia" class="escenario">
        <img src="img/escenarios/brasil.png" id="brasil" class="escenario"> -->
        <div class="content">
            <img src="img/mapa.png" class="img-fluid" id="mapa"> 
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado1">
                <button type="button" id="audio-close1" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio1" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/spain.mp3" id="nivel1" class="nivel" name="spain" data-status="noCompletado" data-jugable="true">
            <img src="img/personajes/laia.png" id="laia" class="personaje" name="laia">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado2">
                <button type="button" id="audio-close2" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio2" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/india.mp3" id="nivel2" class="nivel" name="india" data-status="noCompletado" data-jugable="false">
            <img src="img/personajes/alisha.png" id="alisha" class="personaje" name="alisha">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado3">
                <button type="button" id="audio-close3" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio3" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/india.mp3" id="nivel3" class="nivel" name="kenia" data-status="noCompletado" data-jugable="false">
            <img src="img/personajes/malik.png" id="malik" class="personaje" name="malik">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado4">
                <button type="button" id="audio-close4" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio4" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/india.mp3" id="nivel4" class="nivel" name="brasil1" data-status="noCompletado" data-jugable="false">
            <img src="img/personajes/cauan.png" id="cauan" class="personaje" name="cauan">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado5">
                <button type="button" id="audio-close5" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio5" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/india.mp3" id="nivel5" class="nivel" name="brasil1" data-status="noCompletado" data-jugable="false">  
            <div id="linea1" class="linea"></div>
            <div id="linea2" class="linea"></div>
            <div id="linea3" class="linea"></div>
            <div id="linea4" class="linea"></div>
            <div id="linea5" class="linea"></div>          
        </div>
    </div>

</body>
</html>