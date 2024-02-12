let pokemonElegidoJugador
let pokemonElegidoRival

let ataqueJugador
let ataqueRival

let vidasJugador = 3
let vidasRival = 3

let victoriasJugador = 0

let victoriasRival = 0

const spanVictoriasJugador = document.getElementById("pokemon-jugador-victorias-container")
const spanVictoriasRival = document.getElementById("pokemon-rival-victorias-container")


const seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
seccionSeleccionarAtaque.style.display = "none"

const seccionSeleccionarPokemon = document.getElementById("seleccionar-pokemon")
const jugadorVidasContainer = document.getElementById("jugador-hearts-container")
const rivalVidasContainer = document.getElementById("rival-hearts-container")
const cardsContainer = document.getElementById("cards")

const attackButtonsContainer = document.getElementById("ataques-container")

const spanPokemonRival = document.getElementById("pokemon-rival")
const pokemonRivalImg = document.getElementById("pokemon-rival-img")

let pokemons = []
let pokemonCard

let pokemonWinCombate

let pokemonWinBattle

class Pokemon {
    constructor(nombre, imagen, hp) {
        this.nombre = nombre
        this.imagen = imagen
        this.hp = hp
        this.ataques = []
    }
}

let pikachu = new Pokemon (  "Pikachu",
"/assets/pikachu-removebg-preview.png",
 3)

 let charmander = new Pokemon (  "Charmander",
"/assets/charmander-removebg-preview.png",
 3)

 let squirtle = new Pokemon (  "Squirtle",
"/assets/squirtle-removebg-preview.png",
 3)
 
 let bulbasaur = new Pokemon (  "Bulbasaur",
 "/assets/bulbasur-removebg-preview.png",
  3)
  
  pikachu.ataques.push(
    {nombre:"Thunder Shock", daño:"1", id:"thunder-shock", icon:"", tipo:"Electric"},
    {nombre:"Double Team", daño:"1", id:"double-team", icon:"", tipo:"Normal"},
    {nombre:"Iron Tail", daño:"1", id:"iron-tail", icon:"", tipo:"Steel"}
    
    )

     
    charmander.ataques.push(
    {nombre:"Flamethrower", daño:"1", id:"flamethrower", icon:"", tipo:"Fire"},
    {nombre:"Swift", daño:"1", id:"Swift", icon:"",  tipo:"Normal"},
    {nombre:"Metal Claw", daño:"1", id:"metal-claw", icon:"", tipo:"Steel"}
    
    )

    squirtle.ataques.push(
        {nombre:"Water Gun", daño:"1", id:"water-gun", icon:"", tipo:"Water"},
        {nombre:"Rapid Spin", daño:"1", id:"rapid-spin", icon:"",  tipo:"Normal"},
        {nombre:"Iron Defense", daño:"1", id:"iron-defense", icon:"", tipo:"Steel"}
        
        )

        bulbasaur.ataques.push(
            {nombre:"Razor Leaf", daño:"1", id:"razor-leaf", icon:"", tipo:"Grass"},
            {nombre:"Tackle", daño:"1", id:"tackle", icon:"",  tipo:"Normal"},
            {nombre:"Venoshock", daño:"1", id:"venoshock", icon:"", tipo:"Poison"}
            
            )

    pokemons.push(pikachu,charmander, squirtle ,bulbasaur)

    pokemons.forEach((pokemon)=> {
        pokemonCard = `
        <input type="radio"  name="pokemon" id=${pokemon.nombre}>
            <label class="card" for=${pokemon.nombre}>
                <p class="card-name">${pokemon.nombre}</p>
                <img class="card-img" src=${pokemon.imagen}>
                
            </label>
        `

        cardsContainer.innerHTML += pokemonCard
    })

    function printhearts(heartsAmount,vidasContainer){
    

        for (let i = 0; i < heartsAmount; i++) {
            let heartImg = document.createElement("img")
            heartImg.src = "./assets/heart.png"
            heartImg.classList.add("heart-img");
            vidasContainer.appendChild(heartImg)
        }
    
    }

    function printButtons (pokemon){
        pokemon.ataques.forEach((ataque) => {
           let buttonAttack = document.createElement("button")
           buttonAttack.textContent  = ataque.nombre
           
          
            attackButtonsContainer.appendChild(buttonAttack)

            
            
        }
    )
       
      }
    
