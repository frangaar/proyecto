document.addEventListener('DOMContentLoaded',function(){

let superado = document.getElementById('superado'); 
superado.classList.remove('success');
superado.classList.remove('error');

preguntasJuego1 = [
    ["1) Escriu amb xifres aquests números: Sis-cents setanta-set mil tres-cents set:",677307],
    ["2) En Ramón té tres àlbums de segells. En un té <i>100</i> segells; en un altre, <i>28</i> segells més, i en el tercer, <i>24</i> segells menys que en el segon. Quants segells té en total?",332],
    ["3) Un camió transporta <i>325</i> caixes d'ampolles d'oli. Cada caixa conté <i>25</i> ampolles d'un litre d'oli. El preu del litre d'oli és de <i>4 €</i>. Quin és el cost total de la càrrega que transporta el camió?",32500],
    ["4) Quants litres d'aigua caben en vuit ampolles de tres quarts de litre?",6],
    ["5) Realitza aquesta operació: <i>1500,21</i> + <i>200,1</i> + <i>51</i> - <i>80</i>",1671.31]
    ];


let container = document.querySelector('#ejercicios1 #contenido1');
for (let index = 0; index < preguntasJuego1.length; index++) {
    let tmpDiv = document.createElement('div');
    tmpDiv.setAttribute('class','row');
    let html = '<div class="col-9">';
    html += '<p>'+preguntasJuego1[index][0]+'</p>';
    html += '</div>';

    switch(index){
        case 1:
                html += '<div class="col-3 valores">';
                html += `<div class="form-check">
                        <input class="form-check-input" type="radio" value="330" id="radio1Resp1" name="respuesta${index}" checked>
                        <label class="form-check-label" for="radio1Resp1">
                        330
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="351" id="radio2Resp1" name="respuesta${index}">
                        <label class="form-check-label" for="radio2Resp1">
                        351
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="332" id="radio3Resp1" name="respuesta${index}">
                        <label class="form-check-label" for="radio3Resp1">
                        332
                        </label>
                    </div>`
                html += '</div>';
                break;

        case 2:
            html += '<div class="col-3 valores">';
            html += `<div class="form-check">
                    <input class="form-check-input" type="radio" value=32500" id="radio1Resp2" name="respuesta${index}" checked>
                    <label class="form-check-label" for="radio1Resp2">
                    32500
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="33000" id="radio2Resp2" name="respuesta${index}">
                    <label class="form-check-label" for="radio2Resp2">
                    33000
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="32300" id="radio2Resp3" name="respuesta${index}">
                    <label class="form-check-label" for="radio2Resp3">
                    32300
                    </label>
                </div>`
            html += '</div>';
            break;

            case 4:
                html += '<div class="col-3 valores">';
                html += `<div class="form-check">
                        <input class="form-check-input" type="radio" value="1678.31" id="radio1Resp4" name="respuesta${index}" checked>
                        <label class="form-check-label" for="radio1Resp4">
                        1678.31
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="1771.31" id="radio2Resp4" name="respuesta${index}">
                        <label class="form-check-label" for="radio2Resp4">
                        1771.31
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="1671.31" id="radio3Resp4" name="respuesta${index}">
                        <label class="form-check-label" for="radio3Resp4">
                        1671.31
                        </label>
                    </div>`
                html += '</div>';
                break;

        default:
                html += '<div class="col-3 valores">';
                html += `<input class="form-control form-control-sm respuestasTaj preguntas" name="respuesta${index}" placeholder="Escriu la teva respuesta" type="number">`;
                html += '</div>';
                html += '</div>';
                break;
    }

    
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
        
        if(btnGuardar.innerHTML == "Comprovar"){
            
            superado = document.getElementById('superado');                
            let mensaje = document.querySelector('#superado .modal-content p');
            let btnReintentar = document.querySelector('#superado #aceptar');  

            mensaje.innerHTML = "Enhorabona!!. Has respost correctament a les preguntes";
            btnReintentar.innerHTML = 'Acceptar!!';
            
            superado.style.display = "block";
            superado.classList.remove('error');
            superado.classList.add('success');

            sessionStorage.setItem("taj",true);
            let juego2 = document.getElementById("juego2");
            juego2.style.display = "none";
            
            let item2 = document.querySelector('#item2 > img');
            
            item2.setAttribute('draggable','true');
            item2.classList.add('item-visible');
        }
    }else{
        
        superado = document.getElementById('superado');                
        let mensaje = document.querySelector('#superado .modal-content p');       
        let btnReintentar = document.querySelector('#superado #aceptar');  

        mensaje.innerHTML = "Vaja, algunes de les teves respostes són incorrectes!. Si us plau, torna a revisar-les.";
        btnReintentar.innerHTML = 'Reintentar!!';
        
        superado.style.display = "block";
        superado.classList.remove('success');
        superado.classList.add('error');

        btnGuardar.innerHTML = "Comprovar";
    }
    
};


function comprobarRespuestas(){
    // let respuestas = document.getElementsByClassName('respuestasTaj');
    let respuestas = document.getElementsByClassName('valores');
    let respuesta = '';
    let aciertos = 0;

    for (let index = 0; index < respuestas.length; index++) {
        
        // Convertimos el . en ,
        // let respuesta = respuestas[index].value.replace(/,/g, '.');

        
        

        switch(index){
            case 1:
                // Borramos todos los errores de los radiobuttons actuales
                eliminaErroresRadioButtons(respuestas[index],index);
                respuesta = parseInt(respuestas[index].querySelector(`input[name="respuesta${index}"]:checked`).value);
                break;
            case 2:
                // Borramos todos los errores de los radiobuttons actuales
                eliminaErroresRadioButtons(respuestas[index],index);
                respuesta = parseInt(respuestas[index].querySelector(`input[name="respuesta${index}"]:checked`).value);
                break;
            case 4:
                // Borramos todos los errores de los radiobuttons actuales
                eliminaErroresRadioButtons(respuestas[index],index);
                respuesta = parseFloat(respuestas[index].querySelector(`input[name="respuesta${index}"]:checked`).value);
                break;
            default:
                respuesta = respuestas[index].querySelector('.respuestasTaj.preguntas').value;
                break;
        }
        

        if(respuesta == preguntasJuego1[index][1]){
            aciertos++;

            if(respuestas[index].querySelector('.respuestasTaj.preguntas') != null){
                respuestas[index].querySelector('.respuestasTaj.preguntas').classList.remove('class','is-invalid');
            }
        }else{
            if(index === 1 || index === 2 ||index === 4){
                respuestas[index].querySelector(`input[name="respuesta${index}"]:checked`).classList.add('class','is-invalid');
            }else{
                respuestas[index].querySelector('.respuestasTaj.preguntas').classList.add('class','is-invalid');
            }
            
        }
    }

   

    return aciertos;
}

function eliminaErroresRadioButtons(valor,index){
    let errores = valor.querySelectorAll(`input[name="respuesta${index}"]`);

    for (const item of errores) {
        item.classList.remove('class','is-invalid')
    }
}

});



