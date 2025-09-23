
const ramzanDate = new Date("February 20, 2026 00:00:00");

function updateCountdown() {
  const now = new Date(); 
  const diff = ramzanDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = 
      "<h2>🌙 Ramzan Mubarak! 🌙</h2>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);


  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}


const timer = setInterval(updateCountdown, 1000);
updateCountdown();