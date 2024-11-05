function reverseSentence(sentence) {
    if (!sentence) return '';

    // Split the sentence into words, reverse the array, and join it back into a string
    let reversedSentence = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

// Example usage:
const inputSentence = "hello world this is a test";
const outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.flatMap(group => group.map(person => person.name));
console.log(names); // Output: ['John', 'Jane', 'Bob']