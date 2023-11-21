var botonAceptar = document.getElementById('buttonAceptar')
var divButton = document.getElementById('buttonContinue')
// let backgroundTheme = document.getElementById('backgroundTheme')
// let fileBackgroundTheme = backgroundTheme.getAttribute('src')   
// var audioBackground = new Audio(fileBackgroundTheme)
function buttonAccept() {
    var level1_Map = document.getElementById('level1')              
    /** Cuando empieza el juego */
    level1_Map.style.display= 'block'
    pause = false
    audioBackground.play()
    // body.style.backgroundImage = 'url(../img/fondo.jpg)'
    botonAceptar.style.display = 'none'
    divButton.style.display = 'none'
    level1_Map.style.filter = 'blur(0px)'
}   
function buttonDeath() {
    window.location.href = '../index.html'
}

