const multiply = (a, b) => a * b;

const result = multiply(2, 4);

console.log(result);

var richard = {
  '1stSon': true,
  'loves-snow': true,
};

console.log(richard['1stSon']); // error
console.log(richard['loves-snow']); // error

const ob = {
  name: 'pol',
  changeName: function () {
    this.name = 'cat';
  },
};

console.log(ob);
ob.changeName();
console.log(ob);
