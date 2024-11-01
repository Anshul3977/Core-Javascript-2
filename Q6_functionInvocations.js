function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
  }
  
  displayInfo.call(null, "John", "Developer");
  displayInfo.apply(null, ["Alice", "Designer"]);
  
  function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  const boundGreet = greet.bind({ name: "John" });
  boundGreet();
  