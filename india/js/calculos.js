document.addEventListener('DOMContentLoaded',function(){

preguntasJuego1 = [
    ['1) Escribe con cifras estos números: Seiscientos setenta y siete mil trescientos siete:',677307],
    ['2) Ramón tiene tres álbumes de sellos. En uno tiene 287 sellos; en otro, 28 sellos más, y en el tercero, 24 sellos menos que en el segundo. ¿Cuántos sellos tiene en total?</i>',913],
    ['3) Un camión transporta 325 cajas de botellas de aceite. Cada caja contiene 25 botellas de un litro de aceite. El precio del litro de aceite es de 4 €. ¿Cuál es el coste total de la carga que transporta el camión?',32500],
    ['4) ¿Cuántos litros de agua caben en ocho botellas de tres cuartos de litro?',6],
    ['5) Realiza esta operación: <b>24.498,21</b> + <b>31.754,1</b> + <b>66.151</b> - <b>804</b>',121599.31]
    ];


let container = document.querySelector('#ejercicios1 #contenido');
for (let index = 0; index < preguntasJuego1.length; index++) {
    let tmpDiv = document.createElement('div');
    tmpDiv.setAttribute('class','row');
    let html = '<div class="col-9">';
    html += '<p>'+preguntasJuego1[index][0]+'</p>';
    html += '</div>';
    html += '<div class="col-3">';
    html += '<input class="form-control form-control-sm respuestasTaj preguntas" placeholder="Escribe tu respuesta" type="number">';
    html += '</div>';
    html += '</div>';
    tmpDiv.innerHTML = html;
    container.appendChild(tmpDiv);
}


let cerrar2 = document.getElementsByClassName('close')[1];
cerrar2.addEventListener('click',function(){
    let juego2 = document.getElementById("juego2");
    juego2.style.display = "none";
});

let btnGuardar = document.getElementById('guardarTaj');

btnGuardar.onclick = function(){

    let aciertos = 0;
    
    aciertos = comprobarRespuestas();
    if(aciertos == 5){
        if(btnGuardar.innerHTML == "Guardar"){
            sessionStorage.setItem("taj",true);
            let juego2 = document.getElementById("juego2");
            juego2.style.display = "none";
            
            let item2 = document.querySelector('#item2 > img');

            item2.classList.add('item-visible');
        }else{
            alert('Felicidades!. Todas tus respuestas son correctas.');
            btnGuardar.innerHTML = "Guardar";
        }
    }else{
        alert('Vaya, algunas de tus respuestas son incorrectas!. Por favor, vuelve a revisarlas.');
        btnGuardar.innerHTML = "Comprobar";
    }
    
};


function comprobarRespuestas(){
    let respuestas = document.getElementsByClassName('respuestasTaj');
    let aciertos = 0;

    for (let index = 0; index < respuestas.length; index++) {
        
        // Convertimos el . en ,
        let respuesta = respuestas[index].value.replace(/,/g, '.');

        if(respuesta == preguntasJuego1[index][1]){
            aciertos++;
            respuestas[index].classList.remove('class','is-invalid');
        }else{
            respuestas[index].classList.add('class','is-invalid');
        }
    }

    return aciertos;
}

});



