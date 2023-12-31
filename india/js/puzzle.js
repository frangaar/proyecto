function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    // asigna el valor del div mediante la clase y lo guarda en datatransfer con el nombre text
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
    
    /*let siguiente = ev.target.nextElementSibling;*/
    
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
    let imagen = document.querySelector('#juego1 .imagen img');

    if(acierto==total){

        let superado = document.getElementById('superado');                
        let mensaje = document.querySelector('#superado .modal-content p');
        mensaje.innerHTML = "Enhorabona!!. Has respost correctament a les preguntes";
        
        superado.style.display = "block";
        superado.classList.add('success');
        superado.classList.remove('error');

        imagen.classList.remove('borroso');
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


    let btnConseguido = document.querySelector('#superado #aceptar');
    // let btnGuardar = document.getElementById('guardarGhandi');

    btnConseguido.onclick = function(){
    
        sessionStorage.setItem("ghandi",true);
        let modal = document.getElementById("juego1");
        modal.style.display = "none";

        let item1 = document.querySelector('#item1 > img');

        item1.setAttribute('draggable','true');
        item1.classList.add('item-visible');
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