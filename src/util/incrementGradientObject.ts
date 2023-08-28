let increment = 0;
export const incrementGradientObject = () => {
  if (increment === 10) increment = 0;
  increment++;
  return increment;
};
