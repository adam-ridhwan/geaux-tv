export function isValidName(input: string): boolean {
  const lettersAndSpaces = /^[A-Za-z\s]+$/;
  return lettersAndSpaces.test(input);
}
