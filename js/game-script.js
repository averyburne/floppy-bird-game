const gameboard = document.getElementById('game-canvas')
const gameboardCtx = gameboard.getContext('2d')
const background = new Image()
const bird = new Image()
let by = 200

background.src = "js/images/flappy-bird-background.png"
bird.src = "js/images/flappy-bird.png"

document.addEventListener("keydown", moveBird)

function main() {
    draw()
    setTimeout(function onTick() {
        draw()
        main()
        by += 1
        console.log(by)
    }, 100)
}

function moveBird() {
    by -= 50
    console.log('hi')
}

function draw() {
    // gameboardCtx.fillStyle = 'white'
    // gameboardCtx.strokestyle = 'black'
    // gameboardCtx.fillRect(0, 0, gameboard.width, gameboard.height)
    // gameboardCtx.strokeRect(0, 0, gameboard.width, gameboard.height)
    gameboardCtx.drawImage(background,0,0)
    gameboardCtx.drawImage(bird,10,by,30,30)
}