interface Person {
  name: string;
  age: number;
}

function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let pERSON = {
  name: "Max",
  age: 27
};

printPersonProperty(pERSON, "name");