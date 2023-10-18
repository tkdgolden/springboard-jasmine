window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 100000
  document.getElementById("loan-years").value = 30
  document.getElementById("loan-rate").value = 0.05
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues()
  let monthly = calculateMonthlyPayment(values)
  updateMonthly(monthly)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment = (Math.round(((values.amount * (values.rate / 12)) / (1 - (1 + (values.rate / 12)) ** (-(values.years * 12)))) * 100) / 100).toString()
  return(monthlyPayment)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = "$" + monthly
}
