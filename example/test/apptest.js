//  https://www.youtube.com/watch?v=MLTRHc5dk6s
const assert = require("assert");
// const dispalyHeader = require("../app.js").displayHeader;
// const addNumbers = require("../app.js").addNumbers;
const app = require("../app.js");

describe("Testing All functions", function () {
  it("Should return Basic Arithmetic", function () {
    //let result = dispalyHeader();
    let result = app.displayHeader();
    assert.strictEqual(result, "Basic Arithmetic");
  });
});
