export function mockData() {
  var data = [
    { name: 'Apple', color: 'Red', quantity: 10 },
    { name: 'Orange', color: 'Orange', quantity: 5 },
    { name: 'Grape', color: 'Purple', quantity: 7 },
    { name: 'Kiwi', color: 'Brown', quantity: 15 },
    { name: 'Mango', color: 'Yellow', quantity: 32 },
    { name: 'Watermelon', color: 'Green', quantity: 5 },
    { name: 'Banana', color: 'Yellow', quantity: 8 },
    { name: 'Durian', color: 'Green', quantity: 6 },
    { name: 'Guava', color: 'Green', quantity: 15 },
    { name: 'Plum', color: 'Red', quantity: 25 },
    { name: 'Jackfruit', color: 'Green', quantity: 2 },
    { name: 'Papaya', color: 'Orange', quantity: 5 },
    { name: 'Pineapple', color: 'Yellow', quantity: 7 },
    { name: 'Peach', color: 'Red', quantity: 7 },
    { name: 'Blueberry', color: 'Blue', quantity: 12 },
    { name: 'Dragonfruit', color: 'Red', quantity: 6 },
    { name: 'Cherry', color: 'Red', quantity: 45 },
    { name: 'Coconut', color: 'Brown', quantity: 7 },
    { name: 'Pear', color: 'Yellow', quantity: 7 },
    { name: 'Starfruit', color: 'Green', quantity: 8 },
    { name: 'Lychee', color: 'Red', quantity: 26 },
    { name: 'Lemon', color: 'Yellow', quantity: 15 },
    { name: 'Muskmelon', color: 'Green', quantity: 5 },
    { name: 'Water apple', color: 'Red', quantity: 25 },
    { name: 'Pmegranate', color: 'Red', quantity: 3 },
    { name: 'Avocado', color: 'Green', quantity: 6 },
    { name: 'Hawthorn', color: 'Red', quantity: 8 },
    { name: 'Lime', color: 'Green', quantity: 6 },
    { name: 'Chinese date', color: 'Red', quantity: 25 },
    { name: 'Pumpkin', color: 'Orange', quantity: 5 },
  ];

  return data;
}

export function mockFruitPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData());
    });
  });
}

export function mockFruitPromiseInPage(page) {
  const pageSize = 5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData().slice(page * pageSize, page * pageSize + pageSize));
    });
  });
}
