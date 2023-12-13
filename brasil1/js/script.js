const NUM_JUGADAS = 10, NUM_TAMBORES = 4,
    efectosClick = [{img: 'effect-click-rojo', audio: 'audio-effect-rojo'}, {img: 'effect-click-amarillo', audio: 'audio-effect-amarillo'}, {img: 'effect-click-azul', audio: 'audio-effect-azul'}, {img: 'effect-click-verde', audio: 'audio-effect-verde'}],
    exitGame = () => gameWin ? window.location.href = `../save.php?nivel=4+&tiempo=${tiempo}` : window.location.href = '../action_page.php',
    rellenarArrayOrden = () => Array.from({length: NUM_JUGADAS}, () => Math.floor(Math.random() * NUM_TAMBORES)),
    setImgsNotDraggable = () => document.getElementsByTagName('img').forEach(img => img.draggable = false),
    startCrono = () => crono_interval = setInterval(() => tiempo++, 1000),
    addAnimacionRecompensa = () => document.getElementsByClassName('recompensa-items').forEach(img => img.classList.add('animacion-recompensa')),
    addModalWinEvent = () => document.querySelector('.modal-win').addEventListener('shown.bs.modal', () => setTimeout(addAnimacionRecompensa, 500)),
    addSettingsListener = () => document.addEventListener('mousedown', e => settings_ondisplay ? !document.getElementsByClassName('option-btns').some(btn => btn.contains(e.target)) ? ocultarSettings(): null : null);

let orden, turnoJugador, jugada, turno, i, droped_settings, undroped_settings, settings_intervalid_id, settings_ondisplay, pagemuted, gameWin, crono_interval, 
    tiempo = errores = 0;

document.addEventListener('DOMContentLoaded', () => {
    setVariableValues();
    setAmbientAudio();
    addSettingsListener();
    addModalErrorListener();
    setImgsNotDraggable();
    addModalWinEvent()
});

function addModalErrorListener(){
    const modal_error = document.getElementById('modal-error')
    modal_error.addEventListener('shown.bs.modal', () =>{
        setTimeout(()=> {
            document.getElementById('btn-error-retry').style.transform = 'scale(1)';
            setTimeout(() => ['btn-error-close-game', 'btn-error-back-to-menu'].forEach(id => document.getElementById(id).style.transform = 'scale(1)'), 250);
        }, 300);
    });
    modal_error.addEventListener('hide.bs.modal', () => {modal_error.querySelector('.modal-content').children.forEach(btns => btns.style.transform = 'scale(0)')});
}

function setVariableValues(){
    orden = rellenarArrayOrden(NUM_JUGADAS);
    jugada = turno = i = 0;
    turnoJugador = settings_ondisplay = pagemuted = gameWin = false;
    droped_settings = [];
    undroped_settings = Array.from(document.getElementsByClassName('options-setting-btn'));
}

function setAmbientAudio(){
    const audioForest = document.querySelector('.forest-audio');
    const audiocampfire = document.querySelector('.campire-audio');
    audiocampfire.volume = 0.6;
    setTimeout(() => audiocampfire.play(), 500);
    setTimeout(() => audioForest.play(), 5000);
}

function changeInterface(interfaceIn){
    const frame = document.querySelector('.frame');
    const [firstClass, secondClass] = interfaceIn ? ['starting-game', 'interface-in'] : ['interface-in', 'starting-game'];
    frame.classList.toggle(firstClass);
    resetGame();
    setTimeout(() => {
        frame.classList.toggle(secondClass);
        interfaceIn ? actionInterfaceIn() : clearInterval(crono_interval);
    }, 1250);
}

function actionInterfaceIn(){
    startCrono();
    setTimeout(ejecutarMuestra, 1500);
}

function resetGame(){
    document.querySelector('.frame-effect').removeAttribute('style');
    document.querySelector('.progress-bar').style.width = '0%';
    setVariableValues();
}

function retry(){
    resetGame();
    ejecutarMuestra();
}

function ejecutarMuestra(){
    setTimeout(() =>{
        if (jugada != NUM_JUGADAS) {
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
                if (jugada + 1 !== NUM_JUGADAS){
                    const success_audio  = document.querySelector('.success-audio');
                    success_audio.currentTime = 0;
                    success_audio.volume = 0.5
                    success_audio.play();
                }else{
                    const puntuacion = Math.round(10000/tiempo);
                    gameWin = true
                    clearInterval(crono_interval);
                    document.querySelector('.victory-audio').play();
                    document.querySelector('.confeti').style.opacity = 1;
                    document.querySelector('.tiempo-result').textContent = `${tiempo}s`;
                    document.querySelector('.errores-result').textContent = `${errores} err.`;
                    document.querySelector('.puntos-result').textContent = `${puntuacion}pts`;
                    setTimeout(() => {new bootstrap.Modal(document.getElementById('modal-win')).show();}, 3000);
                }
                document.querySelector('.progress-bar').style.width = ((jugada + 1) / NUM_JUGADAS) *100 + '%';
                turnoJugador = false;
                jugada++;
                turno = 0;
                ejecutarMuestra();
            }
        }else{
            errores++;
            const frame_effect = document.querySelector('.frame-effect');
            frame_effect.style.transition = '0s';   
            frame_effect.style.boxShadow = 'inset 0px 0px 100px 0px rgb(255,0,0)';
            document.querySelector('.error-audio').play();
            new bootstrap.Modal(document.getElementById('modal-error')).show();
        }
    }
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
    }, 250);
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