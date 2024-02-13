let pokemonElegidoJugador = {}
let pokemonElegidoRival = {}

let ataqueJugador
let ataqueRival

let vidasJugador = 3
let vidasRival = 3

let victoriasJugador = 0

let victoriasRival = 0

const spanVictoriasJugador = document.getElementById("pokemon-jugador-victorias-container")
const spanVictoriasRival = document.getElementById("pokemon-rival-victorias-container")

const seleccionarButton =  document.getElementById("seleccionar-pokemon-jugador")


const seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
seccionSeleccionarAtaque.style.display = "none"


const seccionSeleccionarPokemon = document.getElementById("seleccionar-pokemon")
const jugadorVidasContainer = document.getElementById("jugador-hearts-container")
const rivalVidasContainer = document.getElementById("rival-hearts-container")
const cardsContainer = document.getElementById("cards")

const attackButtonsContainer = document.getElementById("ataques-container")

const spanPokemonRival = document.getElementById("pokemon-rival")
const pokemonRivalImg = document.getElementById("pokemon-rival-img")

const sectionMessages = document.getElementById("mensajes")

const modal = document.getElementById("myModal");
const modalMessageContainer = document.getElementById("modal-message");

const buttonJugarDeNuevo = document.getElementById("jugar-nuevamente")

buttonJugarDeNuevo.addEventListener("click", jugarNuevamente)

let pokemons = []
let pokemonCard

let pokemonWinCombate

let pokemonWinBattle

class Pokemon {
    constructor(nombre, imagen, hp, gif) {
        this.nombre = nombre
        this.imagen = imagen
        this.hp = hp
        this.gif = gif
        this.ataques = []
    }
}

