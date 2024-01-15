function convertTemperature() {
    
    let celsiusInput = document.getElementById('celsius').value;
    let fahrenheitInput = document.getElementById('fahrenheit').value;
  
    if (celsiusInput !== "") {
      
      let fahrenheitResult = (celsiusInput * 9/5) + 32;
      document.getElementById('fahrenheit').value = fahrenheitResult.toFixed(2);
    } else if (fahrenheitInput !== "") 
      let celsiusResult = (fahrenheitInput - 32) * 5/9;
      document.getElementById('celsius').value = celsiusResult.toFixed(2);
    }
  }
  
