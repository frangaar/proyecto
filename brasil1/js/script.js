const NUM_JUGADAS = 11, NUM_TAMBORES = 4,
    efectosClick = [{ img: 'effect-click-rojo', audio: 'audio-effect-rojo' }, { img: 'effect-click-amarillo', audio: 'audio-effect-amarillo' }, { img: 'effect-click-azul', audio: 'audio-effect-azul' }, { img: 'effect-click-verde', audio: 'audio-effect-verde' }],
    exitGame = () => gameWin ? window.location.href = `../save.php?nivel=4+&tiempo=${tiempo}` : window.location.href = '../action_page.php',
    rellenarArrayOrden = () => Array.from({ length: NUM_JUGADAS }, () => Math.floor(Math.random() * NUM_TAMBORES)),
    disableDraggableImages = () => document.querySelectorAll('img').forEach(img => img.draggable = false),
    startCrono = () => crono_interval = setInterval(() => tiempo++, 1000),
    addAnimacionRecompensa = () => document.querySelectorAll('.recompensa-items').forEach(img => img.classList.add('animacion-recompensa')),
    addModalWinEvent = () => document.getElementById('modal-win').addEventListener('shown.bs.modal', () => setTimeout(addAnimacionRecompensa, 200)),
    addSettingsListener = () => document.addEventListener('mousedown', e => settings_ondisplay && (Array.from(document.getElementsByClassName('option-btns')).some(btn => btn.contains(e.target)) || toggleSettings())),
    setAmbientAudio = () => [{ classname: 'campfire-audio', ms: 750 }, { classname: 'forest-audio', ms: 5000 }].forEach(obj => setTimeout(() => document.querySelector(`.${obj.classname}`).play().catch(e => console.log('Error en reproduccion de sonido')), obj.ms)),
    ejecutarMuestra = () => setTimeout(() => jugada == NUM_JUGADAS || (muestra_interval = setInterval(() => iterador_muestra <= jugada ? animarClick(orden[iterador_muestra++]) : setFinMuestra(), 600)), 600),
    setFinMuestra = () => (clearInterval(muestra_interval), turnoJugador = true, iterador_muestra = 0),
    rellenarEstadisticasModalWin = () => [{ classname: 'tiempo-result', txt: `${tiempo}s` }, { classname: 'errores-result', txt: `${errores} err.` }, { classname: 'puntos-result', txt: `${Math.round(10000 / tiempo)}pts` }].forEach(obj => document.querySelector(`.${obj.classname}`).textContent = obj.txt),
    controlTurnoJugador = num_tambor => turnoJugador && actionInputJugador(num_tambor),
    actionInputJugador = num_tambor => num_tambor === orden[turno] ? optionsSuccess(num_tambor) : actionError(),
    showModal = id => new bootstrap.Modal(document.getElementById(id)).show();
let orden, turnoJugador, jugada, turno, iterador_muestra, settings_ondisplay, droped_settings, undroped_settings, gameWin, tiempo, errores, crono_interval, muestra_interval, settings_intervalid;

document.addEventListener('DOMContentLoaded', () => {
    setUniqueVariableValues();
    setVariableValues();
    setAmbientAudio();
    addSettingsListener();
    addModalErrorListener();
    disableDraggableImages();
    addModalWinEvent();
});

function addModalErrorListener() {
    const modal_error = document.getElementById('modal-error');
    modal_error.addEventListener('shown.bs.modal', () => {
        setTimeout(() => {
            document.getElementById('btn-error-retry').classList.add('error-btns-shown');
            setTimeout(() => ['btn-error-close-game', 'btn-error-back-to-menu'].forEach(id => document.getElementById(id).classList.add('error-btns-shown')), 250);
        }, 300);
    });
    modal_error.addEventListener('hide.bs.modal', () => { Array.from(modal_error.querySelector('.modal-content').children).forEach(btns => btns.classList.remove('error-btns-shown')) });
}

function setUniqueVariableValues(){
    tiempo = errores = 0;
    droped_settings = [];
    undroped_settings = Array.from(document.getElementsByClassName('options-setting-btn'));
}

