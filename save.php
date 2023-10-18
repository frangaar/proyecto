<?php 

include_once('db.php'); 

try {

    $conn=openDB();

    $user=$_REQUEST['user'];
    $pass=$_REQUEST['pass'];
    $rol=$_REQUEST['rol'];


    $insertSql = "INSERT INTO usuarios VALUES (:id,:user,:pass,:rol)";

    $insert = $conn->prepare($insertSql);
    $null = null;
    $insert->bindParam(':id',$null);
    $insert->bindParam(':user',$user);
    $insert->bindParam(':pass',$pass);
    $insert->bindParam(':rol',$rol);
    $insert->execute();


}catch (Exception $e) {

}

$conn=closeDB();
    
    ?>