const gameboard = document.getElementById('game-canvas')
const gameboardCtx = gameboard.getContext('2d')

function clearCanvas() {
    gameboardCtx.fillStyle = 'white'
    gameboardCtx.strokestyle = 'black'
    gameboardCtx.fillRect(0, 0, gameboard.width, gameboard.height)
    gameboardCtx.strokeRect(0, 0, gameboard.width, gameboard.height)
}