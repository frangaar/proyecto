let body = document.getElementById('body')
const BLOCK_SIZE = 36
const PLAYER_WIDTH = 31
const PLAYER_HEIGHT = 26
const PLAYER_VELOCITYJUMP = 8.3
const NUM_OF_BARRELS = 5
// 1.8
let player_velocity = 3
let player_life = 1
let barrel_velocity = 5
let final_del_mapa
let colisionado = false
let play = false
let index_counting_barrels = 0


/** Inizializar los botones del menu y el div*/
let button_Death = document.getElementById('buttonAceptar_Death')
let menu_death = document.getElementById('deathMenu')
let title = document.getElementById('title')
let character = document.getElementById('character')
var app = document.getElementById('app')
let container = document.getElementById('character-Container')
let enemy = document.getElementById('donkeyKongCharacter')
let enemyContainer = document.getElementById('kongContainer')

let focusPlayButton = document.getElementById('playButton')


var pause = true
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
app.style.backgroundImage = 'url(../img/image.jpg)'
app.style.backgroundSize = 'cover'
// Create enemy and barrel size.
enemy.style.width = '160px'
enemyContainer.style.left = '65px'
enemyContainer.style.top = '18px'
const colisionables = []
const colisionablesFila1 = []
const abarril = []
// Mostrar mapeado en pantalla con doble for.
drawMap()

// Variables de la posicion del personaje.
let positionX = 0
let positionY = 722
// character.style.bottom = positionY + 'px'  
let barrelPositionX = 295
let barrelPositionY = 50
let barrelColisionRight = false
let barrelColisionLeft = false

let barrelVelocityX = 10
let barrelVelocityY = 0
let numberOfBarrels = 0
let b1 = new Barrel()
const elementosFila2 = document.querySelectorAll('.fila2');
function draw () {
    container.style.left = positionX + 'px'
    container.style.top = positionY + 'px'
    if (abarril[numberOfBarrels] != null) {
        for (let index = 0; index < numberOfBarrels; index++) {
            abarril[index].container.style.left = abarril[index].x + 'px'
            abarril[index].container.style.top = abarril[index].y + 'px'
        }
    }
}
// Loop de update para la gravedad y todo el movimiento.
function update (){
    if (!pause) {
        
        // play = true
        draw()
        positionY += velocityY
        positionX += velocityX
        if (abarril[numberOfBarrels]!= null) {
            for (let index = 0; index < numberOfBarrels; index++) {
                abarril[index].y += abarril[index].vY
                abarril[index].x += abarril[index].vX
            }    
        }    
        if (abarril[numberOfBarrels] != null) {
            for (let index = 0; index <= numberOfBarrels; index++) {
                if (abarril[index].y + abarril[index].container.offsetWidth + abarril[index].vY <= app.offsetHeight) {
                    abarril[index].vY += gravity
                } else abarril[index].vY = 0
                    if (!abarril[index].barrelColisionRight) {
                    if (abarril[index].x + abarril[index].container.offsetWidth + abarril[index].vX < app.offsetWidth) {
                        abarril[index].vX = barrel_velocity
                        // barrilesContainerArray[index].style.transform = 'scaleX(1)'
                    } else {abarril[index].vX = 0 ; abarril[index].barrelColisionRight = true;}
                } else if (abarril[index].barrelColisionRight) {
                    if (abarril[index].x > 0) {
                        abarril[index].vX = - (barrel_velocity)
                        // barrilesContainerArray[index].style.transform = 'scaleX(-1)'
                    } else {abarril[index].vX = 0; abarril[index].barrelColisionRight = false}
                }
            }
        }
        if (!muerto && !colisionado) {
            // Condicional de que si la Y del objeto más su altura y la velocidad de la Y no superan la altura del canvas, tiene efecto la gravedad, de lo contrario significa que ha llegado al límite del canvas o ha tocado el suelo, en ese caso restablece la velocidad a 0 para que deje de caer.
            if (positionY + container.offsetWidth + velocityY <= app.offsetHeight) {
                velocityY += gravity
            } else {velocityY = 0;  }
            //Condicional para pared derecha y  pared izquierda
            if (keyLeftPressed) {
                if (imgLeft === 1) {
                    character.setAttribute('src', 'img/char_running(2).gif')
                    imgLeft = 0
                }
                imgRight = 1
                imgStand = 1
                imgUp = 1
                imgCrouch = 1
   
                if (positionX > 0) {
                    velocityX = - (player_velocity)
                    character.style.transform = 'scaleX(-1)'
                } else velocityX = 0
            } else if (keyRightPressed){
                if (imgRight === 1) {
                    character.setAttribute('src', 'img/char_running(2).gif')
                    imgRight = 0
                }
                imgLeft = 1
                imgStand = 1
                imgUp = 1
                imgCrouch = 1
   
                if (positionX + container.offsetWidth + velocityX < app.offsetWidth) {
                    velocityX = player_velocity
                    character.style.transform = 'scaleX(1)'
                } else velocityX = 0
            } else {
                velocityX = 0
                if (imgCrouch === 1 ) {
                    character.setAttribute('src', 'img/char_stand.png')
                }
                imgLeft = 1
                imgRight = 1
                imgStand = 1
                imgUp = 1
                imgCrouch = 1
            }
       
            // Condicional para que solo puedas saltar cuando hayas tocado el suelo
            checkColisionBetweenCharacterHeadAndBlockBottom()
            // checkCloisionBetweenCharacterAndFile1()
        } else {
            audioBackground.pause()
            if (!muertSalto) {
                if (velocityY <= - (player_velocity)) {
                    muertSalto = true
                    return
                }
                velocityY -= player_velocity
            }
            if (container.offsetTop <= 1000) {
                velocityY += gravity
            }
            button_Death.style.display = 'block'
            menu_death.style.display = 'grid'
            menu_death.style.backgroundColor = 'transparent'
            app.style.filter = 'blur(2px)'
        }
        checkBarrelColision()
    }


}
function animate (){
    requestAnimationFrame(animate)
    update()
}
animate()
/** CREAR BARRILES CADA 3 SEGUNDOS */
window.setInterval(function(){
    if (!pause) {
        if (index_counting_barrels <= NUM_OF_BARRELS) {
                let barrilContainer = document.createElement('div');
                document.querySelector('.barriles').appendChild(barrilContainer);
                let nombreClasse = generarNombreConNumero('barril', index_counting_barrels)
                barrilContainer.classList.add(nombreClasse);
                barrilContainer.classList.add('barrilesHeight');
                barrilContainer.style.position = 'absolute'
                let barrilIcono = document.createElement('img');
                barrilContainer.appendChild(barrilIcono);  
                barrilIcono.classList.add('barrilLanzadoIcono');
                barrilIcono.setAttribute('src', 'img/barrel.gif');
                barrilIcono.style.width = '40px'
                barrilContainer.style.left = '0px'
                barrilContainer.style.top = '0px'

                numberOfBarrels = index_counting_barrels
                abarril.push(new Barrel(0, 0, 0, 0, barrilContainer, barrilIcono, barrelColisionRight))
            }
        index_counting_barrels++
    }
  },3000);
