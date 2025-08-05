project 3
let choice;
do {
  choice = prompt(`Choose an operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit`);

  let num1, num2;

  if (choice !== '5') {
    num1 = parseFloat(prompt("Enter first number:"));
    num2 = parseFloat(prompt("Enter second number:"));
  }

  switch (choice) {
    case '1':
      console.log("Sum:", num1 + num2);
      break;
    case '2':
      console.log("Difference:", num1 - num2);
      break;
    case '3':
      console.log("Product:", num1 * num2);
      break;
    case '4':
      if (num2 === 0) {
        console.log("Division by zero is not allowed.");
      } else {
        console.log("Quotient:", num1 / num2);
      }
      break;
    case '5':
      console.log("Exiting program.");
      break;
    default:
      console.log("Invalid choice.");
  }
} while (choice !== '5');

project 4
// 1. Reverse words in sentence
let sentence = "Hello world from JavaScript";
let reversed = sentence.split(" ").reverse().join(" ");
console.log("Reversed Sentence:", reversed);

// 2. Remove duplicates from array
let nums = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(nums)];
console.log("Unique Numbers:", unique);

// 3. Count vowels in a string
let str = "JavaScript is amazing!";
let vowels = str.match(/[aeiou]/gi);
console.log("Vowel Count:", vowels ? vowels.length : 0);

