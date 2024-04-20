const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.screen.availHeight
const WIN_WIDTH = 480
const WIN_HEIGHT = 360
const MARGIN = 15
const TOP_MARGIN = 50

function openWindow () {
    const { x, y } = getRandomCoords()
    const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`
    const win = window.open('sigma.html', '', opts)

    const photo = document.createElement('img');
    photo.src = 'images/middle.png';
    photo.style = 'top: 0; left: 0; position: absolute; width: 100%; height: 100%; object-fit: fill;'
    document.body.appendChild(photo);

    const all = document.querySelector('.container');
    all.remove();
}    
function getRandomCoords () {
    const x = MARGIN +
      Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN))
    const y = TOP_MARGIN +
      Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - TOP_MARGIN))
    return { x, y }
}
