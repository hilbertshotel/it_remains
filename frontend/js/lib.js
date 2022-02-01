// GET
const get = (id) => {
  return document.getElementById(id)
}

// MAKE
const MAKEOBJECT = {
  class: (e, v) => { e.className = v },
  id: (e, v) => { e.id = v },
  text: (e, v) => { e.innerHTML = v },
  src: (e, v) => { e.src = v },
}

const make = (type, ...properties) => {
  const element = document.createElement(type)
  for (const property of properties) {
    const [p1, p2] = property.split("=")
    MAKEOBJECT[p1](element, p2)
  }
  return element
}

// BLOCK
const block = (milliseconds) => {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}

// SLEEP
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// RAND
const rand = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// INSERT
const insert = (parent, ...elements) => {
  for (const element of elements) {
    parent.append(element)
  }
}

// CLEAR
const clear = (...elements) => {
  for (const element of elements) {
    element.innerHTML = ""
  }
}
