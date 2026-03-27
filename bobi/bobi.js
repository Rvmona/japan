var dataTarget = new Date("2026-05-10 00:00:00").getTime();

function aggiornaCountdown() {
  var adesso = new Date().getTime();
  var distanza = dataTarget - adesso;

  var giorni = Math.floor(distanza / (1000 * 60 * 60 * 24));
  var ore = Math.floor((distanza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuti = Math.floor((distanza % (1000 * 60 * 60)) / (1000 * 60));
  var secondi = Math.floor((distanza % (1000 * 60)) / 1000);

  document.getElementById("giorni").innerText = giorni;
  document.getElementById("ore").innerText = ore;
  document.getElementById("minuti").innerText = minuti;
  document.getElementById("secondi").innerText = secondi;

  if (distanza < 0) {
    document.getElementById("testo").innerText = "È arrivato il momento! 🇯🇵✨";
  }
}

setInterval(aggiornaCountdown, 1000);
aggiornaCountdown();

function creaPetalo() {
  var petalo = document.createElement("div");
  petalo.classList.add("sakura");

  petalo.style.left = Math.random() * window.innerWidth + "px";
  petalo.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.body.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 8000);
}

setInterval(creaPetalo, 200);