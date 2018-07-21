const add = (a, b) => a + b;
const greeting = name => `Hello ${name}!`;

it("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

it("greets with correct name", () => {
  const result = greeting("Kevin");
  expect(result).toBe("Hello Kevin!");
});
