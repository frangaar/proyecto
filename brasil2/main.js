const minutsInicial = 1;
let tempsRestant = minutsInicial * 60;
const temps = document.getElementById("temporitzador");
let interval;
let aparicion = true;
let puntsInicial = 0;
let volver = document.getElementById("tornarBoto");
let modalInicio = document.getElementById("inicio");
const botonInicio = document.getElementById("iniciarJoc");
let modalAviso = document.getElementById("confirmarSortida");
const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
let victoriaModal = document.getElementById("victoriaModal");
let derrotaModal = document.getElementById("derrotaModal");
let audio = new Audio("./audios/audio-fondo.mp3");
let puntsFinal1 = document.getElementById("puntsFinal1");
let puntsFinal2 = document.getElementById("puntsFinal2");
const botonVictoria = document.getElementById("tornarBoto2");
const botonDerrota = document.getElementById("botoDerrota");
const golpe = new Audio("./audios/golpe.mp3");
golpe.volume = 1;
golpe.playbackRate = 2;

document.addEventListener('DOMContentLoaded',inici);
botonInicio.addEventListener("click", musicaFons);
volver.addEventListener("click", botoSortidaJoc);
botonSi.addEventListener("click", sortirSenseAcabarJoc);

function inici() {
  botonInicio.addEventListener("click", function () {
    modalInicio.style.display = "none";
    asomaTopos();
    sumarPunts();
    imatgeCursor();
    interval = setInterval(compteEnrere, 1000);
  });
}

function imatgeCursor() {
  const cursor = document.querySelector(".cursor");
  window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });

  window.addEventListener("mousedown", () => {
    cursor.classList.add("click");
  });

  window.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
  });
}

function asomaTopos() {
  if (aparicion) {
    for (let i = 1; i <= 9; i++) {
      const topo = document.getElementById("imatge" + i);
      const topoVerde = document.getElementById("imatge1" + i);
      const topoRojo = document.getElementById("imatge2" + i);

      topo.style.display = "none";
      topoVerde.style.display = "none";
      topoRojo.style.display = "none";
    }

    if (tempsRestant > 0) {
      const numTopos = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < numTopos; i++) {
        let num;
        // do {
        num = Math.floor(Math.random() * 9) + 1;
        // } while (
        //   document.getElementById("imatge" + num).style.display === "block"
        // );

        const numAleatorio = Math.random();
        console.log(numAleatorio);
        if (numAleatorio <= 0.04) {
          topoVerde = document.getElementById("imatge1" + num);
          topoVerde.style.display = "block";
        } else if (numAleatorio <= 0.1) {
          topoRojo = document.getElementById("imatge2" + num);
          topoRojo.style.display = "block";
        } else {
          topo = document.getElementById("imatge" + num);
          topo.style.display = "block";
        }
      }

      setTimeout(asomaTopos, 1000);
    }
  }
}

function compteEnrere() {
  const minuts = Math.floor(tempsRestant / 60);
  let segons = tempsRestant % 60;

  segons = segons < 10 ? "0" + segons : segons;

  temps.innerHTML = `${minuts}: ${segons}`;
  tempsRestant--;

  if (tempsRestant < 0) {
    clearInterval(interval);
    jocAcabat();
  }
}

function sumarPunts() {
  for (let i = 1; i <= 9; i++) {
    const topo = document.getElementById("imatge" + i);
    const topoVerde = document.getElementById("imatge1" + i);
    const topoRojo = document.getElementById("imatge2" + i);

    topo.addEventListener("click", () => {
      if (tempsRestant > 0) {
        puntsInicial += 10;
        golpe.play();
        const punts = document.getElementById("puntuacio");
        punts.innerHTML = `${puntsInicial}`;
        topo.src = "img/topo-golpeado.png";
        setTimeout(() => {
          topo.style.display = "none";
          topo.src = "img/topo.png";
        }, 100);
      }
    });

    topoVerde.addEventListener("click", () => {
      if (tempsRestant > 0) {
        puntsInicial += 15;
        golpe.play();
        const punts = document.getElementById("puntuacio");
        punts.innerHTML = `${puntsInicial}`;
        topoVerde.src = "img/topo-golpeado-verde.png";
        setTimeout(() => {
          topoVerde.style.display = "none";
          topoVerde.src = "img/topoVerde.png";
        }, 100);
      }
    });

    topoRojo.addEventListener("click", () => {
      if (tempsRestant > 0) {
        puntsInicial -= 20;
        golpe.play();
        const punts = document.getElementById("puntuacio");
        punts.innerHTML = `${puntsInicial}`;
        topoRojo.src = "img/topo-golpeado-rojo.png";
        setTimeout(() => {
          topoRojo.style.display = "none";
          topoRojo.src = "img/topoRojo.png";
        }, 100);
      }
    });
  }
}

function musicaFons() {
  audio.volume = 0.5;
  audio.loop = true;
  audio.playbackRate = 1;
  audio.play();
}

function botoSortidaJoc() {
  if (tempsRestant < 0) {
    window.location.href = "../save.php?nivel=5&puntos=" + puntsInicial;
  } else {
    aparicion = false;
    clearInterval(interval);

    modalAviso.style.display = "flex";
    botonNo.addEventListener("click", tancarModal);
    audio.pause()
  }
}

function tancarModal() {
  modalAviso.style.display = "none";
  aparicion = true;

  interval = setInterval(compteEnrere, 1000);
  asomaTopos();
  audio.play();
  botonNo.removeEventListener("click", tancarModal);
}

function jocAcabat() {
  console.log("Joc Acabat");
  audio.pause();
  if (puntsInicial >= 250) {
    victoria();
  } else {
    derrota();
  }
}

function sortirSenseAcabarJoc() {
  if (tempsRestant > 0) {
    modalAviso.style.display = "none";
    window.location.href = "../action_page.php";
  }
}

function victoria() {
  puntsFinal1.innerHTML = `${puntsInicial}`;
  victoriaModal.style.display = "block";
  botonVictoria.addEventListener("click", sortirModalVictoria);
}

function sortirModalVictoria() {
  window.location.href = "../save.php?nivel=5&puntos=" + puntsInicial;
}

function derrota () {
  puntsFinal2.innerHTML = `${puntsInicial}`;
  derrotaModal.style.display = "block";
  botonDerrota.addEventListener("click", sortirModalDerrota);
}

function sortirModalDerrota() {
  window.location.href = "../action_page.php";
}