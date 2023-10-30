document.addEventListener('DOMContentLoaded',function(){


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

    

    /* let intervalID = 0;
    let detenerX = true;
    let detenerY = true;

    intervalID = setInterval(moverLaia,30);


    function moverLaia(){

        let laiaX = laia.offsetLeft;
        let laiaY = laia.offsetTop;

        if(!localStorage.getItem('primerInicio')){
            nivelActual--;
        }

        if(nivelActual == 2){

            if(laiaX < alishaX + 50){
                laia.style.left = laiaX + 4 + 'px';
                detenerX = false;
            }else{
                detenerX = true;
            }
    
    
            if(laiaY < alishaY){
                laia.style.top = laiaY + 1 + 'px';
                detenerY = false;
            }else{
                detenerY = true;
            }

        }

        if(nivelActual == 3){

            if(laiaX < malikX - 50){
                laia.style.left = laiaX - 4 + 'px';
                detenerX = false;
            }else{
                detenerX = true;
            }
    
    
            if(laiaY < malikY){
                laia.style.top = laiaY - 1 + 'px';
                detenerY = false;
            }else{
                detenerY = true;
            }

        }


        if(detenerX && detenerY){
            clearInterval(intervalID);
        }
    } */
    
});