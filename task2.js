/**
 * @param {string} name
 */
const delayedWelcome = name => {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
  }, 3000);
  
}

// Sample usage - do not modify
delayedWelcome("Sam");
delayedWelcome("Alex");