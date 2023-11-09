// Inizializar el canvas
const BLOCK_SIZE = 36
const PLAYER_WIDTH = 25
const PLAYER_HEIGHT = 20
const PLAYER_VELOCITYJUMP = 12
let character = document.getElementById('character')
let app = document.getElementById('app')
let container = document.getElementById('character-Container')
let enemy = document.getElementById('donkeyKongCharacter')
let enemyContainer = document.getElementById('kongContainer')
let barrel = document.getElementById('barrelIcon')
let barrelContainer = document.getElementById('barrel')
let audioMarioFallin = document.getElementById('audioMarioFallin')
let fileMarioFalling = audioMarioFallin.getAttribute('src');
let audioFall = new Audio(fileMarioFalling);   

let audioMarioDiying = document.getElementById('audioMarioDiying')
let fileMarioDeath = audioMarioDiying.getAttribute('src');
let audioDeath = new Audio(fileMarioDeath);

let audioMarioJumping = document.getElementById('marioJump')
let fileMarioJumping = audioMarioJumping.getAttribute('src')                 
let audioJump = new Audio(fileMarioJumping);

let backgroundTheme = document.getElementById('backgroundTheme')
let fileBackgroundTheme = backgroundTheme.getAttribute('src')                 
let audioBackground = new Audio(fileBackgroundTheme)
// let file
let velocityX = 0
let velocityY = 5
const gravity = 0.5
let keyRightPressed = false
let keyLeftPressed = false
let keyUpPressed = false
let keyDownPressed = false
let chocado = false
let imgLeft = 0
let imgRight = 1
let imgUp = 0
let imgCrouch = 0
let imgStand = 0
let personajeTocandoElSueloFoto = 0
let muerto = false
let muertSalto = false
// Background size y width y animar el fondo.
app.style.width = BLOCK_SIZE * PLAYER_WIDTH + 'px'
app.style.height = (BLOCK_SIZE * PLAYER_HEIGHT) + 'px'
// app.style.backgroundImage = 'url(../img/bk.gif)'
app.style.backgroundColor = 'black'
app.style.backgroundSize = 'cover'
// Create enemy and barrel size.
enemy.style.width = '160px'
enemyContainer.style.left = '65px'
enemyContainer.style.top = '18px'
barrel.style.width = '40px'
barrelContainer.style.left = '0px'
barrelContainer.style.top = '0px'
let barrelPositionX = 295
let barrelPositionY = 50
let barrelVelocityX = 0
let barrelVelocityY = 0
const colisionables = []
const colisionablesFila1 = []
// audioBackground.muted = true
audioBackground.play()
// Mostrar mapeado en pantalla con doble for.

drawMap()

// Variables de la posicion del personaje.
let positionX = 0
let positionY = 500   

