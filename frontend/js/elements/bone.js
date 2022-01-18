
const initBone = () => {

  let
    boneImg = get("bone")
    counter = 0
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

      if (counter === 0) {
        moveBone(-150, -440, 2520, 1680, "visible")
        counter++
      }
      else if (counter < interval) {
        counter++
      }
      else if (counter === interval) {
        moveBone(50, -200, 2020, 1180, "visible") // TAKE HERE
        counter++
      }
      else if (counter < interval*2) {
        counter++
      }
      else if (counter === interval*2) {
        moveBone(200, 330, 920, 580, "visible")
        counter++
      }
      else if (counter < interval*3) {
        counter++
      }
      else if (counter === interval*3) {
        moveBone(280, 535, 500, 250, "visible")
        counter++
      } else if (counter < interval*4) {
        counter++
      }
      else if (counter === interval*4) {
        moveBone(310, 650, 250, 120, "visible")
        counter++
      } else if (counter < interval*5) {
        counter++
      }
      else {
        moveBone(-150, -520, 2520, 1680, "hidden")
        counter = 0
      }

    },

    isInFront: () => {
      return (counter >= 100 && counter < 200)
    }

  }

}