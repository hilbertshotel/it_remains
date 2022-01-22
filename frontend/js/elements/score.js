const initScore = () => {

  let
    gameDiv = get("game"),
    score = 0

  const scoreDiv = make("div", "id=score", "text=0")
  insert(gameDiv, scoreDiv)

  return {

    update: () => {
      score++
      scoreDiv.innerHTML = `${score}`
    }

  }

}