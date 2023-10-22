<?php
    include_once('db.php'); 
    
    if(isset($_POST['signup'])){
    
        crearUsuario();
    
    }else if(isset($_POST['obtenerInfo'])){

        $_SESSION['idUser'] = $_POST['idUser'];

        header("Location: modifyUser.php");   
    
    }else if(isset($_POST['borrar'])){

        borrarUsuario();

    }else if(isset($_POST['buscarRanking'])){

        if(isset($_SESSION['params'])){
            unset($_SESSION['params']);
        }
        

        if(strcmp($_POST['fecha'],"") !== 0){
        
            $fecha=$_POST['fecha'];

            if($fecha != ""){
                $_SESSION['params'] .= " and r.fecha='".$fecha."'";
            }           

        }
        
        if(strcmp($_POST['nivel'],"") !== 0){

            $nivel=$_POST['nivel'];

            if($fecha != "Selecciona nivel"){
                $_SESSION['params'] .= " and r.nivel=".$nivel;
            }
            
            
        }

    
        header("Location: ranking.php");   

    // Validamos usuario si hacemos login o volvemos a una ventana anterior
    }else if(isset($_POST['update'])){

        modificarUsuario();

    // Validamos usuario si hacemos login o volvemos a una ventana anterior
    }else if((isset($_POST['login'])) || (isset($_SESSION['id']))){
        
        validarUsuario();
    
    }

    

?>