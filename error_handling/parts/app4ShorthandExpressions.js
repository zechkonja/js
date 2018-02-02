let re;

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // NON word character
re = /\W+/; // NON word character // + = one or more
re = /\d/; // Match any digit
re = /\d+/; // Match any digit // + = one or more
re = /\D/; // Non any non-digit
re = /\D+/; // Non any non-digit // + = one or more
re = /\s/; // Match whitespace char
re = /\S/; // Match  NON whitespace char
re = /Hell\b/i; // Word boundary -> fin whole exact word

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if Not followed by y


// String to match
const str = 'sfadsfaxysdfax';

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
