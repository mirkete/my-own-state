import { mirState } from "./mirstate.js";

const colorBox = document.querySelector(".color-box")
const colorInput = document.querySelector("#color-input")

function modifyColor (color) {
  colorBox.style.backgroundColor = color
}

const [getColor, setColor] = mirState(modifyColor, "transparent")

colorInput.addEventListener("keyup", () => {
  if (colorInput.value) {
    setColor(colorInput.value)
  } else {
    setColor("transparent")
  }
})