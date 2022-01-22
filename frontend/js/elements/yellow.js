
const initYellow = () => {

  let
    yellowDiv = get("yellow"),
    opacity = 0,
    incrCounter = 0,
    decrCounter = 0,
    incremented = false,
    decremented = false

  return {

    // increment yellow opacity
    incr: () => {

      if (opacity < 1) {

        if (incrCounter === 10) {
          incrCounter = 0
          incremented = false
        }

        if (!incremented) {
          opacity += .03
          yellowDiv.style.opacity = `${opacity}`
          incremented = true
        } else {
          incrCounter++
        }

      }
    },

    // decrement yellow opacity
    decr: () => {

      if (opacity > 0) {

        if (!decremented) {
          opacity -= .03
          yellowDiv.style.opacity = `${opacity}`
          decremented = true
        } else {
          decrCounter++
        }

        if (decrCounter === 10) {
          decrCounter = 0
          decremented = false
        }

      }
    },

    // game over condition
    max: () => {
      return opacity >= 1
    }

  }
}
