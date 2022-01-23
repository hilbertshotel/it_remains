
const main = () => {

  const audio = {
    music: make("audio", "src=audio/music.ogg"),
    leftStep: make("audio", "src=audio/left_footstep.ogg"),
    rightStep: make("audio", "src=audio/right_footstep.ogg"),
    pickup: make("audio", "src=audio/pickup.ogg")
  }

  loadMenu = (gameDiv) => {
    const h1 = make("h1", "text=It remains", "id=header")
    const button = make("button", "text=Start game", "id=startButton")
    button.onclick = () => {
      audio.music.loop = true
      audio.music.play()
      startGame(audio)
    }
    insert(gameDiv, h1, button)
  }

  const gameDiv = get("game")
  loadMenu(gameDiv)

}


main()