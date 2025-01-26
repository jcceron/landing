// Countdown para la oferta
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const targetDate = new Date('2023-12-31T23:59:59').getTime();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(interval);
    countdown.innerHTML = "¡La oferta ha terminado!";
  }
}

const interval = setInterval(updateCountdown, 1000);

// Manejo del formulario de suscripción
document.getElementById('suscripcion-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.querySelector('input').value;
  alert(`¡Gracias por suscribirte, ${email}! Revisa tu correo para obtener tu descuento.`);
  this.reset();
});
