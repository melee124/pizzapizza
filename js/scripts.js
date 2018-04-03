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
  //  $("#add-pizza").append(<div class="row">
  //    <div class="col-md-4">
  //      <h2>Please select your pizza size</h2>
  //      <select id="pizzaSize">
  //        <option value="small">Small</option>
  //        <option value="medium">Medium</option>
  //        <option value="large">Large</option>
  //        <option value="gargantuan">Gargantuan!</option>
  //      </select>
  //    </div>
  //    <div class="col-md-4">
  //      <h2>Next, please select your toppings.</h2>
  //      <div class="row">
  //        <div class="col-md-6">
  //          <h3>Meaty Toppings</h3>
  //          <input type="checkbox" name="topping" value="pepperoni">Pepperoni<br>
  //          <input type="checkbox" name="topping" value="sausage">Sausage<br>
  //          <input type="checkbox" name="topping" value="ham">Ham<br>
  //          <input type="checkbox" name="topping" value="bacon">Bacon<br>
  //          <input type="checkbox" name="topping" value="chicken">Chicken<br>
  //          <input type="checkbox" name="topping" value="Salmon">Salmon<br>
  //        </div>
  //        <div class="col-md-6">
    //        <h3>Veggie Toppings</h3>
  //          <input type="checkbox" name="topping" value="mushrooms">Mushrooms<br>
  //          <input type="checkbox" name="topping" value="olives">Olives<br>
  //          <input type="checkbox" name="topping" value="artichoke">Artichoke<br>
  //          <input type="checkbox" name="topping" value="asparagus">Asparagus<br>
  //          <input type="checkbox" name="topping" value="pepper">Bell Peppers<br>
  //          <input type="checkbox" name="topping" value="spinach">Spinach<br>
  //        </div>
  //      </div>);
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
