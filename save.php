<?php 

include_once('db.php'); 

try {

    $conn=openDB();

    $conn->beginTransaction();

    $puntosBase = 10000;

    $userID=$_SESSION['id'];
    $user=$_SESSION['user'];
    $pass=$_SESSION['pass'];
    $nivel=$_REQUEST['nivel'];
    $fecha= date('Y-m-d');
    $puntuacion=$puntosBase/$_REQUEST['tiempo'];

    // Comprobar si existe usuario con nivel
    $selectSql = "select * from ranking where uid=".$userID. " and fecha='".$fecha."' and nivel=".$nivel;
    $selectAll = $conn->prepare($selectSql);
    $selectAll->execute();

    $result = $selectAll->fetch();

    if($selectAll->rowCount() > 0){
        $updateSql = "UPDATE ranking set puntuacion=".$puntuacion. " where uid=".$userID. " and fecha='".$fecha."' and nivel=".$nivel;

        $update = $conn->prepare($updateSql);
        $update->execute();        
    }else{
        $insertPuntuacion = "INSERT INTO ranking VALUES (:uid,:fecha,:nivel,:puntuacion)";
  
        $insert = $conn->prepare($insertPuntuacion);
        $null = null;
        $insert->bindParam(':uid',$userID);
        $insert->bindParam(':fecha',$fecha);
        $insert->bindParam(':nivel',$nivel);
        $insert->bindParam(':puntuacion',$puntuacion);
        $insert->execute();
    }
    

    // Comprobar si existe usuario
    $selectSql = "select * from usuarios where id=".$userID;
    $selectAll = $conn->prepare($selectSql);
    $selectAll->execute();

    $result = $selectAll->fetch();

    

    if($result['nivel'] == $nivel-1){
        $updateSql = "UPDATE usuarios set nivel=".$nivel. " where id=".$userID;

        $update = $conn->prepare($updateSql);
        $update->execute();

        $_SESSION['success'] = "Juego guardado correctamente.";

    }else if($result['nivel'] < $nivel-1){
        $_SESSION['level'] = "Tienes que haber superado el nivel 1 para guardar el juego.";
    }else{
        $_SESSION['success'] = "Juego actualizada correctamente.";
    }   

    $conn->commit();

}catch (Exception $e) {
    $conn->rollback();
}

$conn=closeDB();
    
    ?>