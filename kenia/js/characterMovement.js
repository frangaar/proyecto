// Inizializar el canvas
// width="170px" style="margin-top: 10px; margin-left: 65px;"
const BLOCK_SIZE = 36
const PLAYER_WIDTH = 25
const PLAYER_HEIGHT = 20
const PLAYER_VELOCITYJUMP = 10
let character = document.getElementById('character')
let app = document.getElementById('app')
let container = document.getElementById('character-Container')
let enemy = document.getElementById('donkeyKongCharacter')
let enemyContainer = document.getElementById('kongContainer')
let barrel = document.getElementById('barrelIcon')
let barrelContainer = document.getElementById('barrel')
let velocityX = 0
let velocityY = 5
const gravity = 0.5
let keyRightPressed = false
let keyLeftPressed = false
let keyUpPressed = false
let keyDownPressed = false
// let colisionTop = false
// let colisionBt = false
// let colisionLf = false
// let colisionRt= false
let chocado = false
//let change = 0
let imgLeft = 0
let imgRight = 1
let imgUp = 0
let imgCrouch = 0
let imgStand = 0
let personajeTocandoElSueloFoto = 0
// Background size y width y animar el fondo.
app.style.width = BLOCK_SIZE * PLAYER_WIDTH + 'px'
app.style.height = (BLOCK_SIZE * PLAYER_HEIGHT) + 'px'
app.style.backgroundImage = 'url(../img/bk.gif)'
app.style.backgroundSize = 'cover'
// Create enemy and barrel size
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
// let div = document.createElement('div')
const colisionables = []

// Hacer el mapa
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
const map  = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
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

// Mostrar mapeado en pantalla con doble for
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
            mapBlock1.style.backgroundImage = 'url(../img/block2.png)'
            mapBlock1.style.backgroundSize = 'cover'
            mapBlock1.style.top = fila * BLOCK_SIZE + 'px'
            mapBlock1.style.left = (columna * BLOCK_SIZE) + 'px'
            mapBlock1.style.width =  BLOCK_SIZE + 'px'
            mapBlock1.style.height = BLOCK_SIZE + 'px'
            mapBlock1.style.position = 'absolute'
            colisionables.push(mapBlock1)

        } else if (map[fila][columna] === 3) {
            const mapBlock2 = document.createElement('div')

            document.querySelector('.bloques').appendChild(mapBlock2)
            mapBlock2.classList.add('fila2')
            mapBlock2.style.backgroundImage = 'url(../img/block2.png)'
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
            mapBlock3.style.backgroundImage = 'url(../img/block2.png)'
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
            mapBlock4.style.backgroundImage = 'url(../img/block2.png)'
            mapBlock4.style.backgroundSize = 'cover'
            mapBlock4.style.top = fila * BLOCK_SIZE + 'px'
            mapBlock4.style.left = (columna * BLOCK_SIZE) + 'px'
            mapBlock4.style.width =  BLOCK_SIZE + 'px'
            mapBlock4.style.height = BLOCK_SIZE + 'px'
            mapBlock4.style.position = 'absolute'
            colisionables.push(mapBlock4)            
        }
     }
}
// Meter valores colisionables en el array de colisiones

let positionX = 0
let positionY = 500   
// Loop de update para la gravedad
function draw () {
    container.style.left = positionX + 'px'
    container.style.top = positionY + 'px'
    barrelContainer.style.left = barrelPositionX + 'px'
    barrelContainer.style.top = barrelPositionY + 'px'
    //app.style.backgroundColor = '#000'
    
}
let barrilChocadoParedDerecha = false
let barrilChocadoParedIzquierda = false

function update (){
    draw()
    positionY += velocityY
    positionX += velocityX
    barrelPositionX += barrelVelocityX
    barrelPositionY += barrelVelocityY
        // console.log(barrilChocadoParedDerecha);
        // console.log(barrilChocadoParedIzquierda);
    // Condicional de que si la Y del objeto más su altura y la velocidad de la Y no superan la altura del canvas, tiene efecto la gravedad, de lo contrario significa que ha llegado al límite del canvas o ha tocado el suelo, en ese caso restablece la velocidad a 0 para que deje de caer.
    if (positionY + container.offsetWidth + velocityY <= app.offsetHeight) {
        velocityY += gravity
    } else {velocityY = 0;  } 
    /** BARREL CONDITION */
    if (barrelPositionY + container.offsetWidth + barrelVelocityY <= app.offsetHeight) {
        barrelVelocityY += gravity
    } else barrelVelocityY = 0

        if (!barrilChocadoParedDerecha) {
            if (barrelPositionX + barrelContainer.offsetWidth + barrelVelocityX < app.offsetWidth) {
                barrelVelocityX = 5
            } else {barrelVelocityX = 0 ; barrilChocadoParedDerecha = true;}
        } 
        if (barrilChocadoParedDerecha) {
             if (barrelPositionX > 0) {
                    barrelVelocityX = -5
             } else {barrelVelocityX = 0; barrilChocadoParedDerecha = false;}
        } else 
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
            velocityX = -6
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
            velocityX = 6
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
    checkColisionGravity()
}

function animate (){
    requestAnimationFrame(animate)
    update()
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
 function checkColisionGravity(){
    //Colision detected
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
       if (
        (barrelPositionY + barrel.offsetHeight) <= (colisionables[index].offsetTop)
        && (barrelPositionY + barrel.offsetHeight + barrelVelocityY) >= (colisionables[index].offsetTop)
        && (barrelPositionX + barrelContainer.offsetWidth) >= (colisionables[index].offsetLeft) 
        && (barrelPositionX) <= (colisionables[index].offsetLeft + colisionables[index].offsetWidth)  
        ) {
            // Personaje colisionado 
            barrelVelocityY = 0
        }
        index++
 
    }  
}

function checkColisionBetweenCharacterHeadAndBlockBottom(indexFila1, indexFila2){
   
    // while (indexFila1 < colisionablesfila1.length) {
    //     if (positionY + character.offsetHeight > colisionablesfila1[indexFila1].offsetTop 
    //         && (positionY + character.offsetHeight + velocityY) < colisionablesfila1[indexFila1].offsetTop + colisionablesfila1[indexFila1].offsetHeight + (colisionablesfila1[indexFila1].offsetWidth)
    //         && (positionX ) >= (colisionablesfila1[indexFila1].offsetLeft) 
    //         && (positionX) <= (colisionablesfila1[indexFila1].offsetLeft + colisionablesfila1[indexFila1].offsetWidth)  
    //     ) {
    //         console.log('choque');
    //         velocityY += (14/2)
    //         colisionCabezaSueloPlataform = true
    //     }
    //     indexFila1++
    // }
    // while (indexFila2 < colisionablesfila2.length) {
    //     if (positionY + character.offsetHeight > colisionablesfila2[indexFila2].offsetTop 
    //         && (positionY + character.offsetHeight + velocityY) < colisionablesfila2[indexFila2].offsetTop + colisionablesfila2[indexFila2].offsetHeight + (colisionablesfila2[indexFila2].offsetWidth)
    //         && (positionX ) >= (colisionablesfila2[indexFila2].offsetLeft) 
    //         && (positionX) <= (colisionablesfila2[indexFila2].offsetLeft + colisionablesfila2[indexFila2].offsetWidth)  
    //         ) {
    //             console.log('choque');
    //            velocityY += (14/2)
    //           colisionCabezaSueloPlataform = true
    //         }
    //     indexFila2++
    // }
}