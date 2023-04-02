type Primitive = string | number | boolean
const VALUE: Exclude<Primitive, string> = true;