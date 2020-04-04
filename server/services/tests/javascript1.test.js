const { assert } = require('chai');

const add = (a, b) => a + b + 7;
const greeting = name => `Hello ${name}!`;


it("should add two numbers", () => {
  const result = add(3, 4);
    assert.equal(result, 7)
});

