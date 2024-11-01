const person1 = { name: "John", age: 30 };
const person2 = { name: "Alice", age: 25 };

function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person2);
