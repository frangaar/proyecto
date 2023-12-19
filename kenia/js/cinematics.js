// PLAYER and Barrels
var player_life
var barrel_velocity
var num_of_barrels 
var imgCharacter
var imgCharacterWalking
var imgJump
var isMario = false

// Local storage de que no salga los controles cada vez que muera
let storagePlayTimes
let sesion1
let stringS1 = 'Tiempo de partida'
let playTimes = 0
let stringS2 = 'Veces jugadas'

var botonAceptar = document.getElementById('buttonAceptar')
var divButton = document.getElementById('buttonContinue')

// Heart images
let heart1 = document.getElementById('heart1')
let heart2 = document.getElementById('heart2')
heart1.style.display = 'none'
heart2.style.display = 'none'
let twoLifes = false

let focusPlayButton = document.getElementById('playButton')
let spanExit = document.getElementById('idSpanExit')

let exitButton = document.getElementById('credits/exit')
let exitMenuButton = document.getElementById('exitButton')
let exit = document.getElementById('exit')
let controlsButton = document.getElementById('controls')
let showCtrl = document.getElementById('showControls')
let buttonGoMenu = document.getElementById('buttonGoMenu')
let containerGoMenu = document.getElementById('goMenu')
let controlsTitle = document.getElementById('controlsTitle')
let containerControls = document.getElementById('containerControls')
let history = document.getElementById('showHistory')
let laia = document.getElementById('laiaStory')
let start_menu = document.getElementById('menu_de_inicio')
let gameCompleted = false 
let landingText = document.getElementById('goingToTheLanding')
let laiaDiv  = document.getElementById('laia')
let game = false

var play = false
let viewControls = false
var game_is_started = false

/** Animacion entrada */
divButton.addEventListener('animationstart', function () {
    laiaDiv.style.display = 'none'
    spanExit.style.display = 'none'
    focusPlayButton.style.display = 'none'
})
divButton.addEventListener('animationend', function () {
    laiaDiv.style.display = null
    spanExit.style.display = 'block'
    focusPlayButton.style.display = 'block'
})

