
const main = () => {

  loadMenu = (gameDiv) => {
    const h1 = make("h1", "text=It remains", "id=header")
    const button = make("button", "text=Start game", "id=startButton")
    button.onclick = () => {
      // audio.music.play()
      startGame()
    }
    insert(gameDiv, h1, button)
  }

  const gameDiv = get("game")
  loadMenu(gameDiv)

}


main()