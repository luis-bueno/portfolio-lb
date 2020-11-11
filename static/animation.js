let textString
let textArray
let textLength

let letterDelay
let textDelay
let textResult

setTimeout(doAnimation, 500)

async function doAnimation() {
  await animation("Developer that design", "alternate")
  await animation("Designer that code", "alternate")
  animation("Frontend Engineer", "normal")
}

async function animation(textString, direction) {
  setText(textString)
  let textAnimation = anime
    .timeline({ direction: direction })
    .add({
      targets: ".h1-animation .line",
      opacity: [0, 1],
      easing: "linear",
      duration: 500,
    })
    .add({
      targets: ".h1-animation .line",
      translateX: [
        0,
        document.querySelector(".h1-animation .word").getBoundingClientRect()
          .width,
      ],
      easing: "linear",
      duration: textDelay,
    })
    .add({
      targets: ".h1-animation .letter",
      opacity: [0, 1],
      easing: "linear",
      duration: 15,
      offset: `-=${textDelay}`,
      delay: (el, i) => letterDelay * i,
    })
    .add({
      targets: ".h1-animation .line",
      opacity: [1, 0],
      easing: "linear",
      duration: 500,
    })

  await textAnimation.finished
}

function setText(textString) {
  document.querySelector(".h1-animation .word").innerHTML = textString

  let textWrapper = document.querySelector(".h1-animation .word")
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
  )

  textArray = textString.split("")
  textLength = textArray.length

  letterDelay = 15
  textDelay = textLength * letterDelay
  textResult = `-=${textDelay}`
}
