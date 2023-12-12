document.addEventListener('DOMContentLoaded',function(){

let superado = document.getElementById('superado'); 
superado.classList.remove('success');
superado.classList.remove('error');

preguntasJuego1 = [
    ["1) Escriu amb xifres aquests números: Sis-cents setanta-set mil tres-cents set:",677307],
    ["2) En Ramón té tres àlbums de segells. En un té <i>287</i> segells; en un altre, <i>28</i> segells més, i en el tercer, <i>24</i> segells menys que en el segon. Quants segells té en total?",893],
    ["3) Un camió transporta <i>325</i> caixes d'ampolles d'oli. Cada caixa conté <i>25</i> ampolles d'un litre d'oli. El preu del litre d'oli és de <i>4 €</i>. Quin és el cost total de la càrrega que transporta el camió?",32500],
    ["4) Quants litres d'aigua caben en vuit ampolles de tres quarts de litre?",6],
    ["5) Realitza aquesta operació: <i>24.498,21</i> + <i>31.754,1</i> + <i>66.151</i> - <i>804</i>",121599.31]
    ];


let container = document.querySelector('#ejercicios1 #contenido1');
for (let index = 0; index < preguntasJuego1.length; index++) {
    let tmpDiv = document.createElement('div');
    tmpDiv.setAttribute('class','row');
    let html = '<div class="col-9">';
    html += '<p>'+preguntasJuego1[index][0]+'</p>';
    html += '</div>';
    html += '<div class="col-3">';
    html += '<input class="form-control form-control-sm respuestasTaj preguntas" placeholder="Escriu la teva respuesta" type="number">';
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



