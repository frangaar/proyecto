document.addEventListener('DOMContentLoaded',function(){

    //const player = document.getElementById("character");
    let colisionables = 0;
    let audios = 0;
    let conQuienHablo = 0
    
    let abajo = false;
    let arriba = false;
    let izquierda = false;
    let derecha = false;
    let colision = false;
    let posiciones = new Array();
    let velocidad = 4;
    
    let dimension = 48;

    const imagenes = ['img/arbol.png','img/cesped.png'];
    restartGame();

    fillScenario();
    const player = document.getElementById("character");

    function restartGame(){

        colisionables = document.querySelectorAll('.colisionable');
        audios = document.querySelectorAll('.audio');
        conQuienHablo = "";
        
        abajo = false;
        arriba = false;
        izquierda = false;
        derecha = false;
        colision = false;
        posiciones = new Array();
        velocidad = 4;
        
        dimension = 48;

        const imagenes = ['img/arbol.png','img/cesped.png'];

        let content = document.getElementById('mapa');
        content.innerHTML = "";
        posiciones = [];
        colisionables = [];
        colision = false;
    }


    function fillScenario(){

        restartGame();

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
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];

        let parentDIV = document.getElementsByClassName("content")[0];
        let nextIndex = 0;

        const nombres = ['Ghandi','Deepak','Arjun'];

        for(let i=0;i<mapa.length;i++){
            for(let j=0;j<mapa[i].length;j++){
                let tempDIV= document.createElement('div');
                if((mapa[i][j]==0 || mapa[i][j]==3)){
                    tempDIV.setAttribute('class','grid-container colisionable');    
                }else if(mapa[i][j]==2){
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
                }else{
                    tempDIV.setAttribute('class','grid-container no-colisionable');
                }
                
                tempDIV.style.left=x + 'px';
                tempDIV.style.top=y + 'px';

                if(mapa[i][j]==0){
                    let img1= `<img src='`+(muro)+`.png' name='muro'></img>`
                    tempDIV.innerHTML=img1;
                    nextIndex = 'muro' + posiciones.length;
                    posiciones[nextIndex] = [x,y];
                }else if(mapa[i][j]==1 || mapa[i][j]==3 || mapa[i][j]==9){
                    let img2= `<img src='`+(suelo)+`.png' name='suelo'></img>`
                    tempDIV.innerHTML=img2;
                }else{
                    if((mapa[i][j]!=9)){
                        nextIndex = posiciones.length;
                        posiciones[nextIndex] = [x,y];
                    }
                }
                
                parentDIV.appendChild(tempDIV);

                if(mapa[i][j]==3){
                    let img3= '<img src='+(imagenes[0])+' name=arbol></img>'
                    let arbol= document.createElement('div');
                    arbol.setAttribute('class','grid-container colisionable arbol');

                    arbol.style.left=x + 'px';
                    arbol.style.top=y + 'px';
                    
                    arbol.innerHTML=img3;
                    nextIndex = 'arbol' + posiciones.length;
                    posiciones[nextIndex] = [x,y];
                    parentDIV.appendChild(arbol);
                }

                if(mapa[i][j]==9){

                    let player= document.createElement('div');
                    player.setAttribute('id','character');    

                    player.style.left=x + 'px';
                    player.style.top=y + 'px';
                    
                    parentDIV.appendChild(player);
                }

                x+=dimension;
            }
            y+=dimension;
            x=0;        
        }

        nextIndex = 0;
        colisionables = document.querySelectorAll('.colisionable');
        resizeItems();
    }

    

    charactersPosition();

    function charactersPosition(){

        personajes = document.querySelectorAll('.character');

        let idx = 0;

        for (const key in posiciones) {
            if (Object.hasOwnProperty.call(posiciones, key)) {
                
                if(!key.includes("muro") && !key.includes("arbol")){
                    personajes[idx].style.left = posiciones[key][0] + 'px';
                    personajes[idx].style.top = posiciones[key][1] + 'px';

                    if(personajes[idx].classList.contains('colisionable')){
                        
                        let tmpFile = audios[idx].getAttribute('data-audio')
                        let file = new Audio(tmpFile);

                        audios[idx].addEventListener('click',function(){

                            file.play();
                        });
                    }
                }
                
            }
            idx++;
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
                conQuienHablo = colisionables[index].getAttribute('name');
                colisionables[index].focus();
                
                if(conQuienHablo == 'Ghandi'){
                    dialogo1.classList.add('visible');
                }else if(conQuienHablo == 'Deepak'){
                    dialogo2.classList.add('visible');
                }else if(conQuienHablo == 'Arjun'){
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
            x = player.offsetLeft + velocidad;
            y = player.offsetTop + velocidad;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(abajo && izquierda){
            x = player.offsetLeft - velocidad;
            y = player.offsetTop + velocidad;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(arriba && derecha){
            x = player.offsetLeft + velocidad;
            y = player.offsetTop - velocidad;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(arriba && izquierda){
            x = player.offsetLeft - velocidad;
            y = player.offsetTop - velocidad;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }

        }else if(arriba){
            y = player.offsetTop - velocidad;
            colision = checkColision(x,y);

            if(!colision){
                player.style.top = y + 'px';
            }
        }else if(abajo){
            y = player.offsetTop + velocidad;
            colision = checkColision(x,y);

            if(!colision){
                player.style.top = y + 'px';
            }
        }else if(izquierda){
            x = player.offsetLeft - velocidad;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
            }
        }else if(derecha){
            x = player.offsetLeft + velocidad;            
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

    window.addEventListener('resize',fillScenario);

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

});