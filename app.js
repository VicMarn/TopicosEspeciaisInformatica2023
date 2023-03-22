function convertRGBtoHex() {
    // Get the values of the red, green, and blue inputs
    const red = parseInt(document.getElementById('red').value);
    const green = parseInt(document.getElementById('green').value);
    const blue = parseInt(document.getElementById('blue').value);
  
    // Convert the RGB values to hexadecimal
    const hex = '#' + convertToHex(red) + convertToHex(green) + convertToHex(blue);
  
    // Display the hexadecimal color code on the page
    document.getElementById('result').innerText = hex;
    document.getElementById('resultLabel').innerText = "Resultado:"
  }
  
  function convertToHex(decimal) {
    const hex = decimal.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }