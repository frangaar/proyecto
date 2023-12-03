<?php
    session_start();
    
    function openDB(){

        $servername = "localhost";
        $username = "root";
        // $password = "mysql";
        $password = "root";
        $conn = null;

        try {
            $conn = new PDO("mysql:host=$servername;dbname=proyecto", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }

        return $conn;
    }

    function closeDB(){

        return null;
    }

    
    function validarUsuario(){

        $conn=openDB();
        

        if(!isset($_SESSION['id'])){

            $user = $_POST['user'];
            $pass = $_POST['pass'];
        }else{
            $user = $_SESSION['user'];
            $pass = $_SESSION['pass'];
        }

            try{
                $sql = "SELECT * FROM usuarios,roles where user='".$user."' and pass='".$pass."' and usuarios.rol=roles.id";

            
                $selectAll = $conn->prepare($sql);
                $selectAll->execute();

                $result = $selectAll->fetch();
            }catch(PDOException $e){
                $_SESSION['error'] =  $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
            }
            

            $conn=closeDB();

            if(empty($result)){ ?>
                <div class="alert alert-danger" role="alert">
                    <?php $_SESSION['error']="Usuario o password incorrectos"; ?>
                </div>
            <?php
                header("Location: login.php");
            }else{
                $_SESSION['id']=$result['id'];
                $_SESSION['rol']=$result['rol'];
                $_SESSION['user']=$result['user'];
                $_SESSION['pass']=$result['pass'];
                $_SESSION['nivel']=$result['nivel'];
            }
        //}

        
        if(isset($_SESSION['id'])){
        
            if (strcmp($_SESSION['rol'], "admin") == 0) {
        
                header("Location: admin.php");
            }else{
                     
        
                $url = "?";
                $append = false;

                
        
                if($_SESSION['nivel'] > 0){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel1=completado';
                    $append = true;
                }
        
                if($_SESSION['nivel'] >= 2){
        
                    if($append){
                        $url .= '&';
                    }
                    
                    $url .= 'nivel2=completado';
                    $append = true;
        
                }
        
                if($_SESSION['nivel'] >= 3){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel3=completado';
                    $append = true;
                }
        
                if($_SESSION['nivel'] >= 4){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel4=completado';
                    $append = true;
                }
        
                if($_SESSION['nivel'] >= 5){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel5=completado';
                    $append = true;
                }

                $conn=closeDB();
        
                header("Location: mapa.php" .$url);
            }
        }
    }

    function crearUsuario(){

        $conn=openDB();

        if(strcmp($_POST['user'],"") !== 0){
            $user=$_POST['user'];
        }else{
            $user = null;
        }


        if(strcmp($_POST['pass'],"") !== 0){
            $pass=$_POST['pass'];
        }else{
            $pass = null;
        }   
        
        
        $rol=2;

        try {
  
            $conn->beginTransaction();

            $insertSql = "INSERT INTO usuarios VALUES (:id,:user,:pass,:rol,:nivel)";
  
            $nivel=0;

            $insert = $conn->prepare($insertSql);
            $null = null;
            $insert->bindParam(':id',$null);
            $insert->bindParam(':user',$user);
            $insert->bindParam(':pass',$pass);
            $insert->bindParam(':rol',$rol);
            $insert->bindParam(':nivel',$nivel);
            $insert->execute();

            $conn->commit();

        }catch (Exception $e) {
        
            $_SESSION['error'] = "Error al crear el usuario";
            $conn->rollBack();
        }

        $conn=closeDB();
        if(!isset($_SESSION['error'])){
            $_SESSION['success'] = "Usuario creado correctamente";
            header("Location: login.php");
        }else{
            header("Location: signup.php");
        }

    }

    function obtenerUsuarios(){

        $conn=openDB();

        try {
  
            $conn->beginTransaction();

            $sql = "SELECT * FROM usuarios";
            $selectAll = $conn->prepare($sql);
            $selectAll->execute();

            $result = $selectAll->fetchAll();

            $conn->commit();

        }catch (Exception $e) {
        
            $_SESSION['error'] =  $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
            $conn->rollBack();
        }
        

        $conn=closeDB();

        return $result;
    }

    function obtenerInfoUsuario(){

        $conn=openDB();

        $id=$_SESSION['idUser'];


        try {
  
            $sql = "SELECT * FROM usuarios where id=".$id;
            
            $selectAll = $conn->prepare($sql);
            $selectAll->execute();

            $result = $selectAll->fetch();

        }catch (Exception $e) {
        
            $_SESSION['error'] =  $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
        }
        

        $conn=closeDB();

        return $result;

    }

    function modificarUsuario(){

        $conn=openDB();

        $id=$_POST['idUser'];
        $user=$_POST['user'];
        $pass=$_POST['pass'];

        try {

            $updateSql = "UPDATE usuarios set user='".$user."',pass='".$pass."' where id=".$id;
                                                
            $update = $conn->prepare($updateSql);
            $update->execute();


        }catch (Exception $e) {
        
            $_SESSION['error'] =  $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
        }
        

        $conn=closeDB();

        if(!isset($_SESSION['error'])){
            $_SESSION['success'] = "Usuario modificado correctamente";
            header("Location: admin.php");
        }else{
            header("Location: admin.php");
        }

        return $result;

    }

    function borrarUsuario(){

        $conn=openDB();

        $id=$_POST['idUser'];


        try {
  
            $conn->beginTransaction();

            $sql = "delete FROM ranking where uid=".$id;
           
            $selectAll = $conn->prepare($sql);
            $selectAll->execute();


            $sql = "delete FROM usuarios where id=".$id;

            $selectAll = $conn->prepare($sql);
            $selectAll->execute();


            $conn->commit();

        }catch (Exception $e) {
        
            $_SESSION['error'] =  "No se ha podido borrar el usuario";
            $conn->rollBack();
        }
        

        $conn=closeDB();

        if(!isset($_SESSION['error'])){
            $_SESSION['success'] = "Usuario borrado correctamente";
        }
        
        
        header("Location: admin.php");


    }

    function obtenerRanking(){

        $conn=openDB();

        try {
            
            if(isset($_SESSION['params'])){
                $sql = "select r.fecha,r.uid,u.user,r.puntuacion, r.nivel from ranking r, usuarios u where r.uid=u.id ".$_SESSION['params']." order by r.puntuacion desc";
            }else{
                $sql = "select r.fecha,r.uid,u.user,r.puntuacion, r.nivel from ranking r left join usuarios u on r.uid=u.id order by r.fecha asc";
            }

            
            $selectAll = $conn->prepare($sql);
            $selectAll->execute();

            $ranking = $selectAll->fetchAll();

        }catch (Exception $e) {
        
            $_SESSION['error'] =  $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
        }
        

        $conn=closeDB();

        return $ranking;
    }

    function obtenerAnyos(){

        $conn=openDB();

        try {
            
            $sql = "select distinct fecha from ranking order by fecha asc";
            
            $selectAll = $conn->prepare($sql);
            $selectAll->execute();

            $anyos = $selectAll->fetchAll();


        }catch (Exception $e) {
        
            $_SESSION['error'] =  $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
        }
        

        $conn=closeDB();

        return $anyos;
    }

?>