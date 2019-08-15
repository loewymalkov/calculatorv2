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
  $("form#calculator").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#input1").val());
  var number2 = parseInt($("#input2").val());
  var operator = $("input:radio[name=operator]:checked").val();
  console.log("1st number: " + number1);
  console.log("2nd number: " + number2);
  console.log("operator: " + operator);
  var result;
  if (operator === "add") {
    result = add(number1, number2);
  } else if (operator === "subtract") {
    result = subtract(number1, number2);
  } else if (operator === "multiply") {
    result = multiply(number1, number2);
  } else if (operator === "divide") {
    result = divide(number1, number2);
  }
  $("#output").text(result);

  });
});
