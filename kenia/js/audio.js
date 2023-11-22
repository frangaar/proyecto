    var audioMarioFallin = document.getElementById('audioMarioFallin')
    var fileMarioFalling = audioMarioFallin.getAttribute('src');
    var audioFall = new Audio(fileMarioFalling);   

    var audioMarioJumping = document.getElementById('marioJump')
    var fileMarioJumping = audioMarioJumping.getAttribute('src')                 
    var audioJump = new Audio(fileMarioJumping);
    
    var audioMarioJumHo_Ho = document.getElementById('marioJumpSound')
    var fileMarioJumping2 = audioMarioJumHo_Ho.getAttribute('src')                 
    var jumpSound = new Audio(fileMarioJumping2)

    var soundEnemyScream = document.getElementById('enemySound')
    var fileAudioEnemy = soundEnemyScream.getAttribute('src')                 
    var audioEnemy = new Audio(fileAudioEnemy)
    
    var backgroundTheme = document.getElementById('backgroundTheme')
    var fileBackgroundTheme = backgroundTheme.getAttribute('src')                 
    var audioBackground = new Audio(fileBackgroundTheme)
