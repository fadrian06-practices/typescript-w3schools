class NamedValuE<T = string> {
  private value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this.value = value;
  }

  public getValue(): T | undefined {
    return this.value;
  }

  public toString(): string {
    return `${this.name}: ${this.value}`;
  }
}

let Value = new NamedValuE('myNumber');
Value.setValue('myValue');
console.log(value.toString());