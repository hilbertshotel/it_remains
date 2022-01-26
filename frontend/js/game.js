
const startGame = async(audio, images, menuDiv) => {

  // transition
  const transitionTime = 1300
  get("yellow").style.animationName = "fadeIn"
  await sleep(transitionTime)

  // load rest of images
  loadImages = (gameDiv, images) => {
    for (const image of images) {
      imgDiv = make("img", image.src, image.id)
      insert(gameDiv, imgDiv)
    }
  }

  clear(menuDiv)
  get("background1").style.bottom = "50px"
  get("background2").style.bottom = "50px"
  const gameDiv = get("game")
  loadImages(gameDiv, images)

  // handle key events
  let keyState = { ArrowDown: false }

  const addKey = (event) => { keyState[event.key] = true }
  const delKey = (event) => { keyState[event.key] = false }
  window.addEventListener('keydown', addKey)  
  window.addEventListener('keyup', delKey)

  // get game data
  let
    legs = initLegs(),
    steps = initSteps(),
    yellow = initYellow(),
    bone = initBone(),
    hand = initHand(),
    score = initScore()

  // start game loop
  const loop = () => {

    if (yellow.max()) { // GAME OVER
      clear(gameDiv)
      const endDiv = get("end")
      const msg = make("h1", "text=GAME OVER", "id=endMsg")
      insert(endDiv, msg)
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

  await sleep(transitionTime).then(() => {
    loop()
  })

}
