const gameboard = document.getElementById('game-canvas')
const gameboardCtx = gameboard.getContext('2d')
const background = new Image()

background.src = "js/images/flappy-bird-background.png"

function main() {
    clearCanvas()
    setTimeout(function onTick() {
        clearCanvas()
        main()
    }, 100)
}

function drawBird() {

}

function clearCanvas() {
    gameboardCtx.fillStyle = 'white'
    gameboardCtx.strokestyle = 'black'
    gameboardCtx.fillRect(0, 0, gameboard.width, gameboard.height)
    gameboardCtx.strokeRect(0, 0, gameboard.width, gameboard.height)
    gameboardCtx.drawImage(background,0,0)
}