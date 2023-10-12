<?php

$servername = "localhost";
$username = "root";
$password = "mysql";
$conn = null;

try {
  $conn = new PDO("mysql:host=$servername;dbname=juego", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

$sql = "SELECT * FROM prueba";
$selectAll = $conn->prepare($sql);
$selectAll->execute();

$result = $selectAll->fetch();

//print_r($result);

$url = "?";

if($result['nivel1'] == 1){
    $url = $url.'nivel1=completado';
}

if($result['nivel2'] == 1){
    $url = $url.'&nivel2=completado';
}

if($result['nivel3'] == 1){
    $url = $url.'&nivel3=completado';
}
//die();

//$conn->close();

    /* $url = "?";

    if(isset($_POST['nivel1'])){
        $url = $url.'nivel1=completado';
    }

    if(isset($_POST['nivel2'])){
        $url = $url.'&nivel2=completado';
    }

    if(isset($_POST['nivel3'])){
        $url = $url.'&nivel3=completado';
    }

    if(isset($_POST['nivel4'])){
        $url = $url.'&nivel4=completado';
    }

    if(isset($_POST['nivel5'])){
        $url = $url.'&nivel5=completado';
    }
    //print_r($url);
    //die(); */

    header("Location: index.html" .$url);

?>