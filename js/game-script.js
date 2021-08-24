const gameboard = document.getElementById('game-canvas')
const gameboardCtx = gameboard.getContext('2d')
const background = new Image()
const bird = new Image()
const pipe = new Image()
let by = 200

background.src = "js/images/flappy-bird-background.png"
bird.src = "js/images/flappy-bird.png"
pipe.src = "js/images/flappy-bird-pipe.png"

document.addEventListener("keydown", moveBird)

function main() {
    setTimeout(function onTick() {
        draw()
        main()
    }, 1000)
}

function moveBird() {
    by -= 50
    console.log('hi')
}

function draw() {
    by += 1
    console.log(by)
    // gameboardCtx.fillStyle = 'white'
    // gameboardCtx.strokestyle = 'black'
    // gameboardCtx.fillRect(0, 0, gameboard.width, gameboard.height)
    // gameboardCtx.strokeRect(0, 0, gameboard.width, gameboard.height)
    gameboardCtx.drawImage(background,0,0)
    gameboardCtx.drawImage(bird,10,by,30,30)
    gameboardCtx.drawImage(pipe,200,250)
}