<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego | 1.0</title>
    <link rel="stylesheet" href="./style/css.css">
    <link rel="stylesheet" href="../css/main.css">
    <!-- <link rel="shortcut icon" href="./img/personaje.png" type="image/x-icon"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<!-- <?php
session_start();
?> -->
<body>
    <div id="fondo"></div>
    <div id="timer">Temps restant: <br><span id="countdown">2:00</span></div>
    <div id="modal-bienvenida" class="modal">
        <div class="modal-content">
            <span class="close" id="close-bienvenida">&times;</span>
            <p id="titulo-binvenida">Benvingut/da a Barcelona</p>
            <p id="texto-presentacion">En aquest joc hauràs de seguir uns certs encàrrecs per poder recollir el màxim de diners que es pugui en un cert temps per començar l'aventura de la Laia,
                a partir d'ara tindras 10 segons per memoritzar la tasca que s'assginara. Enrecordat be!</p> 
        </div>
    </div>
    <div id="modal-post-bienvenida" class="modal">
        <div class="modal-content-missio">
            <span class="close" id="close-post-bienvenida">&times;</span>
            <h2>Primer encàrrec!</h2>
            <p>Porta la pilota de futbol al nen vestit amb un pantalo blau.</p>
        </div>
    </div>
    <div id="modal-post-bienvenida" class="modal">
        <div class="modal-content-missio">
            <span class="close" id="close-post-bienvenida">&times;</span>
            <h2>Primer encàrrec!</h2>
            <p>Porta la pilota de futbol al nen vestit amb un pantalo blau.</p>
        </div>
    </div>
    <div id="gameLossModal" class="modal">
        <div class="modal-content">
            <h2>¡Has perdido!</h2>
            <p>Has entregado la pelota a un personaje extra. Juego terminado.</p>
        </div>
    </div>
    <div id="modal-next-task" class="modal">
        <div class="modal-content-missio2">
            <h2>Siguiente tarea</h2>
            <p id="next-task-content"></p>
        </div>
    </div>    
    <div id="caja">
        <div id="grid-container">
            <div class="personaje" id="personaje"><img  src="../img/personajes/laiaDerechaParada.png" alt="" class="laia"></div>
        </div>
    </div>
    <script src="./js/js.js"></script>
</body>
</html>
