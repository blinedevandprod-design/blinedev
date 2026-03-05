/*formato de las minifotos */
document.addEventListener('DOMContentLoaded', () => {

    const miniaturas = document.querySelectorAll('.miniatura');
    const fotoPrincipal = document.getElementById('fotoPrincipal');

    fotoPrincipal.style.transition = "opacity 0.3s ease";

    miniaturas.forEach(min => {
        min.addEventListener('click', () => {
            miniaturas.forEach(m => m.classList.remove('activa'));
            min.classList.add('activa');

            fotoPrincipal.style.opacity = "0";
            setTimeout(() => {
                fotoPrincipal.style.backgroundImage = `url('${min.dataset.img}')`;
                fotoPrincipal.style.opacity = "1";
            }, 300);
        });
    });

    // ✅ Video en bucle
    const video = document.querySelector('.cw-imagen video');
    if (video) {
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });
    }

});
