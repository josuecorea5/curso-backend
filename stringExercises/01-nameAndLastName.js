//Request the user's name and last name and show a gretting message with their full name.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.question("What is your last name? ", (lastName) => {
    console.log(greetingUser(name, lastName));
    rl.close();
  });
});

const greetingUser = (name, lastName) => {
  return `Hello ${name} ${lastName}!`;
};

// console.log(greetingUser("David", "Coreas"));
