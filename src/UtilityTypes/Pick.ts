interface Person {
  name: string;
  age: number;
  location?: string;
}

const Bob: Pick<Person, 'name'> = {
  name: 'Bob'
};