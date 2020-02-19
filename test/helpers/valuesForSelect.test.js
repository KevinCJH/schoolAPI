const valuesForSelect = require("../../helpers/valuesForSelect");

describe("Test valuesForCommonStud", () => {
  it("should be 'a@gmail.com'", () => {
    const teacher = "a@gmail.com";
    const result = valuesForSelect.valuesForCommonStud(teacher);
    expect(result).toBe("'a@gmail.com'");
  });
});

describe("Test valuesForCommonStud", () => {
  it("should be 'a@gmail.com', 'b@gmail.com'", () => {
    const teacher = ["a@gmail.com", "b@gmail.com"];
    const result = valuesForSelect.valuesForCommonStud(teacher);
    expect(result).toBe("'a@gmail.com', 'b@gmail.com'");
  });
});

describe("Test valuesForNotification", () => {
  it("should be teacherEmail = 'a@gmail.com'", () => {
    const teacher = "a@gmail.com";
    const result = valuesForSelect.valuesForNotification(teacher);
    expect(result).toBe("teacherEmail = 'a@gmail.com'");
  });
});

describe("Test valuesForMention", () => {
  it("should be email = 'a@gmail.com' AND isSuspended = 0", () => {
    const student = "@a@gmail.com";
    const result = valuesForSelect.valuesForMention(student);
    expect(result).toBe("email = 'a@gmail.com' AND isSuspended = 0");
  });
});

describe("Test valuesForMention", () => {
  it("should be \(email = 'a@gmail.com' OR email = 'b@gmail.com'\) AND isSuspended = 0", () => {
    const student = ["@a@gmail.com", "@b@gmail.com"];
    const result = valuesForSelect.valuesForMention(student);
    expect(result).toBe("\(email = 'a@gmail.com' OR email = 'b@gmail.com'\) AND isSuspended = 0");
  });
});
