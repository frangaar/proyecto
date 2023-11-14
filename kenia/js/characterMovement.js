// document.write('<script src="js/audio.js"></script>');
// import {audioFall, audioJump, jumpSound, audioBackground, audioPause} from 'audio.js'
// import { Barrel } from "./barrel.js";
const BLOCK_SIZE = 36
const PLAYER_WIDTH = 31
const PLAYER_HEIGHT = 24
const PLAYER_VELOCITYJUMP = 8.3
let player_velocity = 3
let player_life = 3
let barrel_velocity = 3
let final_del_mapa
let colisionado = false
let play = false
let index_counting_barrels = 0


/** Inizializar los botones del menu y el div*/
// let botonAceptar = document.getElementById('buttonAceptar')
// let divButton = document.getElementById('buttonContinue')
/** Inizializar los botones del menu de cuando mueres y el div*/
let button_Death = document.getElementById('buttonAceptar_Death')
let menu_death = document.getElementById('deathMenu')
let title = document.getElementById('title')
let character = document.getElementById('character')
var app = document.getElementById('app')
let container = document.getElementById('character-Container')
let enemy = document.getElementById('donkeyKongCharacter')
let enemyContainer = document.getElementById('kongContainer')
// let barrel = document.getElementById('barrelIcon')
// let barrelContainer = document.getElementById('barrelDiv')




let focusPlayButton = document.getElementById('playButton')


var pause = true
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
app.style.backgroundImage = 'url(../img/bc.png)'
// app.style.backgroundColor = 'black'
app.style.backgroundSize = 'cover'
// Create enemy and barrel size.
enemy.style.width = '160px'
enemyContainer.style.left = '65px'
enemyContainer.style.top = '18px'
// barrel.style.width = '40px'
// barrelContainer.style.left = '0px'
// barrelContainer.style.top = '0px'
const colisionables = []
const colisionablesFila1 = []
const barriles = []
const barrilesContainerArray = []
const abarril = []

// audioBackground.muted = true
// audioBackground.play()
// Mostrar mapeado en pantalla con doble for.
drawMap()




// Variables de la posicion del personaje.
let positionX = 0
let positionY = 722
// character.style.bottom = positionY + 'px'  
let barrelPositionX = 295
let barrelPositionY = 50


let barrelVelocityX = 10
let barrelVelocityY = 0
let barrelPositionX1Array = 0
let barrelPositionY1Array = 0


let barrelPositionX2Array = 0
let barrelPositionY2Array = 0
let barrelVelocityX2 = 0
let barrelVelocityY2 = 0


let barrelPositionX3Array = 0
let barrelPositionY3Array = 0
let barrelVelocityX3 = 0
let barrelVelocityY3 = 0


let barrelPositionX4Array = 0
let barrelPositionY4Array = 0
let barrelVelocityX4 = 0
let barrelVelocityY4 = 0
let numberOfBarrels = 0
let b1 = new Barrel()

