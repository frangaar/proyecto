var botonAceptar = document.getElementById('buttonAceptar')
var divButton = document.getElementById('buttonContinue')
let focusPlayButton = document.getElementById('playButton')
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
let sesion1
let gameCompleted = false 

var play = false
let viewControls = false
var game_is_started = false

/** Función para empezar el juego.*/
function buttonAccept() {
    history.style.display = 'none'
    var level1_Map = document.getElementById('level1')              
    /** Cuando empieza el juego */
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
    window.location.href = 'http://localhost/proyecto/kenia/index.html'
}
/** Función para menú pausa. */
function pausePulsed() {
    viewControls = true
    character.setAttribute('src', '../img/laiaDerechaParada.png')
    imgLeft = 1
    imgRight = 1
    imgStand = 1
    imgUp = 1
    imgCrouch = 1
    play = false
    audioBackground.pause()
    botonAceptar.style.display = 'block'
    divButton.style.display = 'grid'
    divButton.style.backgroundColor = 'transparent'
    level1_Map.style.filter = 'blur(2px)'
    title.innerHTML = 'Pause Mode'
    focusPlayButton.innerHTML = 'Volver al juego'
    exitButton.innerHTML = 'Ir al menu'
    exitButton.setAttribute('onclick', 'back_Menu()')
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
        sesion1 = localStorage.setItem('Tiempo de partida',timerCount)
    }
    window.location.href = 'http://localhost/proyecto/kenia/index.html' 
}
/** Función para salir del juego. */
function exitGame() {
    let landingText = document.getElementById('goingToTheLanding')
    let text = document.getElementById('informativeText')
    if (gameCompleted) {
        let recuperedDates = localStorage.getItem('Tiempo de partida'); 
        window.location.href = '../save.php?nivel=3+&tiempo=' + recuperedDates;
    } else {
        botonAceptar.style.display = 'none'
        divButton.style.display = 'none'
        landingText.style.display = 'block'
        text.innerHTML = 'Cuidado, no te has pasado el juego, si te vas ahora no se guardará la partida.'
        console.log(text.innerHTML);
        // window.location.href = '../action_page.php';
    }

}
function exitSureOption() {
    window.location.href = '../action_page.php';
}
function goBackInSureOption() {
    window.location.href = 'http://localhost/proyecto/kenia/index.html'
}
/** Funcion para mostrar todos los controles para jugar. */
function showControls() {
    if (viewControls) {
        controlsTitle.innerHTML = 'Controles'
        buttonGoMenu.innerHTML = 'Atras'
        buttonGoMenu.setAttribute('onclick', 'buttonAccept()')
        showCtrl.style.zIndex = 500
        containerControls.style.width = '1008px'
        containerControls.style.width = '836px'
        containerControls.style.backgroundColor = '#3836818c'
        containerGoMenu.style.left = '1142px'
        containerGoMenu.style.top = '68px'
    } else {
        buttonGoMenu.innerHTML = 'Menu'
        buttonGoMenu.setAttribute('onclick', 'buttonDeath()')
        level1_Map.style.display = 'none'
        botonAceptar.style.display = 'none'
        divButton.style.display = 'none'
    }
    showCtrl.style.display = 'block'
    buttonGoMenu.style.left = '5px'
    buttonGoMenu.style.top = '-40px'
    viewControls = false
}
/** Función para empezar el juego. */
function startGame() {
    showControls()
    divButton.style.display = 'none'
    controlsTitle.innerHTML = 'Antes de jugar'
    buttonGoMenu.style.display = 'none'
    containerGoMenu.style.display = 'none'
    setTimeout(() => {
        buttonGoMenu.style.display = 'flex'
        containerGoMenu.style.display = null
        buttonGoMenu.innerHTML = 'Siguiente'
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
    laia.setAttribute('src', '../img/laiaDerechaCaminando.gif')
    history.style.display = 'block'
    showCtrl.style.display = 'none'
    laia.style.animation = 'move 3s linear'
    laia.addEventListener('animationend', function() {
        laia.setAttribute('src', '../img/laiaDerechaParada.png')
        mensajeHistoria.style.display = 'block'
        bocata.style.display = 'block'
        mensaje1.style.display = 'block'
        setTimeout(() => {
            console.log('cambio hecho');
            mensaje1.innerHTML = `¡Oh no, hay un gorila enfadado que no nos deja pasar!
            Esta tirando barriles, tenemos que derrotarlo para ir a la central y encender la electricidad.
            <br>
            Deja que te de un consejo, ves con cuidado, salta los barriles y llega hasta el, pero sobretodo, ten mucho cuiado, esos barriles no tienen buena pinta.`
            setTimeout(() => {
                bocata.style.display = 'none'
                mensaje1.style.display = 'none'
                mensajeHistoria.style.display = 'none'
                laia.setAttribute('src', '../img/laiaDerechaCaminando.gif')
                laia.style.animation = 'moveAway 4s linear'
                laia.addEventListener('animationend', function() {
                    laia.style.display = 'none'
                    donkey.style.display = 'block'
                    bocata.style.display = 'none'
                    mensaje1.style.display = 'none'
                    mensajeHistoria.style.display = 'none'
                })
            }, 200);

        }, 200);
    })
    setTimeout(() => {
        donkey.style.animation = 'donkyeAppareance 1s linear'
        donkey.style.transform = 'rotate(0)'   
    }, 4000);
    donkey.addEventListener('animationend', function() {
       donkey.style.animation = 'donkeyMoveAway 4s linear'
       donkey.style.left = '1460px'
       donkey.addEventListener('animationend', function() {
        donkey.style.display = 'none'
        game_is_started = true
        buttonAccept()
    })
    })
    
}
