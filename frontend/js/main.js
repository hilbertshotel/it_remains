
main = () => {

  loadMenu = (gameDiv) => {
    const h1 = make("h1", "text=It remains")
    const button = make("button", "text=Start game")
    button.onclick = startGame
    insert(gameDiv, h1, button)
  }

  const gameDiv = get("game")
  loadMenu(gameDiv)

}


main()