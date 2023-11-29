var botonAceptar = document.getElementById('buttonAceptar')
var divButton = document.getElementById('buttonContinue')
let focusPlayButton = document.getElementById('playButton')
let exitButton = document.getElementById('credits/exit')
// let backgroundTheme = document.getElementById('backgroundTheme')
// let fileBackgroundTheme = backgroundTheme.getAttribute('src')   
// var audioBackground = new Audio(fileBackgroundTheme)
function buttonAccept() {
    var level1_Map = document.getElementById('level1')              
    /** Cuando empieza el juego */
    level1_Map.style.display= 'block'
    pause = false
    audioBackground.play()
    // body.style.backgroundImage = 'url(../img/image.jpg)'
    botonAceptar.style.display = 'none'
    divButton.style.display = 'none'
    level1_Map.style.filter = 'blur(0px)'
}   
function buttonDeath() {
    window.location.href = '../kenia/index.html'
}
function pausePulsed() {
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
    exitButton.innerHTML = 'Salir del juego'
    exitButton.setAttribute('onclick', 'buttonDeath()')
    pause = true
}
