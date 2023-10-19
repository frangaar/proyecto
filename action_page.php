<?php
    include_once('db.php'); 
    
    
    if(isset($_POST['signup']) == 1){
    
        crearUsuario();
    
    }else if(isset($_POST['obtenerInfo']) == 1){

        $_SESSION['idUser'] = $_POST['idUser'];

        header("Location: modifyUser.php");   
    
    }else if(isset($_POST['borrar']) == 1){

        borrarUsuario();

    }else if(isset($_POST['buscarRanking']) == 1){

        if(isset($_SESSION['params']) == 1){
            unset($_SESSION['params']);
        }
        
        var_dump($_POST['fecha']);
        var_dump($_POST['nivel']);
        var_dump(strcmp($_POST['fecha'],""));
        die();
        

        if(strcmp($_POST['fecha'],"") == 0){
        
            $fecha=$_POST['fecha'];

            if($fecha != ""){
                $_SESSION['params'] .= " and r.fecha='".$fecha."'";
            }           

        }
        
        if(strcmp($_POST['nivel'],"") == 0){

            $nivel=$_POST['nivel'];

            if($fecha != "Selecciona nivel"){
                $_SESSION['params'] .= " and r.nivel=".$nivel;
            }
            
            
        }

    
        header("Location: ranking.php");   

    // Validamos usuario si hacemos login o volvemos a una ventana anterior
    }else if(isset($_POST['update']) == 1){

        modificarUsuario();

    // Validamos usuario si hacemos login o volvemos a una ventana anterior
    }else if((isset($_POST['login']) == 1) || (isset($_SESSION['id']) == 1)){
    
        validarUsuario();
    
    }

    

?>