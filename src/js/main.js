import { checkWidthScreen } from "./mobile/checkWidthScreen.js";
import { openMenu } from "./mobile/openMenu.js";

openMenu()

setInterval(() => {
    checkWidthScreen()
}, 50)