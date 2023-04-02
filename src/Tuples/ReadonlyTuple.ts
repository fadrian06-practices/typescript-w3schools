let Ourtuple: [number, boolean, string];

Ourtuple = [5, false, "Coding God was here"];
Ourtuple.push("Something new and wrong");
console.log(Ourtuple);

const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  false,
  "The Real Coding God",
];

// ourReadonlyTuple.push('Coding God took a day off')