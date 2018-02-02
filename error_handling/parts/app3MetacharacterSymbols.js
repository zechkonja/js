let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;  // ->>> Must start with!!!!
re = /d$/i;  // ->>> Must ends with!!!!
re = /^hello$/i;  // ->>> Must starts with ends with!!!!
re = /h.llo/i; // -> Matches any ONE character -> h[r]llo, h[i]llo will pass
re = /h*llo/i; // -> Matches any character 0 or more times ->hllo, h234llo, hiillo
re = /gre?a?y/i; // -> Optional character
re = /gre?a?y\?/i; // -> Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // -> MUST be an a or e, nothing will return null
re = /[GF]ray/i; // -> MUST be an G or F, nothing will return null
// if ^ is inisde brackets
re = /[^GF]ray/; // -> Match anything exept a G or F (can't be G or F)
re = /[A-Z]ray/; // -> Match any uppercase letter
re = /[a-z]ray/; // -> Match any lowercase letter
re = /[A-Za-z]ray/; // -> Match any case letter
re = /[0-9]ray/; // -> Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i; // -> Must occur exaclty {m} amount of times
re = /Hel{2,4}o/i; // -> Must occur exaclty {m} amount of times
re = /Hel{2,}o/i; // -> Must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/; // -> (number from 0-9 and after that x char) 3times - 3x3x3x
re = /^([0-9]x){3}$/; // -> start and end - (number from 0-9 and after that x char) 3times - 3x3x3x


// String to match
const str = '3x3x3x';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}


reTest(re, str);
