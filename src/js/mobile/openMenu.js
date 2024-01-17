let labelboolean = true;
let mode;

export const openMenu = () => {
  const form = document.querySelector(".openMenuMobile");
  const menu = document.querySelector(".menuMobile");
  const main = document.querySelector("main");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();


    labelboolean ? mode = "menu aberto" : mode = "menu fechado"
  

    form.querySelector("button").classList.toggle("open");
    
    form.querySelector("label").innerHTML = `${mode}`
    menu.classList.toggle("visibility");
    main.classList.toggle("visibility");

    labelboolean = !labelboolean
  });
};
