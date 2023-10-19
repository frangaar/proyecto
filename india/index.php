<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="css/india.css">
	<link rel="stylesheet" href="css/puzzle.css">
    <script src="js/india.js"></script>
    <script src="js/puzzle.js"></script>
    <title>India</title>
</head>
<?php
session_start();
?>
<body>
    <a href="../action_page.php" class="volver">Volver</a>
	
    <div class="container" id="game">
        <div class="content">
            <div id="character"></div>
        </div>
    </div>  
    
    <div id="myModal" class="modal">
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
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                            </div>
                            <div class="row row-cols-4">
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                            </div>
                            <div class="row row-cols-4">
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                            </div>
                            <div class="row row-cols-4">
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                <div class="col border droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
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
            </div>
        </div>
    </div>
</body>
</html>