/** Función para empezar el juego.*/
function buttonAccept() {
    start_menu.style.display = 'block'
    if (heart1.style.display == 'none') {
        heart2.style.display = 'block'
        if (player_life === 2) 
        {
            twoLifes = true
            heart1.style.display = 'block'
        }    
    }
    history.style.display = 'none'
    var level1_Map = document.getElementById('level1')              
    level1_Map.style.display= 'block'
    showCtrl.style.display = 'none'
    pause = false
    audioBackground.play()
    botonAceptar.style.display = 'none'
    divButton.style.display = 'none'
    level1_Map.style.filter = 'blur(0px)'
    play = true
} 
/** Funcion menú para cuando muera el jugador. */  
function buttonDeath() {
    // Container
    start_menu.style.backgroundImage = 'url(../kenia/img/menu-muerte.png)'
    // Laia 
    laiaDiv.style.display = null

    // DivButon
    divButton.style.width = '100%'
    divButton.style.pointerEvents = null
    divButton.style.animation = 'none'
    divButton.style.display = 'grid'
    divButton.style.backgroundImage = 'none'
    divButton.style.backgroundColor = 'transparent'
    divButton.style.transform = 'none'
    divButton.style.margin = '0'
    
    // Playing and Exit
    botonAceptar.style.display = null
    focusPlayButton.style.display = 'none'
    spanExit.style.display = null
    spanExit.addEventListener('click', back_Menu)
    spanExit.style.backgroundImage = 'url(../kenia/img/home-boton.png)'
    spanExit.style.left = '920px'
    spanExit.style.top = '516px'
    spanExit.className = 'spansPause'
    exit.style.display = 'block'

    audioBackground.pause()
    level1_Map.style.filter = 'blur(2px)'
}
/** Función para menú pausa. */
function pausePulsed() {
    // Container
    start_menu.style.backgroundImage = 'url(../kenia/img/menu-pause.png)'
    character.setAttribute('src', imgCharacter)
    imgLeft = 1
    imgRight = 1
    imgStand = 1
    imgUp = 1
    imgCrouch = 1
    play = false

    // Laia 
    laiaDiv.style.display = null

    // DivButon
    divButton.style.width = '100%'
    divButton.style.pointerEvents = null
    divButton.style.animation = 'none'
    divButton.style.display = 'grid'
    divButton.style.backgroundImage = 'none'
    divButton.style.backgroundColor = 'transparent'
    divButton.style.transform = 'none'
    divButton.style.margin = '0'
    
    // Continue Playing and Exit
    botonAceptar.style.display = null
    focusPlayButton.style.display = null
    focusPlayButton.addEventListener('click', buttonAccept)
    focusPlayButton.style.backgroundImage = 'url(../kenia/img/returnGame-boton.png)'
    focusPlayButton.style.left = '832px'
    focusPlayButton.style.top = '516px'
    focusPlayButton.className = 'spansPause'

    spanExit.style.display = null
    spanExit.addEventListener('click', back_Menu)
    spanExit.style.backgroundImage = 'url(../kenia/img/home-boton.png)'
    spanExit.style.left = '1008px'
    spanExit.style.top = '516px'
    spanExit.className = 'spansPause'
    exit.style.display = 'block'

    audioBackground.pause()
    level1_Map.style.filter = 'blur(2px)'
    pause = true
    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            if (!character_is_dead) 
            {
                buttonAccept()
            }
        }
    });
}
/** Función para volver al menú. */
function back_Menu() {
    if (gameCompleted) {
        sesion1 = localStorage.setItem(stringS1, timerCount)
    }
    // let currentDate = new Date().toLocaleDateString('es-ES');
    
    // Fecha para las presentaciones públicas
    // const endDate = new Date('2023', '11', '18').toLocaleDateString('es-ES'); 
    
    // if (currentDate < endDate) {
        window.location.href = '../kenia/index.html'    
    // }else{
    //     window.location.href = 'http://localhost/proyecto/kenia/index.html'
    // }

}
/** Función para salir del juego. */
function exitGame() {
    let text = document.getElementById('informativeText')
    if (gameCompleted) {
        sesion1 = localStorage.setItem(stringS1, timerCount)
        localStorage.removeItem(stringS2)
        let recuperedDates = localStorage.getItem(stringS1); 
        window.location.href = '../save.php?nivel=3&tiempo=' + recuperedDates;
        localStorage.removeItem(stringS1)
    } else {
        divButton.style.animation = 'animationMenuExit 2s linear'
        divButton.addEventListener('animationend', function () {
            divButton.style.transform = 'scale(2.3)'
            divButton.style.marginTop = '664px'
            botonAceptar.style.display = 'none'
            landingText.style.display = 'block'
            text.innerHTML = "Compte, no t'has passat el joc, si te'n vas ara no es guardarà la partida."
        })
    }
}
function exitSureOption() {
    localStorage.removeItem(stringS1)
    localStorage.removeItem(stringS2)
    window.location.href = '../action_page.php';
}
function goBackInSureOption() {
    botonAceptar.style.display = null
    landingText.style.display = 'none'
    divButton.style.animation = 'animationMenuExit2 2s linear'
    divButton.addEventListener('animationend', function (){
        divButton.style = 'scale(1)'
        divButton.style.marginTop = '0px'
        botonAceptar.style.display = null
        landingText.style.display = 'none'
    })
    
}
/** Funcion para mostrar todos los controles para jugar. */
function showControls() {
    if (viewControls) {
        controlsTitle.innerHTML = 'Controls'
        buttonGoMenu.innerHTML = 'Enrere'
        buttonGoMenu.addEventListener('click', buttonAccept)
        showCtrl.style.zIndex = 500
        containerControls.style.width = '1008px'
        containerControls.style.width = '836px'
        containerControls.style.backgroundColor = '#3836818c'
        containerGoMenu.style.left = '1142px'
        containerGoMenu.style.top = '68px'
    } else {
        buttonGoMenu.innerHTML = 'Menu'
        buttonGoMenu.addEventListener('click', buttonDeath)
        level1_Map.style.display = 'none'
        botonAceptar.style.display = 'none'
        divButton.style.display = 'none'
    }
    start_menu.style.display = 'none'
    showCtrl.style.display = 'block'
    buttonGoMenu.style.left = '57px'
    buttonGoMenu.style.top = '59px'
    viewControls = false
}
/** Función para empezar el juego, aqui uso promesas para una condicional, las promesas son para manejar operaciones asíncronas, en este caso uso el boleano de dificult, el cual le hago return en la función de 
  selectDificultAndCharacter(), y luego lo comparo.
 */
  let container2 = document.getElementById('selectorDeNivel')
  let level = document.getElementById('level_characterSelected')
  let lvlDescription = document.getElementById('lvlDescription')
  let span = document.getElementsByTagName('span')
  let dif1 = false
  let dif2 = false
  let dif3 = false
  let dif4 = false

  let char1 = false
  let char2 = false
  let char3 = false
  let char4 = false
