const initHand = () => {

  let
    handImg = get("hand"),
    originalTop = parseInt(window.getComputedStyle(handImg).top)
    currentTop = originalTop
    direction = "down"

  return {

    take: (bone, addKey, score) => {

      handImg.style.visibility = "visible"

      if (direction === "down") {

        if (currentTop < -200) {
          currentTop += 2
          handImg.style.top = `${currentTop}px`
        } else {
          bone.beTaken()
          direction = "up"
        }

      } else {

        if (currentTop > -900) {
          currentTop -= 3
          handImg.style.top = `${currentTop}px`
        } else {
          bone.remove()
          direction = "down"
          handImg.style.visibility = "hidden"
          window.addEventListener("keydown", addKey)
          score.update()
        }

      }

    }

  }

}