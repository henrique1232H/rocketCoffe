let labelboolean = true;
let mode;

export const openMenu = () => {
  const form = document.querySelector(".openMenuMobile");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    labelboolean ? (mode = "menu aberto") : (mode = "menu fechado");

    form.querySelector("button").classList.toggle("open");

    form.querySelector("label").innerHTML = `${mode}`;

    document.querySelector(".menuMobile").classList.toggle("visibility");
    document.querySelector("main").classList.toggle("visibility");

    labelboolean = !labelboolean;
  });
};
