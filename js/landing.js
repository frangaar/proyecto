document.addEventListener('DOMContentLoaded',function(){
   
    let landing = document.querySelector('.games-section #india');
    let img1 = document.getElementById('india_static');
    let img2 = document.getElementById('india_gif');

    landing.addEventListener('mouseover',function(){
        img1.style.display = 'none';
        img2.style.display = 'block';
    })
    
    landing.addEventListener('mouseout',function(){
        img1.style.display = 'block';
        img2.style.display = 'none';
    })

    const idiomasLanding = [
        {
            "Castellano":
            {
                "Titulo":"El Viaje Renovable de Laia",
                "Banner":"<p>En el apasionante juego <span style='font-weight:bold'>'El Viaje Renovable de Laia'</span>, te sumergirás en la emocionante odisea de una valiente mujer llamada Laia, cuya misión es llevar energía renovable a una escuela mediante desafiantes pruebas alrededor del mundo. Laia se embarca en un viaje épico que la llevará a través de exóticos destinos, como la vibrante India, la salvaje Kenia y la exuberante Brasil.</p><p>Laia, dotada de una mente aguda y habilidades excepcionales, enfrentará desafíos de lógica, matemáticas y geografía en cada país, resolviendo intrincados acertijos para obtener piezas esenciales que alimentarán de energía sostenible a la escuela. Estas piezas, impregnadas de tecnologías renovables innovadoras, representan la clave para un futuro más verde y sostenible.</p>                <p>Para financiar su viaje, Laia se sumerge en la bulliciosa ciudad de Barcelona, donde realiza encargos que le permiten ganar el dinero necesario. La ciudad se convierte en su patio de juegos, mientras Laia equilibra el trabajo, la vida cotidiana y la emocionante búsqueda de las piezas que transformarán vidas.</p>                <p>A medida que avanzas en el juego, descubrirás la riqueza cultural y la diversidad de los destinos, mientras Laia supera desafíos que van más allá de las pruebas mentales, enfrentándose a situaciones inesperadas y forjando amistades que la ayudarán en su noble causa.</p><p>En <span style='font-weight:bold'>'El Viaje Renovable de Laia'</span>, únete a Laia en su emocionante travesía por el mundo, donde cada paso la acerca más a la meta de iluminar el futuro con energía limpia y sostenible. ¿Tienes lo necesario para superar los desafíos y ayudar a Laia a cumplir su misión?</p><p style='font-weight:bold'>¡El destino del planeta está en tus manos!</p>",
                "Registro":"Registro",
                "Juegos":"Juegos",
                "TituloJuegos":[   
                    {
                        "Juego":"Juego 1",
                        "Descripcion":"Descripcion 1",
                        "Desarrollador": "Desarrollador: "
                    },
                    {
                        "Juego":"Luz Sostenible",
                        "Descripcion":"Imaginad un desafío increíble en 'Luz Sostenible'. Vuestra misión: iluminar nuestro colegio con energía renovable. Pero esperad, ¡hay tres piezas por descubrir! Preparaos para enfrentaros a desafíos matemáticos, resolver rompecabezas y hasta descifrar preguntas sobre las vacas en la India.",
                        "Desarrollador": "Desarrollador: "
                    },
                    {
                        "Juego":"Juego 3",
                        "Descripcion":"Descripcion 3",
                        "Desarrollador": "Desarrollador:"
                    },
                    {
                        "Juego":"Juego 4",
                        "Descripcion":"Descripcion 4",
                        "Desarrollador": "Desarrollador: "
                    },
                    {
                        "Juego":"Juego 5",
                        "Descripcion":"Descripcion 5",
                        "Desarrollador": "Desarrollador: "
                    }
                ],
                "BocataTextos":[   
                    {
                        "Texto":"<p>En el apasionante juego <span style='font-weight:bold'>'El Viaje Renovable de Laia'</span>, te sumergirás en la emocionante odisea de una valiente mujer llamada Laia, cuya misión es llevar energía renovable a una escuela mediante desafiantes pruebas alrededor del mundo. Laia se embarca en un viaje épico que la llevará a través de exóticos destinos, como la vibrante India, la salvaje Kenia y la exuberante Brasil.</p>"
                    },
                    {
                        "Texto":"<p>Laia, dotada de una mente aguda y habilidades excepcionales, enfrentará desafíos de lógica, matemáticas y geografía en cada país, resolviendo intrincados acertijos para obtener piezas esenciales que alimentarán de energía sostenible a la escuela. Estas piezas, impregnadas de tecnologías renovables innovadoras, representan la clave para un futuro más verde y sostenible.</p>"
                    },
                    {
                        "Texto":"<p>Para financiar su viaje, Laia se sumerge en la bulliciosa ciudad de Barcelona, donde realiza encargos que le permiten ganar el dinero necesario. La ciudad se convierte en su patio de juegos, mientras Laia equilibra el trabajo, la vida cotidiana y la emocionante búsqueda de las piezas que transformarán vidas.</p>"
                    },
                    {
                        "Texto":"<p>A medida que avanzas en el juego, descubrirás la riqueza cultural y la diversidad de los destinos, mientras Laia supera desafíos que van más allá de las pruebas mentales, enfrentándose a situaciones inesperadas y forjando amistades que la ayudarán en su noble causa.</p>"
                    },
                    {
                        "Texto":"<p>En <span style='font-weight:bold'>'El Viaje Renovable de Laia'</span>, únete a Laia en su emocionante travesía por el mundo, donde cada paso la acerca más a la meta de iluminar el futuro con energía limpia y sostenible. ¿Tienes lo necesario para superar los desafíos y ayudar a Laia a cumplir su misión?</p><p style='font-weight:bold'>¡El destino del planeta está en tus manos!</p>"
                    }
                ],
                "Desarrolladores":"Desarrolladores"
            }
        },
        {
            "Catalan":
            {
                "Titulo":"El Viatge Renovable de Laia",
                "Banner":"<p>En l'apassionant joc <span style='font-weight:bold'>'El Viatge Renovable de Laia'</span>, et submergiràs en l'emocionant odissea d'una valenta dona anomenada Laia, la missió de la qual és portar energia renovable a una escola mitjançant desafiadores proves al voltant del món. Laia s'embarca en un viatge èpic que la portarà a través d'exòtics destins, com la vibrant Índia, la salvatge Kenya i l'exuberant Brasil.</p><p>Laia, dotada d'una ment aguda i habilitats excepcionals, enfrontarà desafiaments de lògica, matemàtiques i geografia en cada país, resolent intricades endevinalles per a obtenir peces essencials que alimentaran d'energia sostenible a l'escola. Aquestes peces, impregnades de tecnologies renovables innovadores, representen la clau per a un futur més verd i sostenible.</p> <p>Per a finançar el seu viatge, Laia se submergeix en la bulliciosa ciutat de Barcelona, on realitza encàrrecs que li permeten guanyar els diners necessaris. La ciutat es converteix en el seu pati de jocs, mentre Laia equilibra el treball, la vida quotidiana i l'emocionant cerca de les peces que transformaran vides.</p> <p>A mesura que avances en el joc, descobriràs la riquesa cultural i la diversitat dels destins, mentre Laia supera desafiaments que van més enllà de les proves mentals, enfrontant-se a situacions inesperades i forjant amistats que l'ajudaran en la seva noble causa.</p><p>En <span style='font-weight:bold'>'El Viatge Renovable de Laia'</span>, uneix-te a Laia en la seva emocionant travessia pel món, on cada pas l'acosta més a la meta d'il·luminar el futur amb energia neta i sostenible. Tens el necessari per a superar els desafiaments i ajudar a Laia a complir la seva missió?</p><p style='font-weight:bold'>El destí del planeta és a les teves mans!</p>",
                "Registro":"Registre",
                "Juegos":"Jocs",
                "TituloJuegos":[   
                    {
                        "Juego":"Joc 1",
                        "Descripcion":"Descripcio 1",
                        "Desarrollador": "Desenvolupador: "
                    },
                    {
                        "Juego":"Llum Sostenible",
                        "Descripcion":"Imagineu un desafiament increïble en 'Llum Sostenible'. La vostra missió: il·luminar el nostre col·legi amb energia renovable. Però espereu, hi ha tres peces per descobrir! Prepareu-vos per a enfrontar-vos a desafiaments matemàtics, resoldre trencaclosques i fins a desxifrar preguntes sobre les vaques a l'Índia.",
                        "Desarrollador": "Desenvolupador: "
                    },
                    {
                        "Juego":"Joc 3",
                        "Descripcion":"Descripcio 3",
                        "Desarrollador": "Desenvolupador: "
                    },
                    {
                        "Juego":"Joc 4",
                        "Descripcion":"Descripcio 4",
                        "Desarrollador": "Desenvolupador: "
                    },
                    {
                        "Juego":"Joc 5",
                        "Descripcion":"Descripcio 5",
                        "Desarrollador": "Desenvolupador: "
                    }
                ],
                "BocataTextos":[   
                    {
                        "Texto":"<p>En l'apassionant joc <span style='font-weight:bold'>'El Viatge Renovable de Laia'</span>, et submergiràs en l'emocionant odissea d'una valenta dona anomenada Laia, la missió de la qual és portar energia renovable a una escola mitjançant desafiadores proves al voltant del món. Laia s'embarca en un viatge èpic que la portarà a través d'exòtics destins, com la vibrant Índia, la salvatge Kenya i l'exuberant Brasil.</p>"
                    },
                    {
                        "Texto":"<p>Laia, dotada d'una ment aguda i habilitats excepcionals, enfrontarà desafiaments de lògica, matemàtiques i geografia en cada país, resolent intricades endevinalles per a obtenir peces essencials que alimentaran d'energia sostenible a l'escola. Aquestes peces, impregnades de tecnologies renovables innovadores, representen la clau per a un futur més verd i sostenible.</p>"
                    },
                    {
                        "Texto":"<p>Per a finançar el seu viatge, Laia se submergeix en la bulliciosa ciutat de Barcelona, on realitza encàrrecs que li permeten guanyar els diners necessaris. La ciutat es converteix en el seu pati de jocs, mentre Laia equilibra el treball, la vida quotidiana i l'emocionant cerca de les peces que transformaran vides.</p>"
                    },
                    {
                        "Texto":"<p>A mesura que avances en el joc, descobriràs la riquesa cultural i la diversitat dels destins, mentre Laia supera desafiaments que van més enllà de les proves mentals, enfrontant-se a situacions inesperades i forjant amistats que l'ajudaran en la seva noble causa.</p>"
                    },
                    {
                        "Texto":"<p>En <span style='font-weight:bold'>'El Viatge Renovable de Laia'</span>, uneix-te a Laia en la seva emocionant travessia pel món, on cada pas l'acosta més a la meta d'il·luminar el futur amb energia neta i sostenible. Tens el necessari per a superar els desafiaments i ajudar a Laia a complir la seva missió?</p><p style='font-weight:bold'>El destí del planeta és a les teves mans!</p>"
                    }
                ],
                "Desarrolladores":"Desenvolupadors"
            }    
        }
    ];

    let cat = document.getElementById('cat');
    let esp = document.getElementById('esp');

    let btnRegistro = document.getElementById('btnLandingRegistro');
    let lblTitulo = document.querySelector('.landing-page #titulo');
    let juegosHeader = document.querySelector('.games-section .landing-juegos h2');
    let tituloJuegos = document.querySelectorAll('.games-section .card .card-title');
    let descripcionJuegos = document.querySelectorAll('.games-section .card .card-text');
    let dedarrolladorJuegos = document.querySelectorAll('.games-section .card .card-subtitle');
    let desarrolladoresHeader = document.querySelector('.developers-section h2');
    let bocatas = document.querySelectorAll('.carousel-inner .carousel-item');

    esp.addEventListener('click', function cambiarIdioma(event){

        // headerSectionIntro.innerHTML = idiomasLanding[0]['Castellano'].Banner;
        lblTitulo.innerHTML = idiomasLanding[0]['Castellano'].Titulo;
        btnRegistro.value = idiomasLanding[0]['Castellano'].Registro;
        juegosHeader.innerHTML = idiomasLanding[0]['Castellano'].Juegos;

        for (let index = 0; index < tituloJuegos.length; index++) {
            
            tituloJuegos[index].innerHTML = idiomasLanding[0]['Castellano']['TituloJuegos'][index].Juego;
            descripcionJuegos[index].innerHTML = idiomasLanding[0]['Castellano']['TituloJuegos'][index].Descripcion;
            dedarrolladorJuegos[index].innerHTML = idiomasLanding[0]['Castellano']['TituloJuegos'][index].Desarrollador;
        }

        for (let index = 0; index < bocatas.length; index++) {
            
            bocatas[index].innerHTML = idiomasLanding[0]['Castellano']['BocataTextos'][index].Texto;
        }
        
        desarrolladoresHeader.innerHTML = idiomasLanding[0]['Castellano'].Desarrolladores;
    });

    cat.addEventListener('click', function cambiarIdioma(event){

        // headerSectionIntro.innerHTML = idiomasLanding[1]['Catalan'].Banner;
        lblTitulo.innerHTML = idiomasLanding[1]['Catalan'].Titulo;
        btnRegistro.value = idiomasLanding[1]['Catalan'].Registro;
        juegosHeader.innerHTML = idiomasLanding[1]['Catalan'].Juegos;

        for (let index = 0; index < tituloJuegos.length; index++) {
            
            tituloJuegos[index].innerHTML = idiomasLanding[1]['Catalan']['TituloJuegos'][index].Juego;
            descripcionJuegos[index].innerHTML = idiomasLanding[1]['Catalan']['TituloJuegos'][index].Descripcion;
            dedarrolladorJuegos[index].innerHTML = idiomasLanding[1]['Catalan']['TituloJuegos'][index].Desarrollador;
        }

        for (let index = 0; index < bocatas.length; index++) {
            
            bocatas[index].innerHTML = idiomasLanding[1]['Catalan']['BocataTextos'][index].Texto;
        }
        
        desarrolladoresHeader.innerHTML = idiomasLanding[1]['Catalan'].Desarrolladores;
    });

    const arcade = document.querySelector("body");
    const pantalla = document.querySelector("body .landing-page");
    let body = document.querySelector('body#mainPage');
    let laia = document.getElementById('laiaLanding');
    let bocata = document.getElementsByClassName('laiaBocata');
    

    if(localStorage.getItem('encendido') == 'false' || localStorage.getItem('encendido') == null){

        body.classList.add('animarArcade');
        // pantalla.classList.add('encender');
        
    }else{
        body.classList.remove('animarArcade');
        pantalla.classList.remove('encender');
        pantalla.classList.remove('apagado');

        pantalla.style.display = 'block';
        laia.classList.add('mover');
    }

    
    pantalla.addEventListener("animationend", () => {
        
        // Solo mover si pantalla encendida
        if(pantalla.classList.contains('encenderPantalla')){
            laia.classList.add('mover');
        }
        
        // Mantener pantalla apagada al apagar
        if(pantalla.classList.contains('apagarPantalla')){
            pantalla.style.display = 'none';
        }
    });

    let stopMovement = '320px';

    laia.addEventListener("animationend", () => {
        
        laia.setAttribute('src','img/laiaDerechaParada.png');
        laia.style.left = stopMovement;

        bocata[0].classList.add('mostrar');
        bocata[1].classList.add('mostrar');
        bocata[0].style.opacity = 1;
        bocata[1].style.opacity = 1;
    });

    let btnApagar = document.getElementById('btnOnOff');

    btnApagar.addEventListener('click',function(){

        if(btnApagar.classList.contains('btnEncender')){
            btnApagar.classList.add('btnApagar');
            pantalla.classList.add('encenderPantalla'); 
                        
            btnApagar.classList.remove('btnEncender');            
            pantalla.classList.remove('apagarPantalla'); 
            pantalla.classList.remove('apagado');

            pantalla.style.display = 'block';
            localStorage.setItem('encendido',true);
        }else{
            btnApagar.classList.add('btnEncender');
            pantalla.classList.add('apagarPantalla');

            btnApagar.classList.remove('btnApagar');
            pantalla.classList.remove('encenderPantalla');

            laia.style.left = '0px';
            laia.classList.remove('mover');

            bocata[0].classList.remove('mostrar');
            bocata[1].classList.remove('mostrar');
            bocata[0].style.opacity = 0;
            bocata[1].style.opacity = 0;
            
            localStorage.removeItem('encendido');
        }
    })

    if(localStorage.getItem('encendido') == 'true'){
        btnApagar.classList.add('btnApagar');
        btnApagar.classList.remove('btnEncender');
    }else{
        btnApagar.classList.remove('btnApagar');
        btnApagar.classList.add('btnEncender');
    }

});