function draw () {
    // app.style.border = '1px solid white'
    container.style.left = positionX + 'px'
    container.style.top = positionY + 'px'
    // barrelContainer.style.left = barrelPositionX + 'px'
    // barrelContainer.style.top = barrelPositionY + 'px'
    if (abarril[numberOfBarrels] != null) {
        for (let index = 0; index < numberOfBarrels; index++) {
            abarril[index].container.style.left = abarril[index].x + 'px'
            abarril[index].container.style.top = abarril[index].y + 'px'
        }
    }
}
let barrilChocadoParedDerecha = false
let barrilChocadoParedIzquierda = false
let barrilChocadoParedDerecha2 = false
let barrilChocadoParedIzquierda2 = false
let barrilChocadoParedDerecha3 = false
let barrilChocadoParedIzquierda3 = false
let barrilChocadoParedDerecha4 = false
let barrilChocadoParedIzquierda4 = false
const arrayBarrilChocadoParedIzquierda = [barrilChocadoParedIzquierda, barrilChocadoParedIzquierda2, barrilChocadoParedIzquierda3, barrilChocadoParedIzquierda4]
const arrayBarrilChocadoParedDerecha = [barrilChocadoParedDerecha, barrilChocadoParedDerecha2, barrilChocadoParedDerecha3, barrilChocadoParedDerecha4]
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
        // barrelPositionX += barrelVelocityX
        // barrelPositionY += barrelVelocityY
        // console.log(barrelPositionXArray);
            /** BARREL CONDITION */
            // barriles[index_counting_barrels]
            /** OTRO COLISION */
            
            if (abarril[numberOfBarrels] != null) {
                for (let index = 0; index <= numberOfBarrels; index++) {
                    if (abarril[index].y + abarril[index].container.offsetWidth + abarril[index].vY <= app.offsetHeight) {
                        abarril[index].vY += gravity
                    } else abarril[index].vY = 0
                      if (!arrayBarrilChocadoParedDerecha[index]) {
                        if (abarril[index].x + abarril[index].container.offsetWidth + abarril[index].vX < app.offsetWidth) {
                            abarril[index].vX = barrel_velocity
                            // barrilesContainerArray[index].style.transform = 'scaleX(1)'
                        } else {abarril[index].vX = 0 ; arrayBarrilChocadoParedDerecha[index] = true;}
                    } else if (arrayBarrilChocadoParedDerecha[index]) {
                        if (abarril[index].x > 0) {
                            abarril[index].vX = - (barrel_velocity)
                            // barrilesContainerArray[index].style.transform = 'scaleX(-1)'
                        } else {abarril[index].vX = 0; arrayBarrilChocadoParedDerecha[index] = false}
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
                    character.setAttribute('src', 'img/mario_running.gif')
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
                    character.setAttribute('src', 'img/mario_running.gif')
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
                    character.setAttribute('src', 'img/mario_stand.png')
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
            audioBackground.pause()
            if (!muertSalto) {
                if (velocityY <= - (player_velocity)) {
                    muertSalto = true
                    return
                }
                velocityY -= player_velocity
            }
            velocityY += gravity
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
window.setInterval(function(){
    if (!pause) {
        if (index_counting_barrels <= 6) {
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
                barriles.push(barrilIcono)
                // QUITAR CUANDO TENGAMOS LAS CLASES
                barrilesContainerArray.push(barrilContainer)
                numberOfBarrels = index_counting_barrels
                abarril.push(new Barrel(0, 0, 0, 0, barrilContainer, barrilIcono))
            }
        index_counting_barrels++
    }
  },5000);
  /** Funcion para generar un nombre de la clase del barril con un prefijo numérico. */
function generarNombreConNumero(prefijo, numero) {
    return `${prefijo}${numero}`;
  }
//   function colisionBarrilDerecha(index) {
//     if (!barrilChocadoParedDerecha) {
//         if (posicionesXBarriles[index] + barrilesContainerArray[index].offsetWidth + velocityXBarriles[index] < app.offsetWidth) {
//             velocityXBarriles[numberOfBarrels] = 3
//         } else {velocityXBarriles[index] = 0 ; barrilChocadoParedDerecha = true;}
//     }
//   }
/** Hacer el keyEvent del keydown y el keyup para que el personaje se mueva solo cuando tiene la tecla presionada*/
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
/** Funcion que crea el mapa y los divs, y los mete en las clases y en el array de colisionables */
function drawMap()
{
// const map  = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
// ]
/** MAPA BUENO */
// const map  = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6],
//     [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
//     [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
// ]
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
]
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
                mapBlock1.style.height = 30 + 'px'
                mapBlock1.style.position = 'absolute'
                // mapBlock1.style.borderRadius = '5px'
                colisionables.push(mapBlock1)
                // colisionablesFila1.push(mapBlock1)


            } else if (map[fila][columna] === 3) {
                const mapBlock1 = document.createElement('div')

                document.querySelector('.fila1').appendChild(mapBlock1)
                mapBlock1.style.backgroundImage = 'url(../img/snake_face.png)'
                mapBlock1.style.backgroundSize = 'cover'
                mapBlock1.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock1.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock1.style.width =  38 + 'px'
                mapBlock1.style.height = 30 + 'px'
                mapBlock1.style.position = 'absolute'
                // mapBlock1.style.borderRadius = '10px'
                colisionables.push(mapBlock1)
                // colisionablesFila1.push(mapBlock1)


            }  else if (map[fila][columna] === 9) {
                const mapBlock9 = document.createElement('div')

                document.querySelector('.bloquesPadre').appendChild(mapBlock9)
                mapBlock9.classList.add('filaPadre')
                // mapBlock5.style.backgroundImage = 'url(../img/block2.png)'
                mapBlock9.style.backgroundColor = 'red'
                mapBlock9.style.backgroundSize = 'cover'
                mapBlock9.style.top = fila * BLOCK_SIZE + 'px'
                mapBlock9.style.left = (columna * BLOCK_SIZE) + 'px'
                mapBlock9.style.width =  BLOCK_SIZE + 'px'
                mapBlock9.style.height = BLOCK_SIZE + 'px'
                mapBlock9.style.position = 'absolute'
                final_del_mapa = mapBlock9
            }
            // else if (map[fila][columna] === 3) {
            //     const mapBlock2 = document.createElement('div')


            //     document.querySelector('.bloques').appendChild(mapBlock2)
            //     mapBlock2.classList.add('fila2')
            //     mapBlock2.style.backgroundImage = 'url(../img/bloque.png)'
            //     mapBlock2.style.backgroundSize = 'cover'
            //     mapBlock2.style.top = fila * BLOCK_SIZE + 'px'
            //     mapBlock2.style.left = (columna * BLOCK_SIZE) + 'px'
            //     mapBlock2.style.width =  BLOCK_SIZE + 'px'
            //     mapBlock2.style.height = BLOCK_SIZE + 'px'
            //     mapBlock2.style.position = 'absolute'
            //     colisionables.push(mapBlock2)


            // } else if (map[fila][columna] === 4) {
            //     const mapBlock3 = document.createElement('div')


            //     document.querySelector('.bloques').appendChild(mapBlock3)
            //     mapBlock3.classList.add('fila3')
            //     mapBlock3.style.backgroundImage = 'url(../img/bloque.png)'
            //     mapBlock3.style.backgroundSize = 'cover'
            //     mapBlock3.style.top = fila * BLOCK_SIZE + 'px'
            //     mapBlock3.style.left = (columna * BLOCK_SIZE) + 'px'
            //     mapBlock3.style.width =  BLOCK_SIZE + 'px'
            //     mapBlock3.style.height = BLOCK_SIZE + 'px'
            //     mapBlock3.style.position = 'absolute'
            //     colisionables.push(mapBlock3)


            // } else if (map[fila][columna] === 5) {
            //     const mapBlock4 = document.createElement('div')


            //     document.querySelector('.bloques').appendChild(mapBlock4)
            //     mapBlock4.classList.add('fila4')
            //     mapBlock4.style.backgroundImage = 'url(../img/bloque.png)'
            //     mapBlock4.style.backgroundSize = 'cover'
            //     mapBlock4.style.top = fila * BLOCK_SIZE + 'px'
            //     mapBlock4.style.left = (columna * BLOCK_SIZE) + 'px'
            //     mapBlock4.style.width =  BLOCK_SIZE + 'px'
            //     mapBlock4.style.height = BLOCK_SIZE + 'px'
            //     mapBlock4.style.position = 'absolute'
            //     colisionables.push(mapBlock4)            
            // } else if (map[fila][columna] === 6) {
            //     const mapBlock5 = document.createElement('div')


            //     document.querySelector('.bloquesPadre').appendChild(mapBlock5)
            //     mapBlock5.classList.add('filaPadre')
            //     // mapBlock5.style.backgroundImage = 'url(../img/block2.png)'
            //     mapBlock5.style.backgroundColor = 'red'
            //     mapBlock5.style.backgroundSize = 'cover'
            //     mapBlock5.style.top = fila * BLOCK_SIZE + 'px'
            //     mapBlock5.style.left = (columna * BLOCK_SIZE) + 'px'
            //     mapBlock5.style.width =  BLOCK_SIZE + 'px'
            //     mapBlock5.style.height = BLOCK_SIZE + 'px'
            //     mapBlock5.style.position = 'absolute'
            //     colisionables.push(mapBlock5)  
            // }
            // else if ( map[fila][columna] === 9) {
            //     const mapBlock9 = document.createElement('div')


            //     document.querySelector('.bloquesPadre').appendChild(mapBlock9)
            //     mapBlock9.classList.add('filaPadre')
            //     // mapBlock5.style.backgroundImage = 'url(../img/block2.png)'
            //     mapBlock9.style.backgroundColor = 'red'
            //     mapBlock9.style.backgroundSize = 'cover'
            //     mapBlock9.style.top = fila * BLOCK_SIZE + 'px'
            //     mapBlock9.style.left = (columna * BLOCK_SIZE) + 'px'
            //     mapBlock9.style.width =  BLOCK_SIZE + 'px'
            //     mapBlock9.style.height = BLOCK_SIZE + 'px'
            //     mapBlock9.style.position = 'absolute'
            //     final_del_mapa = mapBlock9
            // }
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
                    velocityY = - PLAYER_VELOCITYJUMP
                    audioJump.play()
                    jumpSound.play()
                    if (imgUp === 1 ) {
                        character.setAttribute('src', 'img/mario_jump.png')
                    }
                    setTimeout(() => {
                        imgLeft = 1
                        imgRight = 1
                        imgStand = 1
                        imgUp = 0
                        imgCrouch = 1
                    }, 900);
                    /** Colision con el techo quitada por el momento */
                    // if ((positionY + container.offsetHeight) <= app.offsetTop) {
                    //     velocityY += (PLAYER_VELOCITYJUMP/2)
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
           
                if ((abarril[index].y + abarril[index].container.offsetHeight) <= (final_del_mapa.offsetTop)
                && (abarril[index].y + abarril[index].container.offsetHeight + abarril[index].vY) >= (final_del_mapa.offsetTop)
                && (abarril[index].x + abarril[index].container.offsetWidth) >= (final_del_mapa.offsetLeft)
                && (abarril[index].x) <= (final_del_mapa.offsetLeft + final_del_mapa.offsetWidth)  
                    ){
                        abarril[index].x = 295
                        abarril[index].y = 50
                       
                    }

                if (
                    (abarril[index].y + abarril[index].container.offsetHeight) <= (positionY + character.offsetHeight)
                    && (abarril[index].y + abarril[index].container.offsetHeight + abarril[index].vY) >= (positionY + character.offsetHeight + velocityY)
                    && (abarril[index].x + abarril[index].container.offsetWidth) >= (positionX + container.offsetWidth)
                    && (abarril[index].x) <= (positionX + container.offsetWidth)  
                    ) {
                    // Barril colisionado
                    abarril[index].vY = 0
                    if (player_life > 0) {
                       
                        player_life -= 1
                        colisionEfect_betweenCharacter_and_barrel()
                        velocityY -= 5
                        abarril[index].x = 295
                        abarril[index].y = 50
                        arrayBarrilChocadoParedDerecha[index] = false
                    }
                    if (player_life <= 0) {
                        muerto = true
                        character.setAttribute('src', 'img/mario_diyng.png')
                    }
                    if (muerto) {
                        audioFall.play()
                        audioBackground.pause()  
                        // return
                    }
                }
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



