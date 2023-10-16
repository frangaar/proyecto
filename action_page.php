<?php
    include_once('db.php'); 
    

    if((isset($_POST['login']) == 1)/* || (isset($_SESSION['id']) == 1)*/){
        validarUsuario();
        
    }
    
    if(isset($_POST['signup']) == 1){
        crearUsuario();
    }

    if(isset($_POST['modificar']) == 1){

        header("Location: modifyUser.php");
        
    }

    if(isset($_POST['borrar']) == 1){
        borrarUsuario();
    }

?>