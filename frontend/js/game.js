
const startGame = async (audio, divs) => {

  // transition
  divs.yellow.style.animationName = "fadeIn"
  await sleep(500)

  // prep screen
  clear(divs.menu)
  get("background1").style.bottom = "50px"
  get("background2").style.bottom = "50px"

  // reveal rest of images
  divs.images.leftLeg.style.visibility = "visible"
  divs.images.rightLeg.style.visibility = "visible"
  divs.images.steps1.style.visibility = "visible"
  divs.images.hand.style.visibility = "visible"
  divs.images.hand.style.visibility = "visible"

  // handle key events
  let keyState = { ArrowDown: false }

  const addKey = (event) => { keyState[event.key] = true }
  const delKey = (event) => { keyState[event.key] = false }
  window.addEventListener('keydown', addKey)  
  window.addEventListener('keyup', delKey)

  // get game data
  const
    legs = initLegs(divs.images),
    steps = initSteps(divs.images),
    yellow = initYellow(divs.yellow),
    bone = initBone(divs.images.bone),
    hand = initHand(divs.images),
    score = initScore(divs.game)

  // start game loop
  const loop = () => {

    if (yellow.max()) { // GAME OVER
      clear(divs.game)
      const msg = make("h1", "text=GAME OVER", "id=endMsg")
      insert(divs.end, msg)
      return
    }

    else if (keyState["ArrowDown"]) {
      legs.walk(steps, audio)
      yellow.decr()
      bone.insert()
    }

    else if (!keyState["ArrowDown"]) {
      legs.stop()
      yellow.incr()

      if (bone.isInFront()) {
        window.removeEventListener("keydown", addKey)
        hand.take(bone, addKey, score, audio)
      }
    }

    window.requestAnimationFrame(loop)

  }

  (async () => {
    await sleep(500) 
    loop()
  })()

}
