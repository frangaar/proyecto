document.addEventListener("DOMContentLoaded", asomaTopos);
window.addEventListener("DOMContentLoaded", musicaFons);
const minutsInicial = 1;
let tempsRestant = minutsInicial * 60;
const temps = document.getElementById("temporitzador");
let interval = setInterval(compteEnrere, 1000);

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
  for (let i = 1; i <= 9; i++) {
    const topo = document.getElementById("imatge" + i);
    topo.style.display = "none";
  }
  if (tempsRestant > 0) {
    const numTopos = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < numTopos; i++) {
      let num;
      do {
        num = Math.floor(Math.random() * 9) + 1;
      } while (
        document.getElementById("imatge" + num).style.display === "block"
      );

      const topo = document.getElementById("imatge" + num);
      topo.style.display = "block";
    }
    
    setTimeout(asomaTopos, 1300);
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
  let puntsInicial = 0;

  for (let i = 1; i <= 9; i++) {
    const topo = document.getElementById("imatge" + i);

    topo.addEventListener("click", () => {
      if (tempsRestant > 0) {
        puntsInicial += 10;
        const punts = document.getElementById("puntuacio");
        punts.innerHTML = `${puntsInicial}`;
        topo.src = "img/mole-whacked.png"
        setTimeout(() => {
          topo.style.display = "none";
          topo.src = "img/topo.png";
        }, 500);
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
