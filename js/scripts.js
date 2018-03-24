//Business Logic

//UI Logic
$(document).ready(function() {
  $("form#pizza-order").submit(function() {
    event.preventDefault();
    $("#pizza-order").hide();
    $("#userOrder").show();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var pizzaToppings = $(this).val();
      $(".pizzaMe").append(pizzaToppings + "<br>");
      this.checked=false;
    });
    //$("input:checkbox[name=fun-transport]:checked").each(function() {
      //var funTransport = $(this).val();
    //  $(".fun-commute").append(funTransport + "<br>");
    //  this.checked=false;
    //});
  });
});
