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

    let anterior = ev.target.previousElementSibling;
    let actual = ev.target;
    let siguiente = ev.target.nextElementSibling;

    if(siguiente.firstChild !== null){
        if(parseInt(actual.firstChild.innerText) > parseInt(siguiente.firstChild.textContent)){
            tablero.appendChild(currentElement);
        }else if(parseInt(actual.firstChild.innerText) < parseInt(siguiente.firstChild.textContent) - 1){
            tablero.appendChild(currentElement);
        }
    }

    if(anterior.firstChild !== null){
        if(parseInt(actual.firstChild.innerText) < parseInt(anterior.firstChild.textContent)){
            tablero.appendChild(currentElement);
        }else if(parseInt(actual.firstChild.innerText) > parseInt(anterior.firstChild.textContent) + 1){
            tablero.appendChild(currentElement);
        }
    }
}

function setBloques(){
    for(let i = 1;i < 15;i++){
        let bloque = "<span id='" + "drag" + i + "' class='bloque' draggable='true' onDragStart='drag(event)'>" + i + "</span>";
        $('#tablero').append(bloque)
    }
}

$(function(){

    $(document).ready(function() {

        setBloques();

        let borders = 4;
        let rows = 8;
        let columns = 16;

        $('.row').height($(document).height()/rows);
        $('.col').height($('.row').height());
        $('.bloque').width(($('.row').width()/columns)-borders);
        $('.bloque').height($('.row').height());
    });

    $(document).on('drop','.droppable',function(e){
        //console.log(e.originalEvent.dataTransfer.getData("data"));
        $(this).removeClass('hover');
    });

    $(document).on('dragenter','.droppable',function(e){
        e.preventDefault();
        $(this).addClass('hover');
    });

    $(document).on('dragleave','.droppable',function(e){
        $(this).removeClass('hover');
    });

    $(document).on('drag', '.bloque' ,function (e){
        console.log(e.pageX + ", " + e.pageY);
    });

});