/*
 * Q. Create a simple Javascript function code for addition, subtraction, and multiplication of 2 numbers.
 */

const mathoperation = {
    add: function (a, b) {
      return a + b;
    },
    diff: function (a, b) {
      return a - b;
    },
    product: function (a, b) {
      return a * b;
    },
    div: function (a, b) {
        return a / b;
    }
  };
  
module.exports = mathoperation;