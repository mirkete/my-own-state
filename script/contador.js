import { mirState } from "./mirstate.js"

const counter = document.getElementById("counter")
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")

function modifyCounter (value) {
  counter.innerHTML = value
  if (getCounter() >= 10) {
    console.log("> 10!")
  }
}

const [getCounter, setCounter] = mirState(modifyCounter, 0)

function incrementar () {
  setCounter(getCounter() + 1)
}

function decrementar () {
  setCounter(getCounter() - 1)
}

increment.onclick = incrementar
decrement.onclick = decrementar