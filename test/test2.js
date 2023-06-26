const assert = require("chai").assert;
const factorial = require("../factorial");

describe("Factorial", () => {
  it("Return 1 for factorial of 1", () => {
    assert.equal(factorial(1), 1);
  });

  it("Return 2 for factorial of 2", () => {
    assert.equal(factorial(2), 2);
  });

  it("Return 6 for factorial of 3", () => {
    assert.equal(factorial(3), 6);
  });

  it("Return 24 for factorial of 4", () => {
    assert.equal(factorial(4), 24);
  });

  it("Return 362880 for factorial of 10", () => {
    assert.equal(factorial(10), 3628800);
  });
});
