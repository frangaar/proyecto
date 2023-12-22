let body = document.getElementById('body')
/** Atributos del personaje, del enemigo, barriles, ... */
const BLOCK_SIZE = 36
const PLAYER_WIDTH = 47
const PLAYER_HEIGHT = 26
const PLAYER_VELOCITYJUMP = 8.3
const barrelCreatedTiming = 3000
let enemyVelocity = 2.9
let player_velocity = 3.2
let timerInterval
let timerBarrel
let timerEnemy
let final_del_mapa
let final_nivel_1
let final_nivel_2   
let colisionado = false
let index_counting_barrels = 0
var timerCount = 1

// Power Ups
let pu = document.getElementById('powerUp')
let puContainer = document.getElementById('powerUps')
let active_powerup = false
let pauseBlock = false

/** Inizializar los botones del menu y el div*/
let button_Death = document.getElementById('buttonAceptar_Death')
let menu_death = document.getElementById('deathMenu')
let title = document.getElementById('title')
let character = document.getElementById('character')
var level1_Map = document.getElementById('level1')
let container = document.getElementById('character-Container')
let enemy = document.getElementById('donkeyKongCharacter')
let enemyContainer = document.getElementById('kongContainer')


/** Caracteristicas del personaje, modo pausa y niveles */
var pause = true
let velocityX = 0
let velocityY = 5
const gravity = 0.5
let keyRightPressed = false
let keyLeftPressed = false
let keyUpPressed = false
let keyDownPressed = false
let dontTouchTheCOLLIDABLEWithTheHeadRight = false
let imgLeft = 0
let imgRight = 1
let imgUp = 0
let imgCrouch = 0
let imgStand = 0
let characterTouchGround = 0
let character_is_dead = false
let characterDeathJump = false
let level_1_finished = false
let level_2_finished = false
let bossAnimation1 = false
let bossAnimation2 = false

/** Background size y width y animar el fondo. */
level1_Map.style.width = BLOCK_SIZE * PLAYER_WIDTH + 'px'
level1_Map.style.height = (BLOCK_SIZE * PLAYER_HEIGHT) + 'px'

/** Create enemy and barrel size. */
enemy.style.width = '160px'
enemyContainer.style.left = '65px'
enemyContainer.style.bottom = '755px'
const COLLIDABLE = []
const COLLIDABLE_ROWS = []
const COLLIDABLE_FINAL_LEVEL1 = []
const ARRAY_BARRELS = []
let enemyPositionX = 65
let imgCharacterRight
let imgCharacterStand
/** Mostrar mapeado en pantalla con doble for. */
drawMap()

/** Variables de la posicion del personaje y barril. */
let positionX = 0
let positionY = 762 
let barrelPositionX = 295
let barrelPositionY = 50
let barrelColisionRight = false
let barrelColisionLeft = false

let barrelVelocityX = 10
let barrelVelocityY = 0
let numberOfBarrels = 0

/** Creación de objetos. */
let b1 = new Barrel()
let f1 = new ColisionablesObjects()
const elementosFila2 = document.querySelectorAll('.fila2');

/** Función tiempo. */
function timer () {
    if (play && !gameCompleted) {
        timerCount++
    }
}
/** Tiempo */
function startTimerIntervalFunc() {
    timerInterval = setInterval(() => {
        timer()
    }, 1000);
}
startTimerIntervalFunc()

