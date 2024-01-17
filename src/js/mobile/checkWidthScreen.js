
export const checkWidthScreen = () => {

    const widthScreen = window.innerWidth;
    
    widthScreen > 800 ? document.documentElement.classList.remove("mobile"): document.documentElement.classList.add("mobile");
}