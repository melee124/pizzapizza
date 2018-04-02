//Business Logic
function Pizza(size, toppings, price) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = price;
};

Pizza.prototype.totalPrice = function() {
  var price = 0;
  if (pizzaSize === 1) {
    price = 12;
  } else if (pizzaSize === 2) {
    price = 15;
  } else if (pizzaSize === 3) {
    price = 18;
  } else if (pizzaSize === 4) {
    price = 24;
  }
    return price;
  };

  //  if (toppingsArray.length < 1){
    //  total += 0;
    //  this.price = total;
  //  } else {
    // for (var i = 0; i < toppingsArray.length; i++) {
    //    total += 1;
      //  this.price = total;
    //  }
  //  }
//  }
//Pizza.prototype.cost = function( size, toppings, price) {
//  return "$" + this.price + " " + this.size + "pizza, with" + this.toppings + ".";
//};
//UI Logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    debugger;
    var pizzaToppings = [];
    var size = $('#pizzaSize').val();
    var price = sizePrice(size);
    $("input:checkbox[name=topping]:checked").each(function))s {
      var toppings = $(this).val();
      toppings.push(topping);
    });

    var newPizza = new Pizza(size, toppings, price);
    var userTotal = newPizza.totalPrice();

    $('#userOrder').show();
    $('.order').text(newPizza.pizzaSize + "" + newPizza.toppings + "pizza.");
    $('#pizza-order').hide();
    });

    this.checked=false;
    });
