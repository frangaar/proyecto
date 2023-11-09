var botonAceptar = document.getElementById('buttonAceptar')
var divButton = document.getElementById('buttonContinue')
function buttonAccept() {
    var app = document.getElementById('app')
    let backgroundTheme = document.getElementById('backgroundTheme')
    let fileBackgroundTheme = backgroundTheme.getAttribute('src')                 
    let audioBackground = new Audio(fileBackgroundTheme)
    /** Cuando empieza el juego */
    app.style.display= 'block'
    audioBackground.play()
    botonAceptar.style.display = 'none'
    divButton.style.display = 'none'
    pause = false
    app.style.filter = 'blur(0px)'
}   
function buttonDeath() {
    window.location.href = '../index.html'
}