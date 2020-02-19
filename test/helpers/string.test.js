const stringHelper = require("../../helpers/string");

describe("Test extractMention", () => {
  it("should be @kev@gmail.com", () => {
    const testStr = "Hey everyone @kev@gmail.com";
    const result = stringHelper.extractMention(testStr);
    expect(result[0]).toBe("@kev@gmail.com");
  });
});

describe("Test valueSanitizer", () => {
  it("should be abc", () => {
    expect(stringHelper.valueSanitizer("(<'abc'>)")).toBe("abc");
  });
});
