
const initLegs = () => {

  let
    leftLeg = get("leftLeg"),
    rightLeg = get("rightLeg"),
    originalBottom = "50px",
    counter = 0,
    leg = "left"

  moveLeg = (bot, path, l, legImg) => {
    if (counter >= 150) {
      counter = 0
      leg = l
      path.move()
      // audio.footsteps.play()
    } else if (counter < 75) {
      legImg.style.bottom = `${bot+4}px`
      counter+=2
    } else if (counter >= 75) {
      legImg.style.bottom = `${bot-8}px`
      counter+=4
    }
  } 

  return {

    walk: (path) => {

      // it think it's not very smart to call getComputedStyle in the game loop

      if (leg === "left") {
        let leftLegBottom = parseInt(window.getComputedStyle(leftLeg).bottom)
        moveLeg(leftLegBottom, path, "right", leftLeg)
      }
      
      else if (leg === "right") {
        let rightLegBottom = parseInt(window.getComputedStyle(rightLeg).bottom)
        moveLeg(rightLegBottom, path, "left", rightLeg)
      }

    },

    stop: () => {
      leftLeg.style.bottom = originalBottom
      rightLeg.style.bottom = originalBottom
      counter = 0
      leg = "left"
    }

  }
}
