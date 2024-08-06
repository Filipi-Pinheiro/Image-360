const container = document.querySelector(".container")
const image = document.querySelector(".image-car")

const cursor = {
  isDragging : false,
  initialPosition : 0
}

let currentImage = 1

const updateImage = (direction) => {
  direction < 0 ? currentImage == 12 ? currentImage = 1 : currentImage += 1 : direction > 0 ? currentImage == 1 ? currentImage = 12 : currentImage -= 1 : currentImage

  image.src = `src/imagens/${currentImage}.jpg`
}

container.addEventListener('mousedown', (event) => {
  cursor.isDragging = true
  cursor.initialPosition = event.clientX
})

container.addEventListener('mouseup', () => {
  cursor.isDragging = false
})

container.addEventListener('mousemove', ({ clientX }) => {
  if(!cursor.isDragging) return;

  const offSet = cursor.initialPosition - clientX

  if(Math.abs(offSet) >= 50) {
    updateImage(offSet)
    cursor.initialPosition = clientX
  }
})