const { TestScheduler } = require('jest');
// import sum from '../proj/sum';
const sum = require("../proj/sum");
console.log(sum(1, 2));
// test('add 1 + 2 to equal 3', () => {
//   let x = 1, y = 2;
//   let expected = 3;

//   let actual = sum(x, y)

//   expect(actual).toBe(expected);
// })