//Business Logic
function Pizza(size, meaty toppings, veggie toppings) {
  this.size = size;
  this.meatytopping = meatytopping;
  this.veggietopping = veggietopping;
}

pizza.prototype.sizePrice = fuction(size, toppingsArray) {
  var total = 0;
  if (pizzaSize === 1) {
    total += 12;
  } else if (pizzaSize === 2) {
    total += 15;
  } else if (pizzaSize === 3) {
    total += 18;
  } else if (pizzaSize === 4) {
    total += 24;
  }

  if (toppingsArray.length < 1){
    total += 0;
    this.price = total;
  } else {
    for (var i = 0; i < toppingsArray.length; i++) {
      total += 1;
      this.price = total;
    }
  }
  }

//UI Logic
$(document).ready(function() {
  $("form#pizza-order").submit(function() {
    event.preventDefault();
    var pizzaToppings = $('input:checkbox[name=toppings]:checked');
    var newSize = $('pizzaSize').val();
    var toppingsArray = [];
    for (var i=0; i< toppings.length; i++) {
       toppingsArray.push($(toppings[i]).val());
     }
    var newPizza = new Pizza(newSize, toppingsArray, price);
    var price = newPizza.sizePrice(newSize, toppingsArray);
    var output = newPizza.cost(sizeNew, toppingsArray, price);
    $('#userOrder').show();
    });
    //$("input:checkbox[name=fun-transport]:checked").each(function() {
      //var funTransport = $(this).val();
    //  $(".fun-commute").append(funTransport + "<br>");
    //  this.checked=false;
    //});
  });
});
