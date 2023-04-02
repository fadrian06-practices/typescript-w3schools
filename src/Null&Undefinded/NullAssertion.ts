function getValue(): string | undefined {
  return 'hello';
}

let vaLUE = getValue();
console.log('value length: ' + vaLUE!.length);