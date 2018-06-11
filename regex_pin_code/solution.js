function validatePIN(pin) {
    if (/^(\d{4}|\d{6})$/.test(pin)) {
      return true;
    } else {
      return false;
    }
  }
  
  // So / initiates the Regex. ^ Says that it should match the beginning of the array. \d matches any digit with {4} 
  // meaning length of 4. | means or with the same context as before but matching 6 letters at length. $ means end of the whole input.
  