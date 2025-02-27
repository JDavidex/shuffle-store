document.addEventListener("DOMContentLoaded", function () {
  const $logoContainer = document.querySelector(".navbar__logo a");
  if (!$logoContainer) return; // Si no existe el logo, se detiene la ejecución

  // Guarda la versión original del logo para escritorio
  const $desktopLogo = $logoContainer.innerHTML;

  // Define la versión del logo para dispositivos móviles con un SVG más pequeño y un texto
  const $mobileLogo = `<div style="display: flex; align-items: center; gap: 10px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="95" fill="none" viewBox="0 0 95 95">
          <path fill="#6B38F1" d="M60.417 0H19.576C14.348 0 9.426 2.105 5.732 5.909 2.038 9.719 0 14.779 0 20.16v6.175c0 8.224 5.023 15.43 13.441 19.283l3.36 1.418v-20.4a2.355 2.355 0 0 1-.02-.308v-6.175c0-1.046.518-1.727.825-2.042.307-.316.968-.85 1.976-.85h40.842a2.72 2.72 0 0 1 1.983.85c.308.315.818.996.818 2.035v13.55H80V20.154c0-5.383-2.038-10.45-5.732-14.252C70.56 2.098 65.645 0 60.418 0ZM66.49 49.345 63.2 47.956v20.54c.013.049.013.105.013.154v6.175a2.895 2.895 0 0 1-.825 2.05c-.306.315-.968.849-1.977.849H19.576c-1.54 0-2.795-1.299-2.795-2.877V61.296H0v13.55C0 85.963 8.78 95 19.576 95h40.841c5.228-.007 10.15-2.105 13.844-5.909 3.694-3.81 5.732-8.876 5.732-14.259v-6.175c0-8.301-5.044-15.522-13.503-19.304v-.008Z"></path>
          <path fill="#6B38F1" d="M39.996 68.6s-1.35-7.641-7.21-13.676v.007a26.622 26.622 0 0 0-2.366-2.14C25.097 48.552 19.487 47.5 19.487 47.5s7.423-1.39 13.291-7.425a25.873 25.873 0 0 0 2.972-3.698c3.374-5.073 4.24-9.992 4.24-9.992s1.356 7.649 7.218 13.683c.77.793 1.567 1.495 2.365 2.134 5.323 4.238 10.926 5.29 10.926 5.29s-7.423 1.397-13.285 7.432a25.842 25.842 0 0 0-2.965 3.698c-3.373 5.06-4.253 9.979-4.253 9.979Z"></path>
        </svg>
        <h2 class="header__logo-text">STORE</h2>
      </div>`;

  // Función que actualiza el logo según el tamaño de la pantalla
  function updateLogo() {
    $logoContainer.innerHTML =
      window.innerWidth <= 768 ? $mobileLogo : $desktopLogo;
  }

  // Se ejecuta la función al cargar la página y al cambio de tamaño de la ventana
  updateLogo();
  window.addEventListener("resize", updateLogo);
});
