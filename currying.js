const curry = require("./functions").curry;

const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));

const hasLetterR = match(/r/g);
console.log(hasLetterR("Hello world"));
console.log(hasLetterR("just j and s and t etc"));

console.log(
  "filter string with r in array ",
  filter(hasLetterR, ["rock and roll", "smooth jazz"])
);

const removeStringsWithoutRs = filter(hasLetterR);
console.log(
  "strings with 'r'",
  removeStringsWithoutRs(["rock and roll", "smooth jazz", "drum circle"])
);

const noVowels = replace(/[aeiou]/gi);
const censored = noVowels("*");
console.log("Censoring 'Chocolate Rain'", censored("Chocolate Rain"));