function seleccionarPokemon(){

    let inputPikachu = document.getElementById("Pikachu")
    let inputCharmander = document.getElementById("Charmander")
    let inputSquirtle = document.getElementById("Squirtle")
    let inputBulbasaur = document.getElementById("Bulbasaur")
    let spanPokemonJugador = document.getElementById("pokemon-jugador")
    let pokemonJugadorImg = document.getElementById("pokemon-jugador-img")
        
    pokemonJugadorImg.classList.add("selected-pokemon");

    if(inputPikachu.checked){
        spanPokemonJugador.innerHTML = inputPikachu.id
        pokemonJugadorImg.src = pikachu.imagen

        printhearts(3, jugadorVidasContainer)

        pokemonElegidoJugador = pikachu.ataques

        console.log(pokemonElegidoJugador)
        printButtons(pikachu)

    
    } else if (inputCharmander.checked) {
        spanPokemonJugador.innerHTML = inputCharmander.id
        pokemonJugadorImg.src = "./assets/charmander-removebg-preview.png"
        printhearts(3, jugadorVidasContainer)

        printButtons(charmander)

       

    } else if(inputSquirtle.checked){
        spanPokemonJugador.innerHTML = inputSquirtle.id
        pokemonJugadorImg.src = "./assets/squirtle-removebg-preview.png"
        printhearts(3, jugadorVidasContainer)
        printButtons(squirtle)

       

    } else if(inputBulbasaur.checked){
        spanPokemonJugador.innerHTML = inputBulbasaur.id
        pokemonJugadorImg.src = "./assets/bulbasur-removebg-preview.png"
        printhearts(3, jugadorVidasContainer)
        printButtons(bulbasaur)


    } else {
        alert("Elige a tu Pokemón")
        jugarNuevamente();    
    }

    seleccionarPokemonRival()
    seccionSeleccionarAtaque.style.display = "block"

    
    iniciarJuego()
    seccionSeleccionarPokemon.style.display= "none"

    

    
}

function seleccionarPokemonRival(){
    let pokemonAleatorio = aleatorio(1,4)
    
    pokemonRivalImg.classList.add("selected-pokemon");
    if (pokemonAleatorio == 1){
        spanPokemonRival.innerHTML = "Pikachu"
        pokemonRivalImg.src = "./assets/pikachu-removebg-preview.png"
        printhearts(3, rivalVidasContainer)
        
    
    } else if (pokemonAleatorio == 2){
        spanPokemonRival.innerHTML = "Charmander"
        pokemonRivalImg.src = "./assets/charmander-removebg-preview.png}"

        printhearts(3, rivalVidasContainer)

    } else if (pokemonAleatorio == 3){
        spanPokemonRival.innerHTML = "Squirtle"
        pokemonRivalImg.src = "./assets/squirtle-removebg-preview.png"

        printhearts(3, rivalVidasContainer)

    } else if (pokemonAleatorio == 4){
        spanPokemonRival.innerHTML = "Bulbasaur"
        pokemonRivalImg.src = "./assets/bulbasur-removebg-preview.png"

        printhearts(3, rivalVidasContainer)

    }
}

function iniciarJuego(){

   
    
   
    let botonAtaqueTipo = document.getElementById("ataque-tipo")
    botonAtaqueTipo.addEventListener("click", ataqueTipo)
    let botonAtaqueRapido = document.getElementById("ataque-rapido")
    botonAtaqueRapido.addEventListener("click", ataqueRapido)
    let botonAtaqueFuerte  = document.getElementById("ataque-fuerte")
    botonAtaqueFuerte.addEventListener("click", ataqueFuerte)

    let botonJugarNuevamente = document.getElementById("jugar-nuevamente")
    botonJugarNuevamente.addEventListener("click", jugarNuevamente)

  
    

    
}




