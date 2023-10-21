document.addEventListener('DOMContentLoaded',function(){

    sessionStorage.clear;

    let colisionables = document.querySelectorAll('.colisionable');
    let audios = document.querySelectorAll('.audio');
    let quienSoy = "";
    
    let abajo = false;
    let arriba = false;
    let izquierda = false;
    let derecha = false;
    let colision = false;
    let posiciones = new Array();
    const VELOCIDAD = 4;
    
    dimension = 48;

    const imagenes = ['img/arbol.png','img/hierba.gif','img/warrior_right_parado.png','','img/taj_mahal.png',''];

    
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

        let muro="img/murH";
        let suelo="img/murV";
        

        let x = 0;
        let y = 0;

        
        //37
        const mapa = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 9, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            //[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];

        let parentDIV = document.getElementsByClassName("content")[0];
        let nextIndex = 0;
        

        const nombres = ['Ghandi','Taj Mahal','Rajesh'];

        for(let i=0;i<mapa.length;i++){
            for(let j=0;j<mapa[i].length;j++){
                let tempDIV= document.createElement('div');
                if((mapa[i][j]==0 || mapa[i][j]==3)){
                    tempDIV.setAttribute('class','grid-container colisionable');    
                }
                /* else if(mapa[i][j]==2){
                    nextIndex = posiciones.length;
                    tempDIV.setAttribute('class','colisionable character npc');
                    tempDIV.setAttribute('id','character'+nextIndex);
                    tempDIV.setAttribute('name',nombres[nextIndex]);

                    tempDIV.addEventListener('click',function(e){
                        let nameCharacter = e.currentTarget.getAttribute('name');

                    if(nameCharacter == conQuienHablo){

                        switch (conQuienHablo) {
                            case "Ghandi":
                                let modal = document.getElementById("myModal");
                                modal.style.display = "block";
                                break;
                        
                            case "Deepak":
                                alert("Hola soy " + conQuienHablo);
                                break;

                            case "Arjun":
                                alert("Hola soy " + conQuienHablo);
                            break;

                            default:
                                break;
                        }
                    }
                        
                    })
                } */
                else{
                    tempDIV.setAttribute('class','grid-container no-colisionable');
                }
                
                tempDIV.style.left=x + 'px';
                tempDIV.style.top=y + 'px';

                if(mapa[i][j]==0){
                    let img1= `<img src='`+(muro)+`.png' name='muro'></img>`
                    tempDIV.innerHTML=img1;
                    nextIndex = 'muro' + Object.keys(posiciones).length;
                    posiciones[nextIndex] = [x,y];
                // Si hay un personaje, un arbol o el jugador, se coloca suelo y encima los objetos    
                }else if(mapa[i][j]==1 || mapa[i][j]==3 || mapa[i][j]==4 || mapa[i][j]==5 || mapa[i][j]==6 || mapa[i][j]==7 || mapa[i][j]==9){
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
                        let imgGhandi= '<img src='+(imagenes[4])+' id=ghandi name=Ghandi></img>'
                        let figuraGhandi= document.createElement('div');
                        figuraGhandi.setAttribute('class','grid-container colisionable figura ghandi');
                        figuraGhandi.setAttribute('name','Ghandi');

                        figuraGhandi.style.left=x + 'px';
                        figuraGhandi.style.top=y + 'px';
                        
                        figuraGhandi.innerHTML=imgGhandi;

                        posiciones[nextIndex] = [x,y];
                        parentDIV.appendChild(figuraGhandi);

                        const ghandi = document.getElementById('ghandi');

                        ghandi.addEventListener('click',function(e){
                            let nameCharacter = e.currentTarget.getAttribute('name');
    
                            abreJuego(nameCharacter);
                            
                        })                       

                        break;
                    case 6:
                        nextIndex = 'figura' + Object.keys(posiciones).length;
                        let imgTaj= '<img src='+(imagenes[4])+' id=taj_mahal name=taj_mahal></img>'
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
                        let imgRajesh= '<img src='+(imagenes[4])+' id=rajesh name=rajesh></img>'
                        let figuraRajesh= document.createElement('div');
                        figuraRajesh.setAttribute('class','grid-container colisionable figura rajesh');
                        figuraRajesh.setAttribute('name','Rajesh');

                        figuraRajesh.style.left=x + 'px';
                        figuraRajesh.style.top=y + 'px';
                        
                        figuraRajesh.innerHTML=imgRajesh;

                        posiciones[nextIndex] = [x,y];
                        parentDIV.appendChild(figuraRajesh);

                        const rajesh = document.getElementById('rajesh');

                        rajesh.addEventListener('click',function(e){
                            let nameCharacter = e.currentTarget.getAttribute('name');
    
                            abreJuego(nameCharacter);
                            
                        })
                
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

        personajes = document.querySelectorAll('.character');
        let btnClose = document.querySelectorAll('.audio-close');
        let dialogos = document.querySelectorAll('.bocadillo-cuadrado');

        let idx = 0;

        for (const key in posiciones) {
            if (Object.hasOwnProperty.call(posiciones, key)) {
                
                if(!key.includes("muro") && !key.includes("arbol") && !key.includes("figura")){
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
        }
        if(e.code == "ArrowUp"){
            arriba = true;
        }
        if(e.code == "ArrowLeft"){
            izquierda = true;
        }
        if(e.code == "ArrowRight"){
            derecha = true;
        }
        
        move();
    }

    function keyUp(e) {
        
        if(e.code == "ArrowDown"){
            abajo = false;
        }
        if(e.code == "ArrowUp"){
            arriba = false;
        }
        if(e.code == "ArrowLeft"){
            izquierda = false;
        }
        if(e.code == "ArrowRight"){
            derecha = false;
        }
    }

    function checkColision(x,y){
        
        let index = 0;
        colision = false;
        let dialogo1 = document.getElementById('bocadillo-cuadrado1');
        let dialogo2 = document.getElementById('bocadillo-cuadrado2');
        let dialogo3 = document.getElementById('bocadillo-cuadrado3');

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
            }else if(despuesX || despuesY){
                colision = false;
                dialogo1.classList.remove('visible');
                dialogo2.classList.remove('visible');
                dialogo3.classList.remove('visible');
            }else{
                colision = true; 
                quienSoy = colisionables[index].getAttribute('name');
                colisionables[index].focus();
                
                if(quienSoy == 'Ghandi'){
                    let left = colisionables[index].offsetLeft;
                    let top = colisionables[index].offsetTop;
                    dialogo1.style.left = left + 70 + 'px'
                    dialogo1.style.top = top - 8 + 'px'
                    dialogo1.classList.add('visible');
                }else if(quienSoy == 'Taj_Mahal'){
                    let left = colisionables[index].offsetLeft;
                    let top = colisionables[index].offsetTop;
                    dialogo2.style.left = left + 110 + 'px'
                    dialogo2.style.top = top - 30 + 'px'
                    dialogo2.classList.add('visible');
                }else if(quienSoy == 'Rajesh'){
                    let left = colisionables[index].offsetLeft; 
                    let top = colisionables[index].offsetTop; 
                    dialogo3.style.left = left - 50 + 'px'
                    dialogo3.style.top = top - 130 +  'px'
                    dialogo3.classList.add('visible');
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
        
            switch (quienSoy) {
                case "Ghandi":
                    let modal = document.getElementById("juego1");
                    modal.style.display = "block";
                    break;
            
                case "Deepak":
                    alert("Hola soy " + quienSoy);
                    break;

                case "Arjun":
                    alert("Hola soy " + quienSoy);
                break;

                default:
                    break;
            }
        }
    }

});