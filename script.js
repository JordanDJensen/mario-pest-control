
 function grandtotal() {
     document.getElementById("grandTotal").addEventListener("change", function () {

         document.getElementById("grandTotal").innerHTML = goombas + bobbombs + cheep;
     })
 };

 document.querySelector(".goombas").addEventListener("click", function () {
     var goombas = Number(document.getElementById("num1").value);
     var times = goombas * 12;
     document.getElementById("num2").innerHTML = times + " " + "coins"
   
 });

 document.querySelector(".bobbombs").addEventListener("click", function () {
     var bobbombs = Number(document.getElementById("num3").value);
     var times = bobbombs * 7;
     document.getElementById("num4").innerHTML = times + " " + "coins";
  
 });

 document.querySelector(".cheep").addEventListener("click", function () {
     var cheep = Number(document.getElementById("num5").value);
     var times = cheep * 11;
     document.getElementById("num6").innerHTML = times + " " + "coins";
     
 });
