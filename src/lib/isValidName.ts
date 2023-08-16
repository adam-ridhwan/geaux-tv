export function isValidName(input: string): boolean {
  const letters = /^[A-Za-z]+$/;
  return letters.test(input);
}
