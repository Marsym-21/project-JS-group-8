function createFirstPartTitle(string) {
  const array = string.split(' ');
  const newArray = array.slice(0, array.length - 1);
  const firstPart = newArray.join(' ');
  return firstPart;
}

function createLastPartTitle(string) {
  const array = string.split(' ');
  const lastPartTitle = array[array.length - 1];
  return lastPartTitle;
}

export default { createFirstPartTitle, createLastPartTitle };
