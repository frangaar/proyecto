document.addEventListener('DOMContentLoaded',function(){
   
    let landing = document.querySelector('.games-section #india');
    let img1 = document.getElementById('india_static');
    let img2 = document.getElementById('india_gif');

    const imgs = this.getElementsByTagName('img');
    for (const img of imgs) {
        img.draggable = false;
    }

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
                "MasInfo":"Clica aquí si quieres saber más!!",
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
                "Registro":"Registre",
                "MasInfo":"Clica aquí si vols saber més!!",
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
        },
        {
            "Ingles":
            {
                "Titulo":"Laia's Renewable Journey",
                "Registro": "Registration",
                "MasInfo":"Click here if you want to know more!!",
                "Juegos": "Games",
                "TituloJuegos":[   
                    {
                        "Juego": "Game 1",
                        "Descripcion": "Description 1",
                        "Desarrollador": "Developer: "
                    },
                    {
                        "Juego": "Sustainable Light",
                        "Descripcion": "Imagine an amazing challenge in 'Sustainable Light'. Your mission: to light up our school with renewable energy. But wait, there are three pieces to discover! Get ready to face mathematical challenges, solve puzzles and even decipher questions about cows in India.",
                        "Desarrollador": "Developer: "
                    },
                    {
                        "Juego": "Game 3",
                        "Descripcion": "Description 3",
                        "Desarrollador": "Developer:"
                    },
                    {
                        "Juego": "Game 4",
                        "Descripcion": "Description 4",
                        "Desarrollador": "Developer: "
                    },
                    {
                        "Juego": "Game 5",
                        "Descripcion": "Description 5",
                        "Desarrollador": "Developer: "
                    }
                ],
                "BocataTextos":[   
                    {
                        "Texto":"<p>In the exciting game <span style='font-weight:bold'>'Laia's Renewable Journey'</span>, you will immerse yourself in the exciting odyssey of a brave woman named Laia, whose mission is to bring renewable energy to a school through challenging tests around the world. Laia embarks on an epic journey that will take her through exotic destinations, such as vibrant India, wild Kenya and lush Brazil.</p>"
                    },
                    {
                        "Texto":"<p>Laia, gifted with a sharp mind and exceptional skills, will face logic, mathematics and geography challenges in each country, solving intricate puzzles to obtain essential pieces that will feed sustainable energy to the school. These pieces, infused with innovative renewable technologies, represent the key to a greener and more sustainable future.</p>"
                    },
                    {
                        "Texto":"<p>To finance her trip, Laia immerses herself in the bustling city of Barcelona, where she carries out assignments that allow her to earn the necessary money. The city becomes her playground, as Laia balances work, everyday life, and the exciting search for the pieces that will transform lives. </ P>"
                    },
                    {
                        "Texto":"<p>As you progress through the game, you will discover the cultural richness and diversity of the destinations, while Laia overcomes challenges that go beyond mental tests, facing unexpected situations and forging friendships that will help her in her noble cause. </p>"
                    },
                    {
                        "Texto":"<p>In <span style='font-weight:bold'>'Laia's Renewable Journey'</span>, join Laia on her exciting journey around the world, where each step brings her closer to the goal of illuminating the future with clean and sustainable energy. Do you have what it takes to overcome the challenges and help Laia fulfill her mission? </ P > < p style = 'font-weight: bold' > The fate of the planet is in your hands! </ P >"
                    }
                ],
                "Desarrolladores":"Developers"
            }    
        }
    ];

    let cat = document.getElementById('cat');
    let esp = document.getElementById('esp');
    let ing = document.getElementById('ing');

    let btnRegistro = document.getElementById('btnLandingRegistro');
    let lblTitulo = document.querySelector('.landing-page #titulo');
    let juegosHeader = document.querySelector('.games-section .landing-juegos h2');
    let tituloJuegos = document.querySelectorAll('.games-section .card .card-title');
    let descripcionJuegos = document.querySelectorAll('.games-section .card .card-text');
    let dedarrolladorJuegos = document.querySelectorAll('.games-section .card .card-subtitle');
    let desarrolladoresHeader = document.querySelector('.developers-section h2');
    let bocatas = document.querySelectorAll('.carousel-inner .carousel-item');
    let bocataSaberMas = document.getElementById('bocataSaberMas');
    let bocataSaberMasParrafo = document.querySelector('#bocataSaberMas p');

    esp.addEventListener('click', function cambiarIdioma(event){

        // headerSectionIntro.innerHTML = idiomasLanding[0]['Castellano'].Banner;
        lblTitulo.innerHTML = idiomasLanding[0]['Castellano'].Titulo;
        btnRegistro.value = idiomasLanding[0]['Castellano'].Registro;
        bocataSaberMasParrafo.innerHTML = idiomasLanding[0]['Castellano'].MasInfo;
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
        bocataSaberMasParrafo.innerHTML = idiomasLanding[1]['Catalan'].MasInfo;
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
    
    ing.addEventListener('click', function cambiarIdioma(event){

        // headerSectionIntro.innerHTML = idiomasLanding[1]['Catalan'].Banner;
        lblTitulo.innerHTML = idiomasLanding[2]['Ingles'].Titulo;
        btnRegistro.value = idiomasLanding[2]['Ingles'].Registro;
        bocataSaberMasParrafo.innerHTML = idiomasLanding[2]['Ingles'].MasInfo;
        juegosHeader.innerHTML = idiomasLanding[2]['Ingles'].Juegos;

        for (let index = 0; index < tituloJuegos.length; index++) {
            
            tituloJuegos[index].innerHTML = idiomasLanding[2]['Ingles']['TituloJuegos'][index].Juego;
            descripcionJuegos[index].innerHTML = idiomasLanding[2]['Ingles']['TituloJuegos'][index].Descripcion;
            dedarrolladorJuegos[index].innerHTML = idiomasLanding[2]['Ingles']['TituloJuegos'][index].Desarrollador;
        }

        for (let index = 0; index < bocatas.length; index++) {
            
            bocatas[index].innerHTML = idiomasLanding[2]['Ingles']['BocataTextos'][index].Texto;
        }
        
        desarrolladoresHeader.innerHTML = idiomasLanding[2]['Ingles'].Desarrolladores;
    });

    const pantalla = document.querySelector("body .landing-page");
    let body = document.querySelector('body#mainPage');
    let laia = document.getElementById('laiaLanding');
    let gorro = document.getElementById('laiaGorro');
    let bocata = document.getElementsByClassName('laiaBocata');
    let laiaInfo = document.getElementById('laiaInfo');
    let guirnalda = document.getElementById('luces');
    
    

    if(localStorage.getItem('encendido') == 'false' || localStorage.getItem('encendido') == null){

        body.classList.add('animarArcade');
        // Si máquina apagada quitamos  scroll
        body.style.overflow = 'hidden';
        
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
            // gorro.classList.add('mover');
        }
        
        // Mantener pantalla apagada al apagar
        if(pantalla.classList.contains('apagarPantalla')){
            pantalla.style.display = 'none';
        }

        // Mostrar scroll solo cuando la máquina se haya encendido
        body.style.overflow= 'inherit';
        body.style.pointerEvents = "inherit";
    });

    let stopMovement = '320px';
    let stopGorro = '130px';

    laia.addEventListener("animationend", () => {
        
        laia.setAttribute('src','img/laiaDerechaParada.png');
        laia.style.left = stopMovement;
        gorro.classList.add('mover');
        gorro.style.top = stopGorro;
        guirnalda.classList.add('mostrar');
        guirnalda.style.opacity = 1;

        laiaInfo.classList.add('mostrar');
        laiaInfo.style.opacity = 1;

        bocataSaberMas.classList.add('mostrar');
        bocataSaberMas.style.opacity = 1;
    });

    bocataSaberMas.addEventListener('click',function(){

        bocataSaberMas.classList.remove('mostrar');
        bocataSaberMas.style.opacity = 0;
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
            body.style.pointerEvents = "inherit";
            laia.setAttribute('src','img/laiaDerechaCaminando.gif');

        }else{
            btnApagar.classList.add('btnEncender');
            pantalla.classList.add('apagarPantalla');

            btnApagar.classList.remove('btnApagar');
            pantalla.classList.remove('encenderPantalla');

            laia.style.left = '0px';
            gorro.style.top= '-15px';
            laia.classList.remove('mover');
            gorro.classList.remove('mover');

            guirnalda.classList.remove('mostrar');
            guirnalda.style.opacity = 0;

            bocataSaberMas.classList.remove('mostrar');
            bocataSaberMas.style.opacity = 0;
            bocata[0].classList.remove('mostrar');
            bocata[1].classList.remove('mostrar');
            bocata[0].style.opacity = 0;
            bocata[1].style.opacity = 0;
            
            localStorage.removeItem('encendido');
            body.style.pointerEvents = "none";
        }
    })

    if(localStorage.getItem('encendido') == 'true'){
        btnApagar.classList.add('btnApagar');
        btnApagar.classList.remove('btnEncender');
    }else{
        btnApagar.classList.remove('btnApagar');
        btnApagar.classList.add('btnEncender');
    }

    cat.click();

});