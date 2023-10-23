document.addEventListener('DOMContentLoaded',function(){

    sessionStorage.clear();

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
    
    dimension = 48;

    const imagenes = ['img/arbol.png','img/hierba.gif','img/warrior_right_parado.png','img/mahatma_gandhi.png','img/taj_mahal.png','img/vaca.gif','img/casa.png','img/agua.png','img/cole.png'];
    const piezas = ['placa_solar.png','generador.png','turbina.png'];
    
    let player = '';

    fillScenario();
    

    function restartGame(){

        sessionStorage.setItem('x',player.offsetLeft);
        sessionStorage.setItem('y',player.offsetTop);

        let content = document.getElementById('mapa');
        content.innerHTML = "";
        posiciones = [];
        colisionables = [];
        colision = false;

        fillScenario();
    }


    function fillScenario(){

        if(window.innerWidth > 1900){
            dimension = 48;
        }else{
            dimension = 32;
        }

        let muro="img/pared";
        let suelo="img/terra";
        

        let x = 0;
        let y = 0;

        
        //37
        const mapa = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 9, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 2, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 2, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 8, 1, 1, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 4, 4, 1, 1, 8, 8, 8, 8, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 4, 3, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 8, 8, 8, 8, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 4, 0],
            [0, 1, 2, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 8, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 4, 4, 3, 4, 4, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];

        let parentDIV = document.getElementsByClassName("content")[0];
        let nextIndex = 0;
        

        const nombres = ['Gandhi','Taj Mahal','Vaca'];

        for(let i=0;i<mapa.length;i++){
            for(let j=0;j<mapa[i].length;j++){
                let tempDIV= document.createElement('div');
                if((mapa[i][j]==0 || mapa[i][j]==3)){
                    tempDIV.setAttribute('class','grid-container colisionable');    
                }else{
                    tempDIV.setAttribute('class','grid-container no-colisionable droppable');
                    tempDIV.setAttribute('ondrop','dropScenario(event)');
                    tempDIV.setAttribute('ondragover','allowDropScenario(event)');
                }
                
                tempDIV.style.left=x + 'px';
                tempDIV.style.top=y + 'px';

                if(mapa[i][j]==0){
                    let img1= `<img src='`+(muro)+`.png' name='muro'></img>`
                    tempDIV.innerHTML=img1;
                    nextIndex = 'muro' + Object.keys(posiciones).length;
                    posiciones[nextIndex] = [x,y];
                // Si hay un personaje, un arbol o el jugador, se coloca suelo y encima los objetos    
                }else if(mapa[i][j]==1 || mapa[i][j]==2 || mapa[i][j]==3 || mapa[i][j]==4 || mapa[i][j]==5 || mapa[i][j]==6 || mapa[i][j]==7 || mapa[i][j]==8 || mapa[i][j]==9 || mapa[i][j]==10){
                    let img2= `<img src='`+(suelo)+`.png' name='suelo'></img>`
                    tempDIV.innerHTML=img2;
                }else{
                    if((mapa[i][j]!=9)){
                        nextIndex = Object.keys(posiciones).length;
                        posiciones[nextIndex] = [x,y];
                    }
                }
                
                parentDIV.appendChild(tempDIV);

                switch(mapa[i][j]){

                    case 2:
                        let img2= '<img src='+(imagenes[6])+' name=casa></img>'
                        let casa= document.createElement('div');
                        casa.setAttribute('class','grid-container colisionable casa');
    
                        casa.style.left=x + 'px';
                        casa.style.top=y + 'px';
                        
                        casa.innerHTML=img2;
                        nextIndex = 'casa' + Object.keys(posiciones).length;
                        posiciones[nextIndex] = [x,y];
                        parentDIV.appendChild(casa);
                        break;

                    case 3:
                        let img3= '<img src='+(imagenes[0])+' name=arbol></img>'
                        let arbol= document.createElement('div');
                        arbol.setAttribute('class','grid-container colisionable arbol');
    
                        arbol.style.left=x + 'px';
                        arbol.style.top=y + 'px';
                        
                        arbol.innerHTML=img3;
                        nextIndex = 'arbol' + Object.keys(posiciones).length;
                        posiciones[nextIndex] = [x,y];
                        parentDIV.appendChild(arbol);
                        break;
                    case 4:
                        let img4= '<img src='+(imagenes[1])+' name=hierba></img>';
                        let hierba= document.createElement('div');
                        hierba.innerHTML=img4;
                        
                        hierba.setAttribute('class','grid-container no-colisionable hierba');
    
                        hierba.style.left=x + 'px';
                        hierba.style.top=y + 'px';
                        
                        hierba.innerHTML=img4;
                        parentDIV.appendChild(hierba);
                        break;
                    case 5:
                        nextIndex = 'figura' + Object.keys(posiciones).length;
                        let imgGandhi= '<img src='+(imagenes[3])+' id=gandhi name=Gandhi></img>'
                        let figuraGandhi= document.createElement('div');
                        figuraGandhi.setAttribute('class','grid-container colisionable figura gandhi');
                        figuraGandhi.setAttribute('name','Gandhi');

                        figuraGandhi.style.left=x + 'px';
                        figuraGandhi.style.top=y + 'px';
                        
                        figuraGandhi.innerHTML=imgGandhi;

                        posiciones[nextIndex] = [x,y];
                        parentDIV.appendChild(figuraGandhi);

                        const gandhi = document.getElementById('gandhi');

                        gandhi.addEventListener('click',function(e){
                            let nameCharacter = e.currentTarget.getAttribute('name');
    
                            abreJuego(nameCharacter);
                            
                        })                       

                        break;
                    case 6:
                        nextIndex = 'figura' + Object.keys(posiciones).length;
                        let imgTaj= '<img src='+(imagenes[4])+' id=taj_mahal name=Taj_Mahal></img>'
                        let figuraTaj= document.createElement('div');
                        figuraTaj.setAttribute('class','grid-container colisionable figura taj_mahal');
                        figuraTaj.setAttribute('name','Taj_Mahal');

                        figuraTaj.style.left=x + 'px';
                        figuraTaj.style.top=y + 'px';
                        
                        figuraTaj.innerHTML=imgTaj;
                        
                        posiciones[nextIndex] = [x,y];
                        parentDIV.appendChild(figuraTaj);

                        const taj_mahal = document.getElementById('taj_mahal');

                        taj_mahal.addEventListener('click',function(e){
                            let nameCharacter = e.currentTarget.getAttribute('name');
    
                            abreJuego(nameCharacter);
                            
                        })

                        break;
                    case 7:
                        nextIndex = 'figura' + Object.keys(posiciones).length;
                        let imgVaca= '<img src='+(imagenes[5])+' id=vaca name=Vaca></img>'
                        let figuraVaca= document.createElement('div');
                        figuraVaca.setAttribute('class','grid-container colisionable figura vaca');
                        figuraVaca.setAttribute('name','Vaca');

                        figuraVaca.style.left=x + 'px';
                        figuraVaca.style.top=y + 'px';
                        
                        figuraVaca.innerHTML=imgVaca;

                        posiciones[nextIndex] = [x,y];
                        parentDIV.appendChild(figuraVaca);

                        const vaca = document.getElementById('vaca');

                        vaca.addEventListener('click',function(e){
                            let nameCharacter = e.currentTarget.getAttribute('name');
    
                            abreJuego(nameCharacter);
                            
                        })
                
                        break;
                    
                    case 8:
                            let img8= '<img src='+(imagenes[7])+' name=agua></img>'
                            let agua= document.createElement('div');
                            agua.setAttribute('class','grid-container colisionable agua');
        
                            agua.style.left=x + 'px';
                            agua.style.top=y + 'px';
                            
                            agua.innerHTML=img8;
                            nextIndex = 'agua' + Object.keys(posiciones).length;
                            posiciones[nextIndex] = [x,y];
                            parentDIV.appendChild(agua);
                            break;
                    case 9:
                        player= document.createElement('div');
                        player.setAttribute('id','character'); 
                        let imgPlayer = '<img src='+(imagenes[2])+' name=player></img>';
                        player.innerHTML=imgPlayer;

                        player.style.left=x + 'px';
                        player.style.top=y + 'px';
                        
                        parentDIV.appendChild(player);
                        break;
                    
                    case 10:
                        let img10= '<img src='+(imagenes[8])+' name=cole></img>'
                        let cole= document.createElement('div');
                        cole.setAttribute('class','grid-container colisionable figura cole');
                        cole.setAttribute('name','Cole');
    
                        cole.style.left=x + 'px';
                        cole.style.top=y + 'px';
                        
                        cole.innerHTML=img10;
                        nextIndex = 'cole' + Object.keys(posiciones).length;
                        posiciones[nextIndex] = [x,y];
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
        resizeItems();

        if(sessionStorage.getItem('x') != null){
            player.style.left=sessionStorage.getItem('x') + 'px';       
        }

        if(sessionStorage.getItem('y') != null){
            player.style.top=sessionStorage.getItem('y') + 'px';
        }
    }

    

    charactersPosition();

    function charactersPosition(){

        personajes = document.querySelectorAll('.figura');
        let btnClose = document.querySelectorAll('.audio-close');
        let dialogos = document.querySelectorAll('.bocadillo-cuadrado');

        let idx = 0;

        for (const key in posiciones) {
            if (Object.hasOwnProperty.call(posiciones, key)) {
                
                if(!key.includes("muro") && !key.includes("arbol") && !key.includes("casa") && !key.includes("agua")){
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
            if(!player.classList.contains('abajo')){
                player.classList.add('abajo');
                changeImagePlayer('abajo')
            }            
        }
        if(e.code == "ArrowUp"){
            arriba = true;
            if(!player.classList.contains('arriba')){
                player.classList.add('arriba');
                changeImagePlayer('arriba')
            }
        }
        if(e.code == "ArrowLeft"){
            izquierda = true;
            if(!player.classList.contains('izquierda')){
                player.classList.add('izquierda');
                changeImagePlayer('izquierda')
            }
        }
        if(e.code == "ArrowRight"){
            derecha = true;
            if(!player.classList.contains('derecha')){
                player.classList.add('derecha');
                changeImagePlayer('derecha')               
            }
        }
        
        move();
    }

    function keyUp(e) {
        
        if(e.code == "ArrowDown"){
            abajo = false;
            player.classList.remove('abajo');
            changeImagePlayer('abajo')
        }
        if(e.code == "ArrowUp"){
            arriba = false;
            player.classList.remove('arriba');
            changeImagePlayer('arriba')
        }
        if(e.code == "ArrowLeft"){
            izquierda = false;
            player.classList.remove('izquierda');
            changeImagePlayer('izquierda')
        }
        if(e.code == "ArrowRight"){
            derecha = false;
            player.classList.remove('derecha');
            changeImagePlayer('derecha')
        }
    }

    function checkColision(x,y){
        
        let index = 0;
        colision = false;
        let dialogo1 = document.getElementById('bocadillo-cuadrado1');
        let dialogo2 = document.getElementById('bocadillo-cuadrado2');
        let dialogo3 = document.getElementById('bocadillo-cuadrado3');
        let dialogo4 = document.getElementById('bocadillo-cuadrado4');

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
                quienSoy = "";
            }else if(despuesX || despuesY){
                colision = false;
                dialogo1.classList.remove('visible');
                dialogo2.classList.remove('visible');
                dialogo3.classList.remove('visible');
                dialogo4.classList.remove('visible');
                quienSoy = "";
            }else{
                colision = true; 
                quienSoy = colisionables[index].getAttribute('name');
                colisionables[index].focus();
                
                if(quienSoy == 'Gandhi'){
                    let left = colisionables[index].offsetLeft;
                    let top = colisionables[index].offsetTop;
                    dialogo1.style.left = left + 100 + 'px'
                    dialogo1.style.top = top - 8 + 'px'
                    dialogo1.classList.add('visible');
                }else if(quienSoy == 'Taj_Mahal'){
                    let left = colisionables[index].offsetLeft;
                    let top = colisionables[index].offsetTop;
                    dialogo2.style.left = left + 110 + 'px'
                    dialogo2.style.top = top - 30 + 'px'
                    dialogo2.classList.add('visible');
                }else if(quienSoy == 'Vaca'){
                    let left = colisionables[index].offsetLeft; 
                    let top = colisionables[index].offsetTop; 
                    dialogo3.style.left = left - 50 + 'px'
                    dialogo3.style.top = top - 130 +  'px'
                    dialogo3.classList.add('visible');
                }else if(quienSoy == 'Cole'){
                    let left = colisionables[index].offsetLeft; 
                    let top = colisionables[index].offsetTop; 
                    dialogo4.style.left = left - 10 + 'px'
                    dialogo4.style.top = top - 70 +  'px'
                    dialogo4.classList.add('visible');
                }
            }
            index++;        
        };
        
        
        return colision;
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


    /// game loop
    setInterval(function(){
        move();  
    }, 1000/24);

    window.addEventListener('resize',restartGame);

    function resizeItems(){

        let noColisionables = document.querySelectorAll('.grid-container.no-colisionable');
        let noColisionablesImg = document.querySelectorAll('.grid-container.no-colisionable > img');
        
        let colisionables =  document.querySelectorAll('.grid-container.colisionable');
        let colisionablesImg = document.querySelectorAll('.grid-container.colisionable > img');

        let npc = document.querySelectorAll('.npc');


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

        for (let y = 0; y < npc.length; y++) {
            
            npc[y].style.width = dimension + 'px';
            npc[y].style.height = dimension + 'px'; 
        }
    }

    function abreJuego(nameCharacter){

        if(nameCharacter == quienSoy){

            switch (nameCharacter) {
                case "Gandhi":
                    let juego1 = document.getElementById("juego1");
                    juego1.style.display = "block";
                    break;
            
                case "Taj_Mahal":
                    let juego2 = document.getElementById("juego2");
                    juego2.style.display = "block";
                    break;
    
                case "Vaca":
                    let juego3 = document.getElementById("juego3");
                    juego3.style.display = "block";
                    break;
                break;
    
                default:
                    break;
            }
        }        
    }

    function changeImagePlayer(direccion){
        
        let figura = document.querySelector('#character > img');

        
            if(direccion == "abajo"){
                figura.src = "img/warrior_down_movimiento.gif";
            }else if(direccion == "arriba"){
                figura.src = "img/warrior_up_movimiento.gif";
            }else if(direccion == "izquierda"){
                figura.src = "img/warrior_left_movimiento.gif";
            }else{
                figura.src = "img/warrior_right_movimiento.gif";
            }
        

        if(!player.classList.contains('arriba') && !player.classList.contains('abajo') 
        && !player.classList.contains('izquierda') && !player.classList.contains('derecha')){
            
            if(direccion == "abajo"){
                figura.src = "img/warrior_down_parado.png";
            }else if(direccion == "arriba"){
                figura.src = "img/warrior_up_parado.png";
            }else if(direccion == "izquierda"){
                figura.src = "img/warrior_left_parado.png";
            }else{
                figura.src = "img/warrior_right_parado.png";
            }
        
        }        
    }



    let volver = document.getElementById('volver');

    volver.addEventListener('click',function(){

        let item1 = sessionStorage.getItem('ghandi');
        let item2 = sessionStorage.getItem('taj');
        let item3 = sessionStorage.getItem('vaca');

        if(item1 == "true" && item2 == "true" && item3 == "true"){

            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("Guardando datos")
                }
            };

            xmlhttp.open("POST","../save.php?nivel=2",true);
            xmlhttp.send();
        }

        window.location.href="../action_page.php";
        
    })

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
    //let tablero = document.getElementById('tablero')
    let data = ev.dataTransfer.getData("text");
    let pieza = document.getElementById(data);
    
    //ev.target.appendChild(pieza);
    //ev.currentTarget.appendChild(pieza);
    ev.currentTarget.insertBefore(pieza, ev.currentTarget.firstChild);

    
    let casilla = ev.target;
    
    /* if(casilla.className != "droppable"){
        // Si ya contiene una pieza, no se permite poner otra en el mismo sitio
        tablero.appendChild(pieza);
    }else{
        // Si la pieza no va en ese lugar, no se permite colocarla
        if(casilla.getAttribute('data-id') != pieza.getAttribute('data-id')){
            tablero.appendChild(pieza);
        }else{
            let piezasColocadas = document.querySelectorAll('.col.border.droppable .bloque')
            let cantidadPiezasColocadas = piezasColocadas.length;
            sessionStorage.setItem("aciertos",cantidadPiezasColocadas);
        }

        //habilitaBotonGuardar();
    } */

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
    let escuela = document.getElementsByName('cole')[0];


    if(countPendingItems.length == 0){
        escuela.style.filter = "brightness(100%)";
    }else{
        escuela.style.filter = "brightness(0%)";
    }
}