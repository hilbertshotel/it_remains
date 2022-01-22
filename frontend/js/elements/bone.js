
const initBone = () => {

  let
    boneImg = get("bone"),
    time = 0,
    vis = false,
    noBonePeriod = rand(100, 800),
    isBonePeriod = noBonePeriod + 30

  moveBone = (b, l, w, h, v) => {
    boneImg.style.bottom = `${b}px`
    boneImg.style.left = `${l}px`
    boneImg.style.width = `${w}px`
    boneImg.style.height = `${h}px`
    boneImg.style.visibility = v
  }

  return {

    insert: () => {

      if (time < noBonePeriod) {
        time++
      }
      
      else if (time < isBonePeriod) {
        if (!vis) { 
          boneImg.style.visibility = "visible"
          vis = true
        }
        time++
      }
      
      else {
        vis = false
        time = 0
        boneImg.style.visibility = "hidden"
      }

    },

    isInFront: () => {
      return vis
    },

    beTaken: () => {
      boneImg.style.animationName = "moveUp"
    },

    remove: () => {
      boneImg.style.animationName = ""
      moveBone(50, -200, 2020, 1180, "hidden") // this is hardcoded
      vis = false
      time = 0
    }

  }

}