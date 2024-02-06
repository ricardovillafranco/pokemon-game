let ataqueJugador
let ataqueRival

let vidasJugador = 3
let vidasRival = 3


let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
seccionSeleccionarAtaque.style.display = "none"

let seccionSeleccionarPokemon = document.getElementById("seleccionar-pokemon")
let jugadorVidasContainer = document.getElementById("jugador-hearts-container")
let rivalVidasContainer = document.getElementById("rival-hearts-container")

let pokemons = []

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
 "/assets/bulbasaur-removebg-preview.png",
  3)
  
  pikachu.ataques.push(
    {nombre:"Thunder Shock", daño:"1", id:"", icon:"", tipo:"Elemento"},
    {nombre:"Double Team", daño:"1", id:"", icon:"", tipo:"Rapido"},
    {nombre:"Tail Whip", daño:"1", id:"", icon:"", tipo:"Pesado"}
    
    )

     
    charmander.ataques.push(
    {nombre:"Flamethrower", daño:"1", id:"", icon:"", tipo:"Elemento"},
    {nombre:"Growl", daño:"", id:"1", icon:"",  tipo:"Rapido"},
    {nombre:"Metal Claw", daño:"1", id:"", icon:"", tipo:"Pesado"}
    
    )

    squirtle.ataques.push(
        {nombre:"Water Gun", daño:"1", id:"", icon:"", tipo:"Elemento"},
        {nombre:"Rapid Spin", daño:"1", id:"", icon:"",  tipo:"Rapido"},
        {nombre:"Iron Defense", daño:"1", id:"", icon:"", tipo:"Pesado"}
        
        )

        bulbasaur.ataques.push(
            {nombre:"Razor Leaf", daño:"1", id:"", icon:"", tipo:"Elemento"},
            {nombre:"Tackle", daño:"1", id:"", icon:"",  tipo:"Rapido"},
            {nombre:"Solar Beam", daño:"1", id:"", icon:"", tipo:"Pesado"}
            
            )

    pokemons.push(pikachu,charmander,bulbasaur)



function seleccionarPokemon(){
    let inputPikachu = document.getElementById("pikachu")
    let inputCharmander = document.getElementById("charmander")
    let inputSquirtle = document.getElementById("squirtle")
    let inputBulbasaur = document.getElementById("bulbasaur")
    let spanPokemonJugador = document.getElementById("pokemon-jugador")
    let pokemonJugadorImg = document.getElementById("pokemon-jugador-img")
    
    pokemonJugadorImg.classList.add("selected-pokemon");

    
    

    if(inputPikachu.checked){
        spanPokemonJugador.innerHTML = "Pikachu"
        pokemonJugadorImg.src = "./assets/pikachu-removebg-preview.png"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg3)

      
        

    
    } else if (inputCharmander.checked) {
        spanPokemonJugador.innerHTML = "Charmander"
        pokemonJugadorImg.src = "./assets/charmander-removebg-preview.png"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg3)

       

    } else if(inputSquirtle.checked){
        spanPokemonJugador.innerHTML = "Squirtle"
        pokemonJugadorImg.src = "./assets/squirtle-removebg-preview.png"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg3)

       

    } else if(inputBulbasaur.checked){
        spanPokemonJugador.innerHTML = "Bulbasaur"
        pokemonJugadorImg.src = "./assets/bulbasur-removebg-preview.png"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        jugadorVidasContainer.appendChild(heartImg3)


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
    let spanPokemonRival = document.getElementById("pokemon-rival")
    let pokemonRivalImg = document.getElementById("pokemon-rival-img")
    pokemonRivalImg.classList.add("selected-pokemon");
    if (pokemonAleatorio == 1){
        spanPokemonRival.innerHTML = "Pikachu"
        pokemonRivalImg.src = "./assets/pikachu-removebg-preview.png"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg3)
    } else if (pokemonAleatorio == 2){
        spanPokemonRival.innerHTML = "Charmander"
        pokemonRivalImg.src = "./assets/charmander-removebg-preview.png}"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg3)

    } else if (pokemonAleatorio == 3){
        spanPokemonRival.innerHTML = "Squirtle"
        pokemonRivalImg.src = "./assets/squirtle-removebg-preview.png"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg3)

    } else if (pokemonAleatorio == 4){
        spanPokemonRival.innerHTML = "Bulbasaur"
        pokemonRivalImg.src = "./assets/bulbasur-removebg-preview.png"

        let heartImg1 = document.createElement("img")
        heartImg1.src = "./assets/heart.png"
        heartImg1.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg1)

        let heartImg2 = document.createElement("img")
        heartImg2.src = "./assets/heart.png"
        heartImg2.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg2)

        let heartImg3 = document.createElement("img")
        heartImg3.src = "./assets/heart.png"
        heartImg3.classList.add("heart-img");
        rivalVidasContainer.appendChild(heartImg3)

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



function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasRival = document.getElementById("vidas-rival")

    if(ataqueRival == ataqueJugador){
        crearMensaje("EMPATE")

    } else if(ataqueJugador=='Ataque Rapido'&& ataqueRival =='Ataque Fuerte'){
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
        removeHeart(rivalVidasContainer)
        


    }else if(ataqueJugador=='Ataque Tipo'&& ataqueRival=='Ataque Rapido'){
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
        removeHeart(rivalVidasContainer)
    }else if(ataqueJugador=='Ataque Fuerte'&& ataqueRival=='Ataque Tipo'){
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
        removeHeart(rivalVidasContainer)
    }else{crearMensaje("PERDISTE")
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
    removeHeart(jugadorVidasContainer)
    
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

