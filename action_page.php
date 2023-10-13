<?php
    session_start();

    $servername = "localhost";
    $username = "root";
    $password = "mysql";
    $conn = null;

    try {
    $conn = new PDO("mysql:host=$servername;dbname=proyecto", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
    } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    }

if(!isset($_SESSION['uid'])){
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $sql = "SELECT uid FROM usuarios where user='".$user."' and pass='".$pass."'";
    $selectAll = $conn->prepare($sql);
    $selectAll->execute();

    $result = $selectAll->fetch();

    if(empty($result)){ ?>
        <div class="alert alert-danger" role="alert">
            <?php $_SESSION['error']="Usuario o password incorrectos"; ?>
        </div>
    <?php
        header("Location: login.php");
    }else{
        $_SESSION['uid']=$result['uid'];
    }
}

if(isset($_SESSION['uid'])){

    $sql = "SELECT * FROM niveles where uid=".$_SESSION['uid'];
    $selectAll = $conn->prepare($sql);
    $selectAll->execute();

    $result = $selectAll->fetch();


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

    header("Location: index.php" .$url);
}

?>