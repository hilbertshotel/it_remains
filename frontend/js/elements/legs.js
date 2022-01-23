
const initLegs = () => {

  let
    leftLeg = get("leftLeg"),
    rightLeg = get("rightLeg"),
    originalBottom = "50px",
    counter = 0,
    leg = "left"

  moveLeg = (bot, path, l, legImg, sound) => {
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
      path.move()
      counter+=2
    } else if (counter > 152) { 
      counter+=2
    }
  } 

  return {

    walk: (path, audio) => {

      if (leg === "left") {
        let leftLegBottom = parseInt(window.getComputedStyle(leftLeg).bottom)
        moveLeg(leftLegBottom, path, "right", leftLeg, audio.leftStep)
      }
      
      else if (leg === "right") {
        let rightLegBottom = parseInt(window.getComputedStyle(rightLeg).bottom)
        moveLeg(rightLegBottom, path, "left", rightLeg, audio.rightStep)
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
