// register.js : small script for the Register page
// 1) Shows the live value of the budget slider
var slider = document.getElementById("budget");
var output = document.getElementById("budget-out");

slider.addEventListener("input", function () {
  output.textContent = Number(slider.value).toLocaleString();
});

// 2) Confirms the booking (demo only, nothing is sent anywhere)
var form = document.getElementById("booking-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("fullname").value;
  alert("Thank you, " + name + "! Your booking request has been received.");
});
