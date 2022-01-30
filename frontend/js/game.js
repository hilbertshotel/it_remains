
const startGame = (audio, images, divs) => {

  // prep screen
  clear(divs.menu)
  get("background1").style.bottom = "50px"
  get("background2").style.bottom = "50px"

  // load rest of images
  for (const image of images) {
    imgDiv = make("img", image.src, image.id)
    insert(divs.game, imgDiv)
  }

  // handle key events
  let keyState = { ArrowDown: false }

  const addKey = (event) => { keyState[event.key] = true }
  const delKey = (event) => { keyState[event.key] = false }
  window.addEventListener('keydown', addKey)  
  window.addEventListener('keyup', delKey)

  // get game data
  const
    legs = initLegs(),
    steps = initSteps(),
    yellow = initYellow(divs.yellow),
    bone = initBone(),
    hand = initHand(),
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

  loop()

}
