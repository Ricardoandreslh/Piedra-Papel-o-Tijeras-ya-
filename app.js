var humanScore = 0;
var computerScore = 0;
var rondas = 0;

//ELECCION DE LA COMPUTADORA RANDOM
function getComputerChoice() {
   var NumeroRandom = Math.random()

   if(NumeroRandom >= 0.7) {
      document.getElementById("computadora").innerHTML = `Respuesta de Computadora es: Piedra!`;
    return "Piedra"
   } else if (NumeroRandom < 0.4) {
      document.getElementById("computadora").innerHTML = `Respuesta de Computadora es: Papel!`;
    return "Papel"
   } else{
      document.getElementById("computadora").innerHTML = `Respuesta de Computadora es: Tijera!`;
    return "Tijera"
   }
}

//ELECCION DEL HUMANO RANDOM
function getHumanChoice() {
   let opcion = prompt("Cual es tu opcion?")
   document.getElementById("respuesta").innerHTML = `Tu respuesta es: ${opcion}!`;
   return opcion
}


//CONTADOR DE PUNTOS
function playRound(humanChoice, computerChoice) {
   humanChoice = getHumanChoice()
   humanChoice = humanChoice.toLowerCase();
   

   computerChoice = getComputerChoice();
   computerChoice = computerChoice.toLowerCase();

   if (rondas < 5) {
      //Piedra gana a Tijera.
      //EMPATE
      if (humanChoice == computerChoice) {
         console.log("Humano eligió:", humanChoice);
         console.log("Computadora eligió:", computerChoice);
         console.log("EMPATE")

         //Piedra pierde a Papel
      } else if(humanChoice == "piedra" && computerChoice == "papel"){
         computerScore += 1
         console.log("Humano eligió:", humanChoice);
         console.log("Computadora eligió:", computerChoice);
         console.log("PERDISTE")
         
         //Papel gana a piedra
      } else if (humanChoice == "papel" && computerChoice == "piedra"){
         humanScore += 1
         console.log("Humano eligió:", humanChoice);
         console.log("Computadora eligió:", computerChoice);
         console.log("GANASTE")

         //Tijera pierde a papel
      } else if (humanChoice == "papel" && computerChoice == "tijera"){
         computerScore += 1
         console.log("Humano eligió:", humanChoice);
         console.log("Computadora eligió:", computerChoice);
         console.log("PERDISTE")

         //Tijera gana a Papel
      } else if (humanChoice == "tijera" && computerChoice == "papel"){
         humanScore += 1
         console.log("Humano eligió:", humanChoice);
         console.log("Computadora eligió:", computerChoice);
         console.log("GANASTE")

         //Piedra pierde a Tijera.
      } else if (humanChoice == "tijera" && computerChoice == "piedra"){
         computerScore += 1
         console.log("Humano eligió:", humanChoice);
         console.log("Computadora eligió:", computerChoice);
         console.log("PERDISTE")

         //Piedra gana a Tijera.
      } else if (humanChoice == "piedra" && computerChoice == "tijera"){
         humanScore += 1
         console.log("Humano eligió:", humanChoice);
         console.log("Computadora eligió:", computerChoice);
         console.log("GANASTE")
      }
      
      
      rondas++
      console.log(rondas)
   } else (
      console.log("El juego ha terminado!")
   )

}
 