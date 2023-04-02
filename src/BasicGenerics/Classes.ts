class NamedValue<T> {
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

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());