/** Funcion para generar un nombre de la clase del barril con un prefijo numérico. */
function generarNombreConNumero(prefijo, numero) {
    return `${prefijo}${numero}`;
}
/** Hacer el keyEvent del keydown y el keyup para que el personaje se mueva solo cuando tiene la tecla presionada.*/
addEventListener('keydown', (event) => {
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
            if (!pause) {
                play = false
                audioBackground.pause()
                botonAceptar.style.display = 'block'
                divButton.style.display = 'grid'
                divButton.style.backgroundColor = 'transparent'
                app.style.filter = 'blur(2px)'
                title.innerHTML = 'Pause Mode'
                pause = true
            } else {
                buttonAccept()
                play = true
            }
            // app.style.display = 'none'
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
/** Funcion que crea el mapa y los divs, y los mete en las clases y en el array de colisionables. */
function drawMap()
{
// const map  = [
    const map  = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
    ]
/** MAPA BUENO */
// const map  = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//     [0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
// ]
// const map  = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//     [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//     [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
// ]
    // DIBUJAR MAPA.
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
                mapBlock1.style.backgroundImage = 'url(../img/wood_plataform.png)'
                mapBlock1.style.backgroundSize = 'cover'
                mapBlock1.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock1.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock1.style.width =  38 + 'px'
                mapBlock1.style.height = 37 + 'px'
                mapBlock1.style.position = 'absolute'
                colisionables.push(mapBlock1)

            } else if (map[fila][columna] === 3) {
                const mapBlock1 = document.createElement('div')

                document.querySelector('.fila2').appendChild(mapBlock1)
                mapBlock1.classList.add('fila22')
                mapBlock1.style.backgroundColor = 'black'
                mapBlock1.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock1.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock1.style.width =  38 + 'px'
                mapBlock1.style.height = 30 + 'px'
                mapBlock1.style.position = 'absolute'
                colisionables.push(mapBlock1)

            }  else if (map[fila][columna] === 9) {
                const mapBlock9 = document.createElement('div')

                document.querySelector('.bloquesPadre').appendChild(mapBlock9)
                mapBlock9.classList.add('filaPadre')
                mapBlock9.style.backgroundImage = 'url(../img/block3.png)'
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
/** Función que contiene una condicion del personaje colisionando con diferentes objetos, como el barril, las filas del mapa, y las condiciones de salto y agacharse, junto con la condición de muerte. */
function checkColisionBetweenCharacterHeadAndBlockBottom()
{
    let index = 0
    let indexFila1 = 0
    while (index < colisionables.length) {
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
                    velocityY = - PLAYER_VELOCITYJUMP
                    audioJump.play()
                    if (imgUp === 1 ) {
                        character.setAttribute('src', 'img/char_jump.png')
                    }
                    setTimeout(() => {
                        imgLeft = 1
                        imgRight = 1
                        imgStand = 1
                        imgUp = 0
                        imgCrouch = 1
                    }, 540);
                    // if (abarril[numberOfBarrels] != null) {
                    //     for (let index2 = 0; index2 <= numberOfBarrels; index2++) {
                    //         if ((positionY + character.offsetHeight) >= (abarril[index2].y) &&
                    //             (positionY) <= (abarril[index2].y + abarril[index2].container.offsetHeight) &&
                    //             (positionX + container.offsetWidth) >= (abarril[index2].x) &&
                    //             (positionX) <= (abarril[index2].x + abarril[index2].container.offsetWidth)
                    //         ) 
                    //         {  
                    //             console.log('aplastado');
                    //             velocityY = - PLAYER_VELOCITYJUMP                      
                    //         }
                    //     }
                    // }
                    /** Colision con el techo quitada por el momento */
                    // if ((positionY + container.offsetHeight) <= app.offsetTop) {
                    //     velocityY += (PLAYER_VELOCITYJUMP/2)
                    // }
            }
            if (keyDownPressed) {
                if (imgCrouch === 1) {
                    character.setAttribute('src', 'img/char_agachado.png')
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
        // Colision del personaje con un barril 
        //  (positionY + character.offsetHeight) >= (abarril[index2].y) &&
        for (let index2 = 0; index2 <= numberOfBarrels; index2++) {
            if (abarril[numberOfBarrels] != null) {
                if (
                    // + character.offsetHeight
                    (positionY + character.offsetHeight) >= (abarril[index2].y) &&
                    (positionY) <= (abarril[index2].y + abarril[index2].container.offsetHeight) &&
                    (positionX + container.offsetWidth) >= (abarril[index2].x) &&
                    (positionX) <= (abarril[index2].x + abarril[index2].container.offsetWidth)
                ) {
                    // Barril colisionado
                    abarril[index2].vY = 0
                    if (player_life > 0) {
                    
                        player_life -= 1
                        colisionEfect_betweenCharacter_and_barrel()
                        velocityY -= 5
                        abarril[index2].x = 0
                        abarril[index2].y = 0
                        abarril[index2].barrelColisionRight = false
                    }
                    if (player_life <= 0) {
                        muerto = true
                        character.setAttribute('src', 'img/char_death.png')
                    }
                    if (muerto) {
                        audioFall.play()
                        audioBackground.pause()  
                    }
                } 
                // else if (
                //     (positionY + character.offsetHeight) >= (abarril[index2].y) &&
                //     (positionY) <= (abarril[index2].y + abarril[index2].container.offsetHeight) &&
                //     (positionX + container.offsetWidth) >= (abarril[index2].x) &&
                //     (positionX) <= (abarril[index2].x + abarril[index2].container.offsetWidth)
                // ) {
                //     velocityY = - PLAYER_VELOCITYJUMP
                // }
                // else if (
                //     (positionY + character.offsetHeight) >= (abarril[index2].y) &&
                //     (positionY) <= (abarril[index2].y + abarril[index2].container.offsetHeight) &&
                //     (positionX + container.offsetWidth) >= (abarril[index2].x) &&
                //     (positionX) <= (abarril[index2].x + abarril[index2].container.offsetWidth)
                // ) 
                // {  
                //     console.log('aplastado');
                //     velocityY = - PLAYER_VELOCITYJUMP                      
                // }
                  
            } 
        }
        
        // while (indexFila1 < colisionables.length) {
            // if (positionY + character.offsetHeight > colisionables[indexFila1].offsetTop
            //     && (positionY + character.offsetHeight + velocityY) < colisionables[indexFila1].offsetTop + colisionables[indexFila1].offsetHeight + (colisionables[indexFila1].offsetWidth)
            //     && (positionX ) >= (colisionables[indexFila1].offsetLeft)
            //     && (positionX) <= (colisionables[indexFila1].offsetLeft + colisionables[indexFila1].offsetWidth)  
            // ) {
            //     velocityY += (PLAYER_VELOCITYJUMP/2)
            //     colisionCabezaSueloPlataform = true
            // }
            // indexFila1++
        // }
       // checkColisionBetweenCharacterHeadAndBlockBottom(indexFila1, indexFila2)
        index++
    }  
}
function checkBarrelColision()
{
    let indexBarrel = 0
    if (abarril[numberOfBarrels] != null) {
        while (indexBarrel < colisionables.length) {
            for (let index = 0; index <= numberOfBarrels; index++) {
                if (    
                    (abarril[index].y + abarril[index].container.offsetHeight) <= (colisionables[indexBarrel].offsetTop)
                    && (abarril[index].y + abarril[index].container.offsetHeight + abarril[index].vY) >= (colisionables[indexBarrel].offsetTop)
                    && (abarril[index].x + abarril[index].container.offsetWidth) >= (colisionables[indexBarrel].offsetLeft)
                    && (abarril[index].x) <= (colisionables[indexBarrel].offsetLeft + colisionables[indexBarrel].offsetWidth)
                    ) {
                        // Barril colisionado
                        abarril[index].vY = 0
                    }
            // }
                /** Condicion de cuando toque el último suelo, para que vuelva al principio */
                if ((abarril[index].y + abarril[index].container.offsetHeight) <= (final_del_mapa.offsetTop)
                && (abarril[index].y + abarril[index].container.offsetHeight + abarril[index].vY) >= (final_del_mapa.offsetTop)
                && (abarril[index].x + abarril[index].container.offsetWidth) >= (final_del_mapa.offsetLeft)
                && (abarril[index].x) <= (final_del_mapa.offsetLeft + final_del_mapa.offsetWidth)  
                    ){
                        abarril[index].x = 0
                        abarril[index].y = 0
                       
                    }
/** COLISION DE QUE EL BARRIL TE TOQUE A TI, QUITADO DE MOMENTO, PORQUE CON EL DEL PERSONAJE ME SIRVE */
                // if (
                //     (abarril[index].y + abarril[index].container.offsetHeight) <= (positionY + character.offsetHeight)
                //     && (abarril[index].y + abarril[index].container.offsetHeight + abarril[index].vY) >= (positionY + character.offsetHeight + velocityY)
                //     && (abarril[index].x + abarril[index].container.offsetWidth) >= (container.offsetLeft)
                //     && (abarril[index].x) <= (container.offsetLeft + container.offsetWidth)  
                //     ) {
                //     // Barril colisionado
                //     abarril[index].vY = 0
                //     if (player_life > 0) {
                       
                //         player_life -= 1
                //         colisionEfect_betweenCharacter_and_barrel()
                //         velocityY -= 5
                //         abarril[index].x = 0
                //         abarril[index].y = 0
                //         abarril[index].barrelColisionRight = false
                //     }
                //     if (player_life <= 0) {
                //         muerto = true
                //         character.setAttribute('src', 'img/char_death.png')
                //     }
                //     if (muerto) {
                //         audioFall.play()
                //         audioBackground.pause()  
                //         // return
                //     }
                // }
            }
            indexBarrel++  
        }
    }
}
function colisionEfect_betweenCharacter_and_barrel() {
    if (velocityY <= -5) {
        colisionado = true
        character.setAttribute('src', 'img/mario_diyng.png')
        imgLeft = 0
        imgRight = 0
        imgStand = 0
        imgUp = 0
        imgCrouch = 0
        return
    }
}
// function checkCloisionBetweenCharacterAndFile1()
// {
//     let indexFila1 = 0
//  while (indexFila1 < colisionablesFila1.length) {
//     const POSIY_AND_HEIGHT = positionY + character.offsetHeight
//     const POSIY_AND_HEIGHT_AND_VELOCITYY = positionY + character.offsetHeight + velocityY
//     const POSIX_AND_WIDTH = positionX + container.offsetWidth
//     const COLISION_INDEX_TOP = colisionablesFila1[indexFila1].offsetTop
//     const COLISION_INDEX_LEFT = colisionablesFila1[indexFila1].offsetLeft
//     const COLISION_INDEX_WIDTH = colisionablesFila1[indexFila1].offsetWidth
//     if (
//         (POSIY_AND_HEIGHT) <= (COLISION_INDEX_TOP)
//         && (POSIY_AND_HEIGHT_AND_VELOCITYY) >= (COLISION_INDEX_TOP)
//         && (POSIX_AND_WIDTH) >= (COLISION_INDEX_LEFT)
//         && (positionX) <= (COLISION_INDEX_LEFT + COLISION_INDEX_WIDTH )  
//         ) {
//             velocityY = 0
//         }
//         indexFila1++
//     }
// }



