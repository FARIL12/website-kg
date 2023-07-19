function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  if (weight && height) {
    var bmi = weight / ((height / 100) ** 2);
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI: ' + bmi.toFixed(2);
  } else {
    alert('Please enter valid weight and height values.');
  }
}
