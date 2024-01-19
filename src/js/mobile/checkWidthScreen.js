
export const checkWidthScreen = () => {

    const widthScreen = window.innerWidth;
    
    widthScreen > 950 ? document.documentElement.classList.remove("mobile"): document.documentElement.classList.add("mobile");

    document.querySelector(".Text").classList.remove("container")
}