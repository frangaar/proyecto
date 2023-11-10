document.addEventListener('DOMContentLoaded',function(){

    sessionStorage.clear();

    let inicioJuego = document.getElementById('jugar');
    let musica = document.getElementById('musica');
    let colisionables = document.querySelectorAll('.colisionable');
    let audios = document.querySelectorAll('.audio');
    let quienSoy = "";
    
    let abajo = false;
    let arriba = false;
    let izquierda = false;
    let derecha = false;
    let colision = false;
    let posiciones = new Array();
    const VELOCIDAD = 3;
    
    dimension = 32;

    const imagenes = ['img/arbol.png','img/hierba.png','img/laiaDerechaParada.png','img/gandhi2.png','img/taj_mahal.png','img/vaca.png','img/casaAlisha.png','img/agua.png','img/cole.png','img/electricidad.gif'];
    const piezas = ['placa_solar.png','generador.png','turbina.png'];
    const casas = ['img/house1.png','img/house2.png','img/house3.png','img/house4.png',]
    
    let player = '';

    const PLAYER = 19;
    const SCHOOL = 10; 
    const TIERRA = 11;
    const CHOZAS = 12;
    const TRONCO = 13;
    const HIERBA = 14;
    const GANDHI = 15;
    const TAJMAH = 16;
    const TOMASA = 17; // es la vaca
    const CHARCO = 18;
    const VALLAU = 20;
    const VALLAL = 30;
    const VALLAR = 40;
    const VALLAD = 50;
    const ALISHA = 60;
    const VACIOS = 99;
    

    // Mostrar pantalla inicio
    inicioJuego.style.display = 'block';

    fillScenario();
    
    function fillScenario(){

        if(window.innerWidth > 1900){
            dimension = 48;
        }else{
            dimension = 32;
        }

        let pared="img/zanja";
        let suelo="img/terra";
        
        let x = 0;
        let y = 0;

        const mapa = [
            [VACIOS, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VACIOS, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VACIOS, VACIOS, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VALLAU, VACIOS],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, TRONCO, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, CHARCO, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, CHARCO, CHARCO, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VALLAL, HIERBA, HIERBA, PLAYER, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, CHOZAS, TIERRA, TIERRA, HIERBA, CHARCO, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, CHARCO, CHARCO, TIERRA, CHOZAS, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, CHARCO, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, CHARCO, CHARCO, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, CHARCO, HIERBA, TIERRA, GANDHI, TIERRA, TIERRA, HIERBA, CHARCO, CHARCO, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VALLAL, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, TRONCO, HIERBA, HIERBA, TIERRA, TIERRA, CHARCO, CHARCO, CHARCO, CHARCO, CHARCO, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, CHARCO, CHARCO, TIERRA, TIERRA, HIERBA, TRONCO, HIERBA, HIERBA, HIERBA, VALLAR],
            [VALLAL, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, VALLAR],
            [VALLAL, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, SCHOOL, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, VALLAR],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VACIOS, CHARCO, CHARCO, CHARCO, CHARCO, CHARCO, CHARCO, CHARCO, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, TRONCO, HIERBA, HIERBA, HIERBA, VALLAR],
            [VALLAL, TIERRA, TIERRA, CHOZAS, TIERRA, TIERRA, TIERRA, CHARCO, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, VALLAR],
            [VALLAL, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, CHARCO, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, HIERBA, VALLAR],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, CHARCO, CHARCO, CHARCO, CHARCO, CHARCO, VACIOS],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, CHOZAS, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TAJMAH, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, TRONCO, HIERBA, TIERRA, TIERRA, TRONCO, HIERBA, HIERBA, TIERRA, TIERRA, ALISHA, TIERRA, TIERRA, TIERRA, TOMASA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VALLAL, HIERBA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, HIERBA, HIERBA, HIERBA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, TIERRA, VALLAR],
            [VACIOS, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VALLAD, VACIOS]
        ]

        let parentDIV = document.getElementsByClassName("content")[0];
        let nextIndex = 0;
        let img = "";
        let indiceCasa = 0;

        for(let i=0;i<mapa.length;i++){
            for(let j=0;j<mapa[i].length;j++){
                let tempDIV= document.createElement('div');
                
                tempDIV.style.left=x + 'px';
                tempDIV.style.top=y + 'px';

                
                // Si hay un personaje, un arbol o el jugador, se coloca suelo y encima los objetos 
                if(mapa[i][j]==TIERRA || mapa[i][j]==CHOZAS || mapa[i][j]==TRONCO || mapa[i][j]==HIERBA || 
                    mapa[i][j]==GANDHI || mapa[i][j]==TAJMAH || mapa[i][j]==TOMASA || mapa[i][j]==CHARCO || 
                    mapa[i][j]==PLAYER || mapa[i][j]==ALISHA || mapa[i][j]==SCHOOL){
                        img= `<img src='`+(suelo)+`.png' name='suelo'></img>`
                        tempDIV.innerHTML=img;
                        tempDIV.setAttribute('class','grid-container no-colisionable droppable');
                        tempDIV.setAttribute('ondrop','dropScenario(event)');
                        tempDIV.setAttribute('ondragover','allowDropScenario(event)');
                }
                
                parentDIV.appendChild(tempDIV);

                switch(mapa[i][j]){

                    case VALLAR:
                        nextIndex = 'muro' + Object.keys(posiciones).length;

                        img= `<img src='`+(pared)+`.png' name='muroUp'></img>`
                        let muro1 = "";
                        
                        muro1 = setNoInteractiveItem('muroUp',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(muro1);
                        
                        break;

                    case VALLAL:
                        nextIndex = 'muro' + Object.keys(posiciones).length;

                        img= `<img src='`+(pared)+`.png' name='muroLeft'></img>`
                        let muro2 = "";
                        
                        muro2 = setNoInteractiveItem('muroLeft',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(muro2);
                        
                        break;

                    case VALLAR:
                        nextIndex = 'muro' + Object.keys(posiciones).length;

                        img= `<img src='`+(pared)+`.png' name='muroRight'></img>`
                        let muro3 = "";
                        
                        muro3 = setNoInteractiveItem('muroRight',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(muro3);
                        
                        break;

                    case VALLAD:
                        nextIndex = 'muro' + Object.keys(posiciones).length;

                        img= `<img src='`+(pared)+`.png' name='muroDown'></img>`
                        let muro4 = "";
                        
                        muro4 = setNoInteractiveItem('muroDown',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(muro4);
                        
                        break;

                    case CHOZAS:
                        nextIndex = 'casa' + Object.keys(posiciones).length;
                        
                        switch(indiceCasa){
                            case 0:
                                img = '<img src='+(casas[indiceCasa])+' name=casa></img>'
                                break;
                            case 1:
                                img = '<img src='+(casas[indiceCasa])+' name=casa></img>'
                                break;
                            case 2:
                                img = '<img src='+(casas[indiceCasa])+' name=casa></img>'
                                break;
                            case 3:
                                img = '<img src='+(casas[indiceCasa])+' name=casa></img>'
                                break;
                            case 4:
                                img = '<img src='+(casas[indiceCasa])+' name=casa></img>'
                                break;
                        }
                        
                        let casa = "";

                        casa = setNoInteractiveItem('casa',img,x,y,nextIndex,indiceCasa);
                        
                        parentDIV.appendChild(casa);

                        indiceCasa++;

                        break;

                    case TRONCO:
                        nextIndex = 'arbol' + Object.keys(posiciones).length;

                        img = '<img src='+(imagenes[0])+' name=arbol></img>'
                        let arbol= document.createElement('div');
                        arbol = setNoInteractiveItem('arbol',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(arbol);
                        break;
                    case HIERBA:
                        
                        img = '<img src='+(imagenes[1])+' name=hierba></img>';
                        let hierba = "";
                        hierba = setNoInteractiveItem('hierba',img,x,y,"");
                    
                        parentDIV.appendChild(hierba);
                        break;
                    case GANDHI:
                        nextIndex = 'figura' + Object.keys(posiciones).length;
                        
                        img = '<img src='+(imagenes[3])+' id=gandhi name=gandhi></img>'
                        let figuraGandhi= setInteractiveItem('gandhi',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(figuraGandhi);

                        const gandhi = document.getElementById('gandhi');

                        setEventClickFigura(gandhi);                      

                        break;
                    case TAJMAH:
                        nextIndex = 'figura' + Object.keys(posiciones).length;
                        
                        img = '<img src='+(imagenes[4])+' id=taj_mahal name=taj_mahal></img>'
                        let figuraTaj= setInteractiveItem('taj_mahal',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(figuraTaj);

                        const taj_mahal = document.getElementById('taj_mahal');

                        setEventClickFigura(taj_mahal);

                        break;
                    case TOMASA:
                        nextIndex = 'figura' + Object.keys(posiciones).length;
                        
                        img = '<img src='+(imagenes[5])+' id=vaca name=vaca></img>'
                        let figuraVaca = setInteractiveItem('vaca',img,x,y,nextIndex);

                        parentDIV.appendChild(figuraVaca);

                        const vaca = document.getElementById('vaca');

                        setEventClickFigura(vaca);
                
                        break;
                    case CHARCO:
                        nextIndex = 'agua' + Object.keys(posiciones).length;
                        
                        img = '<img src='+(imagenes[7])+' name=agua></img>'
                        let agua = "";
                        agua = setNoInteractiveItem('agua',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(agua);
                        
                        break;
                    case PLAYER:
                        nextIndex = 'player' + Object.keys(posiciones).length;
                        
                        
                        img = '<img src='+(imagenes[2])+' name=player></img>';
                        player = setPlayer(img,x,y,nextIndex);
                        
                        parentDIV.appendChild(player);

                        break;

                    case ALISHA:
                        nextIndex = 'alisha' + Object.keys(posiciones).length;
                        
                        
                        img = '<img src='+(imagenes[6])+' name=alisha></img>';
                        let figuraAlisha = "";
                        figuraAlisha = setInteractiveItem('alisha',img,x,y,nextIndex);
                        
                        parentDIV.appendChild(figuraAlisha);
                        
                        break;

                    case SCHOOL:
                        nextIndex = 'cole' + Object.keys(posiciones).length;

                        img = '<img src='+(imagenes[8])+' name=cole></img>';
                        img += '<img src='+(imagenes[9])+' id=rayos name=rayo></img>';
                        let cole = setInteractiveItem('cole',img,x,y,nextIndex);

                        parentDIV.appendChild(cole);

                        break;
                }

                x+=dimension;
            }
            y+=dimension;
            x=0;        
        }

        nextIndex = 0;
        colisionables = document.querySelectorAll('.colisionable');
        // Hago resize para adaptarlo al tamaño de la pantalla y rellenarla
        resizeItems();

        if(sessionStorage.getItem('x') != null){
            player.style.left=sessionStorage.getItem('x') + 'px';       
        }

        if(sessionStorage.getItem('y') != null){
            player.style.top=sessionStorage.getItem('y') + 'px';
        }
    }

    function setPlayer(img,x,y,index){

        let item = document.createElement('div');
        item.setAttribute('id','character'); 
        
        item.innerHTML=img;

        item.style.left=x + 'px';
        item.style.top=y + 'px';

        posiciones[index] = [x,y];

        return item;
    }

    function setInteractiveItem(tipo,img,x,y,index){

        let item= document.createElement('div');
        item.setAttribute('class','grid-container colisionable figura ' + tipo);
        item.setAttribute('name',tipo);

        item.innerHTML=img;

        item.style.left=x + 'px';
        item.style.top=y + 'px'; 

        posiciones[index] = [x,y];

        return item;
    }

    function setEventClickFigura(figura){

        figura.addEventListener('click',function(e){
            let nameCharacter = e.currentTarget.getAttribute('name');

            abreJuego(nameCharacter);
            
        })
    }

    function setNoInteractiveItem(tipo,img,x,y,index){

        let item= document.createElement('div');

        item.style.left=x + 'px';
        item.style.top=y + 'px';
        
        if(tipo == "hierba"){
            item.setAttribute('class','grid-container no-colisionable ' + tipo);            
        }else{
            item.setAttribute('class','grid-container colisionable ' + tipo);
            
            posiciones[index] = [x,y];
        }               
        
        item.innerHTML=img;

        return item;
    }
    

    charactersPosition();

    function charactersPosition(){

        personajes = document.querySelectorAll('.figura');
        let btnClose = document.querySelectorAll('.audio-close');
        let dialogos = document.querySelectorAll('.bocadillo-cuadrado');

        let idx = 0;

        for (const key in posiciones) {
            if (Object.hasOwnProperty.call(posiciones, key)) {
                
                if(!key.includes("muro") && !key.includes("arbol") 
                && !key.includes("casa") && !key.includes("agua") && !key.includes("player")){
                    personajes[idx].style.left = posiciones[key][0] + 'px';
                    personajes[idx].style.top = posiciones[key][1] + 'px';

                    if(personajes[idx].classList.contains('colisionable')){
                        
                        let tmpFile = audios[idx].getAttribute('data-audio');
                        let file = new Audio(tmpFile);

                        audios[idx].addEventListener('click',function(){

                            file.play();
                        });

                        let dialogo = dialogos[idx];
                        
                        btnClose[idx].addEventListener('click',function(){

                            dialogo.classList.remove('visible');
                        });

                    }
                    idx++;
                }
            }
            
        }
    }


    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    function keyDown(e) {

        if(e.code == "ArrowDown"){
            abajo = true;
            arriba = false;
            if(!player.classList.contains('abajo')){
                player.classList.add('abajo');
                changeImagePlayer('abajo')
            }            
        }
        if(e.code == "ArrowUp"){
            arriba = true;
            abajo = false;
            if(!player.classList.contains('arriba')){
                player.classList.add('arriba');
                changeImagePlayer('arriba')
            }
        }
        if(e.code == "ArrowLeft"){
            izquierda = true;
            derecha = false;
            if(!player.classList.contains('izquierda')){
                player.classList.add('izquierda');
                changeImagePlayer('izquierda')
            }
        }
        if(e.code == "ArrowRight"){
            derecha = true;
            izquierda = false;
            if(!player.classList.contains('derecha')){
                player.classList.add('derecha');
                changeImagePlayer('derecha')               
            }
        }
    }

    function keyUp(e) {

        let direccion = "";

        if(e.code == "ArrowDown"){
            abajo = false;
            direccion = player.getAttribute('class');
            player.classList.remove('abajo');
            changeImagePlayer(direccion);
        }
        if(e.code == "ArrowUp"){
            arriba = false;
            direccion = player.getAttribute('class');
            player.classList.remove('arriba');
            
            changeImagePlayer(direccion);
        }
        if(e.code == "ArrowLeft"){
            izquierda = false;
            direccion = player.getAttribute('class');
            player.classList.remove('izquierda');
            changeImagePlayer(direccion);
        }
        if(e.code == "ArrowRight"){
            derecha = false;
            direccion = player.getAttribute('class');
            player.classList.remove('derecha');
            changeImagePlayer(direccion);
        }
    }

    function checkColision(x,y){
        
        let index = 0;
        colision = false;
        let dialogo1 = document.getElementById('bocadillo-cuadrado1');
        let dialogo2 = document.getElementById('bocadillo-cuadrado2');
        let dialogo3 = document.getElementById('bocadillo-cuadrado3');
        let dialogo4 = document.getElementById('bocadillo-cuadrado4');
        let dialogo5 = document.getElementById('bocadillo-cuadrado5');
        let left = 0
        let top = 0
        let leftX = 0;
        let topY = 0;

        while(!colision && index < colisionables.length){

            antesX = ((x + player.offsetWidth) <= colisionables[index].offsetLeft);
            despuesX = (x >= (colisionables[index].offsetLeft + colisionables[index].offsetWidth));
            antesY = ((y + player.offsetHeight) <= colisionables[index].offsetTop);
            despuesY = (y >= (colisionables[index].offsetTop + colisionables[index].offsetHeight));
        
        
            if(antesX || antesY){
                colision = false;
                dialogo1.classList.remove('visible');
                dialogo2.classList.remove('visible');
                dialogo3.classList.remove('visible');
                dialogo4.classList.remove('visible');
                dialogo5.classList.remove('visible');
                quienSoy = "";
            }else if(despuesX || despuesY){
                colision = false;
                dialogo1.classList.remove('visible');
                dialogo2.classList.remove('visible');
                dialogo3.classList.remove('visible');
                dialogo4.classList.remove('visible');
                dialogo5.classList.remove('visible');
                quienSoy = "";
            }else{
                colision = true; 
                quienSoy = colisionables[index].getAttribute('name');
                colisionables[index].focus();
                
                if(quienSoy == 'gandhi'){
                    left = colisionables[index].offsetLeft;
                    top = colisionables[index].offsetTop;
                    leftX = 90;
                    topY = -48;
                    showDialogue(dialogo1,left,leftX,top,topY);
                    
                }else if(quienSoy == 'taj_mahal'){
                    left = colisionables[index].offsetLeft;
                    top = colisionables[index].offsetTop;
                    leftX = 150;
                    topY = -80;
                    showDialogue(dialogo2,left,leftX,top,topY);
                    
                }else if(quienSoy == 'vaca'){
                    left = colisionables[index].offsetLeft;
                    top = colisionables[index].offsetTop;
                    leftX = -30;
                    topY = -170;
                    showDialogue(dialogo3,left,leftX,top,topY);
                    
                }else if(quienSoy == 'cole'){
                    left = colisionables[index].offsetLeft;
                    top = colisionables[index].offsetTop;
                    leftX = -10;
                    topY = -160;
                    showDialogue(dialogo4,left,leftX,top,topY);
                }else if(quienSoy == 'alisha'){
                    left = colisionables[index].offsetLeft;
                    top = colisionables[index].offsetTop;
                    leftX = -20;
                    topY = -130;
                    showDialogue(dialogo5,left,leftX,top,topY);
                }
            }
            index++;        
        };
        
        
        return colision;
    }

    function showDialogue(dialogo,left,x,top,y){

        dialogo.style.left = left + x + 'px'
        dialogo.style.top = top + y + 'px'
        dialogo.classList.add('visible');
    }

    function move(){

        x = player.offsetLeft;
        y = player.offsetTop;


        if(abajo && derecha){
            x = player.offsetLeft + VELOCIDAD;
            y = player.offsetTop + VELOCIDAD;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(abajo && izquierda){
            x = player.offsetLeft - VELOCIDAD;
            y = player.offsetTop + VELOCIDAD;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(arriba && derecha){
            x = player.offsetLeft + VELOCIDAD;
            y = player.offsetTop - VELOCIDAD;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(arriba && izquierda){
            x = player.offsetLeft - VELOCIDAD;
            y = player.offsetTop - VELOCIDAD;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }

        }else if(arriba){
            y = player.offsetTop - VELOCIDAD;
            colision = checkColision(x,y);

            if(!colision){
                player.style.top = y + 'px';
            }
        }else if(abajo){
            y = player.offsetTop + VELOCIDAD;
            colision = checkColision(x,y);

            if(!colision){
                player.style.top = y + 'px';
            }
        }else if(izquierda){
            x = player.offsetLeft - VELOCIDAD;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
            }
        }else if(derecha){
            x = player.offsetLeft + VELOCIDAD;            
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
            }
        }
    }


    function animar(){
        move();
        requestAnimationFrame(animar)
    }

    animar();


    function resizeItems(){

        let noColisionables = document.querySelectorAll('.grid-container.no-colisionable');
        let noColisionablesImg = document.querySelectorAll('.grid-container.no-colisionable > img');
        
        let colisionables =  document.querySelectorAll('.grid-container.colisionable');
        let colisionablesImg = document.querySelectorAll('.grid-container.colisionable > img');


        for (let x = 0; x < noColisionables.length; x++) {
            
            noColisionables[x].style.width = dimension + 'px';
            noColisionables[x].style.height = dimension + 'px';
            noColisionablesImg[x].style.width = dimension + 'px';
            noColisionablesImg[x].style.height = dimension + 'px';
        }

        for (let y = 0; y < colisionables.length; y++) {
            
            colisionables[y].style.width = dimension + 'px';
            colisionables[y].style.height = dimension + 'px';
            colisionablesImg[y].style.width = dimension + 'px';
            colisionablesImg[y].style.height = dimension + 'px';    
        }

        
    }

    function abreJuego(nameCharacter){

        if(nameCharacter == quienSoy){

            switch (nameCharacter) {
                case "gandhi":
                    let juego1 = document.getElementById("juego1");
                    juego1.style.display = "block";
                    break;
            
                case "taj_mahal":
                    let juego2 = document.getElementById("juego2");
                    juego2.style.display = "block";
                    break;
    
                case "vaca":
                    let juego3 = document.getElementById("juego3");
                    juego3.style.display = "block";
                    break;
    
                default:
                    break;
            }
        }        
    }

    function changeImagePlayer(direccion){
        
        let figura = document.querySelector('#character > img');

        let tienesClases = player.getAttribute('class');

        if(tienesClases != ""){
            if(direccion == "abajo"){
                figura.src = "img/laiaDerechaCaminando.gif";
            }else if(direccion == "arriba"){
                figura.src = "img/laiaDerechaCaminando.gif";
            }else if(direccion == "izquierda"){
                figura.src = "img/laiaIzquierdaCaminando.gif";
            }else if(direccion == "derecha"){
                figura.src = "img/laiaDerechaCaminando.gif";
            }
        }else{
            
            if(direccion == "abajo"){
                figura.src = "img/laiaDerechaParada.png";
            }else if(direccion == "arriba"){
                figura.src = "img/laiaDerechaParada.png";
            }else if(direccion == "izquierda"){
                figura.src = "img/laiaIzquierdaParada.png";
            }else if(direccion == "derecha"){
                figura.src = "img/laiaDerechaParada.png";
            }
        }
    }


    let volver = document.getElementById('volver');
    let salirJuego = document.getElementById('salirJuego');

    volver.addEventListener('click',function(){

        let item1 = sessionStorage.getItem('ghandi');
        let item2 = sessionStorage.getItem('taj');
        let item3 = sessionStorage.getItem('vaca');

        // Si consigue todos los objetos
        if(item1 == "true" && item2 == "true" && item3 == "true"){

            window.location.href='../save.php?nivel=2+&tiempo='+reloj;            
        }else{
            salirJuego.style.display = 'block';

            let salirSi = document.querySelector('#salirJuego #si');
            let salirNo = document.querySelector('#salirJuego #no');

            salirSi.addEventListener('click',function(){

                window.location.href='../action_page.php';  
            });

            salirNo.addEventListener('click',function(){

                salirJuego.style.display = 'none';
            });

        }
    
    });
    

    setEnergyItems();
    
    function setEnergyItems(){

        let itemsList = document.getElementsByClassName('item');
        let idx = 0;

        for (let index = 0; index < itemsList.length; index++) {
            
            let ficha= document.createElement('img');
            ficha.setAttribute('id','dragPieza' + index);
            ficha.setAttribute('class','bloque'); 
            ficha.setAttribute('draggable','true');
            ficha.setAttribute('onDragStart','dragScenario(event)');
            ficha.setAttribute('src','img/piezas/'+piezas[index]);
            ficha.setAttribute('data-id',index);
            idx++;

            let itemBlock = document.getElementById('item'+idx);
            itemBlock.appendChild(ficha)
        }
        
    }

    let reloj = 0;
    let labelTiempo = document.querySelector('#timer > span');
    

    function incrementar(){
        reloj++;
        labelTiempo.innerHTML = reloj;
    }

    let btnJugar = document.getElementById('iniciarJuego')
    let btnfinalJuego = document.getElementById('acabarJuego')
    

    btnJugar.addEventListener('click',iniciarJuego);

    function iniciarJuego(){
        inicioJuego.style.display = "none";
        intervalID = setInterval(incrementar,1000);
        iniciarMusica();
    }    

    btnfinalJuego.addEventListener('click',function(){
        inicioJuego.style.display = "none";
    })



    
    function iniciarMusica(){

        let tmpFile = "audio/hindu.mp3"
        musicaIndia = new Audio(tmpFile);
        musicaIndia.play();
    }

    function pararMusica(){

        let tmpFile = "audio/hindu.mp3"
        musicaIndia = new Audio(tmpFile);
        musicaIndia.play();
    }

    musica.addEventListener('click',function(){

        if(musica.classList.contains('play')){
            musica.classList.add('pausa');
            musica.classList.remove('play');
            musicaIndia.play();
        }else{
            musica.classList.add('play');
            musica.classList.remove('pausa');            
            musicaIndia.pause();
        }
    })

    let btnConseguido = document.querySelector('#superado #aceptar');
    let btnAspa = document.querySelector('#superado #error-close');
    let modalSuperado = document.getElementById('superado');

    btnConseguido.addEventListener('click',function (){

        let imgError = document.querySelector('#superado .modal-footer #img_notis');

        modalSuperado.style.display = "none";
        imgError.classList.remove('error');
        modalSuperado.classList.remove('success');
    });

    btnAspa.addEventListener('click',function (){

        let imgError = document.querySelector('#superado .modal-footer #img_notis');

        modalSuperado.style.display = "none";
        imgError.classList.remove('error');
        modalSuperado.classList.remove('success');
    });

});


function allowDropScenario(ev) {
    ev.preventDefault();
}

function dragScenario(ev) {
    // asigna el valor del div mediante la clase y lo guarda en datatransfer co el nombre text
    ev.dataTransfer.setData("text", ev.target.id);

    //console.log(ev.target.innerText); //saca el texto
}

function dropScenario(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");
    let pieza = document.getElementById(data);
    
    ev.currentTarget.insertBefore(pieza, ev.currentTarget.firstChild);

    lightOn();
}

document.ondragenter = function(e){

    e.preventDefault();
    if ( e.target.className == "droppable" ) {
    
        e.classList.add("hover");
    }
};


document.ondragleave = function(e){

    if ( e.target.className == "droppable" ) {
        e.classList.remove("hover");
    }
};


function lightOn(){

    let countPendingItems = document.querySelectorAll('.item > img')
    let escuela = document.querySelector('.cole > img');

    if(countPendingItems.length == 0){
        escuela.style.filter = "brightness(100%)";
        clearInterval(intervalID);
        
        let finalJuego = document.getElementById('jugar');
        let btnIniciarJuego = document.getElementById('iniciarJuego');
        let btnFinJuego = document.getElementById('acabarJuego');
        let alturaModal = document.querySelector('#jugar .modal-content');
        let mensaje = document.querySelector('#jugar .modal-content p');
        let rayos = document.getElementById('rayos');
        mensaje.innerHTML = "Enhorabuena!!, has completado el juego y el colegio ya tiene luz. Puedes pasar al siguiente nivel";

        btnIniciarJuego.style.display = "none";
        btnFinJuego.style.display = "block";
        rayos.style.display = "none";

        finalJuego.classList.add('bgColor');
        alturaModal.classList.add('resize-modal');
        finalJuego.style.display = "block";
    }else{
        escuela.style.filter = "brightness(0%)";
        rayos.style.display = "block";
    }
}