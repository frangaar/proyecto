document.addEventListener('DOMContentLoaded',function(){


    const player = document.getElementById("character");
    let colisionables = document.querySelectorAll('.colisionable');
    let conQuienHablo = "";
    
    let abajo = false;
    let arriba = false;
    let izquierda = false;
    let derecha = false;
    let colision = false;
    let posiciones = new Array();
    const VELOCIDAD = 4;
    
    fillScenario();

    function fillScenario(){

        let muro="img/murH";
        let suelo="img/murV";
        

        let x = 0;
        let y = 0;

        const mapa = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        let parentDIV = document.getElementsByClassName("content")[0];
        let nextIndex = 0;

        const nombres = ['Ghandi','Deepak','Arjun'];

        for(let i=0;i<mapa.length;i++){
            for(let j=0;j<mapa[i].length;j++){
                let tempDIV= document.createElement('div');
                if(mapa[i][j]==0){
                    tempDIV.setAttribute('class','grid-container colisionable');    
                }else if(mapa[i][j]==5){
                    nextIndex = posiciones.length;
                    tempDIV.setAttribute('class','colisionable character');
                    tempDIV.setAttribute('id','character'+nextIndex);
                    tempDIV.setAttribute('name',nombres[nextIndex]);

                    tempDIV.addEventListener('click',function(){
                        if(conQuienHablo == "Ghandi" && colision){
                            //alert("Hola soy " + conQuienHablo)
                            let modal = document.getElementById("myModal");
                            modal.style.display = "block";
                        }

                        if(conQuienHablo == "Deepak" && colision){
                            alert("Hola soy " + conQuienHablo)
                        }
                        
                        if(conQuienHablo == "Arjun" && colision){
                            alert("Hola soy " + conQuienHablo)
                        }
                    })
                }else{
                    tempDIV.setAttribute('class','grid-container');
                }
                
                tempDIV.style.left=x + 'px';
                tempDIV.style.top=y + 'px';

                if(mapa[i][j]==0){
                    let img1= `<img src='`+(muro)+`.png'></img>`
                    tempDIV.innerHTML=img1;
                    nextIndex = 'muro' + posiciones.length;
                    posiciones[nextIndex] = [x,y];
                }else if(mapa[i][j]==1){
                    let img2= `<img src='`+(suelo)+`.png'></img>`
                    tempDIV.innerHTML=img2;
                }else{
                    nextIndex = posiciones.length;
                    posiciones[nextIndex] = [x,y];
                }
                
                parentDIV.appendChild(tempDIV);
                x+=32;
            }
            y+=32;
            x=0;        
        }

        colisionables = document.querySelectorAll('.colisionable');
    }

    

    charactersPosition();

    function charactersPosition(){

        personajes = document.querySelectorAll('.character');

        let idx = 0;

        for (const key in posiciones) {
            if (Object.hasOwnProperty.call(posiciones, key)) {
                
                if(!key.includes("muro")){
                    personajes[idx].style.left = posiciones[key][0] + 'px';
                    personajes[idx].style.top = posiciones[key][1] + 'px';
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

        while(!colision && index < colisionables.length){

            antesX = ((x + player.offsetWidth) <= colisionables[index].offsetLeft);
            despuesX = (x >= (colisionables[index].offsetLeft + colisionables[index].offsetWidth));
            antesY = ((y + player.offsetHeight) <= colisionables[index].offsetTop);
            despuesY = (y >= (colisionables[index].offsetTop + colisionables[index].offsetHeight));
        
        
            if(antesX || antesY){
                colision = false;
            }else if(despuesX || despuesY){
                colision = false;
            }else{
                colision = true; 
                conQuienHablo = colisionables[index].getAttribute('name');
                colisionables[index].focus();
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

    let containerGame = document.getElementById('game');
    let volver = document.getElementsByClassName('volver')[0];

    //containerGame.style.height = (window.innerHeight - volver.offsetHeight - 3) + 'px';
    containerGame.style.height = '579px';
    containerGame.style.width = window.innerWidth + 'px';


    /// game loop
    setInterval(function(){
        move();  
    }, 1000/24);

});