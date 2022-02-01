
const initLegs = (images) => {

  let
    leftLeg = images.leftLeg,
    rightLeg = images.rightLeg,
    originalBottom = "50px",
    counter = 0,
    leg = "left"

  moveLeg = (bot, steps, l, legImg, sound) => {
    if (counter >= 162) {
      counter = 0
      leg = l
    } else if (counter < 75) {
      legImg.style.bottom = `${bot+4}px`
      counter+=2
    } else if (counter < 150) {
      legImg.style.bottom = `${bot-8}px`
      counter+=4
    } else if (counter === 152) {
      sound.play()
      steps.move()
      counter+=2
    } else if (counter > 152) { 
      counter+=2
    }
  } 

  return {

    walk: (steps, audio) => {

      if (leg === "left") {
        let leftLegBottom = parseInt(window.getComputedStyle(leftLeg).bottom)
        moveLeg(leftLegBottom, steps, "right", leftLeg, audio.leftStep)
      }
      
      else if (leg === "right") {
        let rightLegBottom = parseInt(window.getComputedStyle(rightLeg).bottom)
        moveLeg(rightLegBottom, steps, "left", rightLeg, audio.rightStep)
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