let pikachu = new Pokemon (  "Pikachu",
"/assets/pikachu-removebg-preview.png",
 3, "./assets/ataque-pikachu.gif")

 let charmander = new Pokemon (  "Charmander",
"/assets/charmander-removebg-preview.png",
 3, "./assets/ataque-charmander.gif")

 let squirtle = new Pokemon (  "Squirtle",
"/assets/squirtle-removebg-preview.png",
 3, "./assets/ataque-squirtle.gif")
 
 let bulbasaur = new Pokemon (  "Bulbasaur",
 "/assets/bulbasur-removebg-preview.png",
  3, "./assets/ataque-bulbasaur.gif")
  
  pikachu.ataques.push(
    {nombre:"Thunder Shock", daño:"1", id:"thunder-shock", icon:"./assets/electric-type-removebg-preview.png", tipo:"Electric", function: ataqueTipo},
    {nombre:"Double Team", daño:"1", id:"double-team", icon:"./assets/normal-type-removebg-preview.png", tipo:"Normal", function: ataqueRapido},
    {nombre:"Iron Tail", daño:"1", id:"iron-tail", icon:"./assets/steel-type-removebg-preview.png", tipo:"Steel", function: ataqueFuerte}
    
    )

     
    charmander.ataques.push(
    {nombre:"Flamethrower", daño:"1", id:"flamethrower", icon:"./assets/fire-type-removebg-preview.png", tipo:"Fire", function: ataqueTipo},
    {nombre:"Swift", daño:"1", id:"Swift", icon:"./assets/normal-type-removebg-preview.png",  tipo:"Normal", function: ataqueRapido},
    {nombre:"Metal Claw", daño:"1", id:"metal-claw", icon:"./assets/steel-type-removebg-preview.png", tipo:"Steel", function: ataqueFuerte}
    
    )

    squirtle.ataques.push(
        {nombre:"Water Gun", daño:"1", id:"water-gun", icon:"./assets/water-type-removebg-preview.png", tipo:"Water", function: ataqueTipo},
        {nombre:"Rapid Spin", daño:"1", id:"rapid-spin", icon:"./assets/normal-type-removebg-preview.png",  tipo:"Normal", function: ataqueRapido},
        {nombre:"Iron Defense", daño:"1", id:"iron-defense", icon:"./assets/steel-type-removebg-preview.png", tipo:"Steel", function: ataqueFuerte}
        
        )

        bulbasaur.ataques.push(
            {nombre:"Razor Leaf", daño:"1", id:"razor-leaf", icon:"./assets/grass-type-removebg-preview.png", tipo:"Grass", function: ataqueTipo},
            {nombre:"Tackle", daño:"1", id:"tackle", icon:"./assets/normal-type-removebg-preview.png",  tipo:"Normal", function: ataqueRapido},
            {nombre:"Venoshock", daño:"1", id:"venoshock", icon:"./assets/poison-type-removebg-preview.png", tipo:"Poison", function: ataqueFuerte}
            
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
           buttonAttack.id = ataque.id

           if (ataque.icon) {
            // Crear un elemento de imagen
            let iconImg = document.createElement("img");
            iconImg.src = ataque.icon;
            iconImg.alt = ataque.nombre; // Proporciona un texto alternativo para la imagen (puedes ajustarlo según sea necesario)
            iconImg.classList.add("attack-icon")
            // Añadir la imagen al botón
            buttonAttack.appendChild(iconImg);
        }

           attackButtonsContainer.appendChild(buttonAttack)

            
         buttonAttack = document.getElementById(ataque.id)
         buttonAttack.addEventListener("click", ataque.function)

         
        }
    )
       
      }

      function seleccionDePokemon(pokemon, variableDelPokemon) {
        variableDelPokemon.nombre = pokemon.nombre;
        variableDelPokemon.imagen = pokemon.imagen;
        variableDelPokemon.hp = pokemon.hp;
        variableDelPokemon.gif = pokemon.gif
        variableDelPokemon.ataques = pokemon.ataques

      
        // Copia todas las propiedades necesarias de 'pokemon' a 'pokemonElegidoJugador'
        // Puedes agregar más propiedades aquí según sea necesario
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

        seleccionDePokemon(pikachu, pokemonElegidoJugador )

        console.log(pokemonElegidoJugador)
        printButtons(pikachu, )

    
    } else if (inputCharmander.checked) {
        spanPokemonJugador.innerHTML = inputCharmander.id
        pokemonJugadorImg.src = "./assets/charmander-removebg-preview.png"
        printhearts(3, jugadorVidasContainer)

        printButtons(charmander)

        seleccionDePokemon(charmander, pokemonElegidoJugador )

       

    } else if(inputSquirtle.checked){
        spanPokemonJugador.innerHTML = inputSquirtle.id
        pokemonJugadorImg.src = "./assets/squirtle-removebg-preview.png"
        printhearts(3, jugadorVidasContainer)
        printButtons(squirtle)
        seleccionDePokemon(squirtle, pokemonElegidoJugador )

       

    } else if(inputBulbasaur.checked){
        spanPokemonJugador.innerHTML = inputBulbasaur.id
        pokemonJugadorImg.src = "./assets/bulbasur-removebg-preview.png"
        printhearts(3, jugadorVidasContainer)
        printButtons(bulbasaur)
        seleccionDePokemon(bulbasaur, pokemonElegidoJugador )


    } else {
        alert("Elige a tu Pokemón")
        jugarNuevamente();    
    }

    seleccionarPokemonRival()
    seccionSeleccionarAtaque.style.display = "block"

   
    seccionSeleccionarPokemon.style.display = "none"
    seleccionarButton.style.display = "none"
   

    

    
}

