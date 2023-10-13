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

        if(!isset($_SESSION['uid'])){

            $user = $_POST['user'];
            $pass = $_POST['pass'];

            $sql = "SELECT * FROM usuarios where user='".$user."' and pass='".$pass."'";
            $selectAll = $conn->prepare($sql);
            $selectAll->execute();

            $result = $selectAll->fetch();

            $conn=closeDB();

            if(empty($result)){ ?>
                <div class="alert alert-danger" role="alert">
                    <?php $_SESSION['error']="Usuario o password incorrectos"; ?>
                </div>
            <?php
                header("Location: login.php");
            }else{
                $_SESSION['uid']=$result['uid'];
                $_SESSION['rol']=$result['rol'];
                $_SESSION['user']=$result['user'];
                $_SESSION['pass']=$result['pass'];
            }
        }

        
        if(isset($_SESSION['uid'])){
        
            if (strcmp($_SESSION['rol'], "admin") == 0) {
        
                header("Location: admin.php");
            }else{
        
                $conn=openDB();

                $sql = "SELECT * FROM niveles where uid=".$_SESSION['uid'];
                $selectAll = $conn->prepare($sql);
                $selectAll->execute();
        
                $result = $selectAll->fetch();
        
                $conn=closeDB();
        
                $url = "?";
                $append = false;
        
                if($result['nivel1'] == 1){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel1=completado';
                    $append = true;
                }
        
                if($result['nivel2'] == 1){
        
                    if($append){
                        $url .= '&';
                    }
                    
                    $url .= 'nivel2=completado';
                    $append = true;
        
                }
        
                if($result['nivel3'] == 1){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel3=completado';
                    $append = true;
                }
        
                if($result['nivel4'] == 1){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel4=completado';
                    $append = true;
                }
        
                if($result['nivel5'] == 1){
        
                    if($append){
                        $url .= '&';
                    }
        
                    $url .= 'nivel5=completado';
                    $append = true;
                }
        
                header("Location: mapa.php" .$url);
            }
        }
    }

    function obtenerUsuarios(){

        $conn=openDB();


        $sql = "SELECT * FROM usuarios";
        $selectAll = $conn->prepare($sql);
        $selectAll->execute();

        $result = $selectAll->fetchAll();

        $conn=closeDB();

        return $result;
    }

?>