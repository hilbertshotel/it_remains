const initScore = () => {

  let
    yellowDiv = get("yellow")
    score = 0

  const scoreDiv = make("div", "id=score", "text=0")
  document.body.insertBefore(scoreDiv, yellowDiv)

  return {

    update: () => {
      score++
      scoreDiv.innerHTML = `${score}`
    }

  }

}