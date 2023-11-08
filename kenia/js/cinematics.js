function buttonAccept() {
    let botonAceptar = document.getElementById('buttonAceptar')
    let divButton = document.getElementById('buttonContinue')
    let app = document.getElementById('app')
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
