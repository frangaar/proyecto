document.addEventListener("DOMContentLoaded", asomaTopos);
document.addEventListener("DOMContentLoaded", musicaFons);
const minutsInicial = 0.1;
let tempsRestant = minutsInicial * 60;
const temps = document.getElementById("temporitzador");
let interval = setInterval(compteEnrere, 1000);
let aparicion = true;
let puntsInicial = 0;
let volver = document.getElementById("tornarBoto");
const modal = document.getElementById("confirmarSortida");
const botonCerrar = document.getElementById("no");

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
      const numTopos = Math.floor(Math.random() * 4) + 1;

      for (let i = 0; i < numTopos; i++) {
        let num;
        // do {
        num = Math.floor(Math.random() * 9) + 1;
        // } while (
        //   document.getElementById("imatge" + num).style.display === "block"
        // );

        const numAleatorio = Math.random();
        console.log(numAleatorio);
        if (numAleatorio < 0.1) {
          const topoVerde = document.getElementById("imatge1" + num);
          topoVerde.style.display = "block";
        } else if (numAleatorio < 0.35) {
          const topoRojo = document.getElementById("imatge2" + num);
          topoRojo.style.display = "block";
        } else {
          const topo = document.getElementById("imatge" + num);
          topo.style.display = "block";
        }
      }

      setTimeout(asomaTopos, 1300);
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
        }, 200);
      }
    });

    topoVerde.addEventListener("click", () => {
      if (tempsRestant > 0) {
        puntsInicial += 20;
        const punts = document.getElementById("puntuacio");
        punts.innerHTML = `${puntsInicial}`;
        topoVerde.src = "img/topo-golpeado-verde.png";
        setTimeout(() => {
          topoVerde.style.display = "none";
          topoVerde.src = "img/topoVerde.png";
        }, 200);
      }
    });

    topoRojo.addEventListener("click", () => {
      if (tempsRestant > 0) {
        puntsInicial -= 10;
        const punts = document.getElementById("puntuacio");
        punts.innerHTML = `${puntsInicial}`;
        topoRojo.src = "img/topo-golpeado-rojo.png";
        setTimeout(() => {
          topoRojo.style.display = "none";
          topoRojo.src = "img/topoRojo.png";
        }, 200);
      }
    });
  }
}

function musicaFons() {
  let audio = new Audio("./audios/minecraft4.mp3");

  audio.volume = 1;
  audio.loop = true;
  audio.playbackRate = 1.5;
  audio.play();
}

function jocAcabat() {
  if (tempsRestant > 0) {
    console.log("Joc Acabat");
  }
}
jocAcabat();

function sortidaJoc() {
  volver.addEventListener("click", function () {
    if (tempsRestant < 0) {
      window.location.href = "../save.php?nivel=5&puntos=" + puntsInicial;
    } else {
      aparicion = false;
      clearInterval(interval);

      modal.style.display = "flex";
      botonCerrar.addEventListener("click", tancarModal)
    }
  });
}

sortidaJoc();

function tancarModal() {
  modal.style.display = "none";
  aparicion = true;

  interval = setInterval(compteEnrere, 1000);
  asomaTopos();

  botonCerrar.removeEventListener("click", tancarModal);
}
