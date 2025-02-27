export default function scrollToTop(btn) {
  const $scrollBtn = document.querySelector(btn);
  if (!$scrollBtn) return; // Si no existe el botón, se detiene la ejecución

  const toggleVisibility = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    $scrollBtn.classList.toggle("hidden", scrollTop <= 300);
  };

  window.addEventListener("scroll", toggleVisibility);

  $scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
