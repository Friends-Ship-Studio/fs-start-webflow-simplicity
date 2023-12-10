// If custom code relies on the Webflow.js or jQuery libraries loaded by Webflow,
// it should be wrapped in a function that is pushed to the Webflow global array.
// This ensures that the code will be run AFTER the Webflow provided libraries.
// --------
window.Webflow ||= [];
window.Webflow.push(printHelloWebflow);

function printHelloWebflow() {
  console.log('Hello Webflow!');
}

// If custom code does not rely on the Webflow.js or jQuery libraries loaded by Webflow,
// it can be run immediately, as a standalone script.
// --------
printHelloWorld();

function printHelloWorld() {
  console.log('Hello world!');
}
