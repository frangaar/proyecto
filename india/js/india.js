document.addEventListener('DOMContentLoaded',function(){


    const player = document.getElementById("character");
    const personajes = document.querySelectorAll('.personajes');

    

    let abajo = false;
    let arriba = false;
    let izquierda = false;
    let derecha = false;
    let colision = false;
    let posiciones = new Array();
    const VELOCIDAD = 4;
    

    charactersPosition();

    function charactersPosition(){

        let idx = 0;

        posiciones['uno'] = [600,500];
        posiciones['dos'] = [870,200];

        for (const key in posiciones) {
            if (Object.hasOwnProperty.call(posiciones, key)) {
                
                personajes[idx].style.left = posiciones[key][0] + 'px';
                personajes[idx].style.top = posiciones[key][1] + 'px';
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

        while(!colision && index < personajes.length){

            antesX = ((x + player.offsetWidth) <= personajes[index].offsetLeft);
            despuesX = (x >= (personajes[index].offsetLeft + personajes[index].offsetWidth));
            antesY = ((y + player.offsetHeight) <= personajes[index].offsetTop);
            despuesY = (y >= (personajes[index].offsetTop + personajes[index].offsetHeight));
        
        
            if(antesX || antesY){
                colision = false;
            }else if(despuesX || despuesY){
                colision = false;
            }else{
                colision = true;                
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

    setContainerSize();

    function setContainerSize(){

        let escenario = document.getElementsByClassName('content')[0];

        //escenario.style.width = window.innerWidth + 'px';
        //escenario.style.height = window.innerHeight + 'px';
    }


    let imagePath="img/murH";
    let numberOfImage=2;
    let x = 0;

    let parentDIV = document.getElementsByClassName("content")[0];

    for(let i=0;i<numberOfImage;i++){
        let tempDIV= document.createElement('div');
        tempDIV.setAttribute('class','grid-container');
        tempDIV.style.left=x + 'px';
        let innerHTML= `<img src='`+(imagePath)+`.png'></img>`
        tempDIV.innerHTML=innerHTML;
        parentDIV.appendChild(tempDIV);
        x+=32;
    }
});