function draw () {
    container.style.left = positionX + 'px'
    container.style.top = positionY + 'px'
    barrelContainer.style.left = barrelPositionX + 'px'
    barrelContainer.style.top = barrelPositionY + 'px'
    //app.style.backgroundColor = '#000'
    // audioBackground.play()
}
let barrilChocadoParedDerecha = false
let barrilChocadoParedIzquierda = false
// Loop de update para la gravedad y todo el movimiento.
function update (){
    draw()
    positionY += velocityY
    positionX += velocityX
    barrelPositionX += barrelVelocityX
    barrelPositionY += barrelVelocityY
        /** BARREL CONDITION */
        if (barrelPositionY + container.offsetWidth + barrelVelocityY <= app.offsetHeight) {
            barrelVelocityY += gravity
    } else barrelVelocityY = 0

        if (!barrilChocadoParedDerecha) {
            if (barrelPositionX + barrelContainer.offsetWidth + barrelVelocityX < app.offsetWidth) {
                barrelVelocityX = 3
            } else {barrelVelocityX = 0 ; barrilChocadoParedDerecha = true;}
        } 
        if (barrilChocadoParedDerecha) {
            if (barrelPositionX > 0) {
                    barrelVelocityX = -3
            } else {barrelVelocityX = 0; barrilChocadoParedDerecha = false;}
        } 
    if (!muerto) {
        // Condicional de que si la Y del objeto más su altura y la velocidad de la Y no superan la altura del canvas, tiene efecto la gravedad, de lo contrario significa que ha llegado al límite del canvas o ha tocado el suelo, en ese caso restablece la velocidad a 0 para que deje de caer.
        if (positionY + container.offsetWidth + velocityY <= app.offsetHeight) {
            velocityY += gravity
            // playVideo() {
            //     const media = this.videoplayer.nativeElement;
            //     media.muted = true; // without this line it's not working although I have "muted" in HTML
            //     media.play();
            // }
            // audioBackground.play()
        } else {velocityY = 0;  } 
        // if (barrelVelocityY > 0) {
        //     if (barrelPositionX + barrelContainer.offsetWidth + barrelVelocityX <= app.offsetWidth) {
        //         barrelVelocityX = 5
        //     } else barrelVelocityX = 0 ;  
        // } else if (barrelVelocityY <= 0) {
        //     barrelVelocityX = -5
        // }
            

            // if (barrelPositionX > 0) {
            //     barrilChocadoParedIzquierda = false
            //     if (!barrilChocadoParedIzquierda) {
            //         barrelPositionX = -5
            //     } else barrelVelocityX = 5   
            // } else barrilChocadoParedIzquierda = true; barrilChocadoParedDerecha = false;
        //Condicional para pared derecha y  pared izquierda
        if (keyLeftPressed) {
            if (imgLeft === 1) {
                character.setAttribute('src', 'img/mario_running.gif')
                imgLeft = 0
            }
            imgRight = 1
            imgStand = 1
            imgUp = 1
            imgCrouch = 1

            if (positionX > 0) {
                velocityX = -5
                character.style.transform = 'scaleX(-1)'
            } else velocityX = 0
        } else if (keyRightPressed){
            if (imgRight === 1) {
                character.setAttribute('src', 'img/mario_running.gif')
                imgRight = 0
            }
            imgLeft = 1
            imgStand = 1
            imgUp = 1
            imgCrouch = 1

            if (positionX + container.offsetWidth + velocityX < app.offsetWidth) {
                velocityX = 5
                character.style.transform = 'scaleX(1)'
            } else velocityX = 0
        } else {
            velocityX = 0 
            if (imgCrouch === 1 ) {
                character.setAttribute('src', 'img/mario_stand.png') 
            // character.setAttribute('src', 'img/mario_quieto.gif') 
            }
            imgLeft = 1
            imgRight = 1
            imgStand = 1
            imgUp = 1
            imgCrouch = 1
        }
    
        // Condicional para que solo puedas saltar cuando hayas tocado el suelo
        checkColisionBetweenCharacterHeadAndBlockBottom()
        checkCloisionBetweenCharacterAndFile1() 
    } else {
        if (!muertSalto) {
            if (velocityY <= -5) {
                muertSalto = true
                return
            }
            velocityY -= 5
        }
        velocityY += gravity
    }
    checkBarrelColision()
}
function animate (){
    // setTimeout(animate, 10)
    // if (!muerto) {
        requestAnimationFrame(animate)
        update()
    // }
}
animate()
/** Hacer el keyEvent del keydown y el keyup para que el personaje se mueva solo cuando tiene la tecla presionada*/
addEventListener('keydown', (event) =>{
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
    }
})
addEventListener('keyup', (event) =>{
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
/** Funcion que crea el mapa y los divs, y los mete en las clases y en el array de colisionables */
function drawMap()
{
    // const map  = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 , 2, 2]
// ]
// const map  = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//     [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ]
    const map  = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    // DIBUJAR MAPA
    for (let fila = 0; fila < map.length; fila++) {
        for (let columna = 0; columna < map[fila].length; columna++) {
            if (map[fila][columna] === 1) {
                // Esto hace practicamente lo mismo que en el ejmplo de si es === 1, pero cambiando la imagen.
                const groundBlock = document.createElement('div')

                document.querySelector('.bloques').appendChild(groundBlock)
                groundBlock.classList.add('suelo')
                groundBlock.style.backgroundImage = 'url(../img/block3.png)'
                groundBlock.style.backgroundSize = 'cover'
                groundBlock.style.top = fila * BLOCK_SIZE + 'px'
                groundBlock.style.left = (columna * BLOCK_SIZE) + 'px'
                groundBlock.style.width =  BLOCK_SIZE + 'px'
                groundBlock.style.height = BLOCK_SIZE + 'px'
                groundBlock.style.position = 'absolute'
                colisionables.push(groundBlock)
                
            } else if (map[fila][columna] === 2) {
                const mapBlock1 = document.createElement('div')

                document.querySelector('.fila1').appendChild(mapBlock1)
                //mapBlock1.classList.add('fila1')
                mapBlock1.style.backgroundImage = 'url(../img/bloque.png)'
                mapBlock1.style.backgroundSize = 'cover'
                mapBlock1.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock1.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock1.style.width =  BLOCK_SIZE + 'px'
                mapBlock1.style.height = BLOCK_SIZE + 'px'
                mapBlock1.style.position = 'absolute'
                // mapBlock1.style.transform = 'rotate(-6deg)'
                colisionablesFila1.push(mapBlock1)

            } else if (map[fila][columna] === 3) {
                const mapBlock2 = document.createElement('div')

                document.querySelector('.bloques').appendChild(mapBlock2)
                mapBlock2.classList.add('fila2')
                mapBlock2.style.backgroundImage = 'url(../img/bloque.png)'
                mapBlock2.style.backgroundSize = 'cover'
                mapBlock2.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock2.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock2.style.width =  BLOCK_SIZE + 'px'
                mapBlock2.style.height = BLOCK_SIZE + 'px'
                mapBlock2.style.position = 'absolute'
                colisionables.push(mapBlock2)

            } else if (map[fila][columna] === 4) {
                const mapBlock3 = document.createElement('div')

                document.querySelector('.bloques').appendChild(mapBlock3)
                mapBlock3.classList.add('fila3')
                mapBlock3.style.backgroundImage = 'url(../img/bloque.png)'
                mapBlock3.style.backgroundSize = 'cover'
                mapBlock3.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock3.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock3.style.width =  BLOCK_SIZE + 'px'
                mapBlock3.style.height = BLOCK_SIZE + 'px'
                mapBlock3.style.position = 'absolute'
                colisionables.push(mapBlock3)

            } else if (map[fila][columna] === 5) {
                const mapBlock4 = document.createElement('div')

                document.querySelector('.bloques').appendChild(mapBlock4)
                mapBlock4.classList.add('fila4')
                mapBlock4.style.backgroundImage = 'url(../img/bloque.png)'
                mapBlock4.style.backgroundSize = 'cover'
                mapBlock4.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock4.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock4.style.width =  BLOCK_SIZE + 'px'
                mapBlock4.style.height = BLOCK_SIZE + 'px'
                mapBlock4.style.position = 'absolute'
                colisionables.push(mapBlock4)            
            } else if (map[fila][columna] === 6) {
                const mapBlock5 = document.createElement('div')

                document.querySelector('.bloquesPadre').appendChild(mapBlock5)
                mapBlock5.classList.add('filaPadre')
                // mapBlock5.style.backgroundImage = 'url(../img/block2.png)'
                mapBlock5.style.backgroundColor = 'red'
                mapBlock5.style.backgroundSize = 'cover'
                mapBlock5.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock5.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock5.style.width =  BLOCK_SIZE + 'px'
                mapBlock5.style.height = BLOCK_SIZE + 'px'
                mapBlock5.style.position = 'absolute'
                colisionables.push(mapBlock5)  
            }
        }
    }
}
function checkColisionBetweenCharacterHeadAndBlockBottom()
{
    let index = 0
    while (index < colisionables.length) {
        /** CONDICION PERSONAJE */
        if (
        (positionY + character.offsetHeight) <= (colisionables[index].offsetTop)
        && (positionY + character.offsetHeight + velocityY) >= (colisionables[index].offsetTop)
        && (positionX + container.offsetWidth) >= (colisionables[index].offsetLeft) 
        && (positionX) <= (colisionables[index].offsetLeft + colisionables[index].offsetWidth)  
        ) {
            // Personaje colisionado 
            velocityY = 0
            if (keyUpPressed) {
                    personajeTocandoElSueloFoto = 0 
                    velocityY -= PLAYER_VELOCITYJUMP
                    audioJump.play()
                    if ((positionY + container.offsetHeight) <= app.offsetTop) {
                        velocityY += (PLAYER_VELOCITYJUMP/2)
                    }
                    console.log(PLAYER_VELOCITYJUMP);
                // if (colisionCabezaSueloPlataform) {
                //     velocityY += 12
                // }
                // if (positionY + character.offsetHeight >= colisionables[i].offsetTop + colisionables[i].offsetHeight
                //     && (positionY + character.offsetHeight + velocityY) <= colisionables[i].offsetTop + colisionables[i].offsetHeight) {
                //         console.log('choque');
                //        velocityY += 12
                // }
                // if (positionY + character.offsetHeight >= colisionablefila1[i].offsetTop
                //     && (positionY + character.offsetHeight + velocityY) <= colisionablefila1[i].offsetTop) {
                //     console.log('choque');
                    
                // }
            } 
         
            if (keyDownPressed) {
                if (imgCrouch === 1) {
                    character.setAttribute('src', 'img/mario_crouched_down.png')
                    imgCrouch = 0
                }
                imgLeft = 1
                imgRight = 1
                imgUp = 1
                imgStand = 1
                velocityY = 0
                velocityX = 0
            } 
        }
        // while (indexFila1 < colisionables.length) {
        //     if (positionY + character.offsetHeight > colisionables[indexFila1].offsetTop 
        //         && (positionY + character.offsetHeight + velocityY) < colisionables[indexFila1].offsetTop + colisionables[indexFila1].offsetHeight + (colisionables[indexFila1].offsetWidth)
        //         && (positionX ) >= (colisionables[indexFila1].offsetLeft) 
        //         && (positionX) <= (colisionables[indexFila1].offsetLeft + colisionables[indexFila1].offsetWidth)  
        //     ) {
        //         velocityY += (PLAYER_VELOCITYJUMP/2)
        //         colisionCabezaSueloPlataform = true
        //     }
        //     indexFila1++
        // }
       // checkColisionBetweenCharacterHeadAndBlockBottom(indexFila1, indexFila2)
        index++
    }  
}
function checkBarrelColision() 
{
    let indexBarrel = 0
    while (indexBarrel < colisionables.length) {
        if (
            (barrelPositionY + barrel.offsetHeight) <= (colisionables[indexBarrel].offsetTop)
            && (barrelPositionY + barrel.offsetHeight + barrelVelocityY) >= (colisionables[indexBarrel].offsetTop)
            && (barrelPositionX + barrelContainer.offsetWidth) >= (colisionables[indexBarrel].offsetLeft) 
            && (barrelPositionX) <= (colisionables[indexBarrel].offsetLeft + colisionables[indexBarrel].offsetWidth)  
            ) {
                // Barril colisionado 
                barrelVelocityY = 0
            }
        if (
            (barrelPositionY + barrel.offsetHeight) <= (positionY + character.offsetHeight)
            && (barrelPositionY + barrel.offsetHeight + barrelVelocityY) >= (positionY + character.offsetHeight + velocityY)
            && (barrelPositionX + barrelContainer.offsetWidth) >= (positionX + container.offsetWidth) 
            && (barrelPositionX) <= (positionX + container.offsetWidth)  
            ) {
                // Barril colisionado 
                barrelVelocityY = 0
                // positionY = 500
                // positionX = 0
                character.setAttribute('src', 'img/mario_diyng.png')
                muerto = true
                if (muerto) {

                    audioFall.play()    
                    audioDeath.play()
                    audioBackground.pause()
                    // audioBackground.removeAttribute('autoplay')
                    // audioBackground.removeAttribute('loop')
                    // audioBackground.stop()
                    // audioBackground.paused()
                    return
                }
                imgLeft = 0
                imgRight = 0
                imgStand = 0
                imgUp = 0
                imgCrouch = 0
            }
        indexBarrel++  
    }
}
function checkCloisionBetweenCharacterAndFile1()
{
    let indexFila1 = 0
 while (indexFila1 < colisionablesFila1.length) {
    const POSIY_AND_HEIGHT = positionY + character.offsetHeight
    const POSIY_AND_HEIGHT_AND_VELOCITYY = positionY + character.offsetHeight + velocityY
    const POSIX_AND_WIDTH = positionX + container.offsetWidth
    const COLISION_INDEX_TOP = colisionablesFila1[indexFila1].offsetTop
    const COLISION_INDEX_LEFT = colisionablesFila1[indexFila1].offsetLeft
    const COLISION_INDEX_WIDTH = colisionablesFila1[indexFila1].offsetWidth
    if (
        (POSIY_AND_HEIGHT) <= (COLISION_INDEX_TOP)
        && (POSIY_AND_HEIGHT_AND_VELOCITYY) >= (COLISION_INDEX_TOP)
        && (POSIX_AND_WIDTH) >= (COLISION_INDEX_LEFT) 
        && (positionX) <= (COLISION_INDEX_LEFT + COLISION_INDEX_WIDTH )  
        ) {
            velocityY = 0
        }
        indexFila1++
    }
}
