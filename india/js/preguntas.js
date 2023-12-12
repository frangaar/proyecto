document.addEventListener('DOMContentLoaded',function(){

    let superado = document.getElementById('superado'); 
    superado.classList.remove('success');
    superado.classList.remove('error');

    preguntasJuego2 = [
        ["Les vaques a l'Índia no simbolitzen a la mare terra, la naturalesa, la fertilitat i l'abundància",false],
        ["Les vaques de l'Índia estan en llibertat i les podem observar passejant a gust, tant als pobles com en les grans ciutats",true],
        ["A l'Índia les vaques són sagrades, però està permès consumir la seva carn",false],
        ["Aquests animals estan protegits per la llei que prohibeix i castiga el seu maltractament",true],
        ["En diverses regions és costum pintar les seves banyes de colors per a embellir-les i distingir-les",true]
    ];
    
    
    let container = document.querySelector('#ejercicios2 #contenido2');
    for (let index = 0; index < preguntasJuego2.length; index++) {
        let tmpDiv = document.createElement('div');
        tmpDiv.setAttribute('class','row');
        let html = '<div class="col-8">';
        html += '<p>'+preguntasJuego2[index][0]+'</p>';
        html += '</div>';
        html += '<div class="col-4">';
        html += '<div class="form-switch padding-cero"><label class="form-check-label custom-width">Falso</label><input class="form-check-input respuestasVaca" type="checkbox" role="switch"><label class="form-check-label custom-padding">Verdadero</label></div>';
        html += '</div>';
        html += '</div>';
        tmpDiv.innerHTML = html;
        container.appendChild(tmpDiv);
    }
    
    
    let cerrar3 = document.getElementsByClassName('close')[2];
    cerrar3.addEventListener('click',function(){
        let juego3 = document.getElementById("juego3");
        juego3.style.display = "none";
    });
    
    let btnGuardar = document.getElementById('guardarVaca');
    
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
                
                sessionStorage.setItem("vaca",true);
                let juego3 = document.getElementById("juego3");
                juego3.style.display = "none";
                
                let item3 = document.querySelector('#item3 > img');

                item3.setAttribute('draggable','true');
                item3.classList.add('item-visible');
            }            
        }else{
            //alert('Vaya, algunas de tus respuestas son incorrectas!. Por favor, vuelve a revisarlas.');
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
        let respuestas = document.getElementsByClassName('respuestasVaca');
        let aciertos = 0;
    
        for (let index = 0; index < respuestas.length; index++) {
    
            if(respuestas[index].checked == preguntasJuego2[index][1]){
                aciertos++;
                respuestas[index].classList.remove('class','is-invalid');
            }else{
                respuestas[index].classList.add('class','is-invalid');
            }
        }
    
        return aciertos;
    }
    
    });
    
    
    
    