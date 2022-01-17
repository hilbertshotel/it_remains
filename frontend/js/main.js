
// MAIN
var keyState = {}

window.addEventListener('keydown', (event) => {
    keyState[event.key] = true
})  

window.addEventListener('keyup', (event) => {
    keyState[event.key] = false
})


startGame = () => {

  let re = resistor()
  re.debug()

  loop = () => {

    if (keyState["ArrowDown"]) {
      re.walk()
    }

    if (!keyState["ArrowDown"]) {
      re.stop()
    }

    window.requestAnimationFrame(loop)

  }

  loop()

}


startGame()
