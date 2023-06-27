
function factorial(n) {
    let result = n;
  
    for (let i = n - 1; i >= 1; i--) {
      result *= i;
    
    }
    return result;
  }
  
// Using recurssion to get factorial

  // function factorial(n) {
  //   if (n === 0 || n === 1) {
  //     return 1;
  //   } else {
  //     return n * factorial(n - 1);
  //   }
  // }
  
 

 module.exports = factorial;
  