function startGame() {
    let playTimesRecupered = localStorage.getItem(stringS2); 
    selectDificult().then((difficult) => {
        if (difficult) {
            selectCharacter().then((characterSelected) => {
                if (
                    characterSelected && playTimesRecupered == 0
                    || characterSelected && playTimesRecupered == null
                    ) {
                    showControls()
                    divButton.style.pointerEvents = null
                    divButton.style.display = 'none'
                    controlsTitle.innerHTML = 'Abans de jugar'
                    buttonGoMenu.style.display = 'none'
                    containerGoMenu.style.display = 'none'
                    setTimeout(() => {
                        buttonGoMenu.style.display = 'flex'
                        containerGoMenu.style.display = null
                        buttonGoMenu.innerHTML = ''
                        buttonGoMenu.setAttribute('onclick', 'showStory()')  
                    }, 3000);
                    document.addEventListener("keyup", function(event) {
                        if (event.code === 'Enter') {
                            if (!character_is_dead) 
                            {
                                showStory()
                            }
                        }
                    });
                } else buttonAccept()
            })  
        }
    })
}
function selectDificult() {
    return new Promise((resolve) => {
        divButton.style.animation = 'animationMenuDifficult 2s linear'
        divButton.addEventListener('animationend', function () {
            divButton.style.transform = 'scale(2.3)'
            divButton.style.marginLeft = '1371px'
            let difficult = false 
            divButton.style.pointerEvents = 'none'
            container2.style.display = 'block'
            let skull1 = document.getElementById('skull1')
            let skull2 = document.getElementById('skull2')
            let skull3 = document.getElementById('skull3')
            let skull4 = document.getElementById('skull4')
            const skulls = [skull1, skull2, skull3, skull4];
            for (const spans of span) {
                spans.addEventListener('mouseenter', function() {
                    lvlDescription.style.display = null
                    if (spans.id === 'diff1') {
                        lvlDescription.innerHTML = 'Si vols jugar sense cap mena de dificultat, hi haurà dos barrils únicament, i es mouran a una velocitat lenta, tindràs dues vides.'
                        dif1 = true
                        dif2 = false
                        dif3 = false
                        dif4 = false
                        for (let i = 0; i < skulls.length; i++) {
                            skulls[i].style.display = i === 0 ? 'block' : 'none';
                            skulls[i].src = '../kenia/img/skull-diff.png'
                          }
                    } else if (spans.id === 'diff2') {
                        lvlDescription.innerHTML = "Per si vols disfrutar de l'historia amb una miqueta de dificultat, hi haurà tres barrils i es mouran a una velocitat més ràpida en comparació al nivell fàcil, tindràs dues vida."
                        dif1 = false
                        dif2 = true
                        dif3 = false
                        dif4 = false
                        for (let i = 0; i < skulls.length; i++) {
                            skulls[i].style.display = i === 0 || i === 1  ? 'block' : 'none';
                            skulls[i].src = '../kenia/img/skull-diff.png'
                          }
                    } else if (spans.id === 'diff3') {
                        lvlDescription.innerHTML = 'Per si vols una experiència difícil, hi haurà tres barrils i es mouran a una velocitat molt més ràpida en comparació al nivell mitjà, tindràs una vida.'
                        dif1 = false
                        dif2 = false
                        dif3 = true
                        dif4 = false
                        for (let i = 0; i < skulls.length; i++) {
                            skulls[i].style.display = i === 0 || i === 1 ||i === 2 ? 'block' : 'none';
                            skulls[i].src = '../kenia/img/skull-diff-danger.png'
                          }
                    } else if (spans.id === 'diff4') {
                        lvlDescription.innerHTML = 'Per als més experts, hi haurà cuatre barrils i es mouran a una velocitat super ràpida, tindràs una vida. '
                        dif1 = false
                        dif2 = false
                        dif3 = false
                        dif4 = true
                        for (let i = 0; i < skulls.length; i++) {
                            skulls[i].style.display = 'block'
                            skulls[i].src = '../kenia/img/skull-diff-danger.png'
                          }
                    }
                  });
                  spans.addEventListener('mouseleave', function () {
                    lvlDescription.innerHTML = 'Escull la dificultat a la que vols jugar'
                  })
                  spans.addEventListener('click', function() {
                    if (dif1) 
                    {
                        player_life = 2
                        barrel_velocity = 3
                        num_of_barrels = 2

                    } else if (dif2)
                    {
                        player_life = 2
                        barrel_velocity = 4
                        num_of_barrels = 3
    
                    } else if (dif3) 
                    {
                        player_life = 1
                        barrel_velocity = 5
                        num_of_barrels = 3
    
                    } else if (dif4){

                        player_life = 1
                        barrel_velocity = 8
                        num_of_barrels = 4
                    }
                    for (let i = 0; i < skulls.length; i++) {
                        skulls[i].style.display = 'none'
                      }
                    difficult = true
                    resolve(difficult)
                  });
            } 
        })
    })
}
function selectCharacter() {
    let c1 = document.getElementById('diff1')
    c1.id = 'char1'
    c1.innerHTML = 'Laia Ferrer'
    let c2 = document.getElementById('diff2')
    c2.id = 'char2'
    c2.innerHTML = 'Malik Pockot'
    let c3 = document.getElementById('diff3')
    c3.id = 'char3'
    c3.innerHTML = 'Laia Dibuix'
    let c4 = document.getElementById('diff4')
    c4.id = 'char4'
    c4.innerHTML = 'Mario Bross'
    let img = document.createElement('img')
    img.id = 'imgDescription'
    let containerLevelSelector = document.getElementById('containerLevelSelector')
    lvlDescription.remove()
    container2.appendChild(img)
    return new Promise((resolve) => {
        containerLevelSelector.style.display = 'none'
        divButton.style.animation = 'animationMenuDifficult2 1.2s linear'
        divButton.addEventListener('animationend', function () {
            laiaDiv.style.display = 'none'
            spanExit.style.display = 'none'
            focusPlayButton.style.display = 'none'
            divButton.style.transform = 'scale(1.3)'
            divButton.style.marginLeft = '0'
            divButton.style.animation = 'animationMenuCharacter 2s linear'
            divButton.addEventListener('animationend', function () {
                containerLevelSelector.style.display = null
                divButton.style.transform = 'scale(2.3)'
                divButton.style.marginLeft = '-1370px'
            })
        })
        let characterSelected = false
        for (const spans of span) {
            spans.addEventListener('mouseenter', function() {
                img.style.display = null
                if (spans.id === 'char1') 
                {
                    img.src = '../img/laiaDerechaParada.png'
                    char1 = true
                    char2 = false
                    char3 = false
                    char4 = false
                } else if (spans.id === 'char2') 
                {
                    img.src = '../img/personajes/malik.png'
                    char1 = false
                    char2 = true
                    char3 = false
                    char4 = false
                } else if (spans.id === 'char3') 
                {
                    img.src = '../img/personajes/laia.png'
                    char1 = false
                    char2 = false
                    char3 = true
                    char4 = false
                } else if (spans.id === 'char4') 
                {
                    img.src = '../kenia/img/char_stand.png'
                    char1 = false
                    char2 = false
                    char3 = false
                    char4 = true
                }
              });
              spans.addEventListener('mouseleave', function () {
                img.style.display = 'none'
              })
              spans.addEventListener('click', function() {
                if (char1) 
                {
                    // Laia
                    imgCharacter = '../img/laiaDerechaParada.png'
                    imgCharacterWalking = '../img/laiaDerechaCaminando.gif'
                } else if (char2)
                {
                    // Malik
                    imgCharacter = '../img/personajes/malik.png'
                    imgCharacterWalking = '../img/personajes/malik.png'

                } else if (char3)
                {
                    // Laia Dibuix
                    imgCharacter = '../img/personajes/laia.png'
                    imgCharacterWalking = '../img/personajes/laia.png'

                } else if (char4) 
                {
                    // Mario
                    imgCharacter = '../kenia/img/char_stand.png'
                    imgCharacterWalking = '../kenia/img/char_running(2).gif'
                    imgJump = '../kenia/img/char_jump.png'
                    isMario = true
                } 
                characterSelected = true
                container2.style.display = 'none'
                if (imgCharacter == null) {
                    imgCharacter = '../img/laiaDerechaParada.png'
                    imgCharacterWalking = '../img/laiaDerechaCaminando.gif'
                }  
                resolve(characterSelected)
              });
        }
    })
}
/** Función para mostrar la historia. */
function showStory() {
    let mensajeHistoria = document.getElementById('mensajeHistoria')
    let containerHistory = document.getElementById('containerStory')
    let bocata = document.getElementById('bocata_Story')
    let mensaje1 = document.getElementById('mensaje1')
    let donkey = document.getElementById('donkey_history')
    containerHistory.style.backgroundImage = 'url(../kenia/img/fondo2.png)'
    containerHistory.style.backgroundSize = 'cover'
    // Mostrar cinematica historia
    controlsButton.style.display = 'block'
    exitMenuButton.style.display = 'block'
    exit.style.display = 'none'
    laia.src = '../img/laiaDerechaCaminando.gif'
    history.style.display = 'block'
    showCtrl.style.display = 'none'
    laia.style.animation = 'move 3s linear'
    laia.addEventListener('animationend', function() {
        laia.src = '../img/laiaDerechaParada.png'
        mensajeHistoria.style.display = 'block'
        bocata.style.display = 'block'
        mensaje1.style.display = 'block'
        setTimeout(() => {
            mensaje1.innerHTML = `Oh no, hi ha un goril·la enfadat que no ens deixa passar!
            Està fent barrils, hem de derrotar-lo per anar a la central i encendre l'electricitat.
            <br>
            Deixa que et doni un consell, ves amb compte, salta els barrils i arriba fins a ell, però sobretot, tingues molt cuidado, aquests barrils no tenen bona pinta.`
            setTimeout(() => {
                bocata.style.display = 'none'
                mensaje1.style.display = 'none'
                mensajeHistoria.style.display = 'none'
                laia.src = '../img/laiaDerechaCaminando.gif'
                laia.style.animation = 'moveAway 4s linear'
                laia.addEventListener('animationend', function() {
                    laia.style.display = 'none'
                    donkey.style.display = 'block'
                    bocata.style.display = 'none'
                    mensaje1.style.display = 'none'
                    mensajeHistoria.style.display = 'none'
                    donkey.style.animation = 'donkyeAppareance 1s linear'
                    donkey.style.transform = 'rotate(0)'
                })
            }, 10000);

        }, 10000);
    })   
    donkey.addEventListener('animationend', function() {
        audioEnemy.play()
        donkey.style.animation = 'donkeyMoveAway 4s linear'
        donkey.style.left = '1460px'
        donkey.addEventListener('animationend', function() {
        donkey.style.display = 'none'
        game_is_started = true
        // Inicializar la local storage para saber que ha jugado una vez
        playTimes++
        storagePlayTimes = localStorage.setItem(stringS2, playTimes)
        buttonAccept()
    })
    })
    
}
function transitionlvl1_to_lvl2() {
    clearInterval(timerBarrel)
    let containerLvl1_to2 = document.getElementById('lvl1_lvl2');
    containerLvl1_to2.style.display = 'block';
    level1_Map.style.display = 'none';
    let barrilesContainer = document.querySelector('.barriles');
    barrilesContainer.style.display = 'none'
    function handleClick() {
        containerLvl1_to2.style.display = 'none';
        level1_Map.style.display = 'block';
        enemyContainer.style.left = '65px';
        enemyContainer.style.display = null
        positionY = 762;
        level_2_finished = true;
        bossAnimation1 = false;
        ARRAY_BARRELS.splice(0, ARRAY_BARRELS.length)
        drawMap();
        index_counting_barrels = 0
        
        spanlvl.removeEventListener('click', handleClick);
    }
    let spanlvl = document.getElementById('spanNext_lvl');
    spanlvl.addEventListener('click', handleClick)
}
function finishTheGame() {
    let globalContainerFinishMode = document.getElementById('finishGameContainer')
    let containerFinish = document.getElementById('containerFinish')
    let laiaImgFinish = document.getElementById('laiaFinish')
    let finalMessage = document.getElementById('mensajeFinal')
    let containerFinalMessage = document.getElementById('mensajeHistoriaFinal')
    globalContainerFinishMode.style.display = 'block'
    laiaImgFinish.addEventListener('animationend', function() {
        laiaImgFinish.src = '../img/laiaDerechaParada.png'
        finalMessage.style.display = 'block'
        containerFinalMessage.style.display = 'block'
        setTimeout(() => {
            containerFinalMessage.style.display = 'none'
            laiaImgFinish.src = '../img/laiaDerechaCaminando.gif'
            laiaImgFinish.style.animation = 'moveAwayFinish 4s linear'
            laiaImgFinish.addEventListener('animationend', function() {
                laiaImgFinish.style.display = 'none'
                containerFinalMessage.style.display = 'none'
                exitGame()
            })
        }, 10000);
    })
}
// Funcion de objetos conseguidos
function recollectedObjectes() 
{
    clearInterval(timerBarrel)
    level1_Map.style.display = 'none'
    let text = document.getElementById('titleObjectedsRecolected')
    let spanFinish = document.getElementById('spanFinishingTheGame')
    let finishContainer = document.getElementById('containerObjectObtaineds')
    let gen = document.getElementById('gen')
    let cab = document.getElementById('cab')
    let key = document.getElementById('key')
    finishContainer.style.display = 'block'
    text.innerHTML = 'Enhorabona! Has aconseguit aquests objectes.'
    setTimeout(() => {
        gen.style.display = 'inline'
        gen.style.animation = 'shake 1s linear'
        gen.addEventListener('animationend', function () {
            cab.style.display = 'inline'
            cab.style.animation = 'shake 1s linear'
            cab.addEventListener('animationend', function () {
                key.style.display = 'inline'
                key.style.animation = 'shake 1s linear'
                key.addEventListener('animationend', function () {
                    console.log('hola');
                })
            })
        })
    }, 1000);
    function goToStory() {
        finishContainer.style.display = 'none';
        level_2_finished = true
        gameCompleted = true
        finishTheGame()
        spanFinish.removeEventListener('click', goToStory);
    }
    spanFinish.addEventListener('click', goToStory)
}