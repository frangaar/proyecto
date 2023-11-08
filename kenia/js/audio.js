// function audio() {
    var audioMarioFallin = document.getElementById('audioMarioFallin')
    var fileMarioFalling = audioMarioFallin.getAttribute('src');
    var audioFall = new Audio(fileMarioFalling);   
    
    // var audioMarioDiying = document.getElementById('audioMarioDiying')
    // var fileMarioDeath = audioMarioDiying.getAttribute('src');
    // export const audioDeath = new Audio(fileMarioDeath);
    
    var audioMarioJumping = document.getElementById('marioJump')
    var fileMarioJumping = audioMarioJumping.getAttribute('src')                 
    var audioJump = new Audio(fileMarioJumping);
    
    var audioMarioJumHo_Ho = document.getElementById('marioJumpSound')
    var fileMarioJumping2 = audioMarioJumHo_Ho.getAttribute('src')                 
    var jumpSound = new Audio(fileMarioJumping2)
    
    var backgroundTheme = document.getElementById('backgroundTheme')
    var fileBackgroundTheme = backgroundTheme.getAttribute('src')                 
    var audioBackground = new Audio(fileBackgroundTheme)
// }
