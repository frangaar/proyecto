    var audioMarioFallin = document.getElementById('audioMarioFallin')
    var fileMarioFalling = audioMarioFallin.getAttribute('src');
    var audioFall = new Audio(fileMarioFalling);   

    var audioMarioDiying = document.getElementById('audioMarioDiying')
    var fileMarioDiying = audioMarioDiying.getAttribute('src');
    var audioDie = new Audio(fileMarioDiying);  

    var marioWoho = document.getElementById('marioWoho')
    var fileMarioWoho = marioWoho.getAttribute('src');
    var audioWoho = new Audio(fileMarioWoho);  

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

    var select = document.getElementById('selectAudio')
    var fileAudioSelect = select.getAttribute('src')
    var audioSelect = new Audio(fileAudioSelect)
    
    var active = document.getElementById('activeAudio')
    var fileAudioActive = active.getAttribute('src')
    var audioActive = new Audio(fileAudioActive)

    var puA = document.getElementById('powerupAudio')
    var filePu = puA.getAttribute('src')
    var puAudio = new Audio(filePu)