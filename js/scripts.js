//Business Logic
function Pizza(size, toppings, price) {
  debugger;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = price;
};

Pizza.prototype.totalPrice = function() {
  return (this.pizzaToppings.length + this.pizzaPrice).toFixed(1);
};

var sizePrice = function(size) {
  debugger;
  var price = 0;
  if (size === "small") {
    price = 12;
  } else if (size === "medium") {
    price = 15;
  } else if (size === "large") {
    price = 18;
  } else if (size === "gargantuan") {
    price = 24;
  }
    return price;
  };

//UI Logic
$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    debugger;
    var pizzaToppings = [];
    var size = $('#pizzaSize').val();
    var price = sizePrice(size);
    var toppings = $("input:checkbox[name=topping]:checked");
      for(var i=0; i<toppings.length; i++) {
        pizzaToppings.push($(toppings[i]).val());
      }

    var newPizza = new Pizza(size, pizzaToppings, price);
    var userTotal = newPizza.totalPrice();

    $('#userOrder').show();
    $('.order').text(newPizza.pizzaSize + " " + newPizza.pizzaToppings + " pizza.");
    $('#total').text("$" + userTotal);
    $('#pizza-order').hide();
    });
    });
