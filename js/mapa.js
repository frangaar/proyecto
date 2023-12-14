document.addEventListener('DOMContentLoaded',function(){


    if(localStorage.getItem('mostrarVictoria') == false || localStorage.getItem('mostrarVictoria') == null){
        localStorage.setItem('mostrarVictoria',true);
    }
    
    localStorage.setItem('primerInicio',true);
    let nivelActual = 0;

    let alisha = document.getElementById('alisha');

    let alishaX = alisha.offsetLeft;
    let alishaY = alisha.offsetTop;

    let malik = document.getElementById('malik');

    let malikX = malik.offsetLeft;
    let malikY = malik.offsetTop;

    let cauan = document.getElementById('cauan');

    let cauanX = cauan.offsetLeft;
    let cauanY = cauan.offsetTop;

    let laia = document.getElementById('laia');

    
    getURLParams(this);   


    function getURLParams(document){

        console.log(document.URL);
        let paramsTmp = document.URL.split('?');
        let items = new Array();
        let params = new Array();

        
        items=paramsTmp[1].split('&');
        
        if(items[0] != ""){
            for (let index = 0; index < items.length; index++) {
                paramsTmp=items[index].split('=');
                params[paramsTmp[0]]=paramsTmp[1];
            }
        }


        selectCurrentLevel(params);        
    }

    function selectCurrentLevel(levelsList){

        let numLevels = Object.keys(levelsList).length;
        let detener = false;

        while(!detener && numLevels){

            if(Object.values(levelsList)[nivelActual] == undefined){
                detener = true;
            }
            nivelActual++;
        }
    }


    inicioPosicionLaia();

    function inicioPosicionLaia(){

        if(nivelActual == 2){

            laia.style.left = alishaX + 50 + 'px';
            laia.style.top = alishaY + 'px';
            localStorage.setItem('primerInicio',false);
        }

        if(nivelActual == 3){

            laia.style.left = malikX - 50 + 'px';
            laia.style.top = malikY + 'px';
            localStorage.setItem('primerInicio',false);
        }

        if(nivelActual == 4 || nivelActual == 5){

            laia.style.left = cauanX - 50 + 'px';
            laia.style.top = cauanY + 'px';
            localStorage.setItem('primerInicio',false);
        }
    
    }

    if(localStorage.getItem('mostrarVictoria') == 'true'){

        if(nivelActual > 5){
            let pergamino = document.getElementById('mensajeFinalContainer');
    
            pergamino.classList.add('mostrarPergamino');
            localStorage.setItem('mostrarVictoria',false);
        }
    }

    let btcCerrarSesion = document.getElementById('btnCierraSesion');

    btcCerrarSesion.addEventListener('click',function(){
        localStorage.removeItem('mostrarVictoria');
    });

    const pergaminoContainer = document.getElementById('mensajeFinalContainer');
    document.addEventListener('mousedown', function (e) {
        !pergaminoContainer.contains(e.target) ? pergaminoContainer.classList.remove('mostrarPergamino') : null
    });
    
});