export default function hamburgerMenu(){
    const $btn = document.querySelector(".hamburger"),
      $menu = document.querySelector(".nav-links");

    document.addEventListener("click", (e) => {
      if (e.target.matches(".hamburger") || e.target.matches(`.hamburger *`)) {
        $btn.classList.toggle("is-active");
        $menu.classList.toggle("menu_opened");
      }
      if (e.target.matches(".nav-links a")) {
        $btn.classList.remove("is-active");
        $menu.classList.remove("menu_opened");
      }
    });
}