function setVariableValues() {
    orden = rellenarArrayOrden(NUM_JUGADAS);
    jugada = turno = iterador_muestra = 0;
    turnoJugador = settings_ondisplay = gameWin = false;
}

function changeInterface(interfaceIn) {
    const frame = document.querySelector('.frame');
    const [firstClass, secondClass] = interfaceIn ? ['starting-game', 'interface-in'] : ['interface-in', 'starting-game'];
    frame.classList.toggle(firstClass);
    resetGame();
    setTimeout(() => {
        frame.classList.toggle(secondClass);
        interfaceIn ? actionInterfaceIn() : clearInterval(crono_interval);
    }, 1250);
}

function actionInterfaceIn() {
    startCrono();
    setTimeout(ejecutarMuestra, 1500);
}

function resetGame() {
    document.querySelector('.frame-effect').className = 'frame-effect';
    document.querySelector('.progress-bar').style.width = '0%';
    setVariableValues();
}

function retry() {
    resetGame();
    ejecutarMuestra();
}

function animarClick(num_tambor) {
    const {img, audio} = efectosClick[num_tambor];
    const img_efecto = document.getElementById(img);
    const audio_efecto = document.getElementById(audio);
    img_efecto.classList.add('img-efecto-shown');
    audio_efecto.currentTime = 0;
    audio_efecto.play();
    setTimeout(() => img_efecto.classList.remove('img-efecto-shown'), 100);
}

function actionVolume() {
    ['fa-volume-high', 'fa-volume-xmark'].forEach(icon_classname => document.getElementById('volume-btn').querySelector('i').classList.toggle(icon_classname))
    document.querySelectorAll('audio').forEach(audio => audio.muted = !audio.muted);
}

function toggleSettings() {
    settings_ondisplay = !settings_ondisplay;
    const emptying_array = settings_ondisplay ? undroped_settings : droped_settings;
    desplazarSettings();
    clearInterval(settings_intervalid);
    settings_intervalid = setInterval(() => emptying_array.length > 0 ? desplazarSettings() : clearInterval(settings_intervalid), 250);
}

function desplazarSettings() {
    const desplazamiento = settings_ondisplay ? 100 : 0;
    const top_value = settings_ondisplay ? droped_settings.slice(-1)[0]?.offsetTop ?? 0 : droped_settings.slice(-2, -1)[0]?.offsetTop ?? 0;
    const [filling_array, emptying_array] = settings_ondisplay ? [droped_settings, undroped_settings] : [undroped_settings, droped_settings];
    filling_array.push(emptying_array.slice(-1)[0]);
    emptying_array.forEach(btn => btn.style.top = `${top_value + desplazamiento}px`);
    const btn_droped = emptying_array.pop();
    btn_droped.classList.toggle('opt_btn_shown');
    [droped_settings, undroped_settings] = settings_ondisplay ? [filling_array, emptying_array] : [emptying_array, filling_array];
}

function optionsSuccess(num_tambor){
    animarClick(num_tambor);
    turno !== jugada ? turno++ : (jugada + 1 !== NUM_JUGADAS ? actionCorrectDrum() : actionWin(), actionCorrectSecuence());
}

function actionCorrectDrum() {
    const success_audio = document.querySelector('.success-audio');
    success_audio.currentTime = 0;
    success_audio.play();
}

function actionCorrectSecuence() {
    turnoJugador = false;
    turno = 0;
    document.querySelector('.progress-bar').style.width = `${((++jugada) / NUM_JUGADAS) * 100}%`;
    ejecutarMuestra();
}

function actionError() {
    errores++;
    document.querySelector('.frame-effect').classList.add('frame-effect-error');
    document.querySelector('.error-audio').play();
    showModal('modal-error');
}

function actionWin() {
    gameWin = true
    clearInterval(crono_interval);
    document.querySelector('.frame-effect').classList.add('frame-effect-win');
    document.querySelector('.victory-audio').play();
    rellenarEstadisticasModalWin();
    setTimeout(() => showModal('modal-win'), 2500);
}