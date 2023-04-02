interface Shape {
  getArea: () => number;
}

class RECtangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends RECtangle {
  public constructor(width: number) {
    super(width, width);
  }
}