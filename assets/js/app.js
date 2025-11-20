document.addEventListener("DOMContentLoaded", function () {
  const weightInput = document.querySelector('input[placeholder="Enter weight in kilograms"]');
  const feetInput = document.querySelector('input[placeholder="Enter feet"]');
  const inchesInput = document.querySelector('input[placeholder="Enter inches"]');
  const button = document.querySelector("button");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", function () {
    const weight = parseFloat(weightInput.value);
    const feet = parseFloat(feetInput.value);
    const inches = parseFloat(inchesInput.value);

    // Basic validation
    if (isNaN(weight) || isNaN(feet) || isNaN(inches)) {
      resultDiv.textContent = "❌ Please enter valid numbers in all fields.";
      return;
    }

    // Convert height to meters
    const totalInches = feet * 12 + inches;
    const heightMeters = totalInches * 0.0254;

    // BMI formula
    const bmi = weight / (heightMeters * heightMeters);

    // Round to 2 decimals
    const roundedBMI = bmi.toFixed(2);

    // BMI Category
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    // Display result
    resultDiv.textContent = `Your BMI is ${roundedBMI} (${category})`;
  });
});
