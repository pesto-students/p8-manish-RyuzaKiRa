/*
 * Q. Write the Jest based tests for Exercise 5.4.
 */
const mathoperation = require("./Exercise 5.4");

// Test for Math Operations
test("Adding two numbers should return it's sum", () => {
  expect(mathoperation.add(1, 2)).toBe(1+2);
});

test("Subtracting 9 from 10 should return 3", () => {
  expect(mathoperation.diff(13, 4)).toBe(13-4);
});

test("Multiplicating two numbers should return correct value", () => {
  expect(mathoperation.product(2, 3)).toBe(2*3);
});

test("Dividing two numbers should return correct value", () => {
  expect(mathoperation.div(20, 2)).toBe(10);
});
