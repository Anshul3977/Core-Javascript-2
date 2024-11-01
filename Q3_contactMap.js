const contacts = new Map([
    ["John", { age: 28, email: "john@example.com", location: "New York" }],
    ["Alice", { age: 25, email: "alice@example.com", location: "London" }],
  ]);
  
  function getContactDetails(name) {
    return contacts.get(name);
  }
  
  console.log(getContactDetails("John"));
  