
startGame = () => {

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

  window.addEventListener('keydown', (event) => {
      keyState[event.key] = true
  })  

  window.addEventListener('keyup', (event) => {
      keyState[event.key] = false
  })


  // get game data
  let
    player = initPlayer(),
    path = initPath(),
    yellow = initYellow(),
    bone = initBone()

  counter = 0

  // start game loop
  loop = () => {

    if (yellow.max()) {
      const yellowDiv = get("yellow")
      const msg = make("h1", "text=GAME OVER")
      insert(yellowDiv, msg)
      return
    }

    else if (keyState["ArrowDown"]) {
      player.walk(path)
      yellow.decr()
      
      counter++ // FOR SOME REASON THE isInFront FUNCTION TAKES THIS COUNTER? SCOPE ISSUE?
      console.log(counter)

      if (counter === 500) {
        bone.insert()
        counter = 0
      }
    }

    else if (!keyState["ArrowDown"]) {
      player.stop()
      yellow.incr()

      if (bone.isInFront()) {
        // hand.grab()
        console.log("GOOD FOR THE TAKING")
      }
    }

    window.requestAnimationFrame(loop)

  }

  loop()

}
