const palindromes = function (string) {

        string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
      
        let reversedString = string.split('').reverse().join('');
    
        if (string === reversedString) {
          return true;
        } else {
          return false;
        }
      }

// Do not edit below this line
module.exports = palindromes;
