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
    let currentElement = document.getElementById(data);
    ev.target.appendChild(currentElement);

    //console.log(ev.target); //saca elemento padre
    //console.log(ev.target.firstChild); //saca primer elemento hijo
    //console.log(ev.target.firstChild.innerText); //saca el texto del primer hijo
    //console.log(ev.target.nextElementSibling.firstChild.textContent); //saca el texto del siguiente gemelo

    /* let anterior = ev.target.previousElementSibling;*/
    let actual = ev.target;
    console.log(actual.className);
    /*let siguiente = ev.target.nextElementSibling;*/
    //div.col.border.droppable
    if(actual.className != "col border droppable"){
        // Si ya contiene una pieza, no se permite poner otra en el mismo sitio
        tablero.appendChild(currentElement);
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
        

        let tablero = document.getElementById('tablero')
        tablero.appendChild(ficha)
    }
}


document.addEventListener('DOMContentLoaded',function(){



    setBloques();

    /* let borders = 4;
    let rows = 4;
    let columns = 4;

    let row = document.getElementsByClassName('row');
    let col = document.getElementsByClassName('col');
    let bloque = document.getElementsByClassName('bloque');

    let columnas = col/8;
    console.log(window.innerHeight);
    for (let x = 0; x < row.length; x++) {
        row[x].style.height = (window.innerHeight/rows) + 'px';
        let anchoPieza = row[x].offsetHeight;
        let altoPieza = row[x].offsetHeight;
        
        for (let y = 0; y < columnas; y++) {
        
            col[y].style.height = row[x].offsetHeight + 'px';
            bloque[y].style.width = (anchoPieza/columns)-borders + 'px';
            bloque[y].style.height = altoPieza + 'px';
        }
        
    } */
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