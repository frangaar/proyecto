const numJugadas = 10;
const orden = rellenarArrayOrden(numJugadas);
const efectosClick = [{img: 'efecto-rojo.png', audio: 'high.mp3'}, {img: 'efecto-amarillo.png', audio: 'clean.mp3'}, {img: 'efecto-azul.png', audio: 'low.mp3'}, {img: 'efecto-verde.png', audio: 'lower.mp3'}, ]
let turnoJugador = false;
let jugada = 0;
let turno = 0;
let i = 0;

function rellenarArrayOrden(){
    let array = [];
    for (let i = 0; i < numJugadas; i++) {
        array.push(Math.round(Math.random() * 3));
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    setAmbientAudio();
    // new bootstrap.Modal(document.getElementById('modal-howto')).show();
});

function setAmbientAudio(){
    const audioForest = document.querySelector('.forest-audio');
    const audiocampfire = document.querySelector('.campire-audio');
    audioForest.volume = 1;
    audiocampfire.volume = 0.6;
    setTimeout(() => audiocampfire.play(), 500);
    setTimeout(() => audioForest.play(), 5000);
}

function setInterface(){
    const frame = document.querySelector('.frame')
    frame.classList.add('starting-game');
    setTimeout(() => {
        frame.classList.add('interface-in')
        setTimeout(ejecutarMuestra, 1500);
    }
    , 1250)
}

function ejecutarMuestra(){
    setTimeout(() =>{
        if (jugada != numJugadas) {
            const intervalId = setInterval(() => {
                if (i <= jugada) {
                    animarClick(orden[i]);
                    i++;                    
                } else {
                    clearInterval(intervalId);
                    turnoJugador = true;
                    i = 0;
                }
            }, 600);
        }
    } , 600)
}

function controlInputjugador(num){
    if (turnoJugador) {
        if(num == orden[turno]){
            animarClick(num);
            if (turno !== jugada) {
                turno++;
            } else {
                if (jugada+1 !== numJugadas){
                    const success_audio = document.querySelector('.success-audio');
                    success_audio.currentTime = 0;
                    success_audio.volume = 0.5
                    success_audio.play();
                }else{
                    document.querySelector('.victory-audio').play() ;
                }
                document.querySelector('.progress-bar').style.width = ((jugada + 1) / numJugadas) *100 + '%';
                turnoJugador = false;
                jugada++;
                turno = 0;
                ejecutarMuestra();
            }
        }else{
            document.querySelector('.frame-effect').style.boxShadow = 'inset 0px 0px 100px 0px rgb(255,0,0)'
            document.querySelector('.error-audio').play();
        }
    }
}



function animarClick(num){
    const img_efecto = document.querySelector('.img-efecto');
    const audio_efecto = document.querySelector('.audio-efecto');
    img_efecto.src = './media/' + efectosClick[num].img;
    audio_efecto.src = './media/audio/' + efectosClick[num].audio;
    img_efecto.style.transition = '0s';
    img_efecto.style.opacity = 1;
    audio_efecto.currentTime= 0;
    audio_efecto.play();    
    setTimeout(() => img_efecto.removeAttribute('style'), 100);
}