/** Función dibujar las posiciones de los personajes y barriles. */
function draw () 
{
    container.style.left = positionX + 'px'
    container.style.top = positionY + 'px'
    if (bossAnimation1) {
        enemyContainer.style.left = enemyPositionX + 'px'
    }
    if (ARRAY_BARRELS[numberOfBarrels] != null) {
        for (let index = 0; index < numberOfBarrels; index++) {
            ARRAY_BARRELS[index].container.style.left = ARRAY_BARRELS[index].x + 'px'
            ARRAY_BARRELS[index].container.style.top = ARRAY_BARRELS[index].y + 'px'
        }
    }
}
/** Loop de update para la gravedad y todo el movimiento. */
function update ()
{
    draw()
    if (!pause && !bossAnimation1) {
        positionY += velocityY
        positionX += velocityX
        if (ARRAY_BARRELS[numberOfBarrels]!= null) {
            for (let index = 0; index < numberOfBarrels; index++) {
                ARRAY_BARRELS[index].y += ARRAY_BARRELS[index].vY
                ARRAY_BARRELS[index].x += ARRAY_BARRELS[index].vX
            }    
        }    
        if (ARRAY_BARRELS[numberOfBarrels] != null) {
            for (let index = 0; index <= numberOfBarrels; index++) {
                if (ARRAY_BARRELS[index].y + ARRAY_BARRELS[index].container.offsetWidth + ARRAY_BARRELS[index].vY <= level1_Map.offsetHeight) {
                    ARRAY_BARRELS[index].vY += gravity
                } else ARRAY_BARRELS[index].vY = 0

                if (!ARRAY_BARRELS[index].barrelColisionRight) {
                    if (ARRAY_BARRELS[index].x + ARRAY_BARRELS[index].container.offsetWidth + ARRAY_BARRELS[index].vX < level1_Map.offsetWidth) {
                        ARRAY_BARRELS[index].vX = barrel_velocity
                    } else {ARRAY_BARRELS[index].vX = 0 ; ARRAY_BARRELS[index].barrelColisionRight = true;}  
                } else if (ARRAY_BARRELS[index].barrelColisionRight) {
                    if (ARRAY_BARRELS[index].x > 0) {
                        ARRAY_BARRELS[index].vX = - (barrel_velocity)
                    } else {ARRAY_BARRELS[index].vX = 0; ARRAY_BARRELS[index].barrelColisionRight = false}
                }
            }
        }
        if (!character_is_dead && !colisionado) {
            // Condicional de que si la Y del objeto más su altura y la velocidad de la Y no superan la altura del canvas, tiene efecto la gravedad, de lo contrario significa que ha llegado al límite del canvas o ha tocado el suelo, en ese caso restablece la velocidad a 0 para que deje de caer.
            if (positionY + container.offsetWidth + velocityY <= level1_Map.offsetHeight) {
                velocityY += gravity
            } else {velocityY = 0;  }
            //Condicional para pared derecha y  pared izquierda
            if (keyLeftPressed) {
                if (imgLeft === 1) {
                    character.src = imgCharacterWalking
                    imgLeft = 0
                }
                imgRight = 1
                imgStand = 1
                imgUp = 1
                imgCrouch = 1
                if (positionX > 0 ) {
                    velocityX = - (player_velocity)
                    character.style.transform = 'scaleX(-1)'
                    dontTouchTheCOLLIDABLEWithTheHeadRight = false
                } else {velocityX = 0; }
            } else if (keyRightPressed){
                if (imgRight === 1) {
                    character.src = imgCharacterWalking
                    imgRight = 0
                }
                imgLeft = 1
                imgStand = 1
                imgUp = 1
                imgCrouch = 1
                if (positionX + container.offsetWidth + velocityX < level1_Map.offsetWidth) {
                    velocityX = player_velocity
                    character.style.transform = 'scaleX(1)'
                } else {velocityX = 0; dontTouchTheCOLLIDABLEWithTheHeadRight = true}
            } else {
                velocityX = 0
                if (imgCrouch === 1 ) {
                    character.src = imgCharacter
                }
                imgLeft = 1
                imgRight = 1
                imgStand = 1
                imgUp = 1
                imgCrouch = 1
            }
       
            // Condicional para que solo puedas saltar cuando hayas tocado el suelo
            checkColisionBetweenCharacterHeadAndBlockBottom()
            // if (!level_1_finished) {
            finishLevel1()
            // } 
            // checkCloisionBetweenCharacterAndFile1()
        } else {
            displayDeathMenu()
        }
        checkBarrelColision()
    } 
    // bossAnimation1
    // level_1_finished
    if (bossAnimation1) {
        level1_FinishedAnimation()
    }
}

