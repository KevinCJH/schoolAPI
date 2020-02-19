const arrayHelper = require("../../helpers/array");

describe("Test countArray", () => {
  it("should be 1", () => {
    const testArr = ["a"];
    expect(arrayHelper.countArray(testArr)).toBe(1);
  });
});

describe("Test countArray", () => {
  it("should be 3", () => {
    const testArr = ["a", "b", "c"];
    expect(arrayHelper.countArray(testArr)).toBe(3);
  });
});
