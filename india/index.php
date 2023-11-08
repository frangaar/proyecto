<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=VT323&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/india.css">
	<link rel="stylesheet" href="css/puzzle.css">
	<link rel="stylesheet" href="css/calculos.css">
	<link rel="stylesheet" href="css/preguntas.css">
    <script src="js/india.js"></script>
    <script src="js/puzzle.js"></script>
    <script src="js/calculos.js"></script>
    <script src="js/preguntas.js"></script>
    <title>India</title>
</head>
<?php
session_start();
?>
<body>
    <div class="container-fluid botones-juego">
        <div class="row">
            <div class="col text-start">
                <img id="musica" class="pausa">
                <!-- <a><button type="button" id="pausar" class="btn btn-primary">Pausar música</button></a> -->
            </div>
            <div class="col text-end">
                <a><button type="button" id="volver" class="btn btn-primary">Volver</button></a>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="player-panel">
        <div class="content-items">
            <div id="tiempo">
                    <span>Tiempo de juego</span>
                    <div id="timer">
                        <span>0</span>
                    </div>    
                    </span>
                </div>
            <div class="imagen">
                <img src="img/laia.png">
            </div>
            <div class="items-owned">
                <table>
                    <tbody>
                        <tr>
                            <td class="separacion">
                                <div class="item" id="item1" ondrop="dropScenario(event)" ondragover="allowDropScenario(event)">
                                </div>
                            </td>
                            <td class="separacion">
                                <div class="item" id="item2" ondrop="dropScenario(event)" ondragover="allowDropScenario(event)">
                                </div>
                            </td>
                            <td class="separacion">
                                <div class="item" id="item3" ondrop="dropScenario(event)" ondragover="allowDropScenario(event)">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="game">
        <div class="content" id="mapa">
            <!-- Aqui hacemos append de todos los items del escenario -->
        </div>
        <div class="bocadillo-cuadrado" id="bocadillo-cuadrado1">
            <button type="button" id="audio-close1" class="btn-close audio-close"></button>
            <div class="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
            </div>
            <button type="button" data-audio="audio/spain.mp3" class="audio btn btn-primary" id="audio1" class="btn btn-primary">Escuchar</button>
        </div>
        <div class="bocadillo-cuadrado" id="bocadillo-cuadrado2">
            <button type="button" id="audio-close2" class="btn-close audio-close"></button>
            <div class="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
            </div>
            <button type="button" data-audio="audio/spain.mp3" class="audio btn btn-primary" id="audio2" class="btn btn-primary">Escuchar</button>
        </div>
        <div class="bocadillo-cuadrado" id="bocadillo-cuadrado3">
            <button type="button" id="audio-close3" class="btn-close audio-close"></button>
            <div class="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
            </div>
            <button type="button" data-audio="audio/spain.mp3" class="audio btn btn-primary" id="audio3" class="btn btn-primary">Escuchar</button>
        </div>
        <div class="bocadillo-cuadrado" id="bocadillo-cuadrado4">
            <button type="button" id="audio-close4" class="btn-close audio-close"></button>
            <div class="text">
                <p>Vaya!!, parece que la escuela necesita luz para poder continuar las clases. Debo conseguir todas las piezas para poder iluminar la escuela utilizando energias renovables</p>
            </div>
            <button type="button" data-audio="audio/spain.mp3" class="audio btn btn-primary" id="audio4" class="btn btn-primary">Escuchar</button>
        </div>
        <div class="bocadillo-cuadrado" id="bocadillo-cuadrado5">
            <button type="button" id="audio-close5" class="btn-close audio-close"></button>
            <div class="text">
                <p>Ohh!!, esta debe ser la casa de Alisha y su familia.</p>
            </div>
            <button type="button" data-audio="audio/spain.mp3" class="audio btn btn-primary" id="audio5" class="btn btn-primary">Escuchar</button>
        </div>
    </div>  
    

    <div id="juego1" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3 class="title">Coloca las piezas para formar la imagen de Ghandi</h3>
            <div class="container-fluid juego text-center ui-widget-content">
    
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div class="imagen">
                                <img src="img/ghandi.png" class="borroso">
                            </div>
                        </div>
                        <div class="col">
                            <div class="parrilla">
                                <div class="row row-cols-4">
                                    <div class="col border droppable" data-id="0" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="8" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="12" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                </div>
                                <div class="row row-cols-4">
                                    <div class="col border droppable" data-id="2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="5" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="9" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="13" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                </div>
                                <div class="row row-cols-4">
                                    <div class="col border droppable" data-id="1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="6" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="10" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="14" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                </div>
                                <div class="row row-cols-4">
                                    <div class="col border droppable" data-id="3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="7" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="11" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    <div class="col border droppable" data-id="15" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="piezas">
                                <div id="tablero" ondrop="drop(event)" ondragover="allowDrop(event)">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-guardar text-end">
                        <button type="button" id="guardarGhandi" disabled class="btn btn-primary" value="completado">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="juego2" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3 class="title">Resuelve los siguientes problemas de matemáticas</h3>
            <div class="container-fluid juego ui-widget-content">
                <div id="ejercicios1">
                    <div class="container" id="contenido1">
                    </div>
                </div>
                <div class="modal-guardar text-end">
                    <button type="button" id="guardarTaj" class="btn btn-primary">Comprobar</button>
                </div>
            </div>
        </div>
    </div>

    <div id="juego3" class="modal">
    <div class="modal-content">
            <span class="close">&times;</span>
            <h3 class="title">Responde a las siguientes preguntas sobre las vacas en India</h3>
            <div class="container-fluid juego ui-widget-content">
                <div id="ejercicios2">
                    <div class="container" id="contenido2">
                    </div>
                </div>
                <div class="modal-guardar text-end">
                    <button type="button" id="guardarVaca" class="btn btn-primary">Comprobar</button>
                </div>
            </div>
        </div>
    </div>

    <div id="jugar" class="modal">
        <div class="modal-content">
            <div class="modal-body">
                <p>¡Hola, superhéroes eco-friendly de 5º de primaria! Imaginad un desafío increíble en "Luz Sostenible". 
                    Vuestra misión: iluminar nuestro colegio con energía renovable. Pero esperad, ¡hay tres piezas por 
                    descubrir! Preparaos para enfrentaros a desafíos matemáticos, resolver rompecabezas y 
                    hasta descifrar preguntas sobre las vacas en la India. 
                    ¿Listos para ser los héroes que traen la luz sostenible a nuestro colegio? 
                    ¡Que la aventura comience en "Luz Sostenible"!. 
                    <span>¡Importante!: El tiempo empieza a contar cuando este mensaje desaparezca. Cuanto menos tiempo
                    necesites, mayor puntos tendrás. Pulsa el botón para empezar.
                    </p>
            </div>
            <div class="modal-footer">
                <button type="button" id="iniciarJuego" class="btn btn-primary">A jugar!!</button>
                <button type="button" id="acabarJuego" class="btn btn-primary">Aceptar!!</button>
            </div>
        </div>
    </div>

    <div id="superado" class="modal">
        <div class="modal-content">
            <div class="modal-body">
                <p></p>
            </div>
            <div class="modal-footer">
                <button type="button" id="aceptar" class="btn btn-primary">Aceptar!!</button>
            </div>
        </div>
    </div>
</body>
</html>