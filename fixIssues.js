/* Wrong
function doCalc(x, y) {
  j = 2 + x;
  function doMultiplication() {
    var i = x * y;
    return i;
  }
  var j;
  i = doMultiplication(x, y) + j;
}
console.log(doCalc(5, 4));
*/
function doCalc(x, y) {
  let j = 2 + x;
  let i = doMultiplication() + j;
  function doMultiplication() {
    var i = x * y;
    return i;
  }
}
console.log(doCalc(5, 4));

