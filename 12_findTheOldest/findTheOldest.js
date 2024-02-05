const findTheOldest = function(array) {
    const numbers = array.map(obj => obj.yearOfBirth); // Extracting the 'value' property from each object
    const lowestNumber = numbers.reduce((min, value) => Math.min(min, value)); // Finding the lowest number
    
   return(name);
};

module.exports = findTheOldest;
