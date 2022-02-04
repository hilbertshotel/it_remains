const initScore = (div) => {

  let score = 0

  const scoreDiv = make("div", "id=score", "text=0")
  insert(div, scoreDiv)

  return {

    update: () => {
      score++
      scoreDiv.innerHTML = `${score}`
    },

    show: () => {
      return score
    }

  }

}