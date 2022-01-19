
const initPlayer = () => {

  // optimize and remove getComputedStyle call on every function call

  let
    leftLeg = get("leftLeg"),
    rightLeg = get("rightLeg"),
    originalBottom = "50px",
    counter = 0,
    leg = "left"

  return {

    walk: (path) => {

      if (leg === "left") {

        // move left leg
        let leftLegBottom = parseInt(window.getComputedStyle(leftLeg).bottom)

        if (counter >= 200) {
          counter = 0
          leg = "right"
          path.move()
        } else if (counter < 100) {
          leftLeg.style.bottom = `${leftLegBottom+4}px`
          counter+=2
        } else if (counter >= 100) {
          leftLeg.style.bottom = `${leftLegBottom-8}px`
          counter+=4
        }

      }
      
      else if (leg === "right") {

        // move right leg
        let rightLegBottom = parseInt(window.getComputedStyle(rightLeg).bottom)

        if (counter >= 200) {
          counter = 0
          leg = "left"
          path.move()
        } else if (counter < 100) {
          rightLeg.style.bottom = `${rightLegBottom+4}px`
          counter+=2
        } else if (counter >= 100) {
          rightLeg.style.bottom = `${rightLegBottom-8}px`
          counter+=4
        }

      }

    },

    // player stop
    stop: () => {
      leftLeg.style.bottom = originalBottom
      rightLeg.style.bottom = originalBottom
      counter = 0
      leg = "left"
    }

  }
}
