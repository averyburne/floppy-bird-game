const gameboard = document.getElementById('game-canvas')
const gameboardCtx = gameboard.getContext('2d')
const background = new Image()
const bird = new Image()

background.src = "js/images/flappy-bird-background.png"
bird.src = "js/images/flappy-bird.png"


function main() {
    draw()
    setTimeout(function onTick() {
        draw()
        main()
    }, 100)
}

function drawBird() {

}

function draw() {
    // gameboardCtx.fillStyle = 'white'
    // gameboardCtx.strokestyle = 'black'
    // gameboardCtx.fillRect(0, 0, gameboard.width, gameboard.height)
    // gameboardCtx.strokeRect(0, 0, gameboard.width, gameboard.height)
    gameboardCtx.drawImage(background,0,0)
    gameboardCtx.drawImage(bird,10,10,30,30)
}