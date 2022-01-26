
const initSteps = () => {

  let
    noSteps = get("steps1"),
    firstStep = get("steps2"),
    leftStep = get("steps3"),
    rightStep = get("steps4"),
    // steps = [get("steps3"), get("steps4")],
    // last = steps.length-1,
    pos = 0

  return {

    move: () => {

      if (pos === 0 ) {
        noSteps.style.visibility = "hidden"
        firstStep.style.visibility = "visible"
        pos++
      }

      else if (pos === 1) {
        firstStep.style.visibility = "hidden"
        leftStep.style.visibility = "visible"
        pos++
      }

      else if (pos === 2) {
        leftStep.style.visibility = "hidden"
        rightStep.style.visibility = "visible"
        pos++
      }

      else {
        rightStep.style.visibility = "hidden"
        leftStep.style.visibility = "visible"
        pos--
      }
      
    }

  }
}
