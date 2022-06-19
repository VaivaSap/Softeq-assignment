/*Write a function that takes a list of strings and returns the sum of the list items that represent an
integer (skipping the other items).
Example:
Input: [‘1’, ‘a’, ‘25’, ‘13.1’].
Output: 26.*/

const array = ["1", "a", "25", "13.1"];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  if (!(parseFloat(array[i]) % 1 != 0 || isNaN(parseFloat(array[i])))) {
    sum += parseFloat(array[i]);
  }
}
console.log(sum);
