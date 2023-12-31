<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="img/favicon/favicon.png">
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
    <div id="fondo"></div>
    <div class="container map-container">
        <div class="col-12 cerrar-sesion">
            <div id="ranking">
                <img src="img/botones/corona.png" id="corona">
                <a href="ranking.php" target="_blank" id="btnRanking">
                    <button type="button" class="btn btn-primary cursor botones">Ranking</button>
                </a>
            </div>
            <a href="logout.php" id="btnCierraSesion">
                <button type="button" class="btn btn-primary cursor botones">Cerrar sesión</button>
            </a>
        </div>
        <div class="content">
            <img src="img/mapa.png" class="img-fluid" id="mapa"> 
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado1">
                <button type="button" id="audio-close1" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Laia, una enginyera a Barcelona compromesa amb la sostenibilitat, busca obtenir fons per viatjar a països desfavorits i portar energia sostenible a comunitats necessitades a l'Àfrica, Amèrica Llatina i Àsia. El seu objectiu és instal·lar sistemes d'energia solar i eòlica, però necessita finançament per dur a terme aquests projectes transformadors.</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio1" class="btn btn-primary"></button>
            </div>
            <img src="img/punto.png" data-audio="audio/spain.mp3" id="nivel1" class="nivel" name="spain" data-status="noCompletado" data-jugable="true">
            <img src="img/personajes/laia.png" id="laia" class="personaje" name="laia">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado2">
                <button type="button" id="audio-close2" class="btn-close audio-close"></button>
                <div class="text">
                <p>Imagineu un desafiament increïble a 'Llum Sostenible'. La vostra missió: il·luminar el nostre col·legi amb energia renovable. Però espereu, hi ha tres peces per descobrir! Prepareu-vos per a enfrontar-vos a desafiaments matemàtics, resoldre trencaclosques i fins a desxifrar preguntes sobre les vaques a l'Índia.</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio2" class="btn btn-primary"></button>
            </div>
            <img src="img/punto.png" data-audio="audio/india_mapa.mp3" id="nivel2" class="nivel" name="india" data-status="noCompletado" data-jugable="false">
            <img src="img/personajes/alisha.png" id="alisha" class="personaje" name="alisha">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado3">
                <button type="button" id="audio-close3" class="btn-close audio-close"></button>
                <div class="text">
                    <p>En un llogaret de Kenya amb falta d'energia, Laia, una valenta exploradora, s'embarca en una missió per obtenir un generador ocult a la jungla i portar electricitat a la comunitat. Enfronta desafiaments creats pel Mico Kong, superant-los amb astúcia i coneixements sobre electricitat. En assolir el generador, el Mico Kong, impressionat, permet que Laia ho activi, proporcionant finalment electricitat al llogaret i portant llum i esperança als seus habitants</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio3" class="btn btn-primary"></button>
            </div>
            <img src="img/punto.png" data-audio="audio/kenia.mp3" id="nivel3" class="nivel" name="kenia" data-status="noCompletado" data-jugable="false">
            <img src="img/personajes/malik.png" id="malik" class="personaje" name="malik">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado4">
                <button type="button" id="audio-close4" class="btn-close audio-close"></button>
                <div class="text">
                    <p>Endinsa't en un viatge musical per Brasil amb 'Ritmes Brasilers'! Desafia els teus sentits tocant tambors en seqüències encantadores, il·luminant el ritme de les vibrants tradicions brasileres. Converteix-te en el mestre del tambor i descobreix la màgia de la música brasilera a cada cop.</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio4" class="btn btn-primary"></button>
            </div>
            <img src="img/punto.png" data-audio="audio/brasil1.mp3" id="nivel4" class="nivel" name="brasil1" data-status="noCompletado" data-jugable="false">
            <img src="img/personajes/cauan.png" id="cauan" class="personaje" name="cauan">
            <div class="bocadillo-cuadrado" id="bocadillo-cuadrado5">
                <button type="button" id="audio-close5" class="btn-close audio-close"></button>
                <div class="text">
                    <p>A l'última etapa del viatge de la Laia es troba que per poder tindre unes bones instal·lacions elèctriques s'ha d'enfrentar amb uns talps. Amb un martell i bons reflexos, intenta desfer-te de suficients talps per a que abandonin la zona i poder proporcionar la electricitat necessària als habitants de la zona</p>
                </div>
                <button type="button" class="audio btn btn-primary" id="audio5" class="btn btn-primary"></button>
            </div>
            <img src="img/punto.png" data-audio="audio/brasil2.mp3" id="nivel5" class="nivel" name="brasil2" data-status="noCompletado" data-jugable="false">  
            <div id="linea1" class="linea"></div>
            <div id="linea2" class="linea"></div>
            <div id="linea3" class="linea"></div>
            <div id="linea4" class="linea"></div>
            <div id="linea5" class="linea"></div>          
        </div>
    </div>

    <div id="mensajeFinalContainer">
        <img src="img/pergamino.png" id="pergamino">
        <div id="felicitacion">
            <h1>¡Enhorabuena <?php echo $_SESSION['user'] ?>, eres un aventurero/a incansable!</h1>
            <h2>Has superado "El Viaje Renovable de Laia" con destreza sin igual.</h2>
            <h2>Con objetos y energías renovables, iluminaste el camino,
                Tu dedicación y habilidad brillan como la luz que has traído. ¡Felicidades, campeón/a! </h2>
        </div>
    </div>
    
</body>
</html>