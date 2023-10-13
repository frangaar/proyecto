<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="main.css">
    <script src="main.js"></script>
</head>
<body>
    <?php session_start(); ?>
    <div class="container">
        <div class="col-12 cerrar-sesion">
            <a href="logout.php"><button type="button" class="btn btn-primary">Cerrar sesión</button></a>
        </div>
        
        <div class="content">
            <img src="mapa.png" class="img-fluid" id="mapa">       
            <img src="punto.png" id="nivel1" class="nivel" name="spain" data-status="noCompletado" data-jugable="false">
            <img src="punto.png" id="nivel2" class="nivel" name="india" data-status="noCompletado" data-jugable="false">
            <img src="punto.png" id="nivel3" class="nivel" name="kenia" data-status="noCompletado" data-jugable="false">
            <img src="punto.png" id="nivel4" class="nivel" name="brasil1" data-status="noCompletado" data-jugable="false">
            <img src="punto.png" id="nivel5" class="nivel" name="brasil1" data-status="noCompletado" data-jugable="false">  
            <div id="linea1" class="linea"></div>
            <div id="linea2" class="linea"></div>
            <div id="linea3" class="linea"></div>
            <div id="linea4" class="linea"></div>
            <div id="linea5" class="linea"></div>          
        </div>
    </div>

</body>
</html>