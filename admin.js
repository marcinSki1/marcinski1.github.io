const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.screen.availHeight
const VELOCITY = 15
const MARGIN = 15
const TOP_MARGIN = 50
const TICK_LENGTH = 50



function moveWindowBounce() {
    let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
    let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1)

  
    setInterval(() => {
      const x = window.screenX
      const y = window.screenY
      const width = window.outerWidth
      const height = window.outerHeight
  
      if (x < MARGIN) vx = Math.abs(vx)
      if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx)
      if (y < TOP_MARGIN) vy = Math.abs(vy)
      if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy)
  
      window.moveBy(vx, vy)
    }, TICK_LENGTH)
}

moveWindowBounce();


