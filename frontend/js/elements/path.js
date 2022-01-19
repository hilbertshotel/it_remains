
const initPath = () => {

  let
    path1Div = get("path1"),
    path2Div = get("path2"),
    path3Div = get("path3"),
    counter = 0

  return {

    move: () => {
      
      if (counter === 0) {
        path1Div.style.visibility = "hidden"
        path2Div.style.visibility = "visible"
        counter++
      } else if (counter === 1) {
        path2Div.style.visibility = "hidden"
        path3Div.style.visibility = "visible"
        counter++
      } else {
        path3Div.style.visibility = "hidden"
        path1Div.style.visibility = "visible"
        counter = 0
      } 

    }

  }
}
