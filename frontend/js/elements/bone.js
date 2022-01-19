
const initBone = () => {

  let
    boneImg = get("bone")
    outer_counter = 0
    inner_counter = 0
    interval = 100

  moveBone = (b, l, w, h, v) => {
    boneImg.style.bottom = `${b}px`
    boneImg.style.left = `${l}px`
    boneImg.style.width = `${w}px`
    boneImg.style.height = `${h}px`
    boneImg.style.visibility = v
  }

  return {

    insert: () => {

      if (outer_counter < 1000) {
        outer_counter++
      } else if (outer_counter < 1501) {

        outer_counter++
      
        if (inner_counter === 0) {
          moveBone(-150, -440, 2520, 1680, "visible")
          inner_counter++
        }
        else if (inner_counter < interval) {
          inner_counter++
        }
        else if (inner_counter === interval) {
          moveBone(50, -200, 2020, 1180, "visible") // TAKE BONE HERE
          inner_counter++
        }
        else if (inner_counter < interval*2) {
          inner_counter++
        }
        else if (inner_counter === interval*2) {
          moveBone(200, 330, 920, 580, "visible")
          inner_counter++
        }
        else if (inner_counter < interval*3) {
          inner_counter++
        }
        else if (inner_counter === interval*3) {
          moveBone(280, 535, 500, 250, "visible")
          inner_counter++
        } else if (inner_counter < interval*4) {
          inner_counter++
        }
        else if (inner_counter === interval*4) {
          moveBone(310, 650, 250, 120, "visible")
          inner_counter++
        } else if (inner_counter < interval*5) {
          inner_counter++
        }
        else {
          moveBone(-150, -520, 2520, 1680, "hidden")
          inner_counter = 0
        }
      
      } else {
        outer_counter = 0
      }

    },

    isInFront: () => {
      return (inner_counter > 100 && inner_counter < 200)
    },

    beTaken: () => {
      boneImg.style.animationName = "moveUp"
    },

    remove: () => {
      moveBone(-150, -520, 2520, 1680, "hidden")
      boneImg.style.animationName = ""
      inner_counter = 0
      outer_counter = 0
    }

  }

}