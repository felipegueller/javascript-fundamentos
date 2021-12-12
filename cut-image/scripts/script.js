const selectImageBtn = document.querySelector('#select-image')
const photoFileInput = document.querySelector('#photo-file')
const selectionTool = document.querySelector('#selection-tool')
let photoPreview = document.querySelector('img#photo-preview')
let image = new Image()

/* ---- Select and preview image ----*/
selectImageBtn.onclick = () => {
  photoFileInput.click()
}

window.addEventListener('DOMContentLoaded', () => {
  photoFileInput.onchange = () => {

    // Get the image
    let file = photoFileInput.files.item(0)

    // Read a file
    let reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = event => {
      // set the image in HTML
      image.src = event.target.result
    }
  }
})

/* ---- Select tool ---- */

let startX, startY, relativeStartX, relativeStartY,
endX, endY, relativeEndX, relativeEndY
let startSelection = false // flag

const events = {
  mousedown() {
    const {clientX, clientY, offsetX, offsetY} = event
    // console.table({
    //   'client': [clientX, clientY],
    //   'offset': [offsetX, offsetY]
    // })

    startX = clientX
    startY = clientY
    relativeStartX = offsetX
    relativeStartY = offsetY

    startSelection = true
  },
  mouseup() {
    /* drop the selector */
    startSelection = false

    // layerX and layerY make the position caculation to us
    relativeEndX = event.layerX
    relativeEndY = event.layerY
  },
  mouseover(){
    // this === photo-preview
    this.style.cursor = 'crosshair'
  },
  mousemove() {
    endX = event.clientX
    endY = event.clientY

    if(startSelection) {
      /* drawing the selection tool */
      selectionTool.style.display = 'initial'
      selectionTool.style.top = startY + 'px'
      selectionTool.style.left = startX + 'px'

      selectionTool.style.width = (endX - startX) + 'px'
      selectionTool.style.height = (endY - startY) + 'px'
    }
  }
}

Object.keys(events)
.forEach(eventName => {
  photoPreview.addEventListener(eventName, events[eventName])
})

/* ---- Canvas --- */

let canvas = document.createElement('canvas')
/* getting context of canvas to insert an image */
let ctx = canvas.getContext('2d')

image.onload = () => {
  const { width, height } = image

  /* setting the canva's width and height */
  canvas.width = width
  canvas.height = height

  /* cleaning the context */
  ctx.clearRect(0, 0, width, height)

  /* drawing the image on the  context */
  ctx.drawImage(image, 0, 0)

  /* adding the cutted image */
  photoPreview.src = canvas.toDataURL()
}