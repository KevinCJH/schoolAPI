const valuesForUpdate = require("../../helpers/valuesForUpdate");

describe("Test valuesForSuspend", () => {
  it("should be email = 'a@gmail.com'", () => {
    const student = "a@gmail.com";
    const result = valuesForUpdate.valuesForSuspend(student);
    expect(result).toBe("email = 'a@gmail.com'");
  });
});
