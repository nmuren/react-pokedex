let keyCounter = 0;

export const keyGenerator = () => keyCounter++;

export const capitalizeText = (text) => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
