document.addEventListener('DOMContentLoaded',function(){
    

    let login = document.getElementById('btnLogin');

    login.addEventListener('click', function(e){

        let user = document.getElementById('nombre').value;
        let pass = document.getElementById('password').value;
        let rol = "player";

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log("Guardando datos")
            }
        };

        xmlhttp.open("POST","save.php?user="+user+"&pass="+pass+"&rol="+rol,true);
        xmlhttp.send();
    });
    
});
