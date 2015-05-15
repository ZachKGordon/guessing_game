  window.onload = function() {

  var elToday1 = document.getElementById('today1');
  var elToday2 = document.getElementById('today2');
  var elToday3 = document.getElementById('today3');

  document.getElementById("submit1").onclick = function() {
    user.guess1 = document.getElementById("item_input1");
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

  var start = confirm("Lunch time! Would you like to guess the Pear menu for today?");
  if (start == true) {

    var user = new customer(
      prompt("What's to drink? Water, juice, or whiskey?"),
      prompt("What's the entree? Burger, burrito, or pizza?"),
      prompt("Finally what's for dessert? Cake, cookie, or mocha?")
    );

    var meal = new menu("WHISKEY", "PIZZA", "MOCHA");

    if (user.guess1.toUpperCase() !== meal.aperitivo) {
      elToday1.textContent= "Sorry, " + user.guess1 + " was wrong. No drink for you.";
    } else {
      elToday1.textContent = "Yay! You picked the right drink, whiskey!";
    }
    if (user.guess2.toUpperCase() !== meal.secondo) {
      elToday2.textContent = "Nice try but, " + user.guess2 + " was wrong. No main course.";
    } else {
      elToday2.textContent = "Yum! " + user.guess2 + " was right!";
    }
    if (user.guess3.toUpperCase() !== meal.dolce) {
      elToday3.textContent = "Oh no! " + user.guess3 + " was wrong. No sweets for you.";
    } else {
      elToday3.textContent = "Cool, " + user.guess3 + " is right!";
    }
      alert("The items you guessed correctly will arrive shortly.")
    }
  }