function ataqueTipo() {
    ataqueJugador = "Ataque Tipo"
    ataqueAleatorioRival()
}
function ataqueRapido() {
    ataqueJugador = "Ataque Rapido"
    ataqueAleatorioRival()
}
function ataqueFuerte() {
    ataqueJugador = "Ataque Fuerte"
    ataqueAleatorioRival()
}

function ataqueAleatorioRival(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueRival = "Ataque Tipo"
    } else if ( ataqueAleatorio == 2) {
        ataqueRival = "Ataque Rapido"
    } else{
        ataqueRival = "Ataque Fuerte"
    }
    
    combate()
}

function crearMensaje(resultado){
    let sectionmessages = document.getElementById("mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu Pokemon atacó con: " + ataqueJugador + ", el pokemon rival ataco con: " + ataqueRival +" "+ resultado
    document.getElementById("mensajes")

    sectionmessages.appendChild(parrafo)


}
function imprimirGif (pokemon){
if(pokemon=="Pikachu"){

}
}


function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasRival = document.getElementById("vidas-rival")

    

    if(ataqueRival == ataqueJugador){
        crearMensaje("EMPATE")

    } else if(ataqueJugador=='Ataque Rapido'&& ataqueRival =='Ataque Fuerte'){
        crearMensaje("GANASTE")
        vidasRival--
        
        victoriasJugador++

        spanVidasRival.innerHTML = vidasRival

        
        removeHeart(rivalVidasContainer)
        
        addVictoryIcon(spanVictoriasJugador)


    }else if(ataqueJugador=='Ataque Tipo'&& ataqueRival=='Ataque Rapido'){
        crearMensaje("GANASTE")
        vidasRival--
        victoriasJugador++
        spanVidasRival.innerHTML = vidasRival

        
        removeHeart(rivalVidasContainer)
        addVictoryIcon(spanVictoriasJugador)
    }else if(ataqueJugador=='Ataque Fuerte'&& ataqueRival=='Ataque Tipo'){
        crearMensaje("GANASTE")
        vidasRival--
        victoriasJugador++
        spanVidasRival.innerHTML = vidasRival
        
        removeHeart(rivalVidasContainer)
        addVictoryIcon(spanVictoriasJugador)
    }else{crearMensaje("PERDISTE")
    vidasJugador--
    victoriasRival++
    spanVidasJugador.innerHTML = vidasJugador
    
    removeHeart(jugadorVidasContainer)
    addVictoryIcon(spanVictoriasRival)
    
}

    verificarVidas()
}

function verificarVidas(){
    if (vidasRival == 0){
        resultadoFinal = "Felicidades has ganado el combate."
        crearMensajeFinal(resultadoFinal)
        
    } else if (vidasJugador == 0){

        resultadoFinal = "Peleaste bien, pero has perdido el combate."
        crearMensajeFinal(resultadoFinal)
    } 


}

function removeHeart(container) {
    let hearts = container.getElementsByClassName("heart-img");
    if (hearts.length > 0) {
        container.removeChild(hearts[hearts.length - 1]);
    }
}

    function addVictoryIcon (container){
    let victoryIcon = document.createElement("img")
    victoryIcon.src = "./assets/pokeball-icon.png"
    container.appendChild(victoryIcon)
    victoryIcon.classList.add("victory-icon")



}

function crearMensajeFinal(resultadoFinal){
    let sectionmessages = document.getElementById("mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    document.getElementById("mensajes")

    sectionmessages.appendChild(parrafo)

    let botonAtaqueTipo = document.getElementById("ataque-tipo")
    botonAtaqueTipo.disabled = true
    let botonAtaqueRapido = document.getElementById("ataque-rapido")
    
    botonAtaqueRapido.disabled = true
    let botonAtaqueFuerte  = document.getElementById("ataque-fuerte")
    botonAtaqueFuerte.disabled = true


}



function jugarNuevamente(){

    location.reload()
}


function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min
)
}



let seleccionarButton =  document.getElementById("seleccionar-pokemon-jugador")


seleccionarButton.addEventListener("click", seleccionarPokemon)

