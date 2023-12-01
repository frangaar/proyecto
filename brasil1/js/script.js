const numJugadas = 1;
const efectosClick = [{img: 'effect-click-rojo', audio: 'audio-effect-rojo'}, {img: 'effect-click-amarillo', audio: 'audio-effect-amarillo'}, {img: 'effect-click-azul', audio: 'audio-effect-azul'}, {img: 'effect-click-verde', audio: 'audio-effect-verde'}, ]
let orden, turnoJugador, jugada, turno, i, droped_settings, undroped_settings, settings_intervalid_id, settings_ondisplay, pagemuted, gameWin;

document.addEventListener('DOMContentLoaded', () => {
    setVariableValues();
    setAmbientAudio();
    addSettingsListener();
    addModalErrorListener();
});

function addSettingsListener(){
    document.addEventListener('mousedown', e => {
        if (settings_ondisplay){
            const btns = Array.from(document.getElementsByClassName('options-setting-btn'));
            btns.push(document.querySelector('.option-btn'));
            let i = 0, isChild = false;
            while (!isChild && i < btns.length){
                btns[i].contains(e.target) ? isChild = true : i++;
            }
            !isChild ? ocultarSettings() : null;
        }
    });
}

function addModalErrorListener(){
    const modal_error = document.getElementById('modal-error')
    modal_error.addEventListener('shown.bs.modal', () =>{
        setTimeout(()=> {
            document.getElementById('btn-error-retry').style.transform = 'scale(1)';
            setTimeout(()=> {
                document.getElementById('btn-error-close-game').style.transform = 'scale(1)';
                document.getElementById('btn-error-back-to-menu').style.transform = 'scale(1)';
            }, 250);
        }, 300);
    });
    modal_error.addEventListener('hide.bs.modal', () => {
        for (const modal_error_child of modal_error.querySelector('.modal-content').children) {
            modal_error_child.style.transform = 'scale(0)';
        }
    });
}

function setVariableValues(){
    orden = rellenarArrayOrden(numJugadas);
    jugada = turno = i = 0;
    turnoJugador = settings_ondisplay = pagemuted = gameWin = false
    droped_settings = [];
    undroped_settings = Array.from(document.getElementsByClassName('options-setting-btn'));
}

function rellenarArrayOrden(){
    let array = [];
    for (let i = 0; i < numJugadas; i++) {
        array.push(Math.round(Math.random() * 3));
    }
    return array;
}

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
    }, 1250)
}

function backtoMenu(){
    const frame = document.querySelector('.frame');
    const frame_effect = document.querySelector('.frame-effect');
    frame.classList.remove('interface-in')
    frame_effect.removeAttribute('style');
    setTimeout(() => {
        frame.classList.remove('starting-game');
        document.querySelector('.progress-bar').style.width = '0%';
        setVariableValues();
    }, 1250);
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
                    const success_audio  = document.querySelector('.success-audio');
                    success_audio.currentTime = 0;
                    success_audio.volume = 0.5
                    success_audio.play();
                }else{
                    gameWin = true
                    document.querySelector('.victory-audio').play();
                    document.querySelector('.confeti').style.opacity = 1
                }
                document.querySelector('.progress-bar').style.width = ((jugada + 1) / numJugadas) *100 + '%';
                turnoJugador = false;
                jugada++;
                turno = 0;
                ejecutarMuestra();
            }
        }else{
            const frame_effect = document.querySelector('.frame-effect');
            frame_effect.style.transition = '0s';
            frame_effect.style.boxShadow = 'inset 0px 0px 100px 0px rgb(255,0,0)';
            document.querySelector('.error-audio').play();
            new bootstrap.Modal(document.getElementById('modal-error')).show();
        }
    }
}


function retry(){
    const frame_effect = document.querySelector('.frame-effect');
    frame_effect.removeAttribute('style');
    document.querySelector('.progress-bar').style.width = '0%';
    setVariableValues();
    ejecutarMuestra();
}

function animarClick(num){
    const img_efecto = document.getElementById(efectosClick[num].img);
    const audio_efecto = document.getElementById(efectosClick[num].audio);
    img_efecto.style.transition = '0s';
    img_efecto.style.opacity = 1;
    audio_efecto.currentTime= 0;
    audio_efecto.play();
    setTimeout(() => img_efecto.removeAttribute('style'), 100);
}

const actionSettings = () => settings_ondisplay ? ocultarSettings() : desplegarSettings();

function desplegarSettings(){
    settings_ondisplay = true;
    desplazarDesplegarSettings()
    clearInterval(settings_intervalid_id);
    settings_intervalid_id = setInterval(() => {
        if (undroped_settings.length > 0){
            desplazarDesplegarSettings();
        } else {
            clearInterval(settings_intervalid_id);
        }
    }, 250)
}

function desplazarDesplegarSettings() {
    const desplazamiento = 100;
    const lastTop = droped_settings.length > 0 ? droped_settings[(droped_settings.length - 1)].offsetTop : 0;
    droped_settings.push(undroped_settings[undroped_settings.length -1]);
    for (const settings of undroped_settings) {
        settings.style.top = (lastTop + desplazamiento) + 'px';
    }
    const btn_droped = undroped_settings.pop();
    btn_droped.classList.add('shown');
}

function ocultarSettings(){
    settings_ondisplay = false;
    desplazarOcultarSettings();
    clearInterval(settings_intervalid_id);
    settings_intervalid_id = setInterval(() => {
        if (droped_settings.length > 0){
            desplazarOcultarSettings();
        } else {
            clearInterval(settings_intervalid_id);
        }
    }, 250)
}

function desplazarOcultarSettings() {
    const lastTop = droped_settings.length > 1 ? droped_settings[(droped_settings.length - 2)].offsetTop : 0;
    undroped_settings.push(droped_settings[droped_settings.length -1]);
    for (const settings of undroped_settings) {
        settings.style.top = lastTop + 'px';
    }
    const btn_droped = droped_settings.pop();
    btn_droped.classList.remove('shown');
}

function actionVolume() {
    const btn_icon = document.getElementById('volume-btn').querySelector('i');
    const audios = document.getElementsByTagName('audio');
    btn_icon.classList.toggle('fa-volume-high');
    btn_icon.classList.toggle('fa-volume-xmark');
    for (const audio of audios) {
        audio.muted = !audio.muted;
    }
}

let tiempo = 100;
const exitGame = () => gameWin ? window.location.href='../save.php?nivel=4+&tiempo='+tiempo : window.location.href='../action_page.php';