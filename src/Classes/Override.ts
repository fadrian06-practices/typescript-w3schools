interface Shape {
  getArea: () => number;
}

class RECTANgle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class SQuare extends RECTANgle {
  public constructor(width: number) {
    super(width, width);
  }

  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}