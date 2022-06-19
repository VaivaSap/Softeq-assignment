/*Write a function that, when called, returns an array for which each element is a letter of the
alphabet, from "A" to "Z" (exactly once, in order and upper case). Your code cannot contain the
character ' (quote), " (double quote) or ` (backquote).*/

function printAlphabet() {
  const a = 65;
  const z = 91;

  for (i = a; i < z; i++) {
    const abc = String.fromCharCode(i);
    console.log(abc);
  }
}

printAlphabet();
