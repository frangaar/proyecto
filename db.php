<?php
    session_start();
    
    function openDB(){

        $servername = "localhost";
        $username = "root";
        $password = "mysql";
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

            try{
                $sql = "SELECT * FROM usuarios where user='".$user."' and pass='".$pass."'";
            
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
            }
        }

        
        if(isset($_SESSION['id'])){
        
            if (strcmp($_SESSION['rol'], "admin") == 0) {
        
                header("Location: admin.php");
            }else{
        
                $conn=openDB();

                try{

                    $sql = "SELECT * FROM niveles where uid=".$_SESSION['id'];

                    $selectAll = $conn->prepare($sql);
                    $selectAll->execute();
            
                    $result = $selectAll->fetch();

                }catch(PDOException $e){
                    $_SESSION['error'] =  $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
                }
                
        
                $conn=closeDB();
        
                $url = "?";
                $append = false;
        
                if($result['nivel'] >= 1){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel1=completado';
                    $append = true;
                }
        
                if($result['nivel'] > 2){
        
                    if($append){
                        $url .= '&';
                    }
                    
                    $url .= 'nivel2=completado';
                    $append = true;
        
                }
        
                if($result['nivel'] > 3){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel3=completado';
                    $append = true;
                }
        
                if($result['nivel'] > 4){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel4=completado';
                    $append = true;
                }
        
                if($result['nivel'] > 5){
        
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

        
        $user=$_POST['user'];
        $pass=$_POST['pass'];
        $rol="player";

        try {
  
            $conn->beginTransaction();

            $insertSql = "INSERT INTO usuarios VALUES (:id,:user,:pass,:rol)";
  
            $insert = $conn->prepare($insertSql);
            $null = null;
            $insert->bindParam(':id',$null);
            $insert->bindParam(':user',$user);
            $insert->bindParam(':pass',$pass);
            $insert->bindParam(':rol',$rol);
            $insert->execute();

            $last_id = $conn->lastInsertId();


            $nivel1=0;
            $nivel2=0;
            $nivel3=0;
            $nivel4=0;
            $nivel5=0;

            $insertSql = "INSERT INTO niveles VALUES (:id,:uid,:nivel1,:nivel2,:nivel3,:nivel4,:nivel5)";
  
            $insert = $conn->prepare($insertSql);
            $null = null;
            $insert->bindParam(':id',$null);
            $insert->bindParam(':uid',$last_id);
            $insert->bindParam(':nivel1',$nivel1);
            $insert->bindParam(':nivel2',$nivel2);
            $insert->bindParam(':nivel3',$nivel3);
            $insert->bindParam(':nivel4',$nivel4);
            $insert->bindParam(':nivel5',$nivel5);
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


            $sql = "delete FROM niveles where uid=".$id;

           
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
                $sql = "select * from ranking r, usuarios u where r.uid=u.id ".$_SESSION['params']." order by r.fecha asc";
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

?>