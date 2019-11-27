const user2 = {
  name: "Andrew",
  cities: ["Philadephia", "New York", "Dublin"],
  printPlacesLived: function() {
    return this.cities.map(city => this.name + " Andrew has lived in " + city);
  }
};

const multiplier = {
  numbers: [4, 5, 76, 9],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

console.log(user2.printPlacesLived());
