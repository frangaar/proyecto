var botonAceptar = document.getElementById('buttonAceptar')
var divButton = document.getElementById('buttonContinue')
// let backgroundTheme = document.getElementById('backgroundTheme')
// let fileBackgroundTheme = backgroundTheme.getAttribute('src')   
// var audioBackground = new Audio(fileBackgroundTheme)
function buttonAccept() {
    var app = document.getElementById('app')              
    /** Cuando empieza el juego */
    app.style.display= 'block'
    pause = false
    audioBackground.play()
    botonAceptar.style.display = 'none'
    divButton.style.display = 'none'
    app.style.filter = 'blur(0px)'
}   
function buttonDeath() {
    window.location.href = '../index.html'
}