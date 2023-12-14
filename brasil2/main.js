const minutsInicial = 1;
let tempsRestant = minutsInicial * 60;
const temps = document.getElementById("temporitzador");
let interval = setInterval(compteEnrere, 1000);
let aparicion = true;
let puntsInicial = 0;
let volver = document.getElementById("tornarBoto");
const modalAviso = document.getElementById("confirmarSortida");
const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
let victoriaModal = document.getElementById("victoriaModal");
let audio = new Audio("./audios/audio-fondo.mp3");
let puntsFinal = document.getElementById("puntsFinal");
const botonVictoria = document.getElementById("tornarBoto2");

document.addEventListener("DOMContentLoaded", asomaTopos);
document.addEventListener("click", musicaFons);
volver.addEventListener("click", botoSortidaJoc);
botonSi.addEventListener("click", sortirSenseAcabarJoc);
sumarPunts();
imatgeCursor();

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
        if (numAleatorio <= 0.02) {
          topoVerde = document.getElementById("imatge1" + num);
          topoVerde.style.display = "block";
        } else if (numAleatorio <= 0.05) {
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
  audio.volume = 0.05;
  audio.loop = true;
  audio.playbackRate = 1;
  audio.play();
}

function jocAcabat() {
    console.log("Joc Acabat");
    audio.pause();
    if (puntsInicial >= 150) {
      victoria();
    }
}

function botoSortidaJoc() {
  if (tempsRestant < 0) {
    window.location.href = "../save.php?nivel=5&puntos=" + puntsInicial;
  } else {
    aparicion = false;
    clearInterval(interval);

    modalAviso.style.display = "flex";
    botonNo.addEventListener("click", tancarModal);
  }
}

function tancarModal() {
  modalAviso.style.display = "none";
  aparicion = true;

  interval = setInterval(compteEnrere, 1000);
  asomaTopos();

  botonNo.removeEventListener("click", tancarModal);
}

function sortirSenseAcabarJoc() {
  if (tempsRestant > 0) {
    modalAviso.style.display = "none";
    window.location.href='../action_page.php';
  }
}


function victoria() {
    puntsFinal.innerHTML = `${puntsInicial}`;
    victoriaModal.style.display = "block";
    botonVictoria.addEventListener("click", sortirModalVictoria);
}

function sortirModalVictoria () {
  window.location.href = "../save.php?nivel=5&puntos=" + puntsInicial;
}