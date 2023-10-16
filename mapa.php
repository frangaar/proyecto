<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/main.css">
    <script src="js/main.js"></script>
</head>
<body>
    <?php session_start(); ?>
    <div class="container map-container">
        <div class="col-12 cerrar-sesion">
            <a href="logout.php"><button type="button" class="btn btn-primary">Cerrar sesión</button></a>
        </div>
        
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
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado2">
                <button type="button" id="audio-close2" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio2" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/india.mp3" id="nivel2" class="nivel" name="india" data-status="noCompletado" data-jugable="false">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado3">
                <button type="button" id="audio-close3" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio3" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/india.mp3" id="nivel3" class="nivel" name="kenia" data-status="noCompletado" data-jugable="false">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado4">
                <button type="button" id="audio-close4" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio4" class="btn btn-primary">Escuchar</button>
            </div>
            <img src="img/punto.png" data-audio="audio/india.mp3" id="nivel4" class="nivel" name="brasil1" data-status="noCompletado" data-jugable="false">
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