
const rounds = document.getElementById("rounds")


let x4 = document.getElementById("vier")
let x5 = document.getElementById("fünf")
let x6 = document.getElementById("six")
let custom = document.getElementById("custom")
let ergebnis = document.getElementById("ergebnis")

let i = 1;
let j = 1;

    function RoundCustom(){
        
    
        let customInput = document.getElementById("customInput")
   
        customInput.innerHTML =`<input type="number" name="" id="custom-Rounds"><br>`
        let display= document.getElementById("display")
    display.style.display = "block"
      
    }
    
   function keinDisplay(){
    let display= document.getElementById("display")
    display.style.display = "none"
   }
   
 


   



const compNumber = Math.floor(Math.random()*100)+1
function guess() {
    let Userguess = document.getElementById("user-guess").value
    if (Userguess>100){
        document.getElementById("body").innerHTML = ` <h1 style="color: red; font-size: 4em;"> Error , you have to guess number lower than 100</h1>`
    }
    let buttom = document.getElementById("buttom")


    if(x4.checked){
      
      if(i < 4){
        rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 4</h1> `
        if(Userguess ==compNumber){
            
            ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${j} guesses. <a href="index.html"> You win Play again!</a></h3>`
           

            buttom.style.display = "none"


        }
        else if (Userguess < compNumber){
            ergebnis.innerHTML += `<h3 style="color:#00bfff ;">${j++}. You need to guess higher than ${Userguess}. try again</h3>`

          
        }
        
        else if(Userguess>compNumber) {
            ergebnis.innerHTML += `<h3 style="color:#ffe621 ;">${j++}. You need to guess lower than ${Userguess}.try again</h3>`

           
        }
        
      }

      else if(i <= 4){
          
        rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 4</h1> `
        if (Userguess !=compNumber) {
           
            ergebnis.innerHTML+= `<h3 style="color:#ff0000 ;" >Sorry, you didn't guess the number. the guess number was ${compNumber}. <a href="index.html">You lose Play again!</a></h3>`

         
        }
        else if (Userguess == compNumber){
            ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${i} guesses. <a href="index.html"> You win Play again!</a></h3>`

           
        }
      }
  
      }
  
  
  // _____________5
  
  
  
    else if(x5.checked){
        if(i < 5){
            rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 5</h1> `

        if(Userguess ==compNumber){
            ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${j} guesses. <a href="index.html"> You win Play again!</a></h3>`

            buttom.style.display = "none"
        }
        else if (Userguess < compNumber){
            ergebnis.innerHTML += `<h3 style="color:#00bfff ;">${j++}. You need to guess higher than ${Userguess}. try again</h3>`
        }
        
        else if(Userguess>compNumber) {
            ergebnis.innerHTML += `<h3 style="color:#ffe621 ;">${j++}. You need to guess lower than ${Userguess}.try again</h3>`
        }
            
        }


        else if(i <= 5){
            rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 5</h1> `
            if (Userguess !=compNumber) {
               
                ergebnis.innerHTML+= `<h3 style="color:#ff0000 ;">Sorry, you didn't guess the number. the guess number was ${compNumber}. <a href="index.html">You lose  Play again!</a></h3>`
            }
            else if (Userguess == compNumber){
                ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${j} guesses. <a href="index.html"> You win Play again!</a></h3>`
            }
        }
    }
    
  // __________6
  
  
  
    else if(x6.checked){
      
        if(i < 6){
            rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 6</h1> `

            if(Userguess ==compNumber){
              ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${j} guesses. <a href="index.html"> You win Play again!</a></h3>`

              buttom.style.display = "none"
          }
          else if (Userguess < compNumber){
              ergebnis.innerHTML += `<h3 style="color:#00bfff ;">${j++}. You need to guess higher than ${Userguess}. try again</h3>`
          }
          
          else if(Userguess>compNumber) {
              ergebnis.innerHTML += `<h3 style="color:#ffe621 ;">${j++}. You need to guess lower than ${Userguess}.try again</h3>`
          }
            
          }

          else if(i <= 6){
            rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 6</h1> `
            if (Userguess !=compNumber) {
               
                ergebnis.innerHTML+= `<h3 style="color:#ff0000 ;">Sorry, you didn't guess the number. the guess number was ${compNumber}. <a href="index.html">You lose Play again!</a></h3>`
            }
            else if (Userguess == compNumber){
                ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${j} guesses. <a href="index.html"> You win Play again!</a></h3>`
            }
        }
    }
  
  // _______________custom
  
  
  
  
    else if(custom.checked){
       
       let custom_Rounds = document.getElementById("custom-Rounds")
        custom_Rounds.style.display = "none"
        
        if(i < custom_Rounds.value){
         
            rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / ${custom_Rounds.value}</h1> `

            if(Userguess ==compNumber){
              ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${j} guesses. <a href="index.html">  You win Play again!</a></h3>`

              buttom.style.display = "none"
          }
          else if (Userguess < compNumber){
              ergebnis.innerHTML += `<h3 style="color:#00bfff ;">${j++}. You need to guess higher than ${Userguess}. try again</h3>`
          }
          
          else if(Userguess>compNumber) {
              ergebnis.innerHTML += `<h3 style="color:#ffe621 ;">${j++}. You need to guess lower than ${Userguess}.try again</h3>`
          }
            
            
        }
        else if(i <= custom_Rounds.value){
            rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / ${custom_Rounds.value}</h1> `
            if (Userguess != compNumber) {
               
                ergebnis.innerHTML+= `<h3 style="color:#ff0000 ;">Sorry , you didn't guess the number. the guess number was ${compNumber}. <a href="index.html">You lose  Play again!</a></h3>`
            }
            else if (Userguess == compNumber){
                ergebnis.innerHTML += `<h3 style="color:#34e621 ;">yes! You got me in  ${j} guesses. <a href="index.html"> You win Play again!</a></h3>`
            }
      
          
        }
      
    }    
  }
  