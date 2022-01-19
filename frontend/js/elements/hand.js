const initHand = () => {

  let
    handImg = get("hand"),
    originalTop = parseInt(window.getComputedStyle(handImg).top)
    currentTop = originalTop
    direction = "down"
    downSpeed = 4
    upSpeed = 5

  return {

    take: (bone, addKey, score) => {

      if (direction === "down") {

        if (currentTop < -200) {
          currentTop += downSpeed
          handImg.style.top = `${currentTop}px`
        }
        
        else {
          bone.beTaken()
          direction = "up"
        }

      }
      
      else {

        if (currentTop > -900) {
          currentTop -= upSpeed
          handImg.style.top = `${currentTop}px`
          console.log(currentTop)
        }
        
        else {
          console.log(currentTop)
          bone.remove()
          direction = "down"
          window.addEventListener("keydown", addKey)
          score.update()
        }

      }
    }
  }
}