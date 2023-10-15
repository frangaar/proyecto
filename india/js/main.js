document.addEventListener('DOMContentLoaded',function(){

    const player = document.getElementById("character");
    const pnj = document.getElementById("character2");

    let abajo = false;
    let arriba = false;
    let izquierda = false;
    let derecha = false;
    let colision = false;

    let colisiones = new Array();

    //colisiones['uno'] = [300,600];
    //colisiones['dos'] = [100,950];


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
        
    
        antesX = ((x + player.offsetWidth) <= pnj.offsetLeft);
        despuesX = (x >= (pnj.offsetLeft + pnj.offsetWidth));
        antesY = ((y + player.offsetHeight) <= pnj.offsetTop);
        despuesY = (y >= (pnj.offsetTop + pnj.offsetHeight));
    
    
        if(antesX || antesY){
            colision = false;
        }else if(despuesX || despuesY){
            colision = false;
        }else{
            colision = true;
        }

        return colision;
    }

    function move(){

        x = player.offsetLeft;
        y = player.offsetTop;


        if(abajo && derecha){
            x = player.offsetLeft + 2;
            y = player.offsetTop + 2;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(abajo && izquierda){
            x = player.offsetLeft - 2;
            y = player.offsetTop + 2;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(arriba && derecha){
            x = player.offsetLeft + 2;
            y = player.offsetTop - 2;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }
            
        }else if(arriba && izquierda){
            x = player.offsetLeft - 2;
            y = player.offsetTop - 2;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
                player.style.top = y + 'px';
            }

        }else if(arriba){
            y = player.offsetTop - 2;
            colision = checkColision(x,y);

            if(!colision){
                player.style.top = y + 'px';
            }
        }else if(abajo){
            y = player.offsetTop + 2;
            colision = checkColision(x,y);

            if(!colision){
                player.style.top = y + 'px';
            }
        }else if(izquierda){
            x = player.offsetLeft - 2;
            colision = checkColision(x,y);

            if(!colision){
                player.style.left = x + 'px';
            }
        }else if(derecha){
            x = player.offsetLeft + 2;
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
});
