  window.onload = function() {

  var meal = new menu("WHISKEY", "PIZZA", "MOCHA");

  var elToday1 = document.getElementById('today1');
  var elToday2 = document.getElementById('today2');
  var elToday3 = document.getElementById('today3');

  var input1 = document.getElementById("item_input1");
  var input2 = document.getElementById("item_input2");
  var input3 = document.getElementById("item_input3");


  var start = confirm("Lunch time! Would you like to guess the Pear menu for today?");
  if (start == true) {

  submit3.addEventListener('click', function(e) {
    compare()
  });


var compare = function(){
if (input1.value.toUpperCase() !== meal.aperitivo) {
      elToday1.textContent= "Sorry, " + input1.value + " was wrong. No drink for you.";
    } else {
      elToday1.textContent = "Yay! You picked the right drink, whiskey!";
    }
    if (input2.value.toUpperCase() !== meal.secondo) {
      elToday2.textContent = "Nice try but, " + input2.value + " was wrong. No main course.";
    } else {
      elToday2.textContent = "Yum! " + input2.value + " was right!";
    }
    if (input3.value.toUpperCase() !== meal.dolce) {
      elToday3.textContent = "Oh no! " + input3.value + " was wrong. No sweets for you.";
    } else {
      elToday3.textContent = "Cool, " + input3.value + " is right!";
    }
    alert("The items you guessed correctly will arrive shortly.");
}
    function customer (guess1, guess2, guess3) {
    this.guess1 = guess1;
    this.guess2 = guess2;
    this.guess3 = guess3;
  }

    function menu (aperitivo, primo, dolce) {
    this.aperitivo = aperitivo;
    this.secondo = primo;
    this.dolce = dolce;
  }

    /*var user = new customer(
      prompt("What's to drink? Water, juice, or whiskey?"),
      prompt("What's the entree? Burger, burrito, or pizza?"),
      prompt("Finally what's for dessert? Cake, cookie, or mocha?")
    );*/

    }
  }
