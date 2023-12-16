document.addEventListener('DOMContentLoaded',function(){

    let btnLogin = document.getElementById('btnLogin'); 

    btnLogin.addEventListener('click',function(){
        localStorage.removeItem('mostrarVictoria');
    });


});