
const initSteps = (images) => {

  const steps = [images.steps1, images.steps2, images.steps3, images.steps4]
  let pos = 0

  return {

    move: () => {
      steps[pos].style.visibility = "hidden"
      pos = pos === 3 ? 0 : pos+1
      steps[pos].style.visibility = "visible"
    }

  }

}
