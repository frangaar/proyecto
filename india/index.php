<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="css/india.css">
	<link rel="stylesheet" href="css/puzzle.css">
	<link rel="stylesheet" href="css/calculos.css">
    <script src="js/india.js"></script>
    <script src="js/puzzle.js"></script>
    <script src="js/calculos.js"></script>
    <title>India</title>
</head>
<?php
session_start();
?>
<body>
    <div class="container-fluid btn-volver">
        <a href="../action_page.php"><button type="button" class="btn btn-primary">Volver</button></a>
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
            <button type="button" data-audio="audio/spain.mp3" class="audio btn btn-primary" id="audio1" class="btn btn-primary">Escuchar</button>
        </div>
        <div class="bocadillo-cuadrado" id="bocadillo-cuadrado3">
            <button type="button" id="audio-close3" class="btn-close audio-close"></button>
            <div class="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. MapLorem ipsum dolor sit amet, consectetur adipiscing elit. Mapmet, consectetur adipiscing elit. Map</p>
            </div>
            <button type="button" data-audio="audio/spain.mp3" class="audio btn btn-primary" id="audio1" class="btn btn-primary">Escuchar</button>
        </div>
    </div>  
    <div class="container-fluid" id="player-panel">
        <div class="content-items">
            <div class="imagen">
                <img src="img/laia.png">
            </div>
            <div class="items-owned">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div class="item">
                                    <img src="img/ghandi.png">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="item">
                                    <img src="img/ghandi.png">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="item">
                                    <img src="img/ghandi.png">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div id="juego1" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 class="title">Coloca las piezas para formar la imagen de Ghandi</h2>
            <div class="container-fluid juego text-center ui-widget-content">
    
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div class="imagen">
                                <img src="img/ghandi.png">
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
                <div id="ejercicios">
                <div class="container" id="contenido">
                </div>
                <div class="modal-guardar text-end">
                    <button type="button" id="guardarTaj" class="btn btn-primary">Comprobar</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>