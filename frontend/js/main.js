
const main = () => {

  // divs and images
  const divs = {
    menu: get("menu"),
    game: get("game"),
    yellow: get("yellow"),
    end: get("end"),
    images: {
      steps1: get("steps1"),
      steps2: get("steps2"),
      steps3: get("steps3"),
      steps4: get("steps4"),
      leftLeg: get("leftLeg"),
      rightLeg: get("rightLeg"),
      bone: get("bone"),
      hand: get("hand"),
      handGrab: get("handGrab")
    }
  }

  // audio
  const audio = {
    music: make("audio", "src=audio/music.ogg"),
    leftStep: make("audio", "src=audio/left_footstep.ogg"),
    rightStep: make("audio", "src=audio/right_footstep.ogg"),
    pickup: make("audio", "src=audio/pickup.ogg")
  }

  // start button functionality
  buttonClick = () => {
    audio.music.loop = true
    audio.music.play()
    startGame(audio, divs)
  }

}


main()
