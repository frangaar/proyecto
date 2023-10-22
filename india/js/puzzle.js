function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    // asigna el valor del div mediante la clase y lo guarda en datatransfer co el nombre text
    ev.dataTransfer.setData("text", ev.target.id);

    //console.log(ev.target.innerText); //saca el texto
}

function drop(ev) {

    ev.preventDefault();
    let tablero = document.getElementById('tablero')
    let data = ev.dataTransfer.getData("text");
    let pieza = document.getElementById(data);
    ev.target.appendChild(pieza);

    //console.log(ev.target); //saca elemento padre
    //console.log(ev.target.firstChild); //saca primer elemento hijo
    //console.log(ev.target.firstChild.innerText); //saca el texto del primer hijo
    //console.log(ev.target.nextElementSibling.firstChild.textContent); //saca el texto del siguiente gemelo

    /* let anterior = ev.target.previousElementSibling;*/
    let casilla = ev.target;
    //console.log(casilla.className);
    /*let siguiente = ev.target.nextElementSibling;*/
    //div.col.border.droppable
    if(casilla.className != "col border droppable"){
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

        habilitaBotonGuardar();
    }
}

function habilitaBotonGuardar(){

    let acierto = sessionStorage.getItem('aciertos');
    let total = sessionStorage.getItem('total');

    if(acierto==total){
        alert('Felicidades!. Has completado el puzzle.');
        let btnGuardar = document.getElementById('guardarGhandi');
        btnGuardar.removeAttribute('disabled');
    }
}

function setBloques(){

    for(let i = 0;i < 16;i++){
        
        let ficha= document.createElement('img');
        ficha.setAttribute('id','drag' + i);
        ficha.setAttribute('class','bloque'); 
        ficha.setAttribute('draggable','true');
        ficha.setAttribute('onDragStart','drag(event)');
        ficha.setAttribute('src','img/ghandi/'+i+'.png');
        ficha.setAttribute('data-id',i);
        

        let tablero = document.getElementById('tablero')
        tablero.appendChild(ficha)
    }
}


document.addEventListener('DOMContentLoaded',function(){

    sessionStorage.setItem('aciertos',0);
    sessionStorage.setItem('total',16);

    setBloques();

    let cerrar1 = document.getElementsByClassName('close')[0];
    cerrar1.addEventListener('click',function(){
        let juego1 = document.getElementById("juego1");
        juego1.style.display = "none";
    });

    /* let cerrar3 = document.getElementsByClassName('close')[1];
    cerrar3.addEventListener('click',function(){
        let juego3 = document.getElementById("juego3");
        juego3.style.display = "none";
    }); */

    let btnGuardar = document.getElementById('guardarGhandi');

    btnGuardar.onclick = function(){
    
        sessionStorage.setItem("ghandi",true);
        let modal = document.getElementById("juego1");
        modal.style.display = "none";
    };


});


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