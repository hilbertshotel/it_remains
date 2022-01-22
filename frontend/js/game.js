
const startGame = () => {

  // load game elements
  loadImages = (gameDiv, images) => {
    for (const image of images) {
      imgDiv = make("img", image.src, image.id)
      insert(gameDiv, imgDiv)
    }
  }

  const images = [
    { src: "src=images/background1.png", id: "id=background1" },
    { src: "src=images/background2.png", id: "id=background2" },
    { src: "src=images/path1.png", id: "id=path1" },
    { src: "src=images/path2.png", id: "id=path2" },
    { src: "src=images/path3.png", id: "id=path3" },
    { src: "src=images/leftLeg.png", id: "id=leftLeg" },
    { src: "src=images/rightLeg.png", id: "id=rightLeg" },
    { src: "src=images/bone.png", id: "id=bone" },
    { src: "src=images/hand.png", id: "id=hand" }
  ]

  const gameDiv = get("game")
  clear(gameDiv)
  loadImages(gameDiv, images)

  // handle key events
  let keyState = { ArrowDonw: false }

  const addKey = (event) => { keyState[event.key] = true }
  const delKey = (event) => { keyState[event.key] = false }
  window.addEventListener('keydown', addKey)  
  window.addEventListener('keyup', delKey)

  // get game data
  let
    legs = initLegs(),
    path = initPath(),
    yellow = initYellow(),
    bone = initBone(),
    hand = initHand(),
    score = initScore()

  // start game loop
  const loop = () => {

    if (yellow.max()) {
      const yellowDiv = get("yellow")
      const msg = make("h1", "text=GAME OVER")
      insert(yellowDiv, msg)
      return
    }

    else if (keyState["ArrowDown"]) {
      legs.walk(path)
      yellow.decr()
      bone.insert()
    }

    else if (!keyState["ArrowDown"]) {
      legs.stop()
      yellow.incr()

      if (bone.isInFront()) {
        window.removeEventListener("keydown", addKey)
        hand.take(bone, addKey, score)
      }
    }

    window.requestAnimationFrame(loop)

  }

  loop()

}
