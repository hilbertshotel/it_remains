
const initPath = () => {

  let
    paths = [get("path1"), get("path2"), get("path3"), get("path4")]
    last = paths.length-1
    pos = 0

  return {

    move: () => {
      paths[pos].style.visibility = "hidden"
      pos = (pos === last ? 0 : pos+1)
      paths[pos].style.visibility = "visible"
    }

  }
}
