export function createCategoryString(string) {
  const array = string.split('');
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    if (letter === ' ') {
      letter = '%20';
    }
    newArray.push(letter);
  }
  return newArray.join('');
}

// createCategoryString('Combined Print and E-Book Fiction');
