class PERSon {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const PERSOn = new PERSon("Jane");
console.log(PERSOn.getName());