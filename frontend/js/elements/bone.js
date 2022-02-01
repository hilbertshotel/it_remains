
const initBone = (boneImg) => {

  let
    time = 0,
    vis = false,
    noBonePeriod = rand(50, 350),
    isBonePeriod = noBonePeriod + 50

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
        boneImg.style.visibility = "hidden"
        vis = false
        time = 0
      }

    },

    isInFront: () => {
      return vis
    },

    hide: () => {
      boneImg.style.visibility = "hidden"
    },

    restore: () => {
      vis = false
      time = 0
    }

  }

}