let keyCounter = 0;

export const keyGenerator = () => keyCounter++;

export const readableTextFormat = (text) => {
  return text
    .split(/[\s-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const isArrayContains = (searchKey, searchArray) => {
  const regex = new RegExp(searchKey, "i");
  const searhString = searchArray.join("|");
  return regex.test(searhString);
};