function seleccionarPokemonRival(){
    let pokemonAleatorio = aleatorio(1,4)
    
    pokemonRivalImg.classList.add("selected-pokemon");
    if (pokemonAleatorio == 1){
        spanPokemonRival.innerHTML = "Pikachu"
        pokemonRivalImg.src = "./assets/pikachu-removebg-preview.png"
        printhearts(3, rivalVidasContainer)
        seleccionDePokemon(pikachu, pokemonElegidoRival)
        
    
    } else if (pokemonAleatorio == 2){
        spanPokemonRival.innerHTML = "Charmander"
        pokemonRivalImg.src = "./assets/charmander-removebg-preview.png}"

        printhearts(3, rivalVidasContainer)
        seleccionDePokemon(charmander, pokemonElegidoRival)

    } else if (pokemonAleatorio == 3){
        spanPokemonRival.innerHTML = "Squirtle"
        pokemonRivalImg.src = "./assets/squirtle-removebg-preview.png"

        printhearts(3, rivalVidasContainer)
        seleccionDePokemon(squirtle, pokemonElegidoRival)

    } else if (pokemonAleatorio == 4){
        spanPokemonRival.innerHTML = "Bulbasaur"
        pokemonRivalImg.src = "./assets/bulbasur-removebg-preview.png"

        printhearts(3, rivalVidasContainer)
        seleccionDePokemon(bulbasaur, pokemonElegidoRival)

    }
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
    
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu Pokemon atacó con: " + ataqueJugador + ", el pokemon rival ataco con: " + ataqueRival +" "+ resultado
    

    sectionMessages.appendChild(parrafo)


}
function imprimirGif (pokemonGanadorCombate){

    let winnerGif = document.createElement("img")
    winnerGif.src = pokemonGanadorCombate.gif
    modalMessageContainer.appendChild(winnerGif)


}




function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasRival = document.getElementById("vidas-rival")

    

    if(ataqueRival == ataqueJugador){
        crearMensaje("EMPATE")
        crearMensajeModal("EMPATE")

    } else if(ataqueJugador=='Ataque Rapido'&& ataqueRival =='Ataque Fuerte'){
        crearMensaje("GANASTE")
        crearMensajeModal("GANASTE")
        vidasRival--
        
        victoriasJugador++

        spanVidasRival.innerHTML = vidasRival

        
        removeHeart(rivalVidasContainer)
        
        addVictoryIcon(spanVictoriasJugador)

        imprimirGif(pokemonElegidoJugador)


    }else if(ataqueJugador=='Ataque Tipo'&& ataqueRival=='Ataque Rapido'){
        crearMensaje("GANASTE")
        crearMensajeModal("GANASTE")
        vidasRival--
        victoriasJugador++
        spanVidasRival.innerHTML = vidasRival

        
        removeHeart(rivalVidasContainer)
        addVictoryIcon(spanVictoriasJugador)
        imprimirGif(pokemonElegidoJugador)
    }else if(ataqueJugador=='Ataque Fuerte'&& ataqueRival=='Ataque Tipo'){
        crearMensaje("GANASTE")
        crearMensajeModal("GANASTE")
        vidasRival--
        victoriasJugador++
        spanVidasRival.innerHTML = vidasRival
        
        removeHeart(rivalVidasContainer)
        addVictoryIcon(spanVictoriasJugador)
        imprimirGif(pokemonElegidoJugador)
    }else{crearMensaje("PERDISTE")
    crearMensajeModal("PERDISTE")
    vidasJugador--
    victoriasRival++
    spanVidasJugador.innerHTML = vidasJugador
    
    removeHeart(jugadorVidasContainer)
    addVictoryIcon(spanVictoriasRival)
    imprimirGif(pokemonElegidoRival)
    
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

function crearMensajeFinal(resultadoFinal ){
    
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    

    sectionMessages.appendChild(parrafo)

    disableAttackButtons()


}

function crearMensajeModal(resultado) {
    
    modalMessageContainer.innerHTML = "Tu Pokemon atacó con: " + ataqueJugador + ", el pokemon rival ataco con: " + ataqueRival + " " + resultado;

    // Mostrar el modal
    
    modal.style.display = "block";

    // Asignar acción para cerrar el modal al hacer clic en el botón "Cerrar"
    let closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";


    });
}


function disableAttackButtons(){
    
    let buttons = attackButtonsContainer.getElementsByTagName("button")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    
    }




function jugarNuevamente(){

    location.reload()
}


function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min
)
}






seleccionarButton.addEventListener("click", seleccionarPokemon)

