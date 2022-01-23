const initHand = () => {

  let
    handImg = get("hand"),
    handGrabImg = get("handGrab"),
    originalTop = parseInt(window.getComputedStyle(handImg).top),
    currentTop = originalTop,
    direction = "down",
    downSpeed = 4,
    upSpeed = 5

  const changeVisAndDir = (vis1, vis2, dir) => {
    handImg.style.visibility = vis1
    handGrabImg.style.visibility = vis2
    direction = dir
  }

  const changeTop = () => {
    handImg.style.top = `${currentTop}px`
    handGrabImg.style.top = `${currentTop}px`
  }

  return {

    take: (bone, addKey, score, audio) => {

      if (direction === "down") {

        if (currentTop < -200) {
          currentTop += downSpeed
          changeTop()
        }
        
        else {
          bone.hide()
          audio.pickup.play()
          changeVisAndDir("hidden", "visible", "up")
        }

      }
      
      else {

        if (currentTop > -900) {
          currentTop -= upSpeed
          changeTop()
        }
        
        else {
          bone.restore()
          changeVisAndDir("visible", "hidden", "down")
          window.addEventListener("keydown", addKey)
          score.update()
        }

      }
    }
  }
}