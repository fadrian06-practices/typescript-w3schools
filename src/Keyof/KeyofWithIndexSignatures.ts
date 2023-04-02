type StringMap = { [key: string]: unknown };

function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}