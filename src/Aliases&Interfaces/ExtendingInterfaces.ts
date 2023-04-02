interface RECTangle {
  height: number,
  width: number
}

interface ColoredRectangle extends RECTangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};