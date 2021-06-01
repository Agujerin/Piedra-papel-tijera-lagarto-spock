"use strict"

//PRÁCTICA 3: piedra, papel o tijera
// -contra la máquina
// -establecer número de rondas
// -cuenta atrás de 3 segundos para elegir jugada
// -se pueden usar imágenes
// -cuando termina el juego se debe mostrar el ganador

const form = document.getElementById('form')
const main = document.getElementById('main')
const playerName = document.getElementById('player-name')
const rounds = document.getElementById('rounds')
const countdown = document.getElementById('countdown')
const start = document.getElementById('start-btn')
const playerOptions = document.getElementById('player-selection')
const playerPlay = document.getElementById('player-plays')
const cpuPlay = document.getElementById('cpu-plays')
const playerScore = document.getElementById('player-score')
const cpuScore = document.getElementById('cpu-score')
const winnerSign = document.getElementById('winner')
const winnerData = document.getElementById('winner-data')
const reloadBtn = document.getElementById('reload')

const plays = ['piedra', 'papel', 'tijera', 'lagarto', 'spock']
let cpuOp = ""
let playerOp = ""
let playerPoints = 0
let cpuPoints = 0

const userValidationAndStorage =(a,e)=>{
    if (a === "") e.target[0].setAttribute('placeholder',"DEBE INGESAR SU NOMBRE")
    else {
        
        // sessionStorage.clear()
        // sessionStorage.setItem('user',JSON.stringify(a))
        form.reset()
        main.classList.add('main-hide')
    }
}

const playerSelection =()=>{
    playerOptions.addEventListener('click',(e)=>{
        playerOp = e.target.id
        playerPlay.innerHTML = `<img src="img/${e.target.id}.png">`
    })
}

const cpuSelection =()=>{
    let data = Math.round(Math.random()*4)
    cpuOp = plays[data]
    cpuPlay.innerHTML = `<img src="img/${plays[data]}.png">`
}

const rounder =()=>{
    if (playerOp == ""){
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${playerName.textContent} pierde el punto por no elegir`
    }else if (cpuOp == "piedra" && playerOp == "piedra"||cpuOp == "papel" && playerOp == "papel"||cpuOp == "tijera" && playerOp == "tijera"||cpuOp == "lagarto" && playerOp == "lagarto"||cpuOp == "spock" && playerOp == "spock") {
        start.textContent = 'Empatan'
    }else if (cpuOp == "piedra" && playerOp == "tijera" || cpuOp == "piedra" && playerOp == "lagarto") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} aplasta ${playerOp}`
    }else if (cpuOp == "papel" && playerOp == "piedra") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} tapa a la ${playerOp}`
    }else if (cpuOp == "papel" && playerOp == "spock") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} desautoriza a ${playerOp}`
    }else if (cpuOp == "tijera" && playerOp == "papel") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} corta ${playerOp}`
    }else if (cpuOp == "tijera" && playerOp == "lagarto") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} decapita al ${playerOp}`
    }else if (cpuOp == "lagarto" && playerOp == "papel") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} devora ${playerOp}`
    }else if (cpuOp == "lagarto" && playerOp == "spock") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} envenena a ${playerOp}`
    }else if (cpuOp == "spock" && playerOp == "tijera") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} rompe ${playerOp}`
    }else if (cpuOp == "spock" && playerOp == "piedra") {
        cpuPoints++
        cpuScore.textContent = cpuPoints
        start.textContent = `${cpuOp} vaporiza la ${playerOp}`
    }else if (playerOp == "piedra" && cpuOp == "tijera" || playerOp == "piedra" && cpuOp == "lagarto") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} aplasta ${cpuOp}`
    }else if (playerOp == "papel" && cpuOp == "piedra") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} tapa a la ${cpuOp}`
    }else if (playerOp == "papel" && cpuOp == "spock") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} desautoriza a ${cpuOp}`
    }else if (playerOp == "tijera" && cpuOp == "papel") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} corta ${cpuOp}`
    }else if (playerOp == "tijera" && cpuOp == "lagarto") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} decapita al ${cpuOp}`
    }else if (playerOp == "lagarto" && cpuOp == "papel") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} devora ${cpuOp}`
    }else if (playerOp == "lagarto" && cpuOp == "spock") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} envenena a ${cpuOp}`
    }else if (playerOp == "spock" && cpuOp == "tijera") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} rompe ${cpuOp}`
    }else if (playerOp == "spock" && cpuOp == "piedra") {
        playerPoints++
        playerScore.textContent = playerPoints
        start.textContent = `${playerOp} vaporiza la ${cpuOp}`
    }
}

const winner =()=>{
    winnerSign.classList.add('show-winner')
    reloadBtn.addEventListener('click',()=> location.reload())
}

const roundResult =()=>{  
    rounder()
    if (playerPoints == rounds.textContent) {
        winnerData.textContent = `${playerName.textContent} ha ganado ${playerPoints} a ${cpuPoints}`
        winner()
    }else if (cpuPoints == rounds.textContent) {
        winnerData.textContent = `${playerName.textContent} ha perdido ${cpuPoints} a ${playerPoints}`   
        winner()
    }else {
        setTimeout(() => {
            playerPlay.innerHTML = ""
            playerOp = ""
            cpuPlay.innerHTML = ""
            cpuOp = ""
            start.textContent = "El juego ha comenzado"
            timer()
        },3000);
    }   
}

const timer =()=>{
    setTimeout(() => {
        countdown.textContent = 3   
        playerSelection()
        setTimeout(() => {
            countdown.textContent = 2
            setTimeout(() => {
                countdown.textContent = 1
                setTimeout(() => {
                    countdown.textContent = 0
                    cpuSelection()
                    roundResult()
                },1000);
            },1000);    
        },1000);
    },1000);
}

//Pantalla inicial selección de usuario y rondas
form.addEventListener('submit',(e)=>{
    e.preventDefault() 
    let player = e.target[0].value
    userValidationAndStorage(player,e)
    
   // seleccionar número de rondas
    if (e.submitter.outerText == "A ganador de 3") rounds.textContent = 3  
    else rounds.textContent = 5
    
   // Obtener el nombre del P1 y mostrarlo en pantalla (sin usar el sessionStorage)
    // playerName.textContent = JSON.parse(sessionStorage.getItem('user'))    
    playerName.textContent = player    
})

//Dar comienzo a la partida
start.addEventListener('click',()=>{
    start.textContent = "El juego ha comenzado"
    start.classList.remove('start')
    timer()
})

