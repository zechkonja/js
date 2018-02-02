try {
  // Produce a ReferenceError
  //myFunction();

  // Produce a TypeError
  //null.myFunction();

  // Produce a SytaxError
  // eval('hello world');

  // Produce a URIError
  // decodeURIComponent('%');

} catch (e) {
  // console.log(e);
  // console.log(e.name); // Type of error
  // console.log(e.message); // Error message
  // console.log(e instanceof ReferenceError); // Error message
  // console.log(e instanceof TypeError); // Error message
} finally {
  // console.log('runs no matter what!!');
}
// console.log('Program continues...');

const user = {email: 'ok@ok.com'};
try {
  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
  console.log(`User error: ${e.message}`);
} finally {

}
