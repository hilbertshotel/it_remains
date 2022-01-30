const initScore = (gameDiv) => {

  let score = 0

  const scoreDiv = make("div", "id=score", "text=0")
  insert(gameDiv, scoreDiv)

  return {

    update: () => {
      score++
      scoreDiv.innerHTML = `${score}`
    }

  }

}