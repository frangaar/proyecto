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
        

        if(isset($_POST['fecha']) == 1){
        
            $fecha=$_POST['fecha'];

            $_SESSION['params'] .= " and r.fecha='".$fecha."'";

        }
        
        if(isset($_POST['nivel']) == 1){

            $nivel=$_POST['nivel'];

            $_SESSION['params'] .= " and r.nivel=".$nivel;
            
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