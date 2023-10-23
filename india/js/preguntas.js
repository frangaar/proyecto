document.addEventListener('DOMContentLoaded',function(){

    preguntasJuego2 = [
        ['Las vacas en India no simbolizan a la madre tierra, la naturaleza, la fertilidad y la abundancia',false],
        ['Las vacas de la de India están en libertad y las podemos observar paseando a gusto, tanto en los pueblos como en las grandes ciudades',true],
        ['En India las vacas son sagradas, pero está permitido consumir su carne',false],
        ['Estos animales están protegidos por la ley que prohíbe y castiga su maltrato',true],
        ['En diversas regiones es costumbre pintar sus cuernos de colores para embellecerlas y distinguirlas',true]
        ];
    
    
    let container = document.querySelector('#ejercicios2 #contenido');
    for (let index = 0; index < preguntasJuego2.length; index++) {
        let tmpDiv = document.createElement('div');
        tmpDiv.setAttribute('class','row');
        let html = '<div class="col-10">';
        html += '<p>'+preguntasJuego2[index][0]+'</p>';
        html += '</div>';
        html += '<div class="col-2">';
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
            
            if(btnGuardar.innerHTML == "Guardar"){
                sessionStorage.setItem("vaca",true);
                let juego3 = document.getElementById("juego3");
                juego3.style.display = "none";
                
                let item3 = document.querySelector('#item3 > img');

                item3.setAttribute('draggable','true');
                item3.classList.add('item-visible');

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
    
    
    
    