// Business Logic

var add = function(number1, number2) {
  return number1 + number2
};

var subtract = function(number1, number2) {
  return number1 - number2
};

var multiply = function(number1, number2) {
  return number1 * number2
};

var divide = function(number1, number2) {
  return number1 / number2
}

//  Front End Logic

$(document).ready(function() {
  $("#add").click(function() {
  var number1 = parseInt($("#input1").val());
  var number2 = parseInt($("#input2").val());
  var sum = add(number1, number2);
  $("#output").text(sum);
  });

  $("#subtract").click(function()  {
  var number1 = parseInt($("#input1").val());
  var number2 = parseInt($("#input2").val());
  var difference = subtract(number1, number2);
  $("#output").text(difference);
  });

  $("#multiply").click(function()  {
  var number1 = parseInt($("#input1").val());
  var number2 = parseInt($("#input2").val());
  var product = multiply(number1, number2);
  $("#output").text(product);
  });

  $("#divide").click(function()  {
  var number1 = parseInt($("#input1").val());
  var number2 = parseInt($("#input2").val());
  var quotient = divide(number1, number2);
  $("#output").text(quotient);
  });
});
