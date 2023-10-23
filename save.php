<?php 

include_once('db.php'); 

try {

    $conn=openDB();

    $userID=$_SESSION['id'];
    $nivel=$_REQUEST['nivel'];

    // Obtener id nueva carta creada
    $selectSql = "select * from niveles where uid=".$userID;
    $selectAll = $conn->prepare($selectSql);
    $selectAll->execute();

    $result = $selectAll->fetch();

    if($result['nivel'] == $nivel-1){
        $updateSql = "UPDATE NIVELES set nivel=".$nivel. " where uid=".$userID;

        $update = $conn->prepare($updateSql);
        $update->execute();

        $_SESSION['success'] = "Partida guardada correctamente.";
    }else if($result['nivel'] < $nivel-1){{
        $_SESSION['level'] = "Tienes que haber superado el nivel 1 para guardar la partida.";
    }   


}catch (Exception $e) {

}

$conn=closeDB();
    
    ?>