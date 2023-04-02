class PERson {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const PERSON = new PERson("Jane");
console.log(PERSON.getName());