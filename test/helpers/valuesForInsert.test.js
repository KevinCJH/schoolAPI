const valuesForInsert = require("../../helpers/valuesForInsert");

describe("Test valuesForRegister", () => {
  it("should be ('a@gmail.com', 'b@gmail.com')", () => {
    const teacher = "a@gmail.com";
    const student = "b@gmail.com";
    const result = valuesForInsert.valuesForRegister(student, teacher);
    expect(result).toBe("('a@gmail.com', 'b@gmail.com')");
  });
});

describe("Test valuesForRegister", () => {
  it("should be ('a@gmail.com', 'b@gmail.com'), ('a@gmail.com', 'c@gmail.com')", () => {
    const teacher = "a@gmail.com";
    const student = ["b@gmail.com", "c@gmail.com"];
    const result = valuesForInsert.valuesForRegister(student, teacher);
    expect(result).toBe("('a@gmail.com', 'b@gmail.com'), ('a@gmail.com', 'c@gmail.com')");
  });
});
