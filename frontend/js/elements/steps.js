
const initSteps = () => {

  const steps = [get("steps1"), get("steps2"), get("steps3"), get("steps4")]
  let pos = 0

  return {

    move: () => {
      steps[pos].style.visibility = "hidden"
      pos = pos === 3 ? 0 : pos+1
      steps[pos].style.visibility = "visible"
    }

  }

}
