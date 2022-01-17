function resistor() {

  // STATE
  let
    LEFT_LEG = get("leftLeg"),
    RIGHT_LEG = get("rightLeg"),
    ORG_POS_LEFT_LEG_TOP = "-50px",
    ORG_POS_RIGHT_LEG_TOP = "-500px",
    COUNT = 0,
    LEG = "left"


  // FUNCTIONS
  return {

    debug: () => {
      let leftLegTop = parseInt(window.getComputedStyle(LEFT_LEG).top)
      let rightLegTop = parseInt(window.getComputedStyle(RIGHT_LEG).top)

      console.log(leftLegTop)
      console.log(rightLegTop)
    },

    walk: () => {

      if (LEG === "left") {

        // move left leg
        let left_leg_top = parseInt(window.getComputedStyle(LEFT_LEG).top)

        if (COUNT === 200) {
          COUNT = 0
          LEG = "right"
        } else if (COUNT < 100) {
          LEFT_LEG.style.top = `${left_leg_top-1}px`
          COUNT++
        } else if (COUNT >= 100) {
          LEFT_LEG.style.top = `${left_leg_top+1}px`
          COUNT++
        }

      } else if (LEG === "right") {

        // move right leg
        let right_leg_top = parseInt(window.getComputedStyle(RIGHT_LEG).top)

        if (COUNT === 200) {
          COUNT = 0
          LEG = "left"
        } else if (COUNT < 100) {
          RIGHT_LEG.style.top = `${right_leg_top-1}px`
          COUNT++
        } else if (COUNT >= 100) {
          RIGHT_LEG.style.top = `${right_leg_top+1}px`
          COUNT++
        }

      }
    },

    stop: () => {
      LEFT_LEG.style.top = ORG_POS_LEFT_LEG_TOP
      RIGHT_LEG.style.top = ORG_POS_RIGHT_LEG_TOP
      COUNT = 0
      LEG = "left"
    }

  }
}