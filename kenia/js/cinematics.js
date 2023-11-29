var botonAceptar = document.getElementById('buttonAceptar')
var divButton = document.getElementById('buttonContinue')
let focusPlayButton = document.getElementById('playButton')
let exitButton = document.getElementById('credits/exit')
let exit = document.getElementById('exit')
let controlsButton = document.getElementById('controls')
let showCtrl = document.getElementById('showControls')
let buttonGoMenu = document.getElementById('buttonGoMenu')
let controlsTitle = document.getElementById('controlsTitle')
let containerControls = document.getElementById('containerControls')
var play = false
let viewControls = false
/** Función para empezar el juego.*/
function buttonAccept() {
    var level1_Map = document.getElementById('level1')              
    /** Cuando empieza el juego */
    level1_Map.style.display= 'block'
    showCtrl.style.display = 'none'
    pause = false
    audioBackground.play()
    // body.style.backgroundImage = 'url(../img/image.jpg)'
    botonAceptar.style.display = 'none'
    divButton.style.display = 'none'
    level1_Map.style.filter = 'blur(0px)'
    play = true
    // viewControls = false
} 
/** Funcion menú para cuando muera el jugador. */  
function buttonDeath() {
    window.location.href = '../kenia/index.html'
}
/** Función para menú pausa. */
function pausePulsed() {
    viewControls = true
    character.setAttribute('src', '../img/laiaDerechaParada.png')
    // character.setAttribute('src', '../kenia/img/char_stand.png')
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
    // exit.style.display = 'none'
    exitButton.setAttribute('onclick', 'buttonDeath()')
    pause = true
}
/** Función para salir del juego. */
function exitGame() {
    window.location.href = '../save.php?nivel=3+&tiempo=' + timerCount;
    console.log(timerCount);
}
/** Funcion para mostrar todos los controles para jugar. */
function showControls() {
    // viewControls = true
    if (viewControls) {
        controlsTitle.innerHTML = 'Controles'
        buttonGoMenu.innerHTML = 'Atras'
        buttonGoMenu.setAttribute('onclick', 'buttonAccept()')
        showCtrl.style.zIndex = 500
        containerControls.style.width = '1008px'
        containerControls.style.width = '836px'
        containerControls.style.backgroundColor = 'rgba(255, 255, 255, 0.525)'
        // showCtrl.style.width = '1000px'
    } else {
        buttonGoMenu.innerHTML = 'Menu'
        buttonGoMenu.setAttribute('onclick', 'buttonDeath()')
        level1_Map.style.display = 'none'
        botonAceptar.display = 'none'
        botonAceptar.style.display = 'none'
        divButton.style.display = 'none'
    }
    showCtrl.style.display = 'block'
    buttonGoMenu.style.left = '25px'
    buttonGoMenu.style.top = '-40px'
    viewControls = false
}
