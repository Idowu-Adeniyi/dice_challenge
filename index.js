// Setting Up The DOM
var playerStatus = document.querySelector("h1");
var btn = document.getElementById("btn");



// Trigger the click Event
btn.addEventListener("click", ()=> {
   //Functions
   function randomNum1(x){
      x =  Math.floor(Math.random() * 6) + 1 ;
      return x;
   }

   function randomNum2(y){
      y = Math.floor(Math.random() * 6) + 1 ;
      return y;
   }

   //Calling the Functions
   var randomNum1 = randomNum1();
   var randomNum2 =  randomNum2();
   //Setting Atrributes
   var diceImage1 = document.getElementsByTagName("img")[0].setAttribute("src", `images/dice${randomNum1}.png`);
   var diceImage2 = document.getElementsByTagName("img")[1].setAttribute("src", `images/dice${randomNum2}.png`);

   //Conditions
   if(randomNum1 > randomNum2){
       playerStatus.textContent = ("🚩 Player 1 Wins!")

   }else if(randomNum1 === randomNum2){
       playerStatus.textContent = ("🚫 Player1 & Player2 Draws!")
   }else {
       playerStatus.textContent = ("🚩 Player 2 Wins!")
   }
})




