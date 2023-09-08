export function isValidPassword(password: string): boolean {
  const lowercase = /[a-z]/;
  const uppercase = /[A-Z]/;
  const number = /[0-9]/;
  const symbol = /[!@#$%^&*(),.?":{}|<>]/;

  const isLongEnough = password.length >= 8;
  const hasLowercase = lowercase.test(password);
  const hasUppercase = uppercase.test(password);
  const hasNumber = number.test(password);
  const hasSymbol = symbol.test(password);

  return isLongEnough && hasLowercase && hasUppercase && hasNumber && hasSymbol;
}
