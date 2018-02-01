// Listen for sumbit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // hide results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 2000);
});

// Calculate Results
function calculateResults(e) {

  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const montlyPayment = document.getElementById('montly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute montly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const montly = (principal * x * calculatedInterest) / (x - 1);

  // isFinite() -> checking if  given value is correct
  if (isFinite(montly)) {
    montlyPayment.value = montly.toFixed(2); // -> zaokruzi broj na (dve) decimale
    totalPayment.value = (montly * calculatedPayments).toFixed(2);
    totalInterest.value = ((montly * calculatedPayments) - principal).toFixed(2);

    // show results
    document.getElementById('results').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }

  console.log('Calculating...');
}

// Show error
function showError(text) {
  // hide results
  document.getElementById('results').style.display = 'none';

  // hide loader
  document.getElementById('loading').style.display = 'none';
  const errorDiv = document.createElement('div');

  // Get elementes
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(text));

  // Insert error above heading
  card.insertBefore(errorDiv, heading); // -> insert error div before heading

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}
