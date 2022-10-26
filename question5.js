function generateArray() {
  const array = [];

  for (let i = 0; i < 1_000_000; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }

  return array;
}

const numbers = generateArray();

const x = [...new Set([...numbers])];
