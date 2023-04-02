class PersoN {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const PErson = new PersoN("Jane");
console.log(PErson.getName());