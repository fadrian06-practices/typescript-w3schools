interface CAR {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<CAR> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000
};