/** Función principal del juego. */
function animate ()
{
    requestAnimationFrame(animate)
    update()
}
animate()

/** Crear barriles cada 3 segundos. */
function startInterval() {
    timerBarrel = window.setInterval(function()
    {
        if (!pause) {
            if (index_counting_barrels <= num_of_barrels) {
                    let barrilContainer = document.createElement('div');
                    if (level_1_finished) {
                        document.querySelector('.barrileslvl2').appendChild(barrilContainer)

                    } else document.querySelector('.barriles').appendChild(barrilContainer)

                    let nombreClasse = generarNombreConNumero('barril', index_counting_barrels)
                    barrilContainer.classList.add(nombreClasse);
                    barrilContainer.classList.add('barrilesHeight');
                    barrilContainer.style.position = 'absolute'
                    let barrilIcono = document.createElement('img');
                    barrilContainer.appendChild(barrilIcono);  
                    barrilIcono.classList.add('barrilLanzadoIcono');
                    barrilIcono.src = '../kenia/img/barrel.gif'
                    barrilIcono.style.width = '40px'
                    barrilContainer.style.left = '0px'
                    barrilContainer.style.top = '0px'

                    numberOfBarrels = index_counting_barrels
                    ARRAY_BARRELS.push(new Barrel(0, 0, 0, 0, barrilContainer, barrilIcono, barrelColisionRight, 4))
                }
            index_counting_barrels++
        }
    },barrelCreatedTiming);
}
if (!level_1_finished) {
    startInterval()
}

/** Funcion para generar un nombre de la clase del barril con un prefijo numérico. */
function generarNombreConNumero(prefijo, numero)
{
    return `${prefijo}${numero}`;
}

/** Hacer el keyEvent del keydown y el keyup para que el personaje se mueva solo cuando tiene la tecla presionada.*/
addEventListener('keydown', (event) => 
{
    switch (event.key) {
        case 'ArrowUp':
            keyUpPressed = true
            break
        case 'ArrowDown':
            keyDownPressed = true
            break
        case 'ArrowRight':
            keyRightPressed = true
            break
        case 'ArrowLeft':
            keyLeftPressed = true
            break
        case 'Escape':
            if (!pause && !character_is_dead && !pauseBlock) {
               pausePulsed()
            } else if (game_is_started) {
                buttonAccept()
                play = true 
            } 
            break
    }
   
})
addEventListener('keyup', (event) =>
{
    switch (event.key) {
        case 'ArrowUp':
            keyUpPressed = false
            break
        case 'ArrowDown':
            keyDownPressed = false
            break
        case 'ArrowRight':
            keyRightPressed = false
            break
        case 'ArrowLeft':
            keyLeftPressed = false
            break
    }
})

/** Funcion que crea el mapa y los divs, y los mete en las clases y en el array de colisionables. */
function drawMap()
{
    let map
    if (!level_1_finished) {
        map = showMap1()
    } else {
        map = showMap2() 
        COLLIDABLE_FINAL_LEVEL1.splice(0, COLLIDABLE_FINAL_LEVEL1.length)
        audioBackground.currentTime = 0
        audioBackground.play()
        puContainer.style.display = 'block'
        puContainer.style.left = '951px'
        puContainer.style.top = '381px'
        startInterval()
    }

    // DIBUJAR MAPA.
    for (let fila = 0; fila < map.length; fila++) {
        for (let columna = 0; columna < map[fila].length; columna++) {

            if (map[fila][columna] === 1) {
                // Esto hace practicamente lo mismo que en el ejmplo de si es === 1, pero cambiando la imagen.
                const groundBlock = document.createElement('div')

                document.querySelector('.bloques').appendChild(groundBlock)
                groundBlock.classList.add('suelo')
                groundBlock.style.backgroundImage = 'url(../kenia/img/block3.png)'
                groundBlock.style.backgroundSize = 'cover'
                groundBlock.style.top = fila * BLOCK_SIZE + 'px'
                groundBlock.style.left = (columna * BLOCK_SIZE) + 'px'
                groundBlock.style.width =  BLOCK_SIZE + 'px'
                groundBlock.style.height = BLOCK_SIZE + 'px'
                groundBlock.style.position = 'absolute'
                COLLIDABLE.push(groundBlock)
               
            } else if (map[fila][columna] === 2) {
                const mapBlock2 = document.createElement('div');

                if (level_1_finished) {
                    document.querySelector('.filasNivel2').appendChild(mapBlock2);
                    document.querySelector('.fila1').style.display = 'none';
                } else {
                    document.querySelector('.fila1').appendChild(mapBlock2);
                }
    
                mapBlock2.style.backgroundImage = 'url(../kenia/img/wood_plataform.png)';
                mapBlock2.style.backgroundSize = 'cover';
                mapBlock2.style.top = fila * BLOCK_SIZE + 'px';
                mapBlock2.style.left = (columna * BLOCK_SIZE) + 'px';
                mapBlock2.style.width = 38 + 'px';
                mapBlock2.style.height = 34 + 'px';
                mapBlock2.style.position = 'absolute';
                COLLIDABLE.push(mapBlock2);
                } else if (map[fila][columna] === 3) {
                const mapBlock3 = document.createElement('div')

                document.querySelector('.fila2').appendChild(mapBlock3)
                mapBlock3.style.backgroundImage = 'url(../kenia/img/wood_plataform.png)'
                mapBlock3.style.backgroundSize = 'cover'
                mapBlock3.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock3.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock3.style.width =  38 + 'px'
                mapBlock3.style.height = 34 + 'px'
                mapBlock3.style.position = 'absolute'
                COLLIDABLE_FINAL_LEVEL1.push(mapBlock3)
                COLLIDABLE.push(mapBlock3)

            } 
             else if (map[fila][columna] === 9) {
                const mapBlock9 = document.createElement('div')

                document.querySelector('.bloquesPadre').appendChild(mapBlock9)
                mapBlock9.classList.add('filaPadre')
                mapBlock9.style.backgroundImage = 'url(../kenia/img/block3.png)'
                mapBlock9.style.backgroundSize = 'cover'
                mapBlock9.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock9.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock9.style.width =  BLOCK_SIZE + 'px'
                mapBlock9.style.height = BLOCK_SIZE + 'px'
                mapBlock9.style.position = 'absolute'
                final_del_mapa = mapBlock9
            }

        }
    }
}

/** Función de la comprovación de que el nivel 1 se complete o no, y animación del mismo. */
function finishLevel1()
{
    let index = 0
    while (index < COLLIDABLE_FINAL_LEVEL1.length) {
        if ((positionY) <= (COLLIDABLE_FINAL_LEVEL1[index].offsetTop)
        && (positionX + container.offsetWidth + velocityX) >= (COLLIDABLE_FINAL_LEVEL1[index].offsetLeft)
        && (positionX) <= (COLLIDABLE_FINAL_LEVEL1[index].offsetLeft + COLLIDABLE_FINAL_LEVEL1[index].offsetWidth)  
            ){
                bossAnimation1 = true

            }
        index++
    }
}
function level1_FinishedAnimation()
{
    if (positionY + container.offsetWidth + velocityY <= level1_Map.offsetHeight) {
        velocityY += gravity
    } else {velocityY = 0;  }
    audioEnemy.play()
    audioBackground.pause()
    character.src = imgCharacter
    imgLeft = 1
    imgRight = 1
    imgStand = 1
    imgUp = 1
    imgCrouch = 1
    starTimeoutEnemy()
}

/** Función de encender timeout para el enemigo. */
function starTimeoutEnemy() {
        if (enemyPositionX > 0) {
            enemyPositionX -=  enemyVelocity
        } else {
            enemyPositionX = 0
            enemyContainer.style.display = 'none'
            if (!level_1_finished) {
                level_1_finished = true
            } else level_2_finished = true
            if (level_1_finished && !level_2_finished) {
                transitionlvl1_to_lvl2()
            } else recollectedObjectes()
            bossAnimation1 = false
            // bossAnimation1 = true
        } 
    // }, 2000);
}
function displayDeathMenu()
{

    audioBackground.pause()
    if (!characterDeathJump) {
        if (velocityY <= - (player_velocity)) {
            characterDeathJump = true
            return
        }
        velocityY -= player_velocity
    }
    if (container.offsetTop <= 1000) {
        velocityY += gravity
    }
    buttonDeath()
}
/** Función que contiene una condicion del personaje colisionando con diferentes objetos, como el barril, las filas del mapa, y las condiciones de salto y agacharse, junto con la condición de muerte. */
function checkColisionBetweenCharacterHeadAndBlockBottom()
{
    let index = 0
    const PY_CONTAINER_HEIGHT = positionY + character.offsetHeight
    const PY_CONTAINER_HEIGHT_VELOCITY = positionY + character.offsetHeight + velocityY
    const PX_CONTAINER_WIDTH = positionX + container.offsetWidth
    const PX = positionX
    const PY = positionY
    
    while (index < COLLIDABLE.length) {
       
        if (
        (PY_CONTAINER_HEIGHT) <= (COLLIDABLE[index].offsetTop)
        && (PY_CONTAINER_HEIGHT_VELOCITY) >= (COLLIDABLE[index].offsetTop)
        && (PX_CONTAINER_WIDTH) >= (COLLIDABLE[index].offsetLeft)
        && (PX) <= (COLLIDABLE[index].offsetLeft + COLLIDABLE[index].offsetWidth)  
        ) {
        // Personaje colisionado
        velocityY = 0
        if (keyUpPressed) {
                characterTouchGround = 0
                velocityY = - PLAYER_VELOCITYJUMP
                if (isMario) {
                    audioWoho.play()
                    audioJump.play()
                    if (imgUp === 1 ) {
                        character.src = imgJump
                    }
                    setTimeout(() => {
                        imgLeft = 1
                        imgRight = 1
                        imgStand = 1
                        imgUp = 0
                        imgCrouch = 1
                    }, 540);  
                }
            }
        }

        // Colision del personaje con un barril
        if (!active_powerup) {
            for (let index2 = 0; index2 <= numberOfBarrels; index2++) {
                if (ARRAY_BARRELS[numberOfBarrels] != null) {
                    if (
                        (PY_CONTAINER_HEIGHT) >= (ARRAY_BARRELS[index2].y) &&
                        (PY) <= (ARRAY_BARRELS[index2].y + ARRAY_BARRELS[index2].container.offsetHeight) &&
                        (PX_CONTAINER_WIDTH) >= (ARRAY_BARRELS[index2].x) &&
                        (PX) <= (ARRAY_BARRELS[index2].x + ARRAY_BARRELS[index2].container.offsetWidth)
                    ) {
                        // Barril colisionado
                        ARRAY_BARRELS[index2].vY = 0
                        if (player_life > 0) {
                            player_life -= 1
                            colisionEfect_betweenCharacter_and_barrel()
                            velocityY -= 5
                            ARRAY_BARRELS[index2].x = 0
                            ARRAY_BARRELS[index2].y = 0
                            ARRAY_BARRELS[index2].barrelColisionRight = false
                            if (twoLifes) 
                            {
                                heart1.style.animation = 'shake 0.5s linear'
                                heart1.addEventListener('animationend', function() {
                                    heart1.src = '../kenia/img/heart_empty.png'
                                })
                            } else 
                            {
                                heart2.style.animation = 'shake 0.5s linear'
                                heart2.addEventListener('animationend', function() {
                                    heart2.src = '../kenia/img/heart_empty.png'
                                })
                            }
                            twoLifes = false
                        }
                        if (player_life <= 0) {
                            character_is_dead = true
                            if (isMario) {
                                character.src = '../kenia/img/char_death.png'
                            } else character.src = imgCharacter
                        }
                        if (character_is_dead) {
                            if (isMario) {
                                audioDie.play()
                            }
                            audioFall.play()
                            audioBackground.pause()  
                        }
                    }             
                } 
            }     
        } 
        // Colision con un PowerUp
        if (
            (PY_CONTAINER_HEIGHT) >= (puContainer.offsetTop) &&
            (PY) <= (puContainer.offsetTop + puContainer.offsetHeight) &&
            (PX_CONTAINER_WIDTH) >= (puContainer.offsetLeft) &&
            (PX) <= (puContainer.offsetLeft + puContainer.offsetWidth)
        )
        {
            active_powerup = true
            puContainer.style.display = 'none'
            animationPowerUp()
        }
     /** Condicion de cuando toque el último suelo, para que se pase el nivel */  
        index++       
    } 
}
function checkBarrelColision()
{
    let indexBarrel = 0
    if (ARRAY_BARRELS[numberOfBarrels] != null) {
        while (indexBarrel < COLLIDABLE.length) {
            for (let index = 0; index <= numberOfBarrels; index++) {
                if (    
                    (ARRAY_BARRELS[index].y + ARRAY_BARRELS[index].container.offsetHeight) <= (COLLIDABLE[indexBarrel].offsetTop)
                    && (ARRAY_BARRELS[index].y + ARRAY_BARRELS[index].container.offsetHeight + ARRAY_BARRELS[index].vY) >= (COLLIDABLE[indexBarrel].offsetTop)
                    && (ARRAY_BARRELS[index].x + ARRAY_BARRELS[index].container.offsetWidth) >= (COLLIDABLE[indexBarrel].offsetLeft)
                    && (ARRAY_BARRELS[index].x) <= (COLLIDABLE[indexBarrel].offsetLeft + COLLIDABLE[indexBarrel].offsetWidth)
                    ) {
                        // Barril colisionado
                        ARRAY_BARRELS[index].vY = 0
                    }
                /** Condicion de cuando toque el último suelo, para que vuelva al principio */
                if ((ARRAY_BARRELS[index].y + ARRAY_BARRELS[index].container.offsetHeight) <= (final_del_mapa.offsetTop)
                && (ARRAY_BARRELS[index].y + ARRAY_BARRELS[index].container.offsetHeight + ARRAY_BARRELS[index].vY) >= (final_del_mapa.offsetTop)
                && (ARRAY_BARRELS[index].x + ARRAY_BARRELS[index].container.offsetWidth) >= (final_del_mapa.offsetLeft)
                && (ARRAY_BARRELS[index].x) <= (final_del_mapa.offsetLeft + final_del_mapa.offsetWidth)  
                    ){
                        ARRAY_BARRELS[index].x = 0
                        ARRAY_BARRELS[index].y = 0
                       
                    }
            }
            indexBarrel++  
        }
    }
}
function colisionEfect_betweenCharacter_and_barrel()
{
    if (velocityY <= -5) {
        colisionado = true
        character.setAttribute('src', '..kenia/img/mario_diyng.png')
        imgLeft = 0
        imgRight = 0
        imgStand = 0
        imgUp = 0
        imgCrouch = 0
        return
    }
}
function showMap1() {
    return [
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
    ]
}
function showMap2() {
    return [
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
    ]
}
function animationPowerUp() {
    player_velocity = 2.1
    audioBackground.pause()
    puAudio.play()
    pauseBlock = true
    container.style.animation = 'blink-animation 0.8s steps(5, start) infinite'
    timeoutP7 = setTimeout(() => { 
        container.style.animation = 'blink-animation 0.2s steps(5, start) infinite'
       timeoutP3 = setTimeout(() => {
            player_velocity = 2.9
            container.style.animation = 'none'
            active_powerup = false
            pauseBlock = false
            audioBackground.play()
            clearTimeout(timeoutP7)
            clearTimeout(timeoutP3)  
        }, 3000);
    }, 7000);  
}