
document.addEventListener('DOMContentLoaded',function(){


    let btnCierreSesion = document.getElementById('cierraSesion');

    btnCierreSesion.addEventListener('click', cierreSesion);

    function cierreSesion(){

        localStorage.clear();
        window.location.href="logout.php";
    }


});