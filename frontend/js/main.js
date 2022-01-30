
const main = () => {

  //div
  const divs = {
    background: get("background"),
    menu: get("menu"),
    game: get("game"),
    yellow: get("yellow"),
    end: get("end")
  }

  // audio
  const audio = {
    music: make("audio", "src=audio/music.ogg"),
    leftStep: make("audio", "src=audio/left_footstep.ogg"),
    rightStep: make("audio", "src=audio/right_footstep.ogg"),
    pickup: make("audio", "src=audio/pickup.ogg")
  }

  // images
  const images = [
    { src: "src=images/background1.png", id: "id=background1" },
    { src: "src=images/background2.png", id: "id=background2" },
    { src: "src=images/steps1.png", id: "id=steps1" },
    { src: "src=images/steps2.png", id: "id=steps2" },
    { src: "src=images/steps3.png", id: "id=steps3" },
    { src: "src=images/steps4.png", id: "id=steps4" },
    { src: "src=images/leftLeg.png", id: "id=leftLeg" },
    { src: "src=images/rightLeg.png", id: "id=rightLeg" },
    { src: "src=images/bone.png", id: "id=bone" },
    { src: "src=images/hand.png", id: "id=hand" },
    { src: "src=images/handGrab.png", id: "id=handGrab" }
  ]

  // load background
  const
    image1 = images[0],
    image2 = images[1],
    background1 = make("img", image1.src, image1.id),
    background2 = make("img", image2.src, image2.id)

  insert(divs.background, background1, background2)

  // load menu
  const
    logo = make("img", "id=logo", "src=images/logo.png"),
    h1 = make("h1", "text=It remains", "id=header"),
    button = make("button", "text=resist", "id=startButton"),
    rest = images.slice(2)
  
  button.onclick = () => {
    audio.music.loop = true
    audio.music.play()
    startGame(audio, rest, divs)
  }

  insert(divs.menu, logo, h1, button)

}


main()
