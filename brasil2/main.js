function asomaTopos() {
  // poner todos a display none
  for (let i = 1; i <= 9; i++) {
    const topo = document.getElementById("imatge" + i);
    topo.style.display = "none";
  }

  let ultimoNum;
  let num;
  // genera un nuevo número hasta que sea diferente al último número
  do {
    num = Math.floor(Math.random() * 9) + 1;
  } while (num === ultimoNum);

  // almacena el número actual
  ultimoNum = num;

  // pinta el topo en el id = num
  const topo = document.getElementById("imatge" + num);
  topo.style.display = "block";

  setTimeout(asomaTopos, 900);
}

document.addEventListener("DOMContentLoaded", asomaTopos);


const cursor = document.querySelector(".cursor");

//el cursor tiene la apariencia de un martillo
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  document.body.style.cursor = "none";
});

//el martillo da un golpe al hacer click con el raton
window.addEventListener("mousedown", () => {
  cursor.classList.add("click");
});

//el martillo vuelva a su posicion al soltar el click del raton
window.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
});

const minutsInicial = 1;
let tempsRestant = minutsInicial * 60;

const temps = document.getElementById('temporitzador');

let interval = setInterval(compteEnrere,1000)


function compteEnrere() {
  const minuts = Math.floor(tempsRestant / 60);
  let segons = tempsRestant % 60;

  segons = segons < 10 ? '0' + segons : segons;

  temps.innerHTML = `${minuts}: ${segons}`;
  tempsRestant--;

  if (tempsRestant < 0) {
    clearInterval(interval);
  }
}
