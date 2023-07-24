let functions = require("./functions");
//tests for the functions in function.js:
//format: test('test string', callbackfunction)

// test for returnTwo
test("returnTwo is a a function to return 2", () => {
  expect(functions.returnTwo()).toEqual(2);
});

//test for greeting
test("greeting() is a function to greet you by name", () => {
  expect(functions.greeting("James")).toBe("Hello, James.");
});

describe("test math functions", () => {
  //test for add
  test("add() is a function to add 2 numbers", () => {
    expect(functions.add(1, 2)).toEqual(3);
  });

  //test for multiply
  test("multiply() is a function to multiply 2 numbers", () => {
    expect(functions.multiply(1, 2)).toEqual(2);
  });

  //test for divide
  test("divide() is a function to divide 2 numbers", () => {
    expect(functions.divide(9, 3)).toEqual(3);
  });

  //test for subtract
  test("subtract() is a function to subtract 2 numbers", () => {
    expect(functions.subtract(6, 5)).toEqual(1);
  });
});
