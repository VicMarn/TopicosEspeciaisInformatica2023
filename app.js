function convertRGBtoHex() {
    // Get the values of the red, green, and blue inputs
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
  
    // Convert the RGB values to hexadecimal
    const hex = '#' + convertToHex(red) + convertToHex(green) + convertToHex(blue);
  
    // Display the hexadecimal color code on the page
    document.getElementById('result').textContent = hex;
  }
  
  function convertToHex(decimal) {
    const hex = decimal.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }