function convertTemperature() {
    // Get input values
    let celsiusInput = document.getElementById('celsius').value;
    let fahrenheitInput = document.getElementById('fahrenheit').value;
  
    // Check which input is not empty
    if (celsiusInput !== "") {
      // Convert Celsius to Fahrenheit
      let fahrenheitResult = (celsiusInput * 9/5) + 32;
      document.getElementById('fahrenheit').value = fahrenheitResult.toFixed(2);
    } else if (fahrenheitInput !== "") {
      // Convert Fahrenheit to Celsius
      let celsiusResult = (fahrenheitInput - 32) * 5/9;
      document.getElementById('celsius').value = celsiusResult.toFixed(2);
    }
  }
  