document.addEventListener('DOMContentLoaded', () => {
    // Fecha: 6 de Junio de 2026 a las 21:00 hs
    const eventDate = new Date('2026-06-06T21:00:00').getTime();

    function update() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "¡ES HOY!";
            return;
        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizamos los números
        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;
    }

    update(); // Ejecuta al cargar para que no aparezca en 00
    setInterval(update, 1000); // Sigue actualizando cada segundo
});