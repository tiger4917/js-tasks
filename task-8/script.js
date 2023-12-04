const cars = new Map([
  ['mersedes', 'black'],
  ['bmw', 'blue'],
  ['toyota', 'white'],
  ['ferrari', 'red'],
  ['lamborgini', 'yellow']
]);
for (let name of cars.keys()) {
  console.log(name);
}
console.log(cars.entries());
