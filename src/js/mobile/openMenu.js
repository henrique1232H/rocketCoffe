export const openMenu = () => {
  const form = document.querySelector(".openMenuMobile");
  const menu = document.querySelector(".menuMobile");
  const main = document.querySelector("main");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.querySelector("button").classList.toggle("open");
    menu.classList.toggle("visibility");
    main.classList.toggle("visibility");
  });
};
