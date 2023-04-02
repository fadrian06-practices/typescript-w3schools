type PointPrinter = (p: { x: number; y: number; }) => void